import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Allen TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in Allen, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement Allen TX, Allen window installation, door replacement Allen',
}

export default function AllenPage() {
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
          <span>Allen, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Allen, TX</em></h1>
              <p>Allen sits a quick fifteen minutes south of our McKinney headquarters, and we&apos;ve been replacing windows and doors here since the days when most of Twin Creeks was still under construction. Our crews know Allen&apos;s housing eras well, from the original 1980s build-outs near the Watters Creek corridor to the newest custom homes off Ridgeview, and we tailor every replacement to the architecture, climate exposure, and HOA expectations of your specific block.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-allen-tx-1.webp"
                alt="Window replacement services in Allen, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Window and Door Replacement Designed for Allen Homes</h2>
              <p>
                Allen consistently lands on national best-places-to-live lists, and that quality shows up in the way
                its neighborhoods are built and maintained. Many Allen homes are now twenty to thirty years past their
                builder-grade window installation, and homeowners are noticing the symptoms: failed thermal seals
                fogging glass, drafts at the meeting rail of original double-hungs, vinyl frames yellowing from sun
                exposure, and AC bills that climb every summer. Replacement is a high-leverage upgrade in Allen, both
                for comfort and for property value at resale.
              </p>
              <p>
                Our installers run factory-certified programs with Andersen, Pella, Marvin, and JELD-WEN, which means
                we can match what&apos;s already on neighboring homes or step you up to a higher-performing line without
                losing the original look. Because we&apos;re close enough to Allen to drop by between appointments, our
                response time on punch-list items, weather-stripping adjustments, and warranty visits is measured in
                days, not weeks.
              </p>

              <h3>Allen Neighborhoods We Serve</h3>
              <p>
                Our project history covers most of Allen&apos;s residential map. Twin Creeks and the surrounding
                golf-course communities tend toward larger custom homes where Marvin Signature Ultimate or Pella
                Reserve are the right call. The Preserve at Allen, Watters Crossing, and Suncreek mix early-2000s
                tract construction with later infill, and we routinely refit those homes with fiberglass or Fibrex
                composites. Older sections near downtown Allen and around Story Park sometimes need wood or wood-clad
                replacements to maintain character.
              </p>
              <ul>
                <li>Twin Creeks and Twin Creeks Village</li>
                <li>The Preserve at Allen and Waterford Parks</li>
                <li>Watters Crossing and Watters Creek area</li>
                <li>Montgomery Farm</li>
                <li>Suncreek and Cottonwood Creek</li>
                <li>Ridgeview and Custer Hill</li>
                <li>Allen Heights and the Stacy Road corridor</li>
                <li>Bethany Lakes and Cumberland Crossing</li>
              </ul>

              <h3>How North Texas Weather Affects Allen Windows</h3>
              <p>
                Allen sits on the same Collin County climate band as McKinney, which means the same hot, UV-heavy
                summers, the same severe spring storm season, and the same memory of Winter Storm Uri pushing
                temperatures into the single digits. Original builder-grade glass in many Allen homes was specified
                to clear minimum code, not to thrive in this climate. Replacing it with Low-E2 coatings, argon fills,
                and warm-edge spacers typically drops west-facing surface temperatures noticeably and reduces summer
                cooling load measurably on the same thermostat setting.
              </p>

              <h3>HOA Approvals and Permits in Allen</h3>
              <p>
                Most Allen subdivisions are deed-restricted with active architectural review. Twin Creeks, Watters
                Creek, and Star Creek all maintain ACC processes that approve exterior frame color, divided-lite
                grids, and door styles before any work begins. We&apos;ve filed dozens of these applications and know
                the typical turnaround windows. The City of Allen also requires permits for most replacements when
                the opening, header, or egress is altered. We handle both, so the only thing you have to coordinate is
                site access on installation day.
              </p>

              <h3>Door Replacement and Curb Appeal</h3>
              <p>
                Entry doors take a beating in Allen. South- and west-facing front doors get direct afternoon sun
                that ages factory finishes quickly, and original builder-grade steel doors often dent and rust at
                the bottom rail after a decade. We replace with fiberglass smooth-skin or fiberglass mahogany-grain
                doors, factory-painted or stained for long-term performance, plus multi-point locking systems that
                materially upgrade security without losing the look you want. We also handle sliding patio doors,
                French doors, and storm doors throughout Allen.
              </p>

              <h3>What an Allen Project Looks Like With Us</h3>
              <p>
                A typical Allen replacement starts with an in-home consultation where we measure every opening,
                review your goals (comfort, efficiency, sound, security, style, or all five), and walk you through
                the line options that actually make sense for your home. You receive an itemized written quote, with
                no pressure pricing and no day-of discounts. Once you approve the order, we factory-place the
                windows or doors, schedule installation around the weather, pull the permit, and complete the work
                in one to three days for most homes. Final walkthrough confirms operation, locks, screens, and
                cleanup before we leave.
              </p>

              <h3>Why Allen Homeowners Choose Us</h3>
              <ul>
                <li>Headquartered in McKinney, fifteen minutes from any Allen neighborhood</li>
                <li>Factory-certified for Andersen, Pella, JELD-WEN, and Marvin</li>
                <li>Familiar with Twin Creeks, Watters Creek, and other Allen ACC processes</li>
                <li>Itemized written estimates and no high-pressure sales</li>
                <li>Lifetime workmanship warranty backed by local crews</li>
              </ul>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Allen.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Allen From</h3>
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
            <h2>Window &amp; Door Services in Allen</h2>
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
          <h2>Ready to Transform Your Allen Home?</h2>
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
