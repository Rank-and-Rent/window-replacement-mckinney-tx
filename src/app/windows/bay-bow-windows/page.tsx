import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../service.module.css'

export const metadata: Metadata = {
  title: 'Bay & Bow Window Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Bay and bow windows for Old East McKinney Victorians and Eldorado golf-course estates. Period-correct projection, factory headers, copper or shingled roof caps available.',
  keywords: 'bay windows McKinney TX, bow windows, bay window installation, architectural windows McKinney',
}

export default function BayBowWindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows' && s.slug !== 'bay-bow-windows')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/windows">Windows</Link>
          <span>/</span>
          <span>Bay &amp; Bow Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Window Replacement</span>
              <h1>Bay &amp; Bow Window Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Bay and bow windows make sense in two distinct McKinney contexts: the dining-room and parlor
                projections of Old East McKinney Victorians and Queen Annes where period geometry is non-
                negotiable, and the rear breakfast-nook openings of Eldorado and McKinney Country Club estate
                homes. We coordinate factory-built headers, copper or shingled roof caps, and on-site framing
                so the new bay carries its own load and integrates cleanly with existing brick and siding.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Dramatic Architectural Impact</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Increases Interior Space</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Multiple Ventilation Options</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Premium Brand Options</span>
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
                src="/images/services/bay-bow-windows/bay-bow-window1.jpeg"
                alt="Premium bay and bow windows installed in McKinney homes"
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
              <h2>Architectural Drama for Your McKinney Home</h2>
              <p>
                A bay or bow window projects outward from the wall plane, which is what gives it the dramatic
                exterior shape and the bonus interior real estate. Unlike a flat picture window or a standard
                double-hung that sits flush with the wall, a bay or bow physically extends the room into the
                outside, creating a small alcove inside and a defined architectural feature outside. For McKinney
                homeowners, this is one of the most transformative window upgrades available, both visually and
                functionally.
              </p>
              <p>
                We see bays and bows most often in McKinney living rooms, primary bedrooms, formal dining areas,
                and breakfast nooks. They&apos;re a popular feature in the older homes around Old East McKinney where
                a Victorian or craftsman bay restores period character, and in custom builds throughout
                Stonebridge Ranch, Tucker Hill, and Adriatica where a bow window in a great room becomes a
                defining design element of the elevation.
              </p>

              <h3>Bay vs. Bow: Understanding the Difference</h3>
              <p>
                <strong>Bay Windows:</strong> A traditional bay is a three-panel composition: a large fixed center
                window flanked by two angled side units, typically casements or double-hungs that operate for
                ventilation. The side panels meet the center at a 30- or 45-degree angle, which produces a
                defined faceted projection. Bays are excellent for rooms where you want a clear architectural
                statement and operable ventilation on either side.
              </p>
              <p>
                <strong>Bow Windows:</strong> A bow is a curved composition of four, five, or six panels arranged
                in a gentle arc. The result is a softer, rounder projection without the angular faceting of a bay.
                Bow windows tend to read as more elegant and traditional, and they work beautifully in formal
                living rooms and primary suites. They typically include a mix of fixed and operable panels for
                ventilation.
              </p>

              <h3>Creating Bonus Interior Space</h3>
              <p>
                The interior space created by a bay or bow window is part of what makes the upgrade so popular.
                The projection adds anywhere from one to three feet of bonus room depth at the window, which is
                enough for a built-in window seat, a breakfast nook with banquette seating, a reading chair, or a
                display surface for plants and decor. McKinney homeowners frequently pair their bay or bow
                installation with built-in cabinetry or seating to fully integrate the new feature into the room.
              </p>

              <h3>Premium Bay and Bow Brands We Install</h3>
              <p>
                <strong>Andersen 400 Series Bay and Bow:</strong> Andersen offers extensive bay and bow
                configurations using their Fibrex composite framing for excellent thermal performance and minimal
                long-term maintenance. The 400 Series includes integrated head-and-seat boards as part of the
                factory package.
              </p>
              <p>
                <strong>Pella Reserve Traditional Bay and Bow:</strong> Premium wood with optional aluminum
                cladding, ideal for the older homes in Old East McKinney where a true wood interior with extensive
                divided-lite patterns matters.
              </p>
              <p>
                <strong>Marvin Signature Ultimate Bay and Bow:</strong> Marvin&apos;s top-tier bay and bow with
                aluminum-clad exterior and true wood interior. Custom mulled assemblies, multiple finishes, and
                hardware lines available for high-end specifications.
              </p>
              <p>
                <strong>JELD-WEN Premium Vinyl Bay and Bow:</strong> Solid value pick where the homeowner wants
                the architectural impact of a bay or bow without the premium wood price point.
              </p>

              <h3>Structural and Installation Considerations</h3>
              <p>
                A bay or bow window is more involved to install than a flat replacement because the projection
                has to be properly supported. Most bays and bows are supported by either a steel cable kit
                anchored back into the wall framing, exterior knee braces (corbels) on the elevation, or a built
                base that ties into the foundation or rim joist. We evaluate the existing wall and roof structure
                during our site visit to determine the right support method, which keeps the unit level and
                square long-term. Most bay and bow installations also include a small roof cap above the
                projection, which we coordinate with shingles or metal flashing as needed.
              </p>

              <h3>Energy Performance and McKinney&apos;s Climate</h3>
              <p>
                Because a bay or bow projects outward, it has more exterior surface area exposed to weather than a
                flat window. We address this with insulated head and seat boards as part of the factory package,
                proper insulation in the projection cavity, and high-performance Low-E2 or Low-E3 glass on every
                panel. Done correctly, a modern bay or bow performs comparably to a flat installation in U-factor
                and air infiltration testing, despite the larger exposed surface area.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore bay and bow window options for your McKinney home. We&apos;ll measure on
                site, review structural support options, and send a detailed written estimate.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Bay & Bow Windows">
                    <option value="Bay & Bow Windows">Bay & Bow Windows</option>
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
          <h2>Schedule Your Free Bay &amp; Bow Window Consultation</h2>
          <p>Add architectural drama to your McKinney home. Contact us today.</p>
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
