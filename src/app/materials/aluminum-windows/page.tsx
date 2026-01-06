import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Aluminum Windows Replacement McKinney TX | Durable & Modern',
  description: 'Premium aluminum replacement windows in McKinney, TX. Durable aluminum windows with modern thermal efficiency and sleek contemporary styling. Andersen, Pella & JELD-WEN options. Call 817-592-8870.',
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
              <p>Durable aluminum windows with modern thermal efficiency and sleek contemporary styling. Exceptional strength for any McKinney home.</p>
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
              <h2>Why Choose Aluminum Windows?</h2>
              <p>
                Aluminum windows offer exceptional durability and strength, making them an excellent choice for McKinney homeowners seeking modern, low-maintenance solutions. With their sleek contemporary styling and advanced thermal efficiency, aluminum windows provide the perfect combination of form and function for North Texas homes.
              </p>
              <p>
                Modern aluminum windows feature thermal breaks that dramatically improve energy efficiency compared to older aluminum designs. This makes them ideal for McKinney&apos;s climate, where hot summers and cool winters demand superior insulation performance.
              </p>

              <h3>Key Benefits</h3>
              <ul>
                <li>Exceptional durability and strength</li>
                <li>Sleek, modern contemporary design</li>
                <li>Impact resistant for Texas weather</li>
                <li>Low maintenance - never needs painting</li>
                <li>Thermal break technology for energy efficiency</li>
                <li>Perfect for large openings and commercial applications</li>
              </ul>

              <h3>Perfect for Modern McKinney Homes</h3>
              <p>
                Aluminum windows excel in contemporary McKinney homes, offering sleek profiles and expansive glass areas that maximize natural light. The material&apos;s strength allows for larger window openings without compromising structural integrity, perfect for modern architectural designs popular in new McKinney developments.
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
