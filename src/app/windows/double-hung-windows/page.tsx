import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../service.module.css'

export const metadata: Metadata = {
  title: 'Double-Hung Window Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Premium double-hung window replacement in McKinney, TX. Tilt-in cleaning, dual-sash operation. Expert installation of Andersen, Pella & JELD-WEN double-hung windows. Free estimates. Call 945-206-3998.',
  keywords: 'double-hung windows McKinney TX, replacement double-hung windows, Andersen double-hung, Pella double-hung windows, JELD-WEN windows McKinney',
}

export default function DoubleHungWindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows' && s.slug !== 'double-hung-windows')

  return (
    <>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/windows">Windows</Link>
          <span>/</span>
          <span>Double-Hung Windows</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Window Replacement</span>
              <h1>Double-Hung Window Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Experience the perfect blend of timeless elegance and modern functionality with premium 
                double-hung replacement windows from Andersen, Pella, JELD-WEN, and Marvin. Our expertly 
                installed double-hung windows bring unmatched versatility, effortless maintenance, and 
                superior energy performance to McKinney homes.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Both Sashes Operate &amp; Tilt Inward</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Easy Cleaning from Inside</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Superior Ventilation Control</span>
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
                src="/images/services/double-hung-windows/double-hung-window1.jpeg"
                alt="Premium double-hung windows installed in McKinney homes"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.content}>
              <h2>Why Double-Hung Windows Are <em>McKinney&apos;s Most Popular Style</em></h2>
              <p>
                Double-hung windows are by far the most common replacement style we install in McKinney, and for good
                reason. They look right on almost every house in town, from a Victorian-era home in Old East McKinney
                to a 1990s tract build in Eldorado to a new construction in Trinity Falls. Both the top and bottom
                sashes operate independently, which gives you fine-tuned ventilation control: open just the bottom for
                a gentle breeze, just the top to vent hot air at the ceiling, or both for maximum cross-flow when the
                weather is pleasant. The classic two-over-two or two-over-one proportions of a double-hung also
                preserve traditional architectural character better than a fixed or sliding window in most McKinney
                neighborhoods.
              </p>
              <p>
                The other reason double-hungs dominate the McKinney replacement market is the tilt-in cleaning feature.
                Both sashes pivot inward at a release tab, so you can clean the exterior glass safely from inside the
                home. For two-story homes in Stonebridge Ranch, Tucker Hill, or Trinity Falls, that single feature
                pays for itself by eliminating the cost and risk of ladder work for window cleaning.
              </p>

              <h3>The Engineering Behind Superior Performance</h3>
              <p>
                Modern double-hung replacement windows are the product of more than a century of refinement, and the
                gap between a 1970s aluminum double-hung and a current-generation premium model is enormous. Today&apos;s
                premium double-hungs use a balance system (block-and-tackle in most lines, constant-force in others)
                that holds the sash where you put it without the ropes, weights, and chains of older homes. Compression
                weatherstripping at the rails and silicone bulb seals at the meeting rail produce a tighter envelope
                than older friction-fit systems. Frame walls are thicker, internal chambers are insulated, and the
                hardware is rated for thousands of operating cycles before any maintenance is required.
              </p>

              <h3>Energy Efficiency in McKinney&apos;s Climate</h3>
              <p>
                Energy savings is the most common reason McKinney homeowners cite for upgrading to premium double-hung
                windows, and the numbers back it up. McKinney&apos;s long, hot summers put real demands on the south- and
                west-facing elevations of most homes, and original single-pane or first-generation dual-pane glass
                often runs five to ten degrees warmer at the surface than current Low-E2 or Low-E3 glass. Replacing
                15 to 20 builder-grade or older windows with ENERGY STAR-certified double-hungs typically reduces
                annual heating and cooling cost on McKinney homes by a measurable percentage, and improves room-to-room
                temperature consistency immediately.
              </p>
              <p>
                We pair these windows with the right glass package for the elevation: standard Low-E2 for north and
                east, Low-E3 or solar-control packages for south and west, and laminated impact glass when the home
                is in a more storm-exposed location. Argon fills are standard on all of our installations.
              </p>

              <h3>Premium Brands We Install in McKinney</h3>
              <p>
                <strong>Andersen 400 Series Woodwright Double-Hung:</strong> Andersen&apos;s flagship double-hung pairs the
                patented Fibrex composite material with Low-E4 SmartSun glass for excellent thermal performance and
                a near-zero-maintenance exterior. The 400 Series is our most-recommended option for McKinney homes
                that need premium performance without a fully-custom price.
              </p>
              <p>
                <strong>Pella Reserve Traditional Double-Hung:</strong> Pella&apos;s premium wood double-hung with optional
                aluminum cladding, ideal for the historic homes in Old East McKinney and the custom estates near
                McKinney Country Club. Available with extensive divided-lite patterns and color customization.
              </p>
              <p>
                <strong>Pella 250 Series Double-Hung:</strong> Pella&apos;s vinyl double-hung is a strong value pick for
                builder-grade replacements throughout Stonebridge Ranch and Eldorado. Their InsulShield Low-E glass
                reduces UV transmission by up to 84%, which matters for west-facing rooms where furniture and
                hardwood floors are otherwise vulnerable to sun damage.
              </p>
              <p>
                <strong>JELD-WEN Premium Vinyl Double-Hung:</strong> JELD-WEN&apos;s double-hung lines include the
                ScreenMaximizer hidden screen system that increases visible glass area meaningfully, plus a fusion-
                welded frame that improves seal longevity in the McKinney climate.
              </p>
              <p>
                <strong>Marvin Elevate Double-Hung:</strong> Marvin&apos;s Elevate combines a fiberglass exterior with a
                wood interior, which gives you the look of a true wood window from inside the room without the
                exterior maintenance. This is a favorite of ours for high-end remodels in Tucker Hill and Adriatica.
              </p>

              <h3>Installation Details That Matter in McKinney</h3>
              <p>
                A double-hung window only performs as well as it&apos;s installed. We use full-frame replacement with
                proper exterior flashing whenever the existing trim or sill is compromised, and pocket replacement
                when the original frame is sound. Either way, we shim the unit to plumb and level, foam the perimeter
                with low-expansion sealant to prevent frame deflection, and detail the head, jamb, and sill flashings
                so the assembly drains correctly during severe weather. Our crews complete most McKinney homes in
                one to two days depending on window count.
              </p>

              <h2>Ready to Transform Your <em>McKinney Home?</em></h2>
              <p>
                Contact us today to schedule your free double-hung window consultation. Our team will measure your
                openings on site, walk you through the line and glass options that make sense for your home, and
                send a detailed written estimate with no high-pressure follow-up.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Double-Hung Windows">
                    <option value="Double-Hung Windows">Double-Hung Windows</option>
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

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Common Questions</span>
            <h2>Double-Hung Window <em>FAQs</em></h2>
          </div>
          
          <div className={styles.faqGrid}>
            <details className={styles.faqItem}>
              <summary>How much do double-hung replacement windows cost in McKinney?</summary>
              <p>Double-hung replacement window costs with installation typically range from $400-$800 per window, depending on the size, brand, and features selected. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material, like wood clad windows. We do not sell windows without installation.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>What&apos;s the difference between double-hung and single-hung windows?</summary>
              <p>Both window styles look similar, but double-hung windows have two operable sashes (both top and bottom move), while single-hung windows have only a movable bottom sash. Double-hung windows offer superior ventilation control and the tilt-in cleaning feature on both sashes.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>How long does double-hung window installation take?</summary>
              <p>Most double-hung window replacements take 30-45 minutes per window. A typical McKinney home with 10-12 windows can usually be completed in a single day.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>Do double-hung windows require special maintenance?</summary>
              <p>Modern double-hung windows are remarkably low-maintenance. Simply clean the glass with standard window cleaner 2-3 times per year using the convenient tilt-in feature.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Schedule Your Free Double-Hung Window Consultation</h2>
          <p>Experience the Window Replacements of McKinney difference. Our experts will assess your home and provide a detailed estimate--all at no cost.</p>
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
