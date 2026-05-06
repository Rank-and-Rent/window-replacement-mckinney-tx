import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Fibrex Windows Replacement McKinney TX | Andersen Premium Composite',
  description: 'Premium Fibrex replacement windows in McKinney, TX. Andersen\'s innovative composite material combining wood-like beauty with advanced durability. Call 817-592-8870.',
  keywords: 'fibrex windows McKinney TX, Fibrex replacement windows, Andersen Fibrex, composite windows, wood-like windows',
}

export default function FibrexWindowsPage() {
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
    s.slug !== 'fibrex-windows'
  )

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/materials">Materials</Link>
          <span>/</span>
          <span>Fibrex Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Window Material</span>
              <h1>Fibrex Windows in <em>McKinney, TX</em></h1>
              <p>Andersen&apos;s premium composite material combining wood-like beauty with advanced durability. The ultimate in window frame technology.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/window-types/fibrex-mckinney-tx.jpg"
                alt="Fibrex windows in McKinney, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Fibrex: Andersen&apos;s Wood-Polymer Composite</h2>
              <p>
                Fibrex is Andersen Corporation&apos;s proprietary composite material, made from reclaimed wood fibers
                bound with thermoplastic polymer. The material was developed in the early 1990s as an alternative
                to both pure vinyl and traditional solid wood, and Andersen has refined the formula continuously
                since then. The result is a frame material that combines the dimensional stability and natural
                insulating properties of wood with the moisture resistance and consistency of synthetic materials.
                For McKinney homeowners considering an Andersen window package, Fibrex is the core material in
                the 100 Series and a structural component in several higher-tier lines.
              </p>
              <p>
                Two characteristics distinguish Fibrex from other frame materials. First, its coefficient of
                thermal expansion is much lower than vinyl, which means the frames don&apos;t grow noticeably during
                a 105-degree August afternoon and shrink during a January cold front. That stability matters for
                long-term integrity of the seals around the glass. Second, the wood-fiber content gives Fibrex
                slightly better thermal performance than pure vinyl and a more substantial feel than glossy vinyl.
              </p>

              <h3>Why Fibrex Performs Well in McKinney</h3>
              <p>
                Solid wood is dimensionally stable across temperature but reacts to humidity, which can be an
                issue in McKinney during the wetter parts of spring and summer. Vinyl is humidity-stable but
                expands and contracts more across temperature swings. Fibrex bridges both: stable across
                temperature like vinyl, and stable across humidity like a synthetic. The combination produces a
                frame that holds its shape and its seal year-round in the McKinney climate, which translates to
                consistent thermal performance and air-tightness across seasons.
              </p>

              <h3>Key Benefits in McKinney</h3>
              <ul>
                <li>Low coefficient of thermal expansion across seasons</li>
                <li>Strong moisture resistance and dimensional stability</li>
                <li>Stronger frame than pure vinyl</li>
                <li>Wood-fiber content gives natural insulating properties</li>
                <li>Factory finishes hold up well in Texas sun</li>
                <li>Available with Andersen Low-E4 SmartSun glass</li>
                <li>20-year warranty coverage on frame and glass</li>
                <li>Made with reclaimed wood content from manufacturing waste streams</li>
              </ul>

              <h3>Where Fibrex Fits in McKinney Homes</h3>
              <p>
                Fibrex is the right answer for McKinney homeowners who want better long-term performance than
                standard vinyl can deliver, but don&apos;t need the wood interior of a clad wood line. We see it most
                often in mid- to upper-tier replacements throughout Stonebridge Ranch, Trinity Falls, and Tucker
                Hill, where the homeowner is staying long-term and wants a window that will hold its appearance
                and performance through multiple decades. Andersen&apos;s 100 Series uses Fibrex as the core frame
                material; 200 Series and 400 Series Woodwright use Fibrex in various structural applications
                combined with other materials.
              </p>

              <h3>Long-Term Service Life</h3>
              <p>
                Andersen warrants Fibrex frames for 20 years against defects in material and manufacturing, with
                an additional 20-year glass warranty against insulating glass seal failure. Realistic service life
                on the frame is well past those warranty periods, with many of the earliest Fibrex installations
                from the late 1990s and early 2000s still performing as designed in McKinney homes. The material
                is designed to be recyclable at end of life.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on Fibrex windows in McKinney.</p>
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
          <h2>Ready to Choose Fibrex Windows?</h2>
          <p>Contact us today for a free estimate on Fibrex window replacement in McKinney.</p>
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
