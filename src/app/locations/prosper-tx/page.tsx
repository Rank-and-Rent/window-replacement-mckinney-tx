import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Prosper TX | Window Replacements of McKinney',
  description: 'Window replacement for Prosper Windsong Ranch, Star Trail, and Light Farms custom-style homes. Tall openings, oversized patios, divided lite. McKinney-based crews west.',
  keywords: 'window replacement Prosper TX, Prosper window installation, door replacement Prosper',
}

export default function ProsperPage() {
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
          <span>Prosper, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Prosper, TX</em></h1>
              <p>Prosper has become one of the most architecturally ambitious communities in Collin County, with master-planned neighborhoods like Windsong Ranch, Star Trail, and Light Farms producing custom-style homes on lots large enough to support significant glass. We bring our McKinney-based crews west to Prosper regularly, with the factory-certified credentials and engineering coordination these homes deserve.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-prosper-tx-1.jpg"
                alt="Window replacement services in Prosper, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Window and Door Replacement for Prosper Homeowners</h2>
              <p>
                Prosper&apos;s growth has been driven by destination master-planned communities that compete with the
                best in the metroplex. Windsong Ranch, Star Trail, and Light Farms have all earned national
                recognition for amenities and community design, and the homes inside them tend to be larger and
                more architecturally distinct than the average tract build. Two- and three-story custom-style
                homes with significant glass on the rear elevation, large entry vestibules with sidelights and
                transoms, and oversized patio openings are the norm, not the exception.
              </p>
              <p>
                That kind of architecture puts real demands on window and door specifications. Tall openings need
                hardware that won&apos;t sag. Big glass needs Low-E packages that control solar gain without making
                the rooms feel dim. Patio doors need multi-point locks and reinforced sills. We&apos;ve worked the
                full range of premium product lines in Prosper, and we know which line solves which problem.
              </p>

              <h3>Prosper Communities We Serve</h3>
              <p>
                Our project history covers all of Prosper&apos;s major master-planned communities and the older homes
                near downtown along Coleman Street. We&apos;re a short drive from any Prosper address, and we
                typically schedule consultations within the same week.
              </p>
              <ul>
                <li>Windsong Ranch</li>
                <li>Light Farms</li>
                <li>Star Trail</li>
                <li>Whitley Place</li>
                <li>Lakewood at Brookhollow</li>
                <li>The Lakes of Prosper</li>
                <li>Gentle Creek and Gentle Creek Estates</li>
                <li>Artesia and Artesia North</li>
                <li>Whispering Farms and the FM 1385 corridor</li>
              </ul>

              <h3>Premium Brand Selection for Prosper Homes</h3>
              <p>
                Prosper&apos;s housing inventory tends to call for premium product lines. Marvin Signature Ultimate
                and Pella Reserve are common specifications for casements, double-hungs, and large picture windows
                in custom-style homes. Andersen E-Series and 400 Series Woodwright are popular alternatives,
                especially when homeowners want extensive grille and color customization. For doors, we install
                JELD-WEN Custom Wood entries, Andersen and Marvin patio doors, and folding glass walls in homes
                that support them structurally.
              </p>

              <h3>Solar Gain and West-Facing Performance</h3>
              <p>
                Many Prosper homes are oriented to maximize backyard views, which often means significant glass
                on the west or southwest elevation. Without the right glass package, these elevations run hot in
                July and August and produce uneven temperatures across the home. We routinely spec dual Low-E
                coatings, argon or krypton fills, and where it makes sense, triple-pane assemblies on the most
                exposed elevations. The result is a home that holds setpoint without the AC running constantly
                in peak season.
              </p>

              <h3>Patio Doors and Outdoor Living</h3>
              <p>
                Outdoor living is a defining feature of Prosper homes, and patio door selection drives both the
                aesthetic and the thermal performance of the rear of the house. We replace original three- and
                four-panel sliders with high-performance units, install Marvin or Andersen multi-slide systems
                where the framing supports them, and add French door pairs in family rooms and primary suites.
                Hardware upgrades to multi-point locking are standard on our installations.
              </p>

              <h3>HOA Coordination and Town Permits</h3>
              <p>
                Windsong Ranch, Light Farms, and Star Trail all maintain robust architectural review processes,
                and the Town of Prosper requires permits for most window and door replacements when openings
                change. We handle both processes, with the documentation each ACC expects (brand, line, frame
                color, grid pattern, sometimes manufacturer literature). This keeps your project compliant and
                prevents surprises during a future home sale.
              </p>

              <h3>Why Prosper Homeowners Choose Us</h3>
              <ul>
                <li>Quick access from our McKinney shop, even on tight timelines</li>
                <li>Factory-certified for Andersen, Pella, JELD-WEN, and Marvin</li>
                <li>Experience with Windsong Ranch, Light Farms, and Star Trail</li>
                <li>Custom and specialty shape capabilities for architectural homes</li>
                <li>Itemized written quotes and no high-pressure tactics</li>
                <li>Lifetime workmanship warranty backed by local crews</li>
              </ul>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Prosper.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Prosper From</h3>
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
            <h2>Window &amp; Door Services in Prosper</h2>
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
          <h2>Ready to Transform Your Prosper Home?</h2>
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
