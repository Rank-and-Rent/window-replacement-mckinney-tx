import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { brandsData, servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'Andersen Windows & Doors McKinney TX | Window Replacements of McKinney',
  description: 'Premium Andersen windows and doors in McKinney, TX. Fibrex technology, expert installation, factory warranties. Free estimates. Call 945-206-3998.',
  keywords: 'Andersen windows McKinney TX, Andersen doors, Fibrex windows, Andersen McKinney',
  alternates: {
    canonical: 'https://windowreplacementmckinney.com/brands/andersen-windows-doors',
  },
}

export default function AndersenPage() {
  const otherBrands = brandsData.filter(b => b.slug !== 'andersen-windows-doors')
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
          <span>Andersen Windows &amp; Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Partner</span>
              <h1>Andersen Window &amp; Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                For over 120 years, Andersen has set the standard for window and door excellence. We bring you
                exclusive access to their innovative Fibrex technology and comprehensive product line.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Patented Fibrex Composite</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Industry-Leading Warranties</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Made in USA</span>
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
                src="/brands/andersen-windows-mckinney-tx.jpg"
                alt="Andersen windows and doors in McKinney, TX"
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
              src="/andersen-windows-and-doors-mckinney-tx-logo.png"
              alt="Andersen Windows & Doors"
              className={styles.brandLogo}
            />
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.content}>
              <h2>Why McKinney Homeowners Choose Andersen</h2>
              <p>
                Andersen Corporation has been making windows since 1903, and the company&apos;s long history of
                product innovation has produced some of the most influential technologies in residential glazing.
                Fibrex composite, the SmartSun glass family, the 400 Series Woodwright double-hung, and the
                E-Series custom platform are all Andersen developments that have shaped what homeowners expect a
                premium window to deliver. For McKinney homeowners, the practical implication is that an Andersen
                product line covers essentially every replacement scenario: builder-grade upgrade in a Stonebridge
                Ranch tract home, mid-range remodel in Trinity Falls, or full-custom specification in Tucker Hill
                or Adriatica Village.
              </p>
              <p>
                We are factory-certified Andersen installers, which means our crews have completed the manufacturer&apos;s
                training programs, follow Andersen&apos;s installation specifications, and qualify your installation for
                the full factory warranty. We&apos;ve installed Andersen products across hundreds of McKinney homes,
                and that experience translates into faster project timelines, cleaner finish details, and better
                warranty coordination if anything ever needs to be addressed.
              </p>

              <h3>Andersen Product Lines We Install</h3>
              <p>
                <strong>Andersen 100 Series:</strong> The value tier built on Fibrex composite. Strong picks for
                McKinney builder-grade replacements where the homeowner wants a step up from vinyl performance.
              </p>
              <p>
                <strong>Andersen 200 Series:</strong> Mid-range vinyl-clad wood with extended customization. Good
                fit for traditional McKinney homes that need a wider range of grille and color options.
              </p>
              <p>
                <strong>Andersen 400 Series Woodwright:</strong> Andersen&apos;s flagship line, a wood-interior, Fibrex-
                clad-exterior window with the broadest distribution and the most field track record. The most-
                installed line across our McKinney portfolio.
              </p>
              <p>
                <strong>Andersen A-Series:</strong> Premium architectural-grade composite line designed for high-end
                custom homes. Combines Fibrex structural components with wood interior and weather-resistant
                cladding.
              </p>
              <p>
                <strong>Andersen E-Series:</strong> The custom platform, with near-unlimited size, shape, color, and
                grille customization. Frequent specification on McKinney custom builds in Tucker Hill, Adriatica,
                and around McKinney Country Club.
              </p>

              <h3>The Fibrex Advantage in Texas Conditions</h3>
              <p>
                Andersen&apos;s proprietary Fibrex material is a wood-and-thermoplastic composite that delivers the
                dimensional stability and natural insulating properties of wood with the moisture resistance and
                consistency of synthetic materials. The frame doesn&apos;t warp in McKinney humidity, doesn&apos;t expand
                noticeably across the temperature range from January cold fronts to August heat, and doesn&apos;t
                require the multi-year repainting cycle that solid wood frames need in Texas conditions. For
                long-term performance in our climate, Fibrex is one of the strongest material picks in the
                residential window market.
              </p>

              <h3>SmartSun and Andersen&apos;s Glass Programs</h3>
              <p>
                Andersen&apos;s Low-E4 SmartSun glass is engineered specifically for solar-control applications, which
                makes it a frequent recommendation on west- and south-facing McKinney elevations where summer heat
                gain is the limiting factor. SmartSun blocks roughly 95% of UV transmission and significantly
                reduces solar heat gain coefficient compared to standard Low-E2, while preserving high visible
                light transmission so the rooms still feel bright. Combined with argon fill and Andersen&apos;s warm-
                edge spacer technology, SmartSun produces ENERGY STAR-qualified configurations across the southern
                climate zone.
              </p>

              <h3>Doors: Patio, Entry, and Folding Glass</h3>
              <p>
                Andersen&apos;s door lineup is as deep as their window lineup. We install Andersen 400 Series Frenchwood
                hinged patio doors, A-Series sliding patio doors, contemporary folding glass walls in homes that
                support them structurally, and Andersen Architectural fiberglass entry doors with multi-point
                locking systems. The door programs use the same Fibrex and clad-wood construction methods as the
                windows, which means the entire envelope can match in finish color, grille pattern, and hardware.
              </p>

              <h3>Warranty Coverage</h3>
              <p>
                Andersen stands behind their products with comprehensive warranty coverage that varies by line. The
                400 Series carries a 20-year limited warranty on glass and a 10-year limited warranty on non-glass
                parts. The 100 Series Fibrex frame is warrantied for 20 years on the frame and 20 years on the
                glass seal. We honor these warranties locally in McKinney, with our crews handling warranty service
                rather than referring you to a national customer service number.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore Andersen windows and doors for your McKinney home. We&apos;ll measure on
                site, walk through line and glass options that make sense for your home, and send a detailed
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
                  <li>Authorized Andersen dealer</li>
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
          <h2>Schedule Your Free Andersen Consultation</h2>
          <p>Experience the Andersen difference. Contact us today.</p>
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
