import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Frisco TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in Frisco, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement Frisco TX, Frisco window installation, door replacement Frisco',
}

export default function FriscoPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows')
  const doorServices = servicesData.filter(s => s.category === 'Doors')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/locations">Locations</Link>
          <span>/</span>
          <span>Frisco, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Frisco, TX</em></h1>
              <p>Frisco has been one of the fastest-growing cities in the country for the better part of two decades, and that growth has produced an unusually wide range of housing: 1990s tract homes near the original town center, big custom builds in Newman Village and Phillips Creek Ranch, and the latest urban infill near The Star and Toyota Music Factory. We bring our McKinney crews west across the Sam Rayburn Tollway to handle replacements throughout Frisco.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-frisco-tx-1.jpg"
                alt="Window replacement services in Frisco, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Window and Door Replacement Across Frisco</h2>
              <p>
                Frisco&apos;s housing inventory rewards careful spec&apos;ing. The original 1990s and early-2000s
                neighborhoods like Stonebriar Centre&apos;s surroundings and Plantation Resort were built when
                builder-grade dual-pane vinyl was just becoming standard, and many of those windows are showing
                their age now: failed seals, fogged glass, balance assemblies that no longer hold the sash. The
                newer custom and luxury communities (Newman Village, Phillips Creek Ranch, Starwood) have larger
                openings, taller ceilings, and architectural detailing that requires premium product lines and
                custom factory orders.
              </p>
              <p>
                We&apos;ve installed in essentially every Frisco neighborhood and we know which builders used which
                window lines, which matters when you&apos;re trying to match what&apos;s already on the home or what your
                HOA expects to see on the elevation. Replacement isn&apos;t one-size-fits-all here, and we don&apos;t
                pretend it is.
              </p>

              <h3>Frisco Communities We Serve</h3>
              <p>
                Our project history spans the full range of Frisco&apos;s residential map, from the original
                neighborhoods near downtown to the newest urban infill projects.
              </p>
              <ul>
                <li>Starwood and Newman Village</li>
                <li>Phillips Creek Ranch and Lawler Park</li>
                <li>The Trails and Heritage Lakes</li>
                <li>Richwoods and Plantation Resort</li>
                <li>Stonelake Estates</li>
                <li>Frisco Lakes (active-adult community)</li>
                <li>Hollyhock and Edgestone at Legacy</li>
                <li>Older neighborhoods near downtown Frisco and Frisco Square</li>
                <li>The Star and PGA HQ-area developments</li>
              </ul>

              <h3>Custom Architecture and Premium Product Lines</h3>
              <p>
                Newman Village and Phillips Creek Ranch homes routinely call for Marvin Signature Ultimate, Pella
                Reserve Traditional, or Andersen E-Series specifications, often with custom shapes, custom grille
                patterns, and tall openings that need engineering support. We coordinate directly with manufacturer
                custom departments on these orders, which produces a result that fits the architectural intent of
                the original design rather than something obviously aftermarket.
              </p>

              <h3>Energy Performance for Big Frisco Homes</h3>
              <p>
                A 5,000-square-foot Frisco custom home with significant west-facing glass can easily cool unevenly
                in mid-summer if the original glass package wasn&apos;t tuned correctly. We address this with
                high-performance Low-E coatings, argon or krypton fills depending on the line, and dual Low-E
                packages on the most exposed elevations. Comfort improves measurably and the AC runs less, both of
                which matter at the scale of a larger home.
              </p>

              <h3>Patio Doors and Outdoor Living</h3>
              <p>
                Frisco homes are often built around outdoor living. We replace original sliding patio doors with
                high-performance multi-slide units, install French doors and folding glass walls where the
                framing allows, and detail thresholds and head flashings to handle wind-driven rain during severe
                storm season. Hardware upgrades to multi-point locking are standard on our installations.
              </p>

              <h3>Active-Adult Considerations at Frisco Lakes</h3>
              <p>
                Frisco Lakes is one of the largest active-adult communities in North Texas, and homeowners here
                often prioritize different things: easier window operation, lower maintenance, better sound
                dampening from nearby traffic, and predictable warranty support. We tailor our recommendations to
                match these preferences, including casement windows with smooth-cranking handles, multi-point
                locking entries, and laminated sound-dampening glass when needed.
              </p>

              <h3>Permits and HOA Coordination in Frisco</h3>
              <p>
                The City of Frisco requires permits for most window and door replacements when the opening
                changes, and most master-planned Frisco communities maintain ACC review processes. We pull
                permits, file ACC paperwork with the documentation the committee expects, and schedule the final
                inspection so the project closes cleanly.
              </p>

              <h3>Why Frisco Homeowners Choose Us</h3>
              <ul>
                <li>Convenient service from our McKinney shop across the tollway</li>
                <li>Factory-certified for Andersen, Pella, JELD-WEN, and Marvin</li>
                <li>Experience with Frisco custom and tract housing alike</li>
                <li>Custom and specialty shape capabilities for architectural homes</li>
                <li>Detailed written estimates and no high-pressure tactics</li>
                <li>Lifetime workmanship warranty backed by local crews</li>
              </ul>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Frisco.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Frisco From</h3>
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
            <span className={styles.sectionLabel}>Our Services</span>
            <h2>Window &amp; Door Services in Frisco</h2>
          </div>
          <div className={styles.servicesGrid}>
            {windowServices.map((service) => (
              <div key={service.slug} className={styles.serviceCard}>
                <h3><Link href={service.route}>{service.name}</Link></h3>
                <p>{service.shortDescription}</p>
              </div>
            ))}
            {doorServices.map((service) => (
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
          <h2>Ready to Transform Your Frisco Home?</h2>
          <p>Contact us today for a free estimate on window and door replacement.</p>
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
