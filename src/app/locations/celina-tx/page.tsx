import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Celina TX | Window Replacements of McKinney',
  description: 'Celina window replacement for Mustang Lakes, Bluewood, and Light Farms north-edge new builds. Coserv utility coordination, hail-zone glass packages, Marvin and Andersen options.',
  keywords: 'window replacement Celina TX, Celina window installation, door replacement Celina',
}

export default function CelinaPage() {
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
          <span>Celina, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Celina, TX</em></h1>
              <p>Celina has gone from a quiet farming community to one of the fastest-growing suburbs in the country in less than a decade, and we&apos;ve been driving north from McKinney to keep pace with the demand. Whether you&apos;re upgrading a custom estate in Light Farms or finishing out a new build in Mustang Lakes, our factory-certified crews bring the same craftsmanship to every Celina address.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-celina-tx.jpg"
                alt="Window replacement services in Celina, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Premium Window and Door Replacement in Celina</h2>
              <p>
                Celina&apos;s growth story is unlike anywhere else in North Texas. Master-planned communities like
                Light Farms, Mustang Lakes, and Cambridge Crossing have brought thousands of new homes to the area,
                most of them larger and more architecturally ambitious than the average North Texas tract home. The
                housing stock here trends toward two- and three-story custom builds with significant glazing on
                south- and west-facing elevations, oversized entry doors, and large patio openings that need to
                perform thermally and aesthetically.
              </p>
              <p>
                Those design choices put real demands on the windows and doors. Big glass means big solar gain in
                Celina&apos;s long, hot summers, and tall openings need engineered hardware that won&apos;t sag or rack
                over time. We specify products from Andersen, Pella, Marvin, and JELD-WEN that have been engineered
                for exactly this kind of loading, and we install them to factory spec so they perform as advertised
                for decades.
              </p>

              <h3>Celina Communities We Serve</h3>
              <p>
                Our project history spans Celina&apos;s newest master-planned communities and its older homes near
                downtown. We work the Preston Road corridor, the Dallas North Tollway extension area, and the rural
                acreage tracts on the city&apos;s western edge.
              </p>
              <ul>
                <li>Light Farms</li>
                <li>Mustang Lakes</li>
                <li>Cambridge Crossing</li>
                <li>Carter Ranch and Carter Estates</li>
                <li>Sutton Fields</li>
                <li>Creeks of Legacy</li>
                <li>Wells Brook and Whitley Place</li>
                <li>Old Celina and downtown core homes</li>
                <li>Acreage and estate properties off FM 455 and FM 428</li>
              </ul>

              <h3>Energy Performance for Big Celina Homes</h3>
              <p>
                A 4,500-square-foot home with floor-to-ceiling glass on the west elevation can easily run an
                eight- or ten-degree temperature swing across rooms in mid-July if the windows aren&apos;t doing their
                job. We address this with high-performance Low-E coatings, argon or krypton fills depending on the
                line, and where it makes sense, dual Low-E packages tuned for Texas-style solar gain. The result is
                more even temperatures across the home, lower cooling costs in peak season, and dramatically less
                furniture fading from UV exposure.
              </p>

              <h3>Custom and Specialty Windows</h3>
              <p>
                Many Celina homes feature dramatic architectural windows: arched transoms over entry doors, picture
                windows with flanking casements in great rooms, half-rounds and quarter-rounds in two-story foyers,
                and custom geometric shapes that don&apos;t come off the shelf. These are factory-built to exact
                opening dimensions, often with custom mulled assemblies, and they require careful field
                measurement. We bring decades of experience with this kind of specialty work, and we coordinate
                directly with manufacturer engineering on complex orders.
              </p>

              <h3>Patio Doors and Outdoor Living</h3>
              <p>
                Celina homeowners spend a lot of time outdoors when the weather cooperates, and big sliding or
                multi-slide patio doors are a hallmark of the area&apos;s newer construction. We replace original
                three- and four-panel sliders with high-performance units, install French doors and folding glass
                walls where the layout allows, and weatherproof the head and threshold details so wind-driven rain
                during severe storm season doesn&apos;t leak into the home. Door hardware is upgraded to multi-point
                locking systems for security and a tight perimeter seal.
              </p>

              <h3>Working with Celina HOAs and the City</h3>
              <p>
                Light Farms, Mustang Lakes, and Celina&apos;s other master-planned communities all maintain
                architectural review committees with detailed standards for exterior frame color, grid patterns,
                and door styles. The City of Celina also pulls building permits on most replacements when the
                opening size or header changes. We handle the ACC application, the city permit, and the inspection
                follow-through, so the only thing you have to schedule is install day.
              </p>

              <h3>Why Celina Homeowners Choose Us</h3>
              <ul>
                <li>Quick access from our McKinney shop, even on tight timelines</li>
                <li>Factory-certified for Andersen, Pella, JELD-WEN, and Marvin</li>
                <li>Experience with Light Farms, Mustang Lakes, and Cambridge Crossing</li>
                <li>Custom and specialty shape capabilities for dramatic windows</li>
                <li>Itemized written quotes and no high-pressure sales</li>
                <li>Lifetime workmanship warranty backed by local crews</li>
              </ul>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Celina.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Celina From</h3>
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
            <h2>Window &amp; Door Services in Celina</h2>
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
          <h2>Ready to Transform Your Celina Home?</h2>
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
