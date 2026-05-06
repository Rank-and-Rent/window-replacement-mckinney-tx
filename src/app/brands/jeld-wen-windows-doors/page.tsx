import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { brandsData, servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'JELD-WEN Windows & Doors McKinney TX | Window Replacements of McKinney',
  description: 'JELD-WEN Premium Vinyl and AuraLast wood for Eldorado, Mallard Lakes, and Cumberland Crossing replacements. Strong value pick across most McKinney builder-grade homes.',
  keywords: 'JELD-WEN windows McKinney TX, JELD-WEN doors, AuraLast wood, JELD-WEN McKinney',
  alternates: {
    canonical: 'https://windowreplacementmckinney.com/brands/jeld-wen-windows-doors',
  },
}

export default function JeldWenPage() {
  const otherBrands = brandsData.filter(b => b.slug !== 'jeld-wen-windows-doors')
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
          <span>JELD-WEN Windows &amp; Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Partner</span>
              <h1>JELD-WEN Window &amp; Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                JELD-WEN is our most-frequent value-tier specification across McKinney&apos;s broader builder-grade
                replacement market: Eldorado, Mallard Lakes, Provine Farms, Wilmeth Ridge, and the
                Anna-Princeton-Melissa starter-home corridor. Premium Vinyl with fusion-welded frames and
                AuraLast pine for traditional double-hung profiles deliver real performance at a price
                that lets homeowners replace a full elevation in one job.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Exceptional Value</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>AuraLast Wood Protection</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>20-Year Warranty</span>
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
                src="/brands/jeld-wen-windows-mckinney-tx.jpg"
                alt="JELD-WEN windows and doors in McKinney, TX"
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
              src="/jeld-wen-windows-and-doors-mckinney-tx-logo.png"
              alt="Jeld-Wen Windows & Doors"
              className={styles.brandLogo}
            />
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.content}>
              <h2>JELD-WEN: Quality Across the Full Price Spectrum</h2>
              <p>
                JELD-WEN was founded in 1960 and has grown into one of the largest window and door manufacturers in
                the world, with manufacturing plants across North America and a product range that covers
                essentially every residential category. The company&apos;s scale lets them deliver consistent quality
                across a wider price range than most competitors, which means we can specify JELD-WEN on a budget-
                conscious McKinney builder-grade replacement and on a high-end custom build with equal confidence.
                For McKinney homeowners trying to balance budget against performance, JELD-WEN is often the brand
                that hits the right combination.
              </p>
              <p>
                We are factory-certified JELD-WEN installers and have completed hundreds of projects across
                JELD-WEN&apos;s product range in McKinney. Our crews follow JELD-WEN&apos;s installation specifications,
                which qualifies the installation for full factory warranty coverage and ensures the long-term
                performance the manufacturer designed in.
              </p>

              <h3>JELD-WEN Product Lines We Install</h3>
              <p>
                <strong>JELD-WEN Premium Vinyl:</strong> Fusion-welded multi-chambered vinyl with strong glass
                packages and extensive size and style options. The most common JELD-WEN spec across McKinney
                builder-grade replacements in master-planned communities.
              </p>
              <p>
                <strong>JELD-WEN MezzoMax Aluminum:</strong> Thermally broken aluminum line aimed at contemporary
                designs. A fit for modern McKinney homes in Tucker Hill, Adriatica, and the contemporary
                replacement segment.
              </p>
              <p>
                <strong>JELD-WEN Siteline Wood and Clad Wood:</strong> Wood interior with aluminum or vinyl clad
                exterior, ideal for mid-to-upper range remodels and new builds where wood interior matters.
              </p>
              <p>
                <strong>JELD-WEN W-2500 Wood:</strong> Premium clad wood with extensive customization, an option
                for serious McKinney remodels in Old East McKinney historic homes and custom builds elsewhere in
                the city.
              </p>
              <p>
                <strong>JELD-WEN Custom Wood:</strong> Built-to-order solid wood and clad wood for projects with
                specific historical or architectural requirements that need full custom fabrication.
              </p>

              <h3>AuraLast Wood Treatment for Texas Conditions</h3>
              <p>
                AuraLast is JELD-WEN&apos;s exclusive pine treatment, designed to protect against water damage, decay,
                and termite intrusion. Unlike surface-treated wood that loses protection if the finish wears, the
                AuraLast process penetrates the entire piece of wood with the protective formulation, which
                extends realistic service life meaningfully in humid environments. For McKinney&apos;s climate, where
                humidity peaks during summer and exterior wood faces serious UV exposure, AuraLast is a
                meaningful technical advantage on JELD-WEN&apos;s wood lines.
              </p>

              <h3>Door Programs</h3>
              <p>
                JELD-WEN&apos;s door portfolio is one of the deepest in the industry. Their fiberglass entry doors are
                some of the best-selling residential entry doors in the country. We install JELD-WEN fiberglass
                entries with multi-point locking systems, sliding patio doors and French doors, storm doors with
                retractable screens, and Custom Wood entry doors for high-end McKinney specifications. The doors
                use the same construction philosophy as the windows: consistent quality across the price
                spectrum, with premium options available where the project supports them.
              </p>

              <h3>InsulShield-Equivalent Glass and Energy Performance</h3>
              <p>
                JELD-WEN&apos;s glass program offers Low-E coatings tuned for solar control, dual Low-E packages for
                west- and south-facing applications, argon and krypton fills depending on the line, and warm-edge
                spacer technology that improves perimeter performance. Premium JELD-WEN configurations meet ENERGY
                STAR requirements for the southern climate zone and produce measurable cooling-load reductions on
                McKinney homes.
              </p>

              <h3>Warranty Coverage</h3>
              <p>
                JELD-WEN offers comprehensive 20-year warranty coverage on most product lines, including
                protection against glass seal failure, hardware defects, and material flaws. Some premium lines
                carry limited lifetime warranties on specific components. We coordinate warranty service locally in
                McKinney rather than referring customers to a national customer service line.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore JELD-WEN windows and doors for your McKinney home. We&apos;ll measure on
                site, walk through line and feature options that make sense for your budget and your home, and
                send a detailed written estimate.
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
                  <li>Authorized JELD-WEN dealer</li>
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
          <h2>Schedule Your Free JELD-WEN Consultation</h2>
          <p>Get premium quality at an exceptional value. Contact us today.</p>
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
