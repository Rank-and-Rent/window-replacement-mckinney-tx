import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { brandsData, servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'Marvin Windows & Doors McKinney TX | Window Replacements of McKinney',
  description: 'Marvin Signature and Elevate for Tucker Hill, Adriatica, and McKinney Country Club custom homes. Made-to-order wood and clad windows, divided lite, factory warranty.',
  keywords: 'Marvin windows McKinney TX, Marvin doors, custom windows, luxury windows McKinney',
  alternates: {
    canonical: 'https://windowreplacementmckinney.com/brands/marvin-windows-doors',
  },
}

export default function MarvinPage() {
  const otherBrands = brandsData.filter(b => b.slug !== 'marvin-windows-doors')
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
          <span>Marvin Windows &amp; Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Partner</span>
              <h1>Marvin Window &amp; Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Marvin is the brand we specify most often for McKinney&apos;s upmarket custom builds:
                Tucker Hill, Adriatica Village, the McKinney Country Club estates, and the high-end
                renovations on Trinity Falls&apos; larger lots. Their Signature and Elevate lines support
                the divided-lite patterns, oversized openings, and species-specific wood interiors
                that custom-home architects in Collin County draw into their elevations.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Made-to-Order Custom</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Premium Materials</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Unparalleled Customization</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Family-Owned Since 1912</span>
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
                src="/brands/marvin-windows-mckinney-tx.avif"
                alt="Marvin windows and doors in McKinney, TX"
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
              src="/marvin-windows-and-doors-mckinney-tx-logo.png"
              alt="Marvin Windows & Doors"
              className={styles.brandLogo}
            />
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.content}>
              <h2>Marvin: Family-Owned Custom Window Manufacturing Since 1912</h2>
              <p>
                Marvin has been family-owned since the company was founded in Warroad, Minnesota in 1912, and that
                continuity shows up in the way the products are built. Every Marvin window and door is made to
                order at the company&apos;s Minnesota facilities, with custom sizing, shape, finish, and hardware
                specified per project rather than pulled from inventory. The result is a window that fits the
                opening it&apos;s going into rather than forcing the opening to fit the window. For McKinney custom
                homes in Tucker Hill, Adriatica Village, around McKinney Country Club, and any major remodel
                where the original architectural intent matters, Marvin is one of the most-recommended brands on
                our project board.
              </p>
              <p>
                We are a factory-certified Marvin installer, which means our crews handle Marvin&apos;s engineering and
                installation specifications correctly and qualify your installation for full factory warranty
                coverage. Marvin&apos;s lead times tend to be longer than mass-production lines because each unit is
                built to order, and we coordinate the order placement and project schedule so the install lines up
                cleanly with the rest of your project.
              </p>

              <h3>Marvin Product Lines We Install in McKinney</h3>
              <p>
                <strong>Marvin Signature Ultimate:</strong> Marvin&apos;s flagship line, true wood interior with
                aluminum-clad exterior, near-unlimited custom shapes and grille patterns, multiple wood species,
                and an extensive factory finish program. The most-installed Marvin line in our McKinney custom
                home portfolio.
              </p>
              <p>
                <strong>Marvin Signature Modern:</strong> The contemporary version of the Signature line, with
                slimmer profiles, larger glass areas, and a more minimalist aesthetic. Frequent specification on
                modern and transitional homes in Tucker Hill, Adriatica, and the contemporary new-build sections
                of Stonebridge Ranch.
              </p>
              <p>
                <strong>Marvin Elevate:</strong> Pultruded fiberglass exterior with a wood interior, delivering
                long-term durability outside and traditional warmth inside. Strong upper-mid-range pick for
                McKinney remodels where the homeowner wants Marvin quality without the full Signature price.
              </p>
              <p>
                <strong>Marvin Essential:</strong> All-fiberglass line aimed at builder-grade upgrades and value-
                tier specifications. Clean lines, strong performance, and a manageable price point.
              </p>

              <h3>Custom Capabilities That Justify the Price Point</h3>
              <p>
                Marvin&apos;s custom department can produce windows and doors in essentially any size, shape, divided-
                lite pattern, and finish. We&apos;ve coordinated Marvin orders for half-rounds matching original 1920s
                Old East McKinney homes, oversized casements for great rooms in custom Stonebridge Ranch homes,
                multi-slide patio doors with custom hardware in Tucker Hill, and historically accurate divided-
                lite reproductions for serious restoration projects. If a window can be drawn, Marvin can typically
                build it.
              </p>

              <h3>Aluminum Cladding and Long-Term Performance</h3>
              <p>
                The aluminum cladding on Marvin&apos;s clad wood lines is extruded into precise architectural profiles,
                factory-finished in any of Marvin&apos;s extensive standard or custom colors, and bonded mechanically
                to the wood frame. The cladding eliminates the exterior repainting cycle that limits the
                practicality of solid wood in the McKinney climate, and the factory finish carries long warranties
                against fading and chalking. Combined with high-performance Low-E glass packages, Marvin&apos;s clad
                wood lines deliver thermal performance and exterior durability that rival or exceed any other
                premium-tier product.
              </p>

              <h3>Marvin Doors</h3>
              <p>
                Marvin&apos;s door programs include Signature Ultimate hinged and sliding patio doors, multi-slide
                glass walls in homes that support them, and custom-built entry doors in mahogany, knotty alder,
                and other premium species with multi-point locking systems. The door designs use the same
                aluminum cladding, finishes, and grille patterns as the matching windows, which lets the entire
                envelope read as one architectural language.
              </p>

              <h3>Warranty Coverage</h3>
              <p>
                Marvin&apos;s warranty coverage on Signature and Elevate lines is extensive: 20 years on the insulating
                glass against seal failure, 10 to 20 years on the frame and finish depending on the line, and
                lifetime coverage on certain hardware components. We honor these warranties locally in McKinney
                rather than referring customers to a national customer service line.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore Marvin windows and doors for your McKinney home. We&apos;ll measure on
                site, coordinate with Marvin&apos;s custom department on any specialty work, and send a detailed
                written estimate that reflects the lead time honestly.
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
                  <li>Authorized Marvin dealer</li>
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
          <h2>Schedule Your Free Marvin Consultation</h2>
          <p>Experience the luxury of custom Marvin windows and doors. Contact us today.</p>
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
