import { NextRequest, NextResponse } from 'next/server';
import { apiRateLimiter } from '@/lib/rate-limit';
import { verifyTurnstile } from '@/lib/turnstile';
import { getBrand } from '@/lib/brand';
import { sendCustomerConfirmation, sendInternalNotifications } from '@/lib/email/sendgrid';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const rate = apiRateLimiter.isAllowed(request);
  const stdHeaders = { 'X-RateLimit-Limit': '5', 'X-RateLimit-Remaining': rate.remaining.toString(), 'X-RateLimit-Reset': rate.resetTime.toString() };
  if (!rate.allowed) {
    const retry = Math.ceil((rate.resetTime - Date.now()) / 1000);
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429, headers: { ...stdHeaders, 'Retry-After': String(retry) } });
  }
  try {
    const contentType = request.headers.get('content-type') || '';
    const body = contentType.includes('application/json') ? await request.json() : Object.fromEntries((await request.formData()).entries());
    const token = body['cf-turnstile-response'] || body.turnstileToken;
    if (!token) return NextResponse.json({ error: 'Captcha token missing' }, { status: 400, headers: stdHeaders });
    const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined;
    if (!(await verifyTurnstile(token, clientIp))) return NextResponse.json({ error: 'Captcha verification failed' }, { status: 400, headers: stdHeaders });

    const zapierWebhookUrl = (process.env.ZAPIER_WEBHOOK || '').trim();
    if (zapierWebhookUrl) {
      try { await fetch(zapierWebhookUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...body, source: 'Window Replacement McKinney' }) }); } catch {}
    }

    const brand = getBrand();
    const lead = { name: String(body.name || body.fullName || ''), email: String(body.email || ''), phone: body.phone?.replace(/\D/g, ''), projectType: String(body.service || 'Window Replacement'), address: body.address, timeline: body.timeline, message: body.message || body.description };
    const brandWithDate = { ...brand, submitted_date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) };
    try {
      await Promise.all([sendCustomerConfirmation(brandWithDate, lead), sendInternalNotifications(brandWithDate, lead)]);
      console.log('SendGrid emails sent successfully to:', body.email);
    } catch (error) { console.error('SendGrid email failed', error); }
    return NextResponse.json({ success: true }, { headers: stdHeaders });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500, headers: stdHeaders });
  }
}
