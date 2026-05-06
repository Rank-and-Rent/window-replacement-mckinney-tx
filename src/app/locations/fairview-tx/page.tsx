import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Fairview TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in Fairview, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement Fairview TX, Fairview window installation, door replacement Fairview',
}

export default function FairviewPage() {
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
          <span>Fairview, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Fairview, TX</em></h1>
              <p>Fairview&apos;s estate-style homes and one-acre minimum lot sizes give it a character entirely different from the surrounding cities, and we tailor our window and door replacements to match. From the gated streets of Heritage Ranch to the custom builds along Stacy Road, our McKinney-based crews bring factory-certified installation and the patience these homes deserve.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-fairview-tx-1.jpg"
                alt="Window replacement services in Fairview, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Estate-Quality Window Replacement in Fairview</h2>
              <p>
                Fairview is a quieter, larger-lot pocket of Collin County, with zoning rules that protect open
                space and limit the kind of dense subdivision development that defines neighboring cities. The
                result is a community of substantial homes on substantial properties, many of them custom-built in
                the 1990s and 2000s, often with significant timber, stone, and brick detailing on the exterior.
                Window and door replacement here isn&apos;t just a maintenance project; it&apos;s a chance to refresh a
                signature element of an architecturally distinctive home.
              </p>
              <p>
                We approach Fairview projects with that in mind. Our consultations focus on preserving the original
                design intent: matching exterior frame colors, replicating divided-lite patterns, recreating
                custom shapes, and selecting hardware that fits the home&apos;s aesthetic. The result is replacement
                windows and doors that look like they were specified by the original architect, not retrofitted
                in a hurry.
              </p>

              <h3>Fairview Communities We Serve</h3>
              <p>
                Our work spans Fairview&apos;s gated and ungated communities, the older estate properties along
                Country Club Road, and newer custom builds in the Stacy Road and Greenwood corridors.
              </p>
              <ul>
                <li>Heritage Ranch (active-adult gated community)</li>
                <li>Greenwood</li>
                <li>Stacy Ridge</li>
                <li>The Estates at Glen Eagles</li>
                <li>Country Club Road and Country Club Estates</li>
                <li>Northeast Fairview acreage and equestrian properties</li>
                <li>Custom builds in The Reserve at Fairview</li>
              </ul>

              <h3>Premium Brands That Match Premium Homes</h3>
              <p>
                Fairview&apos;s housing stock typically calls for premium product lines. Marvin Signature Ultimate is a
                frequent specification for casements and double-hungs in custom homes, paired with Pella Reserve
                or Andersen E-Series for matching elevations. For doors, we install Andersen and Marvin patio
                doors, JELD-WEN Custom Wood entry doors, and Pella Architect Series fiberglass entries. Each line
                offers extensive customization in size, color, hardware, and divided-lite patterns, which matters
                in homes where the existing windows are visibly architect-specified.
              </p>

              <h3>Heritage Ranch and Active-Adult Considerations</h3>
              <p>
                Heritage Ranch is a gated active-adult community within Fairview, and its homeowners often
                prioritize different things than younger families: easier operation, lower maintenance, better
                sound dampening, improved security, and predictable warranty support. We tailor our recommendations
                accordingly. Casement windows with smooth-cranking handles, multi-point locking entries, and
                laminated sound-dampening glass are common requests, and we coordinate with the Heritage Ranch
                ACC for any visible exterior changes.
              </p>

              <h3>Climate, UV, and Long-Term Performance</h3>
              <p>
                Fairview homes face the same hot Texas summers and severe storm seasons as the rest of Collin
                County, but the larger lots often mean more sun exposure and less shading from neighboring
                structures. West-facing rooms are particularly vulnerable to UV damage and heat gain. We
                consistently spec Low-E2 or Low-E3 glass packages, and on long west elevations we sometimes
                upgrade to a higher-performance dual Low-E coating that reduces solar heat gain coefficient
                without darkening the glass appreciably.
              </p>

              <h3>Permits and Town of Fairview Requirements</h3>
              <p>
                The Town of Fairview requires permits for most window and door replacements that change opening
                size, and the larger gated communities have their own architectural review processes on top of
                town requirements. We pull permits, file ACC applications with documentation the committee
                expects, and coordinate inspections so the project closes cleanly. For Fairview homeowners who
                may eventually sell, this paper trail also matters during a future inspection or appraisal.
              </p>

              <h3>Why Fairview Homeowners Choose Us</h3>
              <ul>
                <li>Easy access from our McKinney shop just a few miles north</li>
                <li>Factory-certified for Andersen, Pella, JELD-WEN, and Marvin</li>
                <li>Experience with Heritage Ranch and other Fairview gated communities</li>
                <li>Custom and specialty shape capabilities for architectural homes</li>
                <li>Detailed written estimates and respectful, low-pressure consultations</li>
                <li>Lifetime workmanship warranty backed by local crews</li>
              </ul>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Fairview.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Fairview From</h3>
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
            <h2>Window &amp; Door Services in Fairview</h2>
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
          <h2>Ready to Transform Your Fairview Home?</h2>
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
