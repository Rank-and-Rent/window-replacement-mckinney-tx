'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { servicesData } from '@/data'
import styles from './contact-section.module.css'

declare global {
  interface Window {
    _turnstileLoaded?: boolean;
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => string;
      execute: (widgetId: string, options?: Record<string, unknown>) => Promise<string>;
      reset: (widgetId: string) => void;
    };
  }
}

function loadTurnstile(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window._turnstileLoaded) return Promise.resolve();
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
    );
    if (existing) { window._turnstileLoaded = true; return resolve(); }
    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    s.async = true;
    s.defer = true;
    s.onload = () => { window._turnstileLoaded = true; resolve(); };
    s.onerror = () => reject(new Error("Turnstile script failed to load"));
    document.head.appendChild(s);
  });
}

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  address: string;
  timeline: string;
  description: string;
};

export default function ContactSection() {
  const captchaRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "", phone: "", email: "", service: "", address: "", timeline: "", description: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [turnstileId, setTurnstileId] = useState<string | null>(null);
  const [turnstileReady, setTurnstileReady] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    let cancelled = false;
    const initTimeout = setTimeout(async () => {
      if (cancelled || !siteKey) return;
      try {
        await loadTurnstile();
        if (cancelled || !window.turnstile || !captchaRef.current) return;
        const id = window.turnstile.render(captchaRef.current, {
          sitekey: siteKey, size: "normal", theme: "light",
          callback: () => setTurnstileReady(true),
          "error-callback": () => setTurnstileReady(false),
        });
        setTurnstileId(id);
        setTurnstileReady(true);
      } catch (e) { console.error("Turnstile init failed:", e); }
    }, 500);
    return () => { cancelled = true; clearTimeout(initTimeout); };
  }, [siteKey]);

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Required";
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
    setStatus("submitting"); setErrors({}); setFeedback("");

    try {
      if (siteKey && (!turnstileReady || !window.turnstile || !turnstileId)) {
        setFeedback("Please complete the security verification."); setStatus("error"); return;
      }
      let turnstileToken = '';
      if (siteKey && window.turnstile && turnstileId) {
        try {
          window.turnstile.reset(turnstileId);
          turnstileToken = await new Promise<string>((resolve, reject) => {
            window.turnstile!.execute(turnstileId, {
              callback: (t: string) => resolve(t),
              "error-callback": () => reject(new Error("turnstile-error")),
            });
          });
        } catch {
          setFeedback("Security verification failed. Please try again."); setStatus("error");
          window.turnstile?.reset(turnstileId); return;
        }
      }

      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name, fullName: formData.name, email: formData.email,
          phone: formData.phone.replace(/\D/g, ''), service: formData.service,
          address: formData.address, timeline: formData.timeline, description: formData.description,
          turnstileToken,
        }),
      });

      if (response.ok) {
        setFormData({ name: "", phone: "", email: "", service: "", address: "", timeline: "", description: "" });
        if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId);
        setStatus("success");
        setFeedback("Thank you! An Irving window specialist will follow up within one business day.");
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Failed to submit' }));
        setFeedback(errorData.error || 'Failed to submit form.'); setStatus("error");
        if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId);
      }
    } catch {
      setFeedback("An error occurred. Please try again."); setStatus("error");
      if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.background}>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div className={styles.contentColumn} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className={styles.label}>Get Started Today</span>
            <h2 className={styles.title}>Schedule Your Free In-Home Consultation</h2>
            <p className={styles.description}>
              Discover how new windows can transform your home&apos;s beauty, comfort, and energy efficiency. Our expert consultants will visit your home, assess your needs, and provide a detailed, no-obligation estimate.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Call Us Directly</span>
                <a href="tel:817-592-8870" className={styles.contactValue}>817-592-8870</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email Us</span>
                <a href="mailto:contact@homewindowreplacementirving.com" className={styles.contactValue}>contact@homewindowreplacementirving.com</a>
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.formColumn} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h3 className={styles.formTitle}>Request Your Free Estimate</h3>
              <fieldset disabled={status === "submitting"} style={{ border: 'none', padding: 0, margin: 0 }}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                  <input type="text" id="name" name="name" className={styles.formInput} placeholder="John Smith" required value={formData.name} onChange={handleChange("name")} />
                  {errors.name && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.name}</p>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                  <input type="tel" id="phone" name="phone" className={styles.formInput} placeholder="(817) 592-8870" required value={formData.phone} onChange={handleChange("phone")} />
                  {errors.phone && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.phone}</p>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                  <input type="email" id="email" name="email" className={styles.formInput} placeholder="john@example.com" required value={formData.email} onChange={handleChange("email")} />
                  {errors.email && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.email}</p>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="service" className={styles.formLabel}>Service Interested In</label>
                  <select id="service" name="service" className={styles.formSelect} required value={formData.service} onChange={handleChange("service")}>
                    <option value="">Select a service</option>
                    <optgroup label="Windows">
                      {servicesData.filter(s => s.category === 'Windows').map(service => (
                        <option key={service.slug} value={service.name}>{service.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Doors">
                      {servicesData.filter(s => s.category === 'Doors').map(service => (
                        <option key={service.slug} value={service.name}>{service.name}</option>
                      ))}
                    </optgroup>
                    <option value="Not Sure">Not Sure / Multiple Services</option>
                  </select>
                  {errors.service && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.service}</p>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="address" className={styles.formLabel}>Property Address</label>
                  <input type="text" id="address" name="address" className={styles.formInput} placeholder="123 Main St, Irving, TX 75060" required value={formData.address} onChange={handleChange("address")} />
                  {errors.address && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.address}</p>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="timeline" className={styles.formLabel}>Project Timeline</label>
                  <select id="timeline" name="timeline" className={styles.formSelect} required value={formData.timeline} onChange={handleChange("timeline")}>
                    <option value="">Select a timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Within 6 months">Within 6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Just researching">Just researching</option>
                  </select>
                  {errors.timeline && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.timeline}</p>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="description" className={styles.formLabel}>Project Description</label>
                  <textarea id="description" name="description" rows={4} className={styles.formTextarea} placeholder="Tell us about your project..." required value={formData.description} onChange={handleChange("description")}></textarea>
                  {errors.description && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.description}</p>}
                </div>
                {siteKey && <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}><div ref={captchaRef} style={{ minHeight: '78px' }} /></div>}
                <button type="submit" className={styles.submitButton} disabled={status === "submitting" || !!(siteKey && !turnstileReady)}>
                  {status === "submitting" ? "Sending..." : "Request Free Estimate"}
                </button>
                {feedback && <p style={{ color: status === "success" ? '#22c55e' : '#ef4444', fontSize: '0.875rem', marginTop: '1rem', textAlign: 'center' }}>{feedback}</p>}
              </fieldset>
              <p className={styles.formDisclaimer}>By submitting this form, you agree to receive communications from our team. We respect your privacy and will never share your information.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}