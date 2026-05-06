import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement McKinney TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in McKinney, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement McKinney TX, McKinney window installation, door replacement McKinney',
}

export default function McKinneyPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows')
  const doorServices = servicesData.filter(s => s.category === 'Doors')

  return (
    <>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/locations">Locations</Link>
          <span>/</span>
          <span>McKinney, TX</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>McKinney, TX</em></h1>
              <p>McKinney is our hometown, and after more than fifteen years installing windows and doors here, we know its streets, its weather, and its homes as well as anyone. From the wraparound porches of Old East McKinney to the new builds rising along Trinity Falls Parkway, we deliver factory-certified replacements engineered for North Texas summers, severe-weather seasons, and the occasional ice event that homeowners still remember from Winter Storm Uri.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-mckinney-tx-1.png"
                alt="Window replacement services in McKinney, TX"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>McKinney&apos;s Trusted Window and Door Specialists</h2>
              <p>
                McKinney is more than a service area for us; it&apos;s the city we live in, raise our families in,
                and stake our reputation on. Within minutes of leaving the shop we can be at a Victorian on Church
                Street, a transitional new build in Stonebridge Ranch, a custom estate near McKinney Country Club,
                or a tract home off Eldorado Parkway. That kind of proximity translates directly into faster site
                visits, tighter scheduling around weather, and accountable warranty service when you need us back.
              </p>
              <p>
                Every replacement we install is sized, ordered, and fit specifically for the opening it goes into.
                We don&apos;t carry generic stock windows in a warehouse and force them into your home. We measure on
                site, factor in original framing quirks, and place factory orders with Andersen, Pella, Marvin, or
                JELD-WEN to match the exact look and performance you&apos;re after. The result is windows that fit
                cleanly the first time and doors that swing true season after season.
              </p>

              <h3>Neighborhoods We Serve Across McKinney</h3>
              <p>
                Our crews work the entire 75069, 75070, 75071, and 75072 ZIP code area, including but not limited
                to Stonebridge Ranch, Craig Ranch, Trinity Falls, Tucker Hill, Adriatica Village, Avalon, Mallard
                Lakes, Wynn Ridge, Provine Farms, Wilmeth Ridge, Cumberland Crossing, Eldorado, the Town &amp; Country
                area near McKinney Country Club, and the Historic Downtown McKinney district. Each of these
                neighborhoods has its own personality and its own typical replacement profile, and we adjust our
                approach accordingly.
              </p>
              <ul>
                <li>Historic Downtown McKinney &amp; Old East McKinney</li>
                <li>Stonebridge Ranch and Adriatica Village</li>
                <li>Craig Ranch and the TPC Craig Ranch corridor</li>
                <li>Trinity Falls and the U.S. 75 north growth area</li>
                <li>Eldorado, Eldorado Heights, and Provine Farms</li>
                <li>Tucker Hill, Avalon, and Wynn Ridge</li>
                <li>McKinney Country Club / Town &amp; Country</li>
                <li>Mallard Lakes, Wilmeth Ridge, and Cumberland Crossing</li>
                <li>Westridge and the Custer Road corridor</li>
              </ul>

              <h3>How McKinney&apos;s Climate Drives Our Recommendations</h3>
              <p>
                The Collin County climate puts windows under serious stress. Summer afternoons routinely push past
                100&deg;F with intense UV exposure, and west-facing rooms often run six to eight degrees warmer than
                the rest of the home before we replace single-pane or failed dual-pane glass. Spring brings the
                severe storm season that drives hail and straight-line wind through the region, and most McKinney
                homeowners have at least one memory of a freeze event that taxed their existing windows. We spec
                Low-E2 or Low-E3 coatings, argon fills, and impact-rated glass packages where they make sense, and
                we don&apos;t oversell anything that won&apos;t pay back in comfort or efficiency on your block.
              </p>

              <h3>Working With McKinney&apos;s Diverse Housing Stock</h3>
              <p>
                The housing mix here is unusually broad. Old East McKinney still has true Victorians and craftsman
                bungalows from the early 1900s, and those homes deserve wood or wood-clad replacements that respect
                the original sightlines, sash proportions, and brick mould profiles. Master-planned communities like
                Stonebridge Ranch and Trinity Falls lean toward fiberglass, vinyl, or Andersen&apos;s Fibrex composite
                for builder-spec sizes that need to come up to modern energy standards without architectural
                changes. Custom estates near the country club often pair Marvin Signature Ultimate or Pella
                Reserve casements and double-hungs with mahogany or fiberglass entry doors. We&apos;ve worked all of
                these segments and we don&apos;t cross-prescribe between them.
              </p>

              <h3>Permits, HOAs, and Local Building Code</h3>
              <p>
                Window and door replacement in McKinney typically requires a permit through the City of McKinney
                Building Inspections department, especially when the opening size, header, or egress changes. Many
                of the master-planned communities also have active architectural control committees that approve
                exterior changes, frame colors, and divided-lite patterns. We pull permits, file ACC applications,
                and coordinate inspections so the project closes cleanly. If you&apos;re in a deed-restricted area like
                Stonebridge Ranch or Tucker Hill, we&apos;ll handle the paperwork the way the committee expects to see
                it from a contractor that&apos;s done it dozens of times.
              </p>

              <h3>Energy, Utilities, and Long-Term Value in McKinney</h3>
              <p>
                With Oncor delivering electricity to most of McKinney and CoServ Gas covering many of the
                surrounding parcels, energy efficiency is a real economic question, not a marketing line. ENERGY
                STAR-qualified windows in our climate zone routinely pay back in lower cooling load on south- and
                west-facing elevations, and a properly sealed entry door eliminates the drafts homeowners feel
                during cold fronts. We&apos;ll walk you through which packages move the needle in McKinney specifically,
                so you&apos;re not buying triple-pane glass for a north-facing wall that doesn&apos;t need it.
              </p>

              <h3>Why McKinney Homeowners Choose Us</h3>
              <ul>
                <li>Locally owned and operated, headquartered right here in McKinney</li>
                <li>Factory-certified for Andersen, Pella, JELD-WEN, and Marvin</li>
                <li>Same-week quotes and rapid warranty response across the city</li>
                <li>Familiarity with McKinney HOAs and the city permit process</li>
                <li>Itemized, written estimates with no high-pressure tactics</li>
                <li>Lifetime workmanship warranty backed by our local crews</li>
              </ul>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in McKinney.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Our McKinney Address</h3>
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

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Services</span>
            <h2>Window &amp; Door Services in McKinney</h2>
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

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Transform Your McKinney Home?</h2>
          <p>Contact us today for a free estimate on window and door replacement.</p>
          <div className={styles.ctaButtons}>
            <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary large">
              Call {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-secondary large cta-button">
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
