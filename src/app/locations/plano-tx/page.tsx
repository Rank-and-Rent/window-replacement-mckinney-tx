import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Plano TX | Window Replacements of McKinney',
  description: 'Plano window replacement for Legacy West, West Plano, and East Plano 1980s ranch retrofits. Replacing aluminum sliders and original builder-grade hung windows with sealed lines.',
  keywords: 'window replacement Plano TX, Plano window installation, door replacement Plano',
}

export default function PlanoPage() {
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
          <span>Plano, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Plano, TX</em></h1>
              <p>Plano is one of the most architecturally diverse cities in North Texas, with a housing inventory that spans 1970s ranches in Old Plano, 1990s and 2000s tract homes throughout the central neighborhoods, and contemporary new builds in Legacy West and along the Sam Rayburn Tollway. We bring our McKinney-based, factory-certified crews south for replacements in every corner of the city.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-plano-tx-2.jpg"
                alt="Window replacement services in Plano, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Window and Door Replacement Across Plano</h2>
              <p>
                Plano has been a major destination for North Texas families since the 1970s, and that long
                history shows up in the housing stock. The original 1970s and 1980s neighborhoods near Coit and
                Spring Creek were built when single-pane aluminum and early single-pane vinyl were standard. Most
                of those windows are well past their service life by now and have been replaced at least once,
                sometimes twice. The 1990s and early-2000s build-out across central and western Plano introduced
                builder-grade dual-pane vinyl, which is now reaching the age where seal failures and balance
                problems start showing up at scale.
              </p>
              <p>
                We&apos;ve replaced thousands of windows across this housing arc, and that experience matters when it
                comes to spec&apos;ing the right replacement for an established Plano home. Match the original look
                where possible, upgrade the thermal performance, and select hardware that will actually last in
                North Texas conditions.
              </p>

              <h3>Plano Neighborhoods We Serve</h3>
              <p>
                Our project history spans Plano&apos;s major neighborhoods, from the older ranch-and-traditional
                pockets in the south to the newer custom and luxury builds in the north and west.
              </p>
              <ul>
                <li>Willow Bend and the Plano West school zone</li>
                <li>Legacy West and the Shops at Legacy area</li>
                <li>Deerfield, Briarwood, and Russell Creek</li>
                <li>Hunters Glen and Hunters Creek</li>
                <li>Old Town Plano and Haggard Park</li>
                <li>Kings Ridge and Whiffletree</li>
                <li>Gleneagles and Gleneagles Country Club</li>
                <li>Ridgeview Ranch and Ridgepoint</li>
                <li>Custer Park and the Custer Road corridor</li>
              </ul>

              <h3>Old Plano Versus New Plano</h3>
              <p>
                The replacement profile in Old Plano (south of Park Boulevard, east of Custer) is very different
                from the profile in newer Plano (Legacy and the Sam Rayburn corridor). Older homes typically
                have small openings, often with original brick mould and stucco surrounds that limit retrofit
                options. Newer homes have larger openings, sometimes with stone surrounds and exterior trim
                packages that need to be carefully removed and reinstalled. We bring different installation
                techniques to each, and we don&apos;t shortcut the work either way.
              </p>

              <h3>Energy Performance for Established Homes</h3>
              <p>
                A Plano home with original or first-generation replacement windows often has a U-factor and SHGC
                profile that&apos;s nowhere near current ENERGY STAR levels. We routinely move homeowners from a
                circa-2000 U-0.45 vinyl window to a current-generation Low-E2 or Low-E3 unit at U-0.28 or better,
                which makes a meaningful difference on summer cooling load and on west-facing room temperatures.
                For longer-stay owners, we sometimes recommend triple-pane on western elevations and dual Low-E
                tuned packages on rooms with significant solar exposure.
              </p>

              <h3>Door Replacement and Plano Curb Appeal</h3>
              <p>
                Plano&apos;s established neighborhoods often have original builder-grade steel entry doors that have
                rusted at the bottom rail or warped from sun exposure. We replace with fiberglass smooth-skin
                doors, fiberglass mahogany-grain doors, or true wood entries depending on the home&apos;s style and
                the homeowner&apos;s maintenance preference. We also handle sliding patio doors, French doors, and
                multi-slide systems on larger backyards.
              </p>

              <h3>Permits and HOA Coordination in Plano</h3>
              <p>
                The City of Plano requires building permits for most window and door replacements when the
                opening, header, or egress is altered, and many of the master-planned neighborhoods (Willow Bend,
                Legacy West, Gleneagles, and others) maintain active architectural review processes. We pull
                permits, file HOA paperwork, and coordinate inspections so projects close cleanly and the work
                shows up correctly in your home&apos;s records.
              </p>

              <h3>Why Plano Homeowners Choose Us</h3>
              <ul>
                <li>Convenient service from our McKinney shop just up US-75</li>
                <li>Factory-certified for Andersen, Pella, JELD-WEN, and Marvin</li>
                <li>Deep experience across Plano&apos;s 1970s-to-present housing stock</li>
                <li>Familiar with major Plano HOAs and the city permit process</li>
                <li>Itemized written estimates with no high-pressure sales</li>
                <li>Lifetime workmanship warranty backed by local crews</li>
              </ul>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Plano.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Plano From</h3>
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
            <h2>Window &amp; Door Services in Plano</h2>
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
          <h2>Ready to Transform Your Plano Home?</h2>
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
