import { Metadata } from 'next'
import Link from 'next/link'
import MaterialsSection from '@/components/materials-section'
import { servicesData, siteConfig } from '@/data'
import styles from './windows.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Services McKinney TX | All Styles & Materials',
  description: 'Complete window replacement services in McKinney, TX. All window styles and materials from Andersen, Pella, JELD-WEN & Marvin. Family-friendly solutions near Lake Lavon. Free estimates.',
  keywords: 'window replacement McKinney TX, window styles, window materials, vinyl windows, aluminum windows',
}

export default function WindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows')

  return (
    <>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Windows</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Window Replacement Services</span>
          <h1>Window Replacement in <em>McKinney, TX</em></h1>
          <p>Family-focused window materials for McKinney&apos;s growing suburbs near Lake Lavon. Safe, durable, and energy-efficient options designed for active family lifestyles.</p>
        </div>
      </section>

      {/* Window Styles Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Window Styles</span>
            <h2>Choose Your Perfect Window Style</h2>
          </div>
          <div className={styles.servicesGrid}>
            {windowServices.map((service) => (
              <article key={service.slug} className={styles.serviceCard}>
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

      <MaterialsSection />

      {/* Why Choose Section */}
      <section className={styles.whyChoose}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Why Choose Us</span>
            <h2>McKinney&apos;s Trusted Window Experts</h2>
          </div>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <h3>Family-Safe Installation</h3>
              <p>Child-safe operation and impact-resistant options perfect for McKinney&apos;s active families.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Lake-Resistant Materials</h3>
              <p>Window materials engineered for Lake Lavon humidity and North Texas weather.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Energy Efficient</h3>
              <p>Smart energy performance that reduces costs for growing family budgets.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Free Estimates</h3>
              <p>Get a detailed quote for your window replacement project at no cost or obligation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Replace Your Windows?</h2>
          <p>McKinney family window specialists help you find safe, durable materials perfect for active households, lake proximity, and growing families.</p>
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
