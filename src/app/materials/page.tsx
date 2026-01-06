import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from './materials.module.css'

export const metadata: Metadata = {
  title: 'Window Materials McKinney TX | Vinyl, Aluminum, Fiberglass & More',
  description: 'Premium window materials in McKinney, TX. Choose from vinyl, aluminum, fiberglass, wood, and more. Expert guidance on the best material for your home. Free estimates.',
  keywords: 'window materials McKinney TX, vinyl windows, aluminum windows, fiberglass windows, wood windows',
}

export default function MaterialsPage() {
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
    s.category === 'Materials' && allowedMaterialSlugs.includes(s.slug)
  )
  
  // Map material services to available images
  const materialImageMap: Record<string, string> = {
    'vinyl-windows': '/window-types/vinyl-mckinney-tx.jpg',
    'aluminum-windows': '/window-types/aluminum-mckinney-tx.jpg',
    'fibrex-windows': '/window-types/fibrex-mckinney-tx.jpg',
    'fiberglass-windows': '/window-types/fiberglass-mckinney-tx.jpg',
    'wood-clad-windows': '/window-types/wood-clad-mckinney-tx.jpg',
    'wood-windows': '/window-types/wood-mckinney-tx.jpg',
  }

  return (
    <>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Materials</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Window Materials</span>
          <h1>Window Materials in <em>McKinney, TX</em></h1>
          <p>Choose from premium window materials designed for McKinney&apos;s climate. Each material offers unique benefits in terms of durability, energy efficiency, and aesthetic appeal.</p>
        </div>
      </section>

      {/* Materials Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Materials</span>
            <h2>Choose Your Perfect Window Material</h2>
          </div>
          <div className={styles.servicesGrid}>
            {materialServices.map((service) => (
              <article key={service.slug} className={styles.serviceCard}>
                <div className={styles.serviceImage}>
                  <img
                    src={materialImageMap[service.slug] || service.image || '/window-types/vinyl-mckinney-tx.jpg'}
                    alt={service.name}
                    className={styles.serviceImage}
                  />
                </div>
                <div className={styles.serviceContent}>
                  <h3><Link href={service.route}>{service.name}</Link></h3>
                  <p>{service.shortDescription}</p>
                  <Link href={service.route} className={styles.serviceLink}>
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className={styles.whyChoose}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Why Choose Us</span>
            <h2>McKinney&apos;s Trusted Material Experts</h2>
          </div>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <h3>Expert Guidance</h3>
              <p>Our team helps you choose the ideal window material based on your budget, style preferences, and McKinney climate considerations.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Premium Quality</h3>
              <p>We work exclusively with America&apos;s most trusted window manufacturers: Andersen, Pella, JELD-WEN, and Marvin.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Energy Efficient</h3>
              <p>All our materials are designed for optimal energy performance in McKinney&apos;s North Texas climate.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Free Estimates</h3>
              <p>Get a detailed quote for your window material selection at no cost or obligation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Choose Your Window Material?</h2>
          <p>Our experts help you find the perfect window material for your McKinney home.</p>
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
