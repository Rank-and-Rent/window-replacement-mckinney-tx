import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Princeton TX | Window Replacements of McKinney',
  description: 'Princeton window replacement east of McKinney along US-380. Whitewing Trails, Brookside, and starter-home retrofits with Andersen Fibrex and JELD-WEN value lines.',
  keywords: 'window replacement Princeton TX, Princeton window installation, door replacement Princeton',
}

export default function PrincetonPage() {
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
          <span>Princeton, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Princeton, TX</em></h1>
              <p>Princeton sits about ten miles east of McKinney along US-380, and it&apos;s become one of the fastest-growing communities in eastern Collin County. We&apos;ve been making the short drive over here for years, replacing windows and doors in everything from older farmhouses near downtown Princeton to brand-new builds in master-planned subdivisions along Lake Lavon.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-princeton-tx-1.jpg"
                alt="Window replacement services in Princeton, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Window and Door Replacement for Princeton Homeowners</h2>
              <p>
                Princeton has changed a lot in the last decade. The city was a quiet rural community with a few
                thousand residents in the late 2000s, and current population estimates put it well into the tens
                of thousands as new subdivisions continue to come online. The result is a split housing inventory:
                older single-family homes and farmhouses with original aluminum or first-generation vinyl windows
                from the 1980s and 90s, and brand-new master-planned construction with builder-grade dual-pane
                vinyl that meets minimum code at handover.
              </p>
              <p>
                Both groups benefit from replacement, but for different reasons. Older homes need full replacement
                to close drafts, eliminate fogged or single-pane glass, and bring thermal performance up to modern
                expectations. Newer homes typically need targeted upgrades on west-facing elevations or where the
                original glass package isn&apos;t handling solar gain well. Our consultations make those distinctions
                clear, so you spend money where it actually pays back.
              </p>

              <h3>Princeton Communities We Serve</h3>
              <p>
                Our crews cover Princeton from the older neighborhoods near downtown to the newest subdivisions on
                the western edge, including the lake-adjacent properties on the eastern side of the city.
              </p>
              <ul>
                <li>Greystone</li>
                <li>Village on the Green</li>
                <li>South Fork Ranch</li>
                <li>Trailwood and Trails of Princeton</li>
                <li>Whitewing Trails</li>
                <li>Winchester Crossing</li>
                <li>Older neighborhoods around downtown Princeton</li>
                <li>Lake Lavon-adjacent properties on the eastern edge</li>
              </ul>

              <h3>Climate and the Lake Lavon Effect</h3>
              <p>
                Princeton&apos;s proximity to Lake Lavon adds a small but real humidity layer on top of the standard
                North Texas climate, and that affects window selection on lake-side elevations. We tend to spec
                materials with strong moisture resistance for these applications: vinyl, fiberglass, Andersen
                Fibrex composite, or aluminum-clad wood. Wood-frame interiors still work well in most Princeton
                homes, but we pay extra attention to flashing, sealants, and exterior weep design when humidity
                exposure is higher than average.
              </p>

              <h3>Builder-Grade Replacement Considerations</h3>
              <p>
                The newer Princeton subdivisions overwhelmingly shipped with low-tier vinyl windows that are
                code-compliant but not particularly high-performing. Many homeowners notice the symptoms by year
                five: fogged glass, west-facing rooms running noticeably warmer than the rest of the home, and
                seal failures during severe weather events. Replacement with mid-tier or premium products from
                Pella, Andersen, JELD-WEN, or Marvin delivers measurable comfort gains and meaningful cooling-load
                reductions during peak summer.
              </p>

              <h3>Severe Weather and Hail Coverage</h3>
              <p>
                Princeton sits squarely in North Texas hail alley, and the open eastern Collin County terrain
                means storm cells often pass through with minimal urban friction to slow them down. Hail damage to
                glass is a regular occurrence here, and we work directly with most major insurers when a claim
                opens up an opportunity to upgrade the glass at the same time as the deductible-driven
                replacement. Impact-resistant laminated glass is a worthwhile upgrade on more exposed elevations.
              </p>

              <h3>Permits, HOAs, and Project Logistics</h3>
              <p>
                The City of Princeton requires permits for most window and door replacements that change opening
                size, and the master-planned subdivisions maintain ACC processes that approve exterior changes.
                We handle both. For projects on rural water systems or properties with septic, we coordinate site
                logistics around utility access without disrupting your daily routine on the property.
              </p>

              <h3>Why Princeton Homeowners Choose Us</h3>
              <ul>
                <li>Short drive from our McKinney shop along US-380</li>
                <li>Factory-certified for Andersen, Pella, JELD-WEN, and Marvin</li>
                <li>Experience with both older and new-build Princeton homes</li>
                <li>Hail-claim coordination with most major insurers</li>
                <li>Detailed written estimates and no high-pressure sales</li>
                <li>Lifetime workmanship warranty backed by local crews</li>
              </ul>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Princeton.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Princeton From</h3>
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
            <h2>Window &amp; Door Services in Princeton</h2>
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
          <h2>Ready to Transform Your Princeton Home?</h2>
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
