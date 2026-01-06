import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Wood Windows Replacement McKinney TX | Natural Beauty & Superior Insulation',
  description: 'Premium wood replacement windows in McKinney, TX. Traditional wood windows with natural beauty and superior insulation. Timeless character and craftsmanship. Call 817-592-8870.',
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
              <p>Traditional wood windows with natural beauty and superior insulation. Timeless character and craftsmanship for discerning McKinney homeowners.</p>
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
              <h2>Why Choose Wood Windows?</h2>
              <p>
                Wood windows offer unmatched natural beauty and superior insulation properties, making them the premium choice for McKinney homeowners who value traditional craftsmanship and authentic materials. With their timeless character and exceptional thermal performance, wood windows provide the perfect combination of aesthetics and efficiency.
              </p>
              <p>
                Natural wood provides superior insulation compared to other materials, helping maintain comfortable temperatures in McKinney homes year-round. The material&apos;s natural insulating properties reduce energy costs while providing the authentic warmth and character that only real wood can offer.
              </p>

              <h3>Key Benefits</h3>
              <ul>
                <li>Natural beauty and warmth</li>
                <li>Superior insulation properties</li>
                <li>Timeless character and craftsmanship</li>
                <li>Customizable finishes and stains</li>
                <li>Excellent energy efficiency</li>
                <li>Perfect for historic and custom homes</li>
                <li>Long-lasting with proper maintenance</li>
              </ul>

              <h3>Perfect for Discerning McKinney Homeowners</h3>
              <p>
                Wood windows are ideal for McKinney homeowners who appreciate traditional craftsmanship and natural materials. Whether restoring a historic downtown home or building a custom luxury residence, wood windows provide the authentic beauty and superior performance that discerning homeowners expect. With proper care and maintenance, wood windows can last for generations, making them a true investment in your home&apos;s character and value.
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
