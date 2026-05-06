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
              <h2>Vinyl Windows in McKinney: Performance and Value</h2>
              <p>
                Vinyl is the most-installed replacement window material in McKinney by a significant margin, and
                that market position is earned. Modern vinyl windows from premium manufacturers deliver strong
                thermal performance, ENERGY STAR-qualified glass packages, low long-term maintenance, and a price
                point well below wood, fiberglass, or aluminum-clad wood. For McKinney homeowners replacing
                builder-grade windows in Stonebridge Ranch, Eldorado, Trinity Falls, Provine Farms, and the rest
                of the city&apos;s established subdivisions, vinyl is usually the most rational choice on a dollars-
                per-window basis.
              </p>
              <p>
                The vinyl product category has matured considerably since the early generations of the 1980s and
                90s. Today&apos;s premium lines from Andersen, Pella, JELD-WEN, and Marvin use multi-chambered
                fusion-welded frames, UV-stabilized formulations that resist yellowing and chalking, factory-baked
                color finishes that hold up in Texas sun, and high-performance Low-E glass packages that meet
                ENERGY STAR requirements for the southern climate zone. The performance gap between premium vinyl
                and premium fiberglass is much narrower than it used to be, which is why vinyl continues to take
                share at every price point.
              </p>

              <h3>Why Vinyl Performs Well in the McKinney Climate</h3>
              <p>
                Premium vinyl windows are engineered with multi-chambered frame profiles, which means the cross-
                section of the frame contains internal air pockets that act as thermal barriers. Combined with
                Low-E2 or Low-E3 coatings tuned for Texas-style solar gain, argon fill between the panes, and
                warm-edge spacers, premium vinyl produces U-factor numbers in the 0.27-0.30 range that satisfy
                ENERGY STAR requirements for the southern climate zone. For McKinney homeowners replacing original
                single-pane glass or first-generation dual-pane vinyl, the cooling-load reduction during peak
                summer is usually obvious within the first month.
              </p>

              <h3>Key Benefits in McKinney</h3>
              <ul>
                <li>Low long-term maintenance with no exterior repainting</li>
                <li>Multi-chambered frames for strong thermal insulation</li>
                <li>Resistant to North Texas humidity and moisture</li>
                <li>20-25 year manufacturer warranties standard</li>
                <li>Available in every standard window style and size</li>
                <li>ENERGY STAR-qualified configurations available</li>
                <li>Factory color finishes including bronze, beige, black, and wood-grain</li>
                <li>Strong dollar-per-window value across most McKinney neighborhoods</li>
              </ul>

              <h3>Where Vinyl Fits Best in McKinney Homes</h3>
              <p>
                Vinyl is at its best on standard rectangular openings in modest- to mid-size McKinney homes,
                particularly in master-planned communities where the existing windows are already vinyl. It&apos;s
                also a strong pick for full-home replacements where the homeowner needs to keep total cost
                manageable across 15 to 25 windows, and for rental properties where ROI matters. Vinyl is generally
                not the right answer for very large openings (where fiberglass or aluminum perform structurally
                better), historic homes in Old East McKinney where the wider sightlines clash with period
                character, or high-end custom builds where wood or wood-clad framing is part of the design language.
              </p>

              <h3>Premium Vinyl Lines We Install</h3>
              <p>
                We work with Pella 250 and 350 Series, JELD-WEN Premium Vinyl, Andersen 100 Series Fibrex
                composite (technically a step beyond pure vinyl), and select Marvin lines depending on the
                project. All offer ENERGY STAR-qualified configurations, fusion-welded frame construction, and
                long manufacturer warranties on frame, glass, and hardware components.
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
