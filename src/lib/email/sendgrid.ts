import sgMail from '@sendgrid/mail';

let apiKeyInitialized = false;
function ensureApiKeyInitialized() {
  if (apiKeyInitialized) return;
  if (!process.env.SENDGRID_API_KEY) throw new Error('Missing SENDGRID_API_KEY');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  apiKeyInitialized = true;
}

export const SENDGRID_TEMPLATE_ID = process.env.SENDGRID_TEMPLATE_ID || 'd-06806bafac9d47f38c719518702e0f4f';

type Lead = { name: string; email: string; phone?: string; phone_plain?: string; projectType: string; address?: string; city?: string; timeline?: string; message?: string; };
type BrandData = { company_name: string; supportEmail?: string; [key: string]: unknown; };

export async function sendCustomerConfirmation(brand: BrandData, lead: Lead) {
  ensureApiKeyInitialized();
  const fromEmail = process.env.SENDGRID_FROM_EMAIL || brand.supportEmail || 'info@1031exchangehouston.com';
  await sgMail.send({
    to: lead.email,
    from: { email: fromEmail, name: brand.company_name },
    templateId: SENDGRID_TEMPLATE_ID,
    dynamicTemplateData: { ...brand, lead },
  });
}

export async function sendInternalNotifications(brand: BrandData, lead: Lead) {
  ensureApiKeyInitialized();
  const fromEmail = process.env.SENDGRID_FROM_EMAIL || brand.supportEmail || 'info@1031exchangehouston.com';
  const recipients = [process.env.CONTRACTOR_EMAIL, 'rankhoundseo@gmail.com'].filter(Boolean) as string[];
  await Promise.all(recipients.map(email =>
    sgMail.send({
      to: email,
      from: { email: fromEmail, name: brand.company_name },
      templateId: SENDGRID_TEMPLATE_ID,
      dynamicTemplateData: { ...brand, lead },
    })
  ));
}
