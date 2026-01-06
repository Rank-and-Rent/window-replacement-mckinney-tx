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
              <h2>Why Choose Fibrex Windows?</h2>
              <p>
                Fibrex is Andersen&apos;s patented composite material that combines the best of wood and vinyl. Made from reclaimed wood fiber and thermoplastic polymer, Fibrex offers the authentic beauty of wood with the low-maintenance benefits of vinyl, making it perfect for McKinney homeowners who want premium quality without the upkeep.
              </p>
              <p>
                This innovative material is twice as strong as vinyl and more dimensionally stable than wood, ensuring your windows maintain their performance and appearance for decades. Fibrex windows resist warping, rotting, and insect damage while providing superior energy efficiency for McKinney&apos;s climate.
              </p>

              <h3>Key Benefits</h3>
              <ul>
                <li>Wood-like beauty with composite strength</li>
                <li>Premium performance and durability</li>
                <li>Low maintenance - never needs painting</li>
                <li>Superior energy efficiency</li>
                <li>Resists warping, rotting, and insects</li>
                <li>Twice as strong as vinyl</li>
                <li>Made from reclaimed wood fiber</li>
              </ul>

              <h3>Perfect for Discerning McKinney Homeowners</h3>
              <p>
                Fibrex windows are ideal for McKinney homeowners who appreciate premium quality and authentic aesthetics. Whether updating a historic downtown home or installing in a new luxury development, Fibrex windows provide the sophisticated appearance of wood with modern performance benefits that protect your investment.
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
