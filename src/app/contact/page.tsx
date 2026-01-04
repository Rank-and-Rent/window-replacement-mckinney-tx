'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from './contact.module.css'

declare global {
  interface Window {
    _turnstileLoaded?: boolean;
    turnstile?: { render: (el: HTMLElement, opts: Record<string, unknown>) => string; execute: (id: string, opts?: Record<string, unknown>) => Promise<string>; reset: (id: string) => void; };
  }
}

function loadTurnstile(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window._turnstileLoaded) return Promise.resolve();
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]');
    if (existing) { window._turnstileLoaded = true; return resolve(); }
    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"; s.async = true; s.defer = true;
    s.onload = () => { window._turnstileLoaded = true; resolve(); };
    s.onerror = () => reject(new Error("Turnstile failed"));
    document.head.appendChild(s);
  });
}

type FormData = { fullName: string; phone: string; email: string; service: string; address: string; timeline: string; description: string; };

export default function ContactPage() {
  const captchaRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState<FormData>({ fullName: '', phone: '', email: '', service: '', address: '', timeline: '', description: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');
  const [turnstileId, setTurnstileId] = useState<string | null>(null);
  const [turnstileReady, setTurnstileReady] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const windowServices = servicesData.filter(s => s.category === 'Windows');
  const doorServices = servicesData.filter(s => s.category === 'Doors');

  useEffect(() => {
    let cancelled = false;
    const t = setTimeout(async () => {
      if (cancelled || !siteKey) return;
      try {
        await loadTurnstile();
        if (cancelled || !window.turnstile || !captchaRef.current) return;
        const id = window.turnstile.render(captchaRef.current, { sitekey: siteKey, size: "normal", theme: "light", callback: () => setTurnstileReady(true), "error-callback": () => setTurnstileReady(false) });
        setTurnstileId(id); setTurnstileReady(true);
      } catch (e) { console.error("Turnstile init failed:", e); }
    }, 500);
    return () => { cancelled = true; clearTimeout(t); };
  }, [siteKey]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Required";
    if (!formData.service.trim()) newErrors.service = "Required";
    if (!formData.address.trim()) newErrors.address = "Required";
    if (!formData.timeline.trim()) newErrors.timeline = "Required";
    if (!formData.description.trim()) newErrors.description = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) { setFeedback("Please complete all required fields."); return; }
    setStatus('submitting'); setErrors({}); setFeedback('');
    try {
      if (siteKey && (!turnstileReady || !window.turnstile || !turnstileId)) { setFeedback("Please complete security verification."); setStatus("error"); return; }
      let turnstileToken = '';
      if (siteKey && window.turnstile && turnstileId) {
        try {
          window.turnstile.reset(turnstileId);
          turnstileToken = await new Promise<string>((resolve, reject) => { window.turnstile!.execute(turnstileId, { callback: (t: string) => resolve(t), "error-callback": () => reject(new Error("error")) }); });
        } catch { setFeedback("Security verification failed."); setStatus("error"); window.turnstile?.reset(turnstileId); return; }
      }
      const response = await fetch('/api/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: formData.fullName, fullName: formData.fullName, email: formData.email, phone: formData.phone.replace(/\D/g, ''), service: formData.service, address: formData.address, timeline: formData.timeline, description: formData.description, turnstileToken }) });
      if (response.ok) {
        setFormData({ fullName: '', phone: '', email: '', service: '', address: '', timeline: '', description: '' });
        if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId);
        setStatus('success'); setFeedback('Thank you! A McKinney window specialist will contact you within one business day.');
      } else {
        const err = await response.json().catch(() => ({ error: 'Failed' }));
        setFeedback(err.error || 'Failed to submit.'); setStatus('error');
        if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId);
      }
    } catch { setFeedback("An error occurred."); setStatus("error"); if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId); }
  };

  return (
    <>
      <nav className={styles.breadcrumbs}><div className={styles.container}><Link href="/">Home</Link><span>/</span><span>Contact</span></div></nav>
      <section className={styles.hero}><div className={styles.container}><span className={styles.sectionLabel}>Get In Touch</span><h1>Contact <em>Us</em></h1><p>Ready to transform your McKinney home with new windows or doors? Contact us today for a free, no-obligation estimate.</p></div></section>
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.formWrapper}>
              <h2>Request Your Free Estimate</h2>
              {status === 'success' && <div style={{ background: '#22c55e', color: 'white', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>{feedback}</div>}
              {status === 'error' && <div style={{ background: '#ef4444', color: 'white', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>{feedback}</div>}
              <form className={styles.form} onSubmit={handleSubmit}>
                <fieldset disabled={status === 'submitting'} style={{ border: 'none', padding: 0, margin: 0 }}>
                  <div className={styles.formGroup}><label htmlFor="fullName">Full Name *</label><input type="text" id="fullName" name="fullName" required placeholder="John Smith" value={formData.fullName} onChange={handleChange} />{errors.fullName && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.fullName}</p>}</div>
                  <div className={styles.formGroup}><label htmlFor="phone">Phone Number *</label><input type="tel" id="phone" name="phone" required placeholder="(972) 555-0123" value={formData.phone} onChange={handleChange} />{errors.phone && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.phone}</p>}</div>
                  <div className={styles.formGroup}><label htmlFor="email">Email Address *</label><input type="email" id="email" name="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} />{errors.email && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.email}</p>}</div>
                  <div className={styles.formGroup}><label htmlFor="service">Service Interested In *</label><select id="service" name="service" required value={formData.service} onChange={handleChange}><option value="">Select a service...</option><optgroup label="Windows">{windowServices.map(s => <option key={s.slug} value={s.name}>{s.name}</option>)}</optgroup><optgroup label="Doors">{doorServices.map(s => <option key={s.slug} value={s.name}>{s.name}</option>)}</optgroup><option value="Not Sure / Multiple Services">Not Sure / Multiple Services</option></select>{errors.service && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.service}</p>}</div>
                  <div className={styles.formGroup}><label htmlFor="address">Property Address *</label><input type="text" id="address" name="address" required placeholder="123 Main St, McKinney, TX 75070" value={formData.address} onChange={handleChange} />{errors.address && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.address}</p>}</div>
                  <div className={styles.formGroup}><label htmlFor="timeline">Project Timeline *</label><select id="timeline" name="timeline" required value={formData.timeline} onChange={handleChange}><option value="">Select timeline...</option><option value="ASAP">ASAP</option><option value="Within 1 month">Within 1 month</option><option value="Within 3 months">Within 3 months</option><option value="Within 6 months">Within 6 months</option><option value="6+ months">6+ months</option><option value="Just researching">Just researching</option></select>{errors.timeline && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.timeline}</p>}</div>
                  <div className={styles.formGroup}><label htmlFor="description">Project Description *</label><textarea id="description" name="description" rows={4} required placeholder="Tell us about your project..." value={formData.description} onChange={handleChange}></textarea>{errors.description && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.description}</p>}</div>
                  {siteKey && <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}><div ref={captchaRef} style={{ minHeight: '78px' }} /></div>}
                  <button type="submit" className="btn-primary large" disabled={status === 'submitting' || !!(siteKey && !turnstileReady)}>{status === 'submitting' ? 'Sending...' : 'Send Message'}</button>
                </fieldset>
              </form>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <h3>Contact Information</h3>
                <div className={styles.infoItem}><strong>Phone</strong><a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`}>{siteConfig.phone}</a></div>
                <div className={styles.infoItem}><strong>Email</strong><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
                <div className={styles.infoItem}><strong>Address</strong><address>{siteConfig.address.street}<br />{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</address></div>
                <div className={styles.infoItem}><strong>Hours</strong><p>{siteConfig.hours}</p></div>
              </div>
              <div className={styles.mapWrapper}><iframe src={siteConfig.googleMapsEmbed} width="100%" height="300" style={{ border: 0, borderRadius: '8px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${siteConfig.name} location map`} /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
