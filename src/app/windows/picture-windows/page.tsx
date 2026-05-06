import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../service.module.css'

export const metadata: Metadata = {
  title: 'Picture Window Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Premium picture window replacement in McKinney, TX. Large fixed windows for maximum light and views. Expert installation. Free estimates. Call 945-206-3998.',
  keywords: 'picture windows McKinney TX, fixed windows, large windows, panoramic windows McKinney',
}

export default function PictureWindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows' && s.slug !== 'picture-windows')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/windows">Windows</Link>
          <span>/</span>
          <span>Picture Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Window Replacement</span>
              <h1>Picture Window Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Frame your McKinney views with expansive picture windows that flood interiors with natural 
                light. These fixed windows deliver maximum energy efficiency and are often combined with 
                operable units for the perfect balance of views and ventilation.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Maximum Natural Light</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Excellent Energy Efficiency</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Panoramic Views</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Custom Sizes Available</span>
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
                src="/images/services/picture-windows/picture-window1.jpeg"
                alt="Premium picture windows installed in McKinney homes"
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
              <h2>Picture Windows: View, Light, and Maximum Performance</h2>
              <p>
                A picture window is a fixed, non-operating window engineered to do one thing well: deliver
                uninterrupted glass. There&apos;s no sash, no operator, no meeting rail, and no track. The whole
                opening is glass, framed by the slimmest profile the manufacturer offers. For McKinney homeowners
                with a great-room view of a backyard pool, a Stonebridge Ranch fairway, a wooded lot in Trinity
                Falls, or just a treed neighborhood street, a picture window is the design move that actually
                captures what you&apos;re looking at.
              </p>
              <p>
                Picture windows also test as the most energy-efficient window category available. With no operating
                seams to seal and no hardware to wear, the air infiltration number is essentially zero. That makes
                them a strong choice for the largest pieces of glass on your home, where any air leak would be
                multiplied by the size of the opening. Pair a picture window with a high-performance Low-E glass
                package and a properly insulated frame, and you have a window that beats almost anything else in
                the wall thermally.
              </p>

              <h3>Where Picture Windows Belong in McKinney Homes</h3>
              <p>
                The most common application is a great room facing the backyard, often with a 60- to 96-inch tall
                picture window centered on a wall and flanked by operable casements or awnings for ventilation.
                Master suites and primary bedrooms in larger homes often use a picture window to capture a view of
                the back property without sacrificing wall space to operable units. Two-story foyers in custom
                homes around McKinney Country Club or in Tucker Hill frequently use stacked picture windows to
                pull daylight deep into the entry.
              </p>

              <h3>Composition: Picture Plus Operable</h3>
              <p>
                A picture window almost always works best as part of a composition, not as a standalone unit. The
                classic move is a fixed center flanked by two operable casements, mulled together as one factory
                assembly. This gives you the unbroken view across the center plus operable ventilation at the ends.
                Another common composition is a picture window above with an operable awning below, which produces
                a tall vertical glazing band while still letting the homeowner open the lower section for fresh air.
                We design these compositions during the consultation so the proportions match your room and the
                exterior elevation.
              </p>

              <h3>Premium Picture Window Brands We Install</h3>
              <p>
                <strong>Andersen 400 Series Picture Windows:</strong> Andersen&apos;s composite Fibrex frame combined
                with their Low-E4 SmartSun glass package. A frequent specification in McKinney custom and high-end
                tract replacements.
              </p>
              <p>
                <strong>Pella Reserve Traditional Fixed:</strong> Premium wood with optional aluminum cladding,
                ideal where the picture window needs to match adjacent wood double-hungs or casements in a custom
                home.
              </p>
              <p>
                <strong>Marvin Signature Ultimate Picture:</strong> Marvin&apos;s top-of-the-line aluminum-clad wood
                fixed window. Available in extra-large units that other manufacturers can&apos;t match, which makes
                them the right pick for dramatic two-story compositions.
              </p>
              <p>
                <strong>JELD-WEN Premium Vinyl Picture:</strong> Solid value pick for builder-grade replacements
                where a picture window needs to match adjacent vinyl windows on the same elevation.
              </p>

              <h3>Glass Choices That Matter Most on Picture Windows</h3>
              <p>
                Because the entire opening is glass, the glass package matters more on a picture window than on any
                other style. We typically spec Low-E2 or Low-E3 coatings on most McKinney installations, with
                solar-control packages on west-facing or south-facing applications where solar gain would otherwise
                be a problem. For homeowners particularly concerned about UV damage to interior furniture, hardwood
                floors, or art, we offer high-performance Low-E coatings that block well above 80% of UV without
                visibly tinting the glass. Laminated glass is available where sound dampening or impact resistance
                matters.
              </p>

              <h3>Installation Considerations for Large Glass</h3>
              <p>
                A large picture window unit can weigh several hundred pounds, which means proper rough-opening prep
                and structural support are critical. Our crews handle the lift carefully, ensure the header above
                the opening is correctly sized for the load, and shim the unit so the frame stays perfectly square
                during sealant cure. We also detail the head and sill flashings carefully because a larger opening
                produces more water shed during a severe storm. Most picture window installations close in a single
                day per opening, including trim and cleanup.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore picture window options for your McKinney home. We&apos;ll measure on site,
                propose a composition that fits your room, and send a detailed written estimate.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Picture Windows">
                    <option value="Picture Windows">Picture Windows</option>
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
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Schedule Your Free Picture Window Consultation</h2>
          <p>Transform your McKinney home with stunning picture windows. Contact us today.</p>
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
