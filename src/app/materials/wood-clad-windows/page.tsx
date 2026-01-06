import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Wood Clad Windows Replacement McKinney TX | Authentic Wood with Protection',
  description: 'Premium wood clad replacement windows in McKinney, TX. Authentic wood interiors with weather-resistant exterior protection. Traditional beauty meets modern durability. Call 817-592-8870.',
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
              <p>Authentic wood interiors with weather-resistant exterior protection. Traditional beauty meets modern durability and low maintenance.</p>
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
              <h2>Why Choose Wood Clad Windows?</h2>
              <p>
                Wood clad windows offer the perfect solution for McKinney homeowners who want the authentic beauty and warmth of wood on the interior with the durability and low maintenance of modern materials on the exterior. This innovative design combines traditional craftsmanship with contemporary performance, making it ideal for both historic and new construction in McKinney.
              </p>
              <p>
                The interior wood surface provides the natural warmth and character that only real wood can offer, while the exterior cladding protects against McKinney&apos;s weather, humidity, and UV exposure. This means you get the aesthetic benefits of wood without the exterior maintenance requirements.
              </p>

              <h3>Key Benefits</h3>
              <ul>
                <li>Authentic wood interior beauty</li>
                <li>Weather-resistant exterior protection</li>
                <li>Traditional appeal with modern performance</li>
                <li>Low exterior maintenance</li>
                <li>Superior insulation properties</li>
                <li>Customizable interior finishes</li>
                <li>Perfect for historic and traditional homes</li>
              </ul>

              <h3>Perfect for Traditional McKinney Homes</h3>
              <p>
                Wood clad windows are ideal for McKinney&apos;s historic downtown homes and traditional neighborhoods where authentic wood aesthetics are valued. The interior wood surface complements period architecture while the protective exterior cladding ensures your windows withstand North Texas weather for decades without constant maintenance.
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
