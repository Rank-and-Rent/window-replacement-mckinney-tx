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
              <h2>Why Choose Fiberglass Windows?</h2>
              <p>
                Fiberglass windows offer the ultimate combination of strength, durability, and energy efficiency, making them an excellent choice for McKinney homeowners seeking premium performance. With their exceptional structural integrity and superior insulation properties, fiberglass windows provide unmatched protection and comfort for North Texas homes.
              </p>
              <p>
                The material&apos;s low thermal expansion means fiberglass windows maintain their seal and performance even in McKinney&apos;s extreme temperature variations. This stability ensures consistent energy efficiency year-round, reducing heating and cooling costs while keeping your home comfortable.
              </p>

              <h3>Key Benefits</h3>
              <ul>
                <li>Ultimate strength and durability</li>
                <li>Superior insulation properties</li>
                <li>Wood-like aesthetics</li>
                <li>Low thermal expansion</li>
                <li>Resists warping and cracking</li>
                <li>Minimal maintenance required</li>
                <li>Long-lasting performance</li>
              </ul>

              <h3>Perfect for High-Performance McKinney Homes</h3>
              <p>
                Fiberglass windows are ideal for McKinney homeowners who prioritize energy efficiency and long-term value. The material&apos;s exceptional insulating properties make it perfect for homes seeking maximum energy savings, while its strength and durability ensure your investment lasts for decades in McKinney&apos;s climate.
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
