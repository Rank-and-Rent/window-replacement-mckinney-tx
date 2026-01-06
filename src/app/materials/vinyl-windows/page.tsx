import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Vinyl Windows Replacement McKinney TX | Low Maintenance, Energy Efficient',
  description: 'Premium vinyl replacement windows in McKinney, TX. Low-maintenance, energy-efficient, and durable. Andersen, Pella & JELD-WEN vinyl options. Everything priced including installation. Call 817-592-8870.',
  keywords: 'vinyl windows McKinney TX, vinyl replacement windows, low maintenance windows, energy efficient vinyl windows, Andersen vinyl windows, Pella vinyl windows, JELD-WEN vinyl windows',
}

export default function VinylWindowsPage() {
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
    s.slug !== 'vinyl-windows'
  )

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/materials">Materials</Link>
          <span>/</span>
          <span>Vinyl Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Window Material</span>
              <h1>Vinyl Windows in <em>McKinney, TX</em></h1>
              <p>Low-maintenance vinyl windows with superior energy efficiency and durability. Perfect for McKinney homeowners seeking hassle-free performance.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/window-types/vinyl-mckinney-tx.jpg"
                alt="Vinyl windows in McKinney, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Why Choose Vinyl Windows?</h2>
              <p>
                McKinney&apos;s rapid growth and family-friendly atmosphere make vinyl windows an ideal choice for homeowners seeking quality, low-maintenance solutions. As one of North Texas&apos; fastest-growing communities, McKinney attracts families and professionals who appreciate vinyl windows&apos; combination of modern efficiency and lasting durability.
              </p>
              <p>
                Whether in established neighborhoods near downtown or new developments around Lake Lavon, vinyl windows provide the energy efficiency, minimal upkeep, and beautiful aesthetics that McKinney homeowners value. With the area&apos;s mix of traditional and contemporary homes, vinyl windows offer versatile styling that complements McKinney&apos;s architectural diversity.
              </p>

              <h3>Key Benefits</h3>
              <ul>
                <li>Low maintenance - never needs painting or staining</li>
                <li>Superior energy efficiency with multi-chambered frames</li>
                <li>Resists McKinney humidity and moisture</li>
                <li>20-25 year manufacturer warranties</li>
                <li>Available in all window styles and sizes</li>
                <li>ENERGY STAR certified models available</li>
              </ul>

              <h3>Perfect for McKinney Homes</h3>
              <p>
                Vinyl windows excel in McKinney&apos;s North Texas climate, handling hot summers and cool winters with exceptional efficiency. The multi-chambered construction creates superior thermal barriers that reduce heating and cooling costs by 25-35%. Low-E coatings and argon gas fills optimize performance for McKinney&apos;s climate, keeping homes comfortable year-round.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on vinyl windows in McKinney.</p>
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
          <h2>Ready to Choose Vinyl Windows?</h2>
          <p>Contact us today for a free estimate on vinyl window replacement in McKinney.</p>
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
