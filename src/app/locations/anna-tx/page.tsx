import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Anna TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in Anna, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement Anna TX, Anna window installation, door replacement Anna',
}

export default function AnnaPage() {
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
          <span>Anna, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Anna, TX</em></h1>
              <p>Anna is one of the fastest-growing small cities in Collin County, and we make the short drive north from McKinney several times a week to install windows and doors here. Our crews handle everything from new-build upgrades in Hurricane Creek to full-home replacements on the older properties along West White Street, with the same factory-certified installation standards we apply on our home turf in McKinney.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-anna-tx-1.png"
                alt="Window replacement services in Anna, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Window and Door Replacement Built for Anna&apos;s Growth</h2>
              <p>
                Anna has more than tripled in population over the last fifteen years, and that growth has produced
                two very different kinds of housing. On one side you have new master-planned communities like
                Hurricane Creek, Slayton Ranch, Anna Crossing, and West Crossing, where homes were finished in the
                last five to ten years with builder-grade windows that meet code but rarely exceed it. On the other
                side you have older farmhouses and ranch-style homes near downtown Anna and out toward FM 455 that
                still have original aluminum or first-generation vinyl windows from the 1970s and 80s.
              </p>
              <p>
                Both situations benefit from a thoughtful upgrade. New-build homeowners in Anna typically want a
                step up to better Low-E coatings, warm-edge spacers, and reinforced sashes that hold up to severe
                weather. Owners of older homes want full replacements that close the drafts, eliminate the fogged
                glass, and restore a clean exterior look. We handle both with the same care and the same warranty
                coverage.
              </p>

              <h3>Anna Communities We Cover</h3>
              <p>
                Our installation teams have completed projects in essentially every active Anna subdivision, and we
                also serve homeowners on the rural acreage tracts surrounding the city. If you&apos;re inside Anna ISD
                boundaries, we can be at your door for a free estimate within the week.
              </p>
              <ul>
                <li>Hurricane Creek and Hurricane Creek North</li>
                <li>Anna Crossing and Anna Town Square</li>
                <li>Slayton Ranch and Sweetwater Crossing</li>
                <li>West Crossing and Pecan Grove</li>
                <li>Natural Springs and Lakeview Estates</li>
                <li>Summit Parks and the Sherley Drive corridor</li>
                <li>Older neighborhoods around downtown Anna</li>
                <li>Rural acreage off FM 455 and US-75</li>
              </ul>

              <h3>Builder-Grade Windows: When to Replace</h3>
              <p>
                A lot of Anna&apos;s newer construction shipped with low-tier vinyl windows that hit minimum code at
                handover and start showing problems by year five or six: failed insulating glass that fogs between
                the panes, balance assemblies that no longer hold the sash up, and weatherstripping that compresses
                permanently. Builders honor a one- or two-year warranty on most of this glass, after which the
                cost falls back on the homeowner. Replacing these windows with mid-tier or premium products from
                Pella, Andersen, or Marvin typically delivers noticeably better comfort and a measurable drop in
                summer cooling load.
              </p>

              <h3>Severe Weather Considerations in Anna</h3>
              <p>
                Anna sits squarely in North Texas hail alley, and severe spring thunderstorms regularly produce
                hail capable of cracking glass and pitting frames. We help homeowners specify glass packages and
                impact-resistant options when budget allows, and we work directly with insurance adjusters when a
                hail claim opens up an opportunity to upgrade glass at the same time as the deductible-driven
                replacement. Winter storms remain a concern after Uri, and we recommend properly insulated entry
                doors and storm doors as a low-cost way to protect against future deep freezes.
              </p>

              <h3>Materials That Make Sense in Anna</h3>
              <p>
                Vinyl remains the most common replacement choice in Anna because it&apos;s low-maintenance, energy
                efficient, and budget-friendly. Fiberglass and Andersen&apos;s Fibrex composite are excellent
                upgrades for owners planning to stay in the home long-term, especially on west-facing elevations
                where UV exposure is most punishing. Wood-clad units suit the older farmhouses near downtown Anna
                where homeowners want authentic interior wood with a low-maintenance exterior. We&apos;ll walk you
                through the trade-offs honestly so you don&apos;t over- or under-spec your home.
              </p>

              <h3>Permits, HOAs, and Project Logistics</h3>
              <p>
                The City of Anna requires building permits for most window and door replacements, and several of
                the master-planned communities maintain architectural control committees that need to approve
                exterior changes. We handle both processes for our customers, including the documentation HOAs
                typically require: brand and model, frame color, grid pattern, and sometimes manufacturer
                literature. This keeps your project compliant and prevents surprises during a future home sale.
              </p>

              <h3>Why Anna Homeowners Choose Us</h3>
              <ul>
                <li>Short drive from our McKinney shop for fast scheduling</li>
                <li>Factory-certified for Andersen, Pella, JELD-WEN, and Marvin</li>
                <li>Experience with Anna&apos;s new-build and older housing stock</li>
                <li>Honest written quotes with no high-pressure tactics</li>
                <li>Hail-event coordination with most major insurers</li>
                <li>Lifetime workmanship warranty backed by local crews</li>
              </ul>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Anna.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Anna From</h3>
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
            <h2>Window &amp; Door Services in Anna</h2>
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
          <h2>Ready to Transform Your Anna Home?</h2>
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
