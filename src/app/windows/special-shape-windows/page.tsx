import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../service.module.css'

export const metadata: Metadata = {
  title: 'Special Shape Window Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Arched, eyebrow, and round-top special-shape windows for Adriatica Croatian-style facades and Tucker Hill custom builds. Factory-shaped Marvin and Pella, true-divided lite optional.',
  keywords: 'special shape windows McKinney TX, arched windows, circular windows, custom windows McKinney, geometric windows',
}

export default function SpecialShapeWindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows' && s.slug !== 'special-shape-windows')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/windows">Windows</Link>
          <span>/</span>
          <span>Special Shape Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Window Replacement</span>
              <h1>Special Shape Window Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Special-shape windows are most often spec&apos;d for two McKinney contexts: the Croatian-style
                eyebrow arches and gable rounds of Adriatica Village, and the transom geometry above entry
                vestibules in Tucker Hill and McKinney Country Club custom builds. Marvin and Pella factory-
                shape these units with true-divided-lite or simulated-divided-lite grilles to match the
                original architectural intent, then we install them as part of the larger window package.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Arches, Circles &amp; Ovals</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Custom Geometric Shapes</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Architectural Accents</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Made to Order</span>
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
                src="/images/services/special-shape-windows/special-shape-window1.jpeg"
                alt="Premium special shape windows installed in McKinney homes"
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
              <h2>Architectural Character Through Custom Window Shapes</h2>
              <p>
                Special-shape windows are non-rectangular units engineered to fit specific architectural openings:
                arched transoms above an entry door, half-rounds at the top of a stairwell, octagons in a guest
                bath, trapezoidal panels following a vaulted ceiling, or true circles set into a stucco gable. They
                don&apos;t come off the shelf. Every special-shape window is built to the specific opening it&apos;s going
                into, with frame profiles and grille patterns that match the rest of the elevation.
              </p>
              <p>
                In McKinney we see special shapes most often in the custom homes around McKinney Country Club, in
                the Mediterranean and Tuscan-influenced architecture in Tucker Hill and Adriatica Village, in the
                two-story foyers of Stonebridge Ranch and Trinity Falls, and in the historic homes of Old East
                McKinney where original arched and round-top windows need period-appropriate replacements. These
                aren&apos;t accent details; they&apos;re defining elements of the home&apos;s exterior, and replacing them
                correctly matters.
              </p>

              <h3>The Most Common Special Shapes in McKinney</h3>
              <p>
                <strong>Arches:</strong> Half-rounds, quarter-rounds, and elliptical arches are the most common
                special shapes we install. A half-round above a window or door restores the curved silhouette that
                often defines the front elevation of a Mediterranean or transitional home. Elliptical arches are a
                common feature in two-story foyers where a graceful curved transom needs to scale to the room.
              </p>
              <p>
                <strong>Circles and Ovals:</strong> Round windows are dramatic accents at gable peaks, in
                stairwells, and in primary suites. We install full circles, half-circles, and ovals in both fixed
                and operating configurations.
              </p>
              <p>
                <strong>Geometric Shapes:</strong> Trapezoids and rake-top units follow vaulted ceilings, which is
                common in great rooms with cathedral lines. Octagons, hexagons, and triangles add interest to
                bathrooms, breakfast nooks, and contemporary designs.
              </p>
              <p>
                <strong>Custom Mulled Compositions:</strong> Many McKinney homes pair a rectangular center window
                with a special-shape transom above (a fan light or arched transom) as a single mulled assembly.
                These are factory-built as integrated units so the joint between the rectangle and the shape is
                clean and weather-tight.
              </p>

              <h3>Premium Brands and Custom Capabilities</h3>
              <p>
                <strong>Marvin Signature Ultimate Custom Shapes:</strong> Marvin&apos;s custom shape capabilities are
                the most extensive in the industry, with the ability to match almost any historic or
                architecturally specified geometry. The frame profiles, divided-lite patterns, and finishes are
                all customizable.
              </p>
              <p>
                <strong>Pella Reserve Traditional Custom:</strong> Pella offers extensive special-shape capabilities
                in their Reserve line, with wood interiors and aluminum-clad exteriors that match adjacent
                rectangular units in the same composition.
              </p>
              <p>
                <strong>Andersen E-Series Custom:</strong> Andersen&apos;s top-tier line offers near-unlimited shape and
                color customization, ideal for high-end McKinney custom homes.
              </p>
              <p>
                <strong>JELD-WEN Custom Wood and Vinyl:</strong> JELD-WEN offers strong special-shape capabilities
                in both wood and vinyl, which makes them a versatile pick across price points.
              </p>

              <h3>Field Measurement and Factory Coordination</h3>
              <p>
                A special-shape window is far less forgiving than a rectangle. A standard double-hung that&apos;s 1/4
                inch off can usually be shimmed and trimmed into the opening. A half-round that&apos;s 1/4 inch off
                will look obviously wrong, because the eye picks up curve discrepancies immediately. We measure
                special shapes with care: full radius templates, multiple field check points, and direct
                coordination with the manufacturer&apos;s custom department on more complex orders. This is also why
                special-shape lead times tend to be longer than standard windows, typically four to eight weeks
                from order placement.
              </p>

              <h3>Glass and Performance on Special Shapes</h3>
              <p>
                Special-shape windows are usually fixed (non-operating) because the geometry doesn&apos;t accommodate a
                conventional sash mechanism. That actually works in your favor for energy performance, because a
                fixed unit seals tighter than any operable style. We pair these windows with the same Low-E glass
                packages and argon fills as the rest of the elevation, so the special-shape elements perform
                consistently with the standard windows around them.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to discuss custom special-shape windows for your home. We&apos;ll measure the
                opening, coordinate with the manufacturer&apos;s custom department, and send a detailed written
                estimate that reflects the lead time and specifications honestly.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Special Shape Windows">
                    <option value="Special Shape Windows">Special Shape Windows</option>
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
          <h2>Schedule Your Free Special Shape Window Consultation</h2>
          <p>Add unique character to your McKinney home. Contact us today.</p>
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
