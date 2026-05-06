import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { brandsData, servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'Pella Windows & Doors McKinney TX | Window Replacements of McKinney',
  description: 'Pella Reserve, Architect, and 250 Series for Stonebridge Ranch, Trinity Falls, and Old East McKinney restorations. Between-glass blinds, divided lite, certified install.',
  keywords: 'Pella windows McKinney TX, Pella doors, between-glass blinds, Pella McKinney',
  alternates: {
    canonical: 'https://windowreplacementmckinney.com/brands/pella-windows-doors',
  },
}

export default function PellaPage() {
  const otherBrands = brandsData.filter(b => b.slug !== 'pella-windows-doors')
  const windowServices = servicesData.filter(s => s.category === 'Windows')
  const doorServices = servicesData.filter(s => s.category === 'Doors')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/brands">Brands</Link>
          <span>/</span>
          <span>Pella Windows &amp; Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Partner</span>
              <h1>Pella Window &amp; Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Pella covers the broadest range of McKinney specifications, from the Reserve and Architect
                lines we install in Old East McKinney historic restorations and McKinney Country Club
                estates, to the 250 Series vinyl that fits Stonebridge Ranch, Trinity Falls, and the
                broader builder-grade replacement market. Between-glass blinds and InsulShield Low-E
                packages handle the Texas-sun exposure on west-facing elevations.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Between-Glass Blinds &amp; Shades</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>inView Transparent Screens</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Triple-Pane Options</span>
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
              <Image
                src="/brands/pella-windows-mckinney-tx.jpg"
                alt="Pella windows and doors in McKinney, TX"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Brand Logo */}
      <section className={styles.brandLogoSection}>
        <div className={styles.container}>
          <div className={styles.brandLogoWrapper}>
            <img
              src="/pella-windows-and-doors-mckinney-tx-logo.png"
              alt="Pella Windows & Doors"
              className={styles.brandLogo}
            />
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.content}>
              <h2>Pella in McKinney: A Century of Window Innovation</h2>
              <p>
                Pella Corporation has been making windows since 1925, and the company has built its reputation on
                product features that solve real homeowner problems. Between-the-glass blinds eliminate the dust
                and damage of free-hanging blinds. InView retractable screens are nearly invisible when not in
                use. Hidden screens, Rolscreen retractable screens, and integrated grille options give Pella one
                of the deepest feature sets in the residential window industry. For McKinney homeowners who care
                about the day-to-day usability of their windows, not just the technical performance specs, Pella
                often offers the best fit.
              </p>
              <p>
                We are factory-certified Pella installers, which means our crews have completed the manufacturer&apos;s
                installation training, follow Pella specifications on every job, and qualify your installation for
                the full factory warranty. Pella&apos;s product range spans everything from value-tier vinyl to top-of-
                the-line Reserve Traditional clad wood, so we can bring Pella into essentially any McKinney
                replacement project regardless of budget or architectural style.
              </p>

              <h3>Pella Product Lines We Install</h3>
              <p>
                <strong>Pella 150 Series:</strong> Entry-level vinyl, a fit for value-conscious McKinney
                replacements where budget matters most. Reliable performance with InsulShield Low-E options.
              </p>
              <p>
                <strong>Pella 250 Series:</strong> Mid-range vinyl with broader color and grille options. A
                workhorse for McKinney builder-grade upgrades in Stonebridge Ranch, Eldorado, and similar
                neighborhoods.
              </p>
              <p>
                <strong>Pella 350 Series:</strong> Premium vinyl with Pella&apos;s top-tier InsulShield glass packages
                and reinforced hardware. Strong long-term value pick for full-home replacements.
              </p>
              <p>
                <strong>Pella Lifestyle Series:</strong> Wood-construction window with extensive customization,
                aimed at mid-to-upper-range remodels where wood interior matters but full Reserve specification
                isn&apos;t needed.
              </p>
              <p>
                <strong>Pella Impervia:</strong> Fiberglass line built on Pella&apos;s Duracast pultruded composite.
                Excellent strength, dimensional stability, and impact resistance.
              </p>
              <p>
                <strong>Pella Reserve Traditional and Contemporary:</strong> Pella&apos;s flagship clad wood lines, with
                near-unlimited customization for high-end McKinney custom homes and serious historic restorations.
              </p>

              <h3>InsulShield Glass and Performance in Texas Sun</h3>
              <p>
                Pella&apos;s InsulShield glass program offers multiple Low-E coating tiers tuned for different climate
                priorities. For McKinney homes, we typically recommend InsulShield Advanced Low-E or Triple-Pane
                on west- and south-facing elevations where solar heat gain is the dominant performance issue, and
                standard Low-E on north and east where the SHGC isn&apos;t as critical. InsulShield Advanced reduces UV
                transmission by up to 84%, which translates directly into less furniture fading and less hardwood
                floor damage in rooms with significant west-facing exposure.
              </p>

              <h3>Pella&apos;s Signature Features</h3>
              <p>
                The features that distinguish Pella from competitors are mostly about daily livability. Between-
                the-glass blinds and shades sit inside the insulating glass unit where they never accumulate dust
                and never get damaged. Pella&apos;s InView retractable screens disappear when not in use, restoring
                clear views without removing the screen physically. Hidden screens on Lifestyle and Reserve lines
                achieve the same effect through a different mechanism. For McKinney homeowners who&apos;ve been
                frustrated with traditional fly screens that block views and accumulate damage, these are
                meaningful upgrades.
              </p>

              <h3>Pella Door Programs</h3>
              <p>
                Pella&apos;s door lineup includes Architect Series and Reserve Traditional fiberglass and wood entry
                doors, sliding patio doors and multi-slide systems on all premium lines, French door pairs, and
                storm doors with Rolscreen retractable screens. Many of the door programs use the same construction
                methods and color palettes as the windows, which lets the entire envelope match in finish and
                grille pattern.
              </p>

              <h3>Warranty Coverage</h3>
              <p>
                Pella offers limited lifetime warranties on many of their premium lines, covering frame integrity,
                glass seal failure, and hardware defects. The exact terms vary by product line and installation
                date, and we walk you through what your specific warranty covers as part of the consultation. We
                handle warranty service locally in McKinney rather than referring customers to a national customer
                service line.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore Pella windows and doors for your McKinney home. We&apos;ll measure on site,
                walk you through line and feature options that make sense for your home, and send a detailed
                written estimate.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required>
                    <option value="">Select a service...</option>
                    <optgroup label="Windows">
                      {windowServices.map((s) => (
                        <option key={s.slug} value={s.name}>{s.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Doors">
                      {doorServices.map((s) => (
                        <option key={s.slug} value={s.name}>{s.name}</option>
                      ))}
                    </optgroup>
                    <option value="Not Sure / Multiple Services">Not Sure / Multiple Services</option>
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
                <h4>Other Brands</h4>
                <ul className={styles.relatedLinks}>
                  {otherBrands.map((brand) => (
                    <li key={brand.slug}>
                      <Link href={brand.route}>{brand.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.sidebarCard} ${styles.highlight}`}>
                <h4>Why Choose Us?</h4>
                <ul className={styles.checkList}>
                  <li>Authorized Pella dealer</li>
                  <li>Factory-certified installers</li>
                  <li>15+ years serving McKinney</li>
                  <li>Financing available</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Schedule Your Free Pella Consultation</h2>
          <p>Discover Pella&apos;s innovative features. Contact us today.</p>
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
