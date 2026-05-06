import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../service.module.css'

export const metadata: Metadata = {
  title: 'Single-Hung Window Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Affordable single-hung window replacement in McKinney, TX. Traditional style with fixed upper sash. Expert installation of Andersen, Pella & JELD-WEN single-hung windows. Free estimates.',
  keywords: 'single-hung windows McKinney TX, replacement single-hung windows, affordable windows McKinney, JELD-WEN single-hung',
}

export default function SingleHungWindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows' && s.slug !== 'single-hung-windows')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/windows">Windows</Link>
          <span>/</span>
          <span>Single-Hung Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Window Replacement</span>
              <h1>Single-Hung Window Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                An economical yet elegant solution perfect for budget-conscious McKinney homeowners. 
                Single-hung windows feature a fixed upper sash and operable lower sash, providing 
                reliable ventilation while maximizing your replacement window investment.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Cost-Effective Option</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Simple, Reliable Operation</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Easy Maintenance Access</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Energy Star Certified</span>
                </div>
              </div>
              <div className={styles.heroCta}>
                <Link href="/contact" className="btn-primary large">Get Your Free Estimate</Link>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-secondary large">
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/images/services/single-hung-windows/single-hung-window1.jpeg"
                alt="Premium single-hung windows installed in McKinney homes"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.content}>
              <h2>The Smart Choice for <em>Value-Conscious Homeowners</em></h2>
              <p>
                Single-hung windows pair the classic look of a traditional double-hung with a simpler, lower-cost
                mechanism: a fixed upper sash and an operable lower sash. From the street, most McKinney homeowners
                cannot tell the difference between a single-hung and a double-hung once the windows are installed.
                Functionally, you give up the ability to open the top sash, which costs you a small amount of
                ventilation flexibility and the ability to tilt-in the upper sash for cleaning. In exchange, you get
                a window that costs less per opening, has fewer moving parts, and tends to seal slightly tighter
                because there&apos;s no operating meeting rail at the top.
              </p>
              <p>
                For McKinney homeowners replacing an entire home full of windows, choosing single-hungs over
                double-hungs on the rooms where you don&apos;t actually open the top can free up budget for better glass
                packages, premium hardware, or simply a tighter total project cost. We install single-hungs from
                Andersen, Pella, JELD-WEN, and Marvin in essentially every McKinney neighborhood, and they hold up
                well in the North Texas climate when properly specified.
              </p>

              <h3>Where Single-Hungs Make the Most Sense</h3>
              <p>
                Single-hungs are ideal for ground-floor rooms where exterior cleaning is straightforward, for
                bedrooms and home offices where occupants rarely operate the upper sash anyway, and for second-floor
                rooms in homes where you have safe exterior access (a screened porch, a low-pitch roof landing, or
                a balcony). They&apos;re also a sensible choice for bathrooms and laundry rooms, where ventilation needs
                are simple and budget often matters more than top-tier flexibility. We frequently spec single-hungs
                in builder-grade replacement projects in Eldorado, Provine Farms, and Mallard Lakes where homeowners
                need to replace many windows at once and want to keep the per-window cost reasonable.
              </p>

              <h3>Energy Efficiency in McKinney&apos;s Climate</h3>
              <p>
                A modern single-hung from Andersen, Pella, JELD-WEN, or Marvin is built around the same Low-E glass
                packages, argon fills, warm-edge spacers, and compression weatherstripping as the equivalent
                double-hung. In some cases the air infiltration numbers are actually slightly better on a single-hung
                because there&apos;s no operating top sash to seal. For McKinney&apos;s long, hot summers, that translates
                into measurable cooling-load reductions on west- and south-facing elevations, especially when paired
                with a Low-E3 or solar-control glass package on the more exposed rooms.
              </p>

              <h3>Premium Brands We Install</h3>
              <p>
                <strong>Andersen 100 Series Single-Hung:</strong> Andersen&apos;s entry into the value segment uses their
                Fibrex composite frame for low maintenance and excellent dimensional stability. We recommend the
                100 Series for McKinney homeowners who want Andersen quality at a single-hung price point.
              </p>
              <p>
                <strong>Pella 250 Series Single-Hung:</strong> Pella&apos;s vinyl single-hung is a strong value pick across
                most McKinney builder-grade replacements. Their InsulShield Low-E glass options handle Texas-style
                solar gain well, and the fusion-welded frame holds up to seasonal temperature swings.
              </p>
              <p>
                <strong>JELD-WEN Premium Vinyl Single-Hung:</strong> JELD-WEN&apos;s lineup includes single-hungs with
                their ScreenMaximizer hidden screen system that increases visible glass meaningfully. A solid choice
                for high-window-count replacements in Provine Farms, Eldorado, and Mallard Lakes.
              </p>
              <p>
                <strong>Marvin Elevate Single-Hung:</strong> Marvin&apos;s fiberglass-exterior, wood-interior single-hung
                gives you the warmth of a true wood interior at a price point well below their full-wood Signature
                Ultimate line. Strong performance in the McKinney climate and a long-term-friendly maintenance
                profile.
              </p>

              <h3>Installation Notes for McKinney Homes</h3>
              <p>
                We install single-hungs the same way we install premium double-hungs: full measure on site, level
                shimming, low-expansion foam, properly detailed flashing at head, jamb, and sill, and a final
                operational check on every unit. The single-hung mechanism has fewer wear points, which usually
                translates into a longer service interval before any hardware adjustment is needed. Our crews
                complete most McKinney single-hung installations in a day or two depending on window count, and we
                clean up thoroughly before we leave.
              </p>

              <h3>How Single-Hungs Hold Up Long Term</h3>
              <p>
                A premium single-hung in McKinney&apos;s climate should easily clear 25 years of service before any
                significant maintenance is required, and properly specified vinyl, fiberglass, or composite frames
                routinely outlast that. Glass seal life depends on the manufacturer; the brands we work with all
                back their insulating glass with 20-year limited warranties, and we honor those warranties locally
                rather than shipping you back to a national customer service line. If a balance fails or a hardware
                piece needs adjustment after install, we come back out and fix it.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to learn more about single-hung window options for your McKinney home. We&apos;ll measure
                on site, walk you through the line and glass options that make sense, and send a detailed written
                estimate without any high-pressure follow-up.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Single-Hung Windows">
                    <option value="Single-Hung Windows">Single-Hung Windows</option>
                  </select>
                  <input type="text" name="address" placeholder="Property Address *" required />
                  <select name="timeline" required>
                    <option value="">Select timeline...</option>
                    <option value="ASAP">ASAP</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Within 6 months">Within 6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Just researching">Just researching</option>
                  </select>
                  <textarea name="description" placeholder="Project Description *" rows={3} required></textarea>
                  <button type="submit" className="btn-primary">Get Free Estimate</button>
                </form>
              </div>

              <div className={styles.sidebarCard}>
                <h4>Related Services</h4>
                <ul className={styles.relatedLinks}>
                  {windowServices.slice(0, 4).map((service) => (
                    <li key={service.slug}>
                      <Link href={service.route}>{service.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.sidebarCard} ${styles.highlight}`}>
                <h4>Why Choose Us?</h4>
                <ul className={styles.checkList}>
                  <li>Factory-certified installers</li>
                  <li>15+ years serving McKinney</li>
                  <li>Lifetime warranty protection</li>
                  <li>Financing available</li>
                </ul>
              </div>

              <div className={`${styles.sidebarCard} ${styles.ctaCard}`}>
                <h4>Ready to Get Started?</h4>
                <p>Call us today for your free consultation.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary">
                  Call {siteConfig.phone}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Common Questions</span>
            <h2>Single-Hung Window <em>FAQs</em></h2>
          </div>
          
          <div className={styles.faqGrid}>
            <details className={styles.faqItem}>
              <summary>How much do single-hung windows cost?</summary>
              <p>Single-hung windows with installation typically cost $300-$600 per window, making them one of the most affordable replacement window options available. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material, like wood clad windows. We do not sell windows without installation.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>Are single-hung windows as energy efficient as double-hung?</summary>
              <p>Yes! With fewer moving parts, single-hung windows often achieve excellent air-tightness. The same Low-E glass and weatherstripping technologies are available.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>When should I choose single-hung over double-hung?</summary>
              <p>Single-hung windows are ideal when budget is a priority, for ground-floor installations where exterior cleaning is easy, or in rooms where maximum ventilation isn&apos;t critical.</p>
            </details>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Schedule Your Free Single-Hung Window Consultation</h2>
          <p>Get quality windows at an affordable price. Contact us today for your free estimate.</p>
          <div className={styles.ctaButtons}>
            <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary large">
              Call {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-secondary large">Request Online Estimate</Link>
          </div>
        </div>
      </section>
    </>
  )
}
