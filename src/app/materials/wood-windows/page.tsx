import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Wood Windows Replacement McKinney TX | Natural Beauty & Superior Insulation',
  description: 'Solid wood windows for Old East McKinney Victorians and McKinney Country Club estates. Pine, mahogany, oak species, period-correct profiles, true divided lite available.',
  keywords: 'wood windows McKinney TX, wood replacement windows, traditional windows, natural wood windows, custom wood windows',
}

export default function WoodWindowsPage() {
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
    s.slug !== 'wood-windows'
  )

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/materials">Materials</Link>
          <span>/</span>
          <span>Wood Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Window Material</span>
              <h1>Wood Windows in <em>McKinney, TX</em></h1>
              <p>Solid wood framing for the Old East McKinney Victorians, Queen Annes, and Craftsman bungalows where period authenticity matters as much as performance. Pine, mahogany, oak species.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/window-types/wood-mckinney-tx.jpg"
                alt="Wood windows in McKinney, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Solid Wood Windows: A Specific High-End Choice</h2>
              <p>
                Solid wood windows occupy a specific high-end niche in the McKinney replacement market. They are
                the right answer for two distinct kinds of homes: the historic Victorian, craftsman, and bungalow
                homes of Old East McKinney where period authenticity matters as much as performance, and the
                high-end custom builds in Tucker Hill, Adriatica Village, and around McKinney Country Club where
                wood is part of the original design language. Wood is a deliberate choice with real maintenance
                trade-offs, and we&apos;ll help you decide whether it&apos;s the right call for your home.
              </p>
              <p>
                What sets wood apart is the look and feel of the actual material. The grain of mahogany, the warm
                tone of stained pine, the way oak takes a finish, the way cherry darkens over decades; these are
                properties of the actual material that vinyl wood-grain laminates and fiberglass paint can only
                approximate. For homes where the architectural integrity of the elevation depends on real wood,
                replacing with anything else is a visible compromise from the curb.
              </p>

              <h3>Wood&apos;s Thermal Performance</h3>
              <p>
                Wood is naturally insulating because of its cellular structure, which contains millions of tiny
                air pockets that resist heat transfer. Combined with Low-E2 or Low-E3 glass and argon fill, modern
                wood windows produce U-factor numbers in the 0.25 to 0.30 range, which puts them in the same
                performance band as premium vinyl, fiberglass, or aluminum-clad wood. Wood interior surfaces also
                feel slightly warmer to the touch during cold snaps than metal-framed windows, which contributes
                to the warm, traditional feel of the room.
              </p>

              <h3>Maintenance Reality You Should Know</h3>
              <p>
                Wood windows require ongoing exterior maintenance, and we&apos;ll be straightforward about it.
                Exterior surfaces need to be repainted or refinished every 3 to 5 years to prevent moisture
                intrusion and UV degradation, particularly on south- and west-facing McKinney elevations where
                Texas sun is most intense. For homeowners who don&apos;t want this maintenance commitment, we typically
                recommend wood-clad lines (Pella Reserve Traditional or Marvin Signature Ultimate) instead of full
                solid wood.
              </p>

              <h3>Key Benefits in McKinney</h3>
              <ul>
                <li>Authentic solid wood character</li>
                <li>Multiple species available (pine, fir, mahogany, oak, cherry)</li>
                <li>Strong natural thermal insulation</li>
                <li>Time-tested traditional joinery</li>
                <li>Refinishable indefinitely</li>
                <li>Period-correct for historic Old East McKinney homes</li>
                <li>Custom divided-lite patterns for architectural authenticity</li>
                <li>50-100 year potential service life with proper maintenance</li>
              </ul>

              <h3>Where Wood Belongs in McKinney</h3>
              <p>
                The clearest application is the historic homes of Old East McKinney, particularly the Victorian
                and craftsman properties along Church Street, Tucker Street, and the surrounding blocks. Wood is
                also a frequent specification in the custom-built estates near McKinney Country Club where the
                original architect chose wood as part of the design intent. New high-end custom homes in Tucker
                Hill and Adriatica Village often include wood windows as a defining material on at least the front
                elevation. For builder-grade replacements in master-planned communities, vinyl, fiberglass, or
                Andersen Fibrex composite usually deliver better value at the price point.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on wood windows in McKinney.</p>
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
          <h2>Ready to Choose Wood Windows?</h2>
          <p>Contact us today for a free estimate on wood window replacement in McKinney.</p>
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
