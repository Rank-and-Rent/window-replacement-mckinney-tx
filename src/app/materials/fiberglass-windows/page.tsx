import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Fiberglass Windows Replacement McKinney TX | Ultimate Strength & Insulation',
  description: 'Premium fiberglass replacement windows in McKinney, TX. Ultimate strength and insulation with authentic wood-like appearance. Maximum durability and energy efficiency. Call 817-592-8870.',
  keywords: 'fiberglass windows McKinney TX, fiberglass replacement windows, strong windows, durable windows, energy efficient windows',
}

export default function FiberglassWindowsPage() {
  // Only show these 6 window material types
  const allowedMaterialSlugs = [
    'vinyl-windows',
    'aluminum-windows',
    'fibrex-windows',
    'fiberglass-windows',
    'wood-clad-windows',
    'wood-windows',
  ]
  
  const materialServices = servicesData.filter(s => 
    s.category === 'Materials' && 
    allowedMaterialSlugs.includes(s.slug) && 
    s.slug !== 'fiberglass-windows'
  )

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/materials">Materials</Link>
          <span>/</span>
          <span>Fiberglass Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Window Material</span>
              <h1>Fiberglass Windows in <em>McKinney, TX</em></h1>
              <p>Ultimate strength and insulation with authentic wood-like appearance. Maximum durability and energy efficiency in one package.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/window-types/fiberglass-mckinney-tx.jpg"
                alt="Fiberglass windows in McKinney, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Fiberglass: Pultruded Strength for Long-Term Service</h2>
              <p>
                Fiberglass windows occupy a unique position in the McKinney replacement market. The frames are
                pultruded, which means glass fibers and resin are pulled through a heated die under tension to
                produce a continuous fiber-reinforced profile. The result is a frame with very high strength-to-
                weight ratio and almost zero thermal expansion compared to vinyl or aluminum. In practical terms,
                a fiberglass frame doesn&apos;t grow during summer heat and shrink during winter cold the way other
                materials do, which means the seals around the glass and the weatherstripping around the sash
                stay tight year-round.
              </p>
              <p>
                For McKinney&apos;s climate, where temperature can swing from 110 degrees in August to 15 degrees in a
                January cold front, this dimensional stability is meaningful. It also means the corners stay
                tight; pultruded fiberglass corners can be mechanically joined or thermally welded with confidence
                that the joint will hold up over decades of seasonal cycling. The frames are also fully resistant
                to rot, rust, warp, and corrosion.
              </p>

              <h3>Why Fiberglass Outperforms Vinyl Long-Term</h3>
              <p>
                Vinyl is a strong value pick at most price points, but it has measurable thermal expansion across
                temperature ranges and tends to deflect more than fiberglass at very large openings. Fiberglass
                solves both. On a 9-foot-wide great-room window in a custom Stonebridge Ranch home, fiberglass
                holds its shape better than vinyl across decades of seasonal cycling. Combined with Low-E2 or
                Low-E3 glass and argon fill, premium fiberglass lines achieve U-factor numbers in the 0.25 to
                0.30 range that put them at the top of the residential performance band.
              </p>

              <h3>Key Benefits in McKinney</h3>
              <ul>
                <li>Pultruded fiberglass for maximum strength and stability</li>
                <li>Near-zero thermal expansion across seasons</li>
                <li>Strong U-factor performance with Low-E glass</li>
                <li>Resistant to rot, rust, warp, and corrosion</li>
                <li>Outperforms vinyl on long-term dimensional accuracy</li>
                <li>Available with wood interior cladding (Marvin Elevate)</li>
                <li>Custom color and finish options</li>
                <li>30-40 year frame service life</li>
              </ul>

              <h3>Where Fiberglass Belongs in McKinney Homes</h3>
              <p>
                Fiberglass is at its best in mid- to high-end replacements where the homeowner wants better
                performance and longer service life than vinyl can deliver, but doesn&apos;t need the wood interior of
                a clad wood line. We see it most often in two contexts: full-home replacements in custom or near-
                custom homes throughout Tucker Hill, Adriatica Village, and the Stonebridge Ranch fairway lots
                where the homeowner is staying long-term, and partial replacements where a few specific
                elevations (large great-room walls, west-facing primary suites) get fiberglass while the rest of
                the home gets vinyl.
              </p>

              <h3>Premium Fiberglass Lines We Install</h3>
              <p>
                Marvin Elevate combines a pultruded fiberglass exterior with a wood interior, which gives you
                long-term durability outside and traditional warmth inside. Pella Impervia is Pella&apos;s all-
                fiberglass line built on their Duracast pultruded composite. Andersen 100 Series Composite
                technically uses Fibrex (a wood-fiber-and-polymer blend) that performs in the same band as
                fiberglass. We help you decide which line maps to your home and your priorities.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on fiberglass windows in McKinney.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving McKinney From</h3>
                <p>
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </p>
                <p><strong>Hours:</strong><br />{siteConfig.hours}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Other Materials</span>
            <h2>Explore Other Window Materials</h2>
          </div>
          <div className={styles.servicesGrid}>
            {materialServices.map((service) => (
              <div key={service.slug} className={styles.serviceCard}>
                <h3><Link href={service.route}>{service.name}</Link></h3>
                <p>{service.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Choose Fiberglass Windows?</h2>
          <p>Contact us today for a free estimate on fiberglass window replacement in McKinney.</p>
          <div className={styles.ctaButtons}>
            <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary large">
              Call {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-secondary large">
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
