import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Aluminum Windows Replacement McKinney TX | Durable & Modern',
  description: 'Aluminum window framing for contemporary Tucker Hill and Trinity Falls modern elevations. Thermal break, narrow sightlines, large openings handled without sag.',
  keywords: 'aluminum windows McKinney TX, aluminum replacement windows, durable windows, modern windows, thermal efficiency',
}

export default function AluminumWindowsPage() {
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
    s.slug !== 'aluminum-windows'
  )

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/materials">Materials</Link>
          <span>/</span>
          <span>Aluminum Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Window Material</span>
              <h1>Aluminum Windows in <em>McKinney, TX</em></h1>
              <p>Thermally-broken aluminum framing for the contemporary architecture rising in Tucker Hill, Trinity Falls, and the modern infill on Adriatica Village edges. Narrow sightlines, large openings, no flex.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/window-types/aluminum-mckinney-tx.jpg"
                alt="Aluminum windows in McKinney, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Aluminum Windows in McKinney: A Defined Niche</h2>
              <p>
                Aluminum windows occupy a specific niche in the McKinney replacement market: they&apos;re the right
                answer for contemporary architecture, large openings that need narrow sightlines, and homeowners
                who want a window with a defined modern look. Modern residential aluminum windows are nothing like
                the leaky, conductive single-pane aluminum that defined the 1970s. Today&apos;s aluminum windows
                incorporate engineered thermal breaks, multi-cavity extrusions, and high-performance Low-E glass
                packages that produce thermal performance comparable to quality vinyl, while preserving the
                strength and minimalism that aluminum is known for.
              </p>
              <p>
                A thermal break is a non-conductive polymer (polyurethane or polyamide) inserted between the inside
                and outside aluminum extrusions. It prevents the metal frame from conducting heat directly from
                outside to inside, which is the single biggest improvement in residential aluminum window
                technology in the last 30 years. With a properly engineered thermal break, an aluminum window
                achieves U-factor values comparable to vinyl. For McKinney&apos;s hot summers, this is the difference
                between a window that radiates heat into the room all afternoon and one that holds a comfortable
                interior surface temperature.
              </p>

              <h3>Where Aluminum Belongs in McKinney</h3>
              <p>
                Aluminum is at its best on contemporary and modern architecture: clean-lined homes in Tucker Hill,
                contemporary new builds in Trinity Falls, transitional designs along the Stonebridge Ranch
                fairways, and any home where the design intent calls for narrow sightlines that step back from
                the view. Aluminum is also the right answer for very large openings (over 8 feet on a side) where
                vinyl can begin to deflect under load. By contrast, aluminum is usually not the first choice for
                traditional Victorian or craftsman homes in Old East McKinney, where the wider sightlines of wood
                or wood-clad windows match the home&apos;s original character better.
              </p>

              <h3>Key Benefits in McKinney</h3>
              <ul>
                <li>Slim sightlines that maximize glass area</li>
                <li>Structural strength suitable for very large openings</li>
                <li>Impact-resistant for severe storm season exposure</li>
                <li>Factory powder-coat finishes in nearly any color</li>
                <li>Low long-term maintenance (factory finish, periodic refinishing)</li>
                <li>Thermal break engineering for vinyl-comparable U-factor</li>
                <li>40+ year frame service life</li>
                <li>100% recyclable at end of life</li>
              </ul>

              <h3>Glass Packages and Long-Term Performance</h3>
              <p>
                Modern thermally-broken aluminum windows pair with the same Low-E glass packages, argon fills, and
                warm-edge spacers as any other premium framing material. We typically spec Low-E2 or Low-E3
                coatings on McKinney installations, with solar-control packages on west- and south-facing
                elevations where solar gain is the dominant performance issue. Frame service life regularly
                exceeds 40 years; the factory finish typically goes 8 to 12 years before any cosmetic refinishing
                is needed, with the frames themselves never rusting, rotting, or warping in McKinney humidity.
              </p>

              <h3>Color and Customization</h3>
              <p>
                Aluminum&apos;s big aesthetic advantage is its color program. The frames accept extensive factory
                powder-coat finishes including matte black, anodized bronze, satin nickel, custom colors matched to
                an architectural palette, and metallic finishes that are essentially impossible to replicate in
                vinyl or fiberglass. For McKinney custom homes where the windows are intended to be a defining
                exterior design element, aluminum&apos;s color flexibility is one of its strongest selling points.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on aluminum windows in McKinney.</p>
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
          <h2>Ready to Choose Aluminum Windows?</h2>
          <p>Contact us today for a free estimate on aluminum window replacement in McKinney.</p>
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
