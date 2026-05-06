import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Wood Clad Windows Replacement McKinney TX | Authentic Wood with Protection',
  description: 'Wood-clad framing for Adriatica Croatian-style facades, Tucker Hill custom builds, and Country Club estates. Real wood inside, factory-clad exterior survives Collin County hail.',
  keywords: 'wood clad windows McKinney TX, wood clad replacement windows, wood windows, traditional windows, protected wood windows',
}

export default function WoodCladWindowsPage() {
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
    s.slug !== 'wood-clad-windows'
  )

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/materials">Materials</Link>
          <span>/</span>
          <span>Wood Clad Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Window Material</span>
              <h1>Wood Clad Windows in <em>McKinney, TX</em></h1>
              <p>Real wood inside, factory-clad aluminum or vinyl outside. The right specification for Adriatica Croatian-style facades, Tucker Hill custom builds, and McKinney Country Club estate replacements.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/window-types/wood-clad-mckinney-tx.jpg"
                alt="Wood clad windows in McKinney, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Wood Clad Windows: Wood Inside, Aluminum Outside</h2>
              <p>
                Wood clad windows are a hybrid construction: genuine solid wood on the room side, factory-applied
                aluminum or vinyl cladding on the exterior. The point of the design is to give homeowners the look
                and feel of a real wood window from inside the home, without the multi-year exterior repainting
                cycle that limits the practicality of full solid wood in the McKinney climate. For high-end custom
                builds in Tucker Hill, Adriatica Village, and the McKinney Country Club area, and for any home
                where the homeowner wants a wood interior but can&apos;t commit to ongoing exterior maintenance, wood
                clad is usually the right answer.
              </p>
              <p>
                A wood clad window starts with a solid wood interior frame, typically pine, Douglas fir, mahogany,
                or another premium species depending on the line. The exterior of that wood frame is then wrapped
                in factory-applied aluminum or vinyl cladding that bonds permanently to the wood, creating a
                continuous weather barrier. The cladding is mechanically formed and sealed at the corners so water
                cannot reach the wood, which solves the single biggest maintenance issue with traditional solid
                wood: rot at the bottom rail and corners from prolonged moisture exposure.
              </p>

              <h3>Why Wood Clad Wins in the McKinney Climate</h3>
              <p>
                Solid wood windows on a south- or west-facing McKinney elevation will need exterior repainting
                every three to five years to keep up with Texas UV and summer heat exposure. That commitment is
                fine for some homeowners and not realistic for others. Wood clad eliminates the cycle entirely; the
                factory finish on the aluminum cladding typically carries a 20-year warranty against fading and
                chalking, with no field maintenance required during that window. For McKinney homeowners who want
                the look of wood without the painting routine, wood clad is the right call.
              </p>

              <h3>Aluminum vs. Vinyl Cladding</h3>
              <p>
                Aluminum cladding is the higher-performance choice and the one we recommend for most McKinney
                installations. The aluminum is extruded into a precise profile, factory-finished in the homeowner&apos;s
                chosen color, and bonded to the wood with mechanical and adhesive details that prevent water
                intrusion. Aluminum holds the factory color longer than vinyl in Texas sun, accepts a wider range
                of custom colors, and produces sharper architectural lines. Vinyl cladding is less expensive but
                has a more limited color range and tends to expand and contract more in seasonal temperature
                swings. Marvin Signature Ultimate and Pella Reserve Traditional both use aluminum exclusively.
              </p>

              <h3>Key Benefits in McKinney</h3>
              <ul>
                <li>Genuine wood interior for authentic appearance</li>
                <li>Factory-applied aluminum or vinyl exterior cladding</li>
                <li>No exterior repainting cycle required</li>
                <li>Strong U-factor and air infiltration performance</li>
                <li>Multiple wood species available</li>
                <li>Extensive custom color program on cladding</li>
                <li>30-40 year service life with proper installation</li>
                <li>Premium look and feel inside and out</li>
              </ul>

              <h3>Where Wood Clad Belongs</h3>
              <p>
                We see wood clad most often in three contexts: custom builds where the architect specified wood
                interiors but the homeowner doesn&apos;t want long-term exterior maintenance (covers most high-end work
                in Tucker Hill, Adriatica, and the country club area); major remodels where the existing wood
                windows are at end of life and the homeowner wants to replicate the original look without the
                original maintenance burden; and new-build phases where the framing is in place to accept full-
                frame wood clad units sized to the architectural intent.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on wood clad windows in McKinney.</p>
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
          <h2>Ready to Choose Wood Clad Windows?</h2>
          <p>Contact us today for a free estimate on wood clad window replacement in McKinney.</p>
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
