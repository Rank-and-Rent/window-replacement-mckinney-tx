import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Melissa TX | Window Replacements of McKinney',
  description: 'Melissa window replacement for Liberty, North Creek, and Wolf Creek Farms new construction. Hail-corridor glass packages, Andersen Fibrex value, Marvin custom for upgrades.',
  keywords: 'window replacement Melissa TX, Melissa window installation, door replacement Melissa',
}

export default function MelissaPage() {
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
          <span>Melissa, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Melissa, TX</em></h1>
              <p>Melissa sits a few minutes north of McKinney along US-75, and it&apos;s grown from a sleepy commuter town into a full-fledged Collin County suburb in less than fifteen years. Most of the housing here is newer construction, which means the dominant replacement opportunity is upgrading builder-grade windows that were never specified to handle a North Texas summer at peak performance.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-mckinney-tx-1.png"
                alt="Window replacement services in Melissa, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Window and Door Replacement for Melissa Homeowners</h2>
              <p>
                Melissa&apos;s rapid growth has been driven primarily by family-oriented master-planned communities
                and a few infill subdivisions that filled in the gaps between them. The vast majority of homes
                here were built between 2005 and the present, with construction accelerating sharply after 2018.
                Most of these homes shipped with low-tier vinyl windows: builder-grade single- or double-hung
                units with single Low-E coatings, basic argon fills, and the kind of balance and weatherstripping
                hardware that starts showing wear by the five-year mark.
              </p>
              <p>
                That presents a clear opportunity. Replacing those builder windows with mid-tier or premium
                products from Pella, Andersen, JELD-WEN, or Marvin delivers measurable comfort improvements,
                noticeably lower summer cooling bills, and the kind of curb appeal upgrade that survives the next
                resale. We&apos;re close enough to handle Melissa projects on tight schedules and far enough into the
                community to know which builders used which window lines, which matters when you&apos;re trying to
                match what&apos;s already there.
              </p>

              <h3>Melissa Communities We Serve</h3>
              <p>
                We work all of the active Melissa subdivisions and the older homes near downtown and the original
                town center. Project schedules typically run faster here than in some of the larger cities because
                streets are wide, driveways are accessible, and HOA review tends to be predictable.
              </p>
              <ul>
                <li>Liberty</li>
                <li>Sierra Vista</li>
                <li>Lakeland and Lakeland Estates</li>
                <li>Trails of Melissa</li>
                <li>Brookside and Brookwood</li>
                <li>Melissa Ridge and North Creek</li>
                <li>Preserve at Grayson Lakes</li>
                <li>Older homes near downtown Melissa and along Main Street</li>
              </ul>

              <h3>The Builder-Grade Window Problem</h3>
              <p>
                A builder-grade vinyl window is engineered to a price point, not a performance target. The frame
                walls are thinner, the spacers are colder, and the seals compress more permanently. By year seven
                or eight, many Melissa homeowners start seeing fogged glass between the panes, balance failures
                that won&apos;t hold the sash, and weatherstripping that no longer compresses tightly enough to stop
                cold-air infiltration during winter fronts. Replacement isn&apos;t cosmetic; it&apos;s functional, and the
                payback in comfort is usually obvious within the first season.
              </p>

              <h3>Hail and Severe Weather in Melissa</h3>
              <p>
                Melissa is well within North Texas hail alley, and severe spring storms are part of the local
                rhythm. We help homeowners specify glass packages that hold up better to hail, including impact-
                resistant laminated glass on more exposed elevations. When hail does damage glass, we work with
                most major insurers to coordinate replacement and, where the homeowner wants to upgrade, apply
                the deductible-driven claim toward a higher-performance window package.
              </p>

              <h3>Material Choices for Melissa Homes</h3>
              <p>
                Vinyl remains the most popular material here because it suits the price-conscious profile of many
                Melissa buyers, but we routinely recommend Andersen&apos;s Fibrex composite or fiberglass for owners
                planning to stay long term. Wood and wood-clad units make sense for the older homes near downtown
                Melissa where character matters as much as performance. We&apos;ll walk you through trade-offs so you
                buy the right window for your home, not the most expensive one we sell.
              </p>

              <h3>Permits and HOA Review</h3>
              <p>
                The City of Melissa requires permits for most window and door replacements when the opening
                changes, and the master-planned communities here maintain ACC processes that approve exterior
                changes before work begins. We pull the permits, file the ACC paperwork, and schedule the final
                inspection so the project closes cleanly. This matters at resale; clean permitting history is what
                a future buyer&apos;s inspector wants to see.
              </p>

              <h3>Why Melissa Homeowners Choose Us</h3>
              <ul>
                <li>Just south of Melissa in McKinney for quick estimates and service</li>
                <li>Factory-certified for Andersen, Pella, JELD-WEN, and Marvin</li>
                <li>Experience with Melissa builder-grade window upgrades</li>
                <li>Hail-claim coordination with most major insurers</li>
                <li>Honest written quotes with no high-pressure tactics</li>
                <li>Lifetime workmanship warranty backed by local crews</li>
              </ul>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Melissa.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Melissa From</h3>
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
            <h2>Window &amp; Door Services in Melissa</h2>
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
          <h2>Ready to Transform Your Melissa Home?</h2>
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
