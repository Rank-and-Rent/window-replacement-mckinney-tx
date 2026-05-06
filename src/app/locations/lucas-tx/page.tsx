import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Lucas TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in Lucas, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement Lucas TX, Lucas window installation, door replacement Lucas',
}

export default function LucasPage() {
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
          <span>Lucas, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Lucas, TX</em></h1>
              <p>Lucas sits just southeast of McKinney, a small community of large lots, equestrian properties, and serious custom homes that look nothing like the tract houses on either side of it. Our crews work Lucas regularly, with the patience and attention to detail these homes call for and the factory-certified credentials to install premium product lines correctly.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-lucas-tx-1.jpg"
                alt="Window replacement services in Lucas, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Window and Door Replacement for Lucas Estate Homes</h2>
              <p>
                Lucas zoning protects large lots and rural character, which has produced an unusual housing mix:
                custom estate homes on multi-acre parcels, equestrian properties with horse barns, and a handful of
                gated subdivisions that maintain the same expansive feel. Many Lucas homes were custom-built between
                the late 1980s and the early 2010s, often with significant glass on garden- and pasture-facing
                elevations, large entry vestibules, and ornate divided-lite patterns. These details matter when it
                comes time to replace.
              </p>
              <p>
                We approach Lucas projects the way the original architect or custom builder would have: measuring
                meticulously, matching profiles, replicating divided-lite patterns, and selecting frame materials
                that respect both the home&apos;s era and the homeowner&apos;s long-term plans. We don&apos;t cookie-cutter
                Lucas homes, and the results show in the finished work.
              </p>

              <h3>Lucas Areas We Serve</h3>
              <p>
                Our crews cover Lucas from the Lake Lavon side to the western boundary near Allen, including the
                older estate parcels along Country Club Road and the more recent custom subdivisions tucked off
                Lewis Lane and Snider Lane.
              </p>
              <ul>
                <li>Brockdale and Brockdale Estates</li>
                <li>Forest Creek and Forest Creek Estates</li>
                <li>Inwood Hills</li>
                <li>Lucas Heights and Lake Lavon view properties</li>
                <li>Custom and equestrian estates along Country Club Road</li>
                <li>Acreage parcels off FM 1378 and Lewis Lane</li>
              </ul>

              <h3>Premium Materials for Custom Lucas Homes</h3>
              <p>
                Lucas projects skew toward the higher end of the product spectrum. Marvin Signature Ultimate, Pella
                Reserve Traditional, and Andersen E-Series are common specifications for windows where wood
                interiors and clad exteriors are both required. For more modest homes or rental properties, we work
                with Andersen 400 Series, Pella Lifestyle, and JELD-WEN Premium Vinyl. Doors typically include
                custom mahogany or alder entries from JELD-WEN&apos;s Custom Wood line, often with sidelights and
                transoms to match the home&apos;s scale.
              </p>

              <h3>Glass Packages for Big Views</h3>
              <p>
                Many Lucas homes were built specifically to take advantage of pasture views, lake glimpses, or
                wooded backyards. We protect those views with Low-E glass packages that maintain near-clear
                appearance while still controlling solar gain. Where homeowners want to soundproof against road
                noise from FM 1378 or aircraft from McKinney National Airport, we spec laminated sound-control
                glass that meaningfully reduces transmission without changing the visual character of the window.
              </p>

              <h3>Doors That Match Custom Architecture</h3>
              <p>
                A custom Lucas home often has an entry door that&apos;s as much a statement as the home&apos;s exterior
                stonework. We replace those entries with custom mahogany, knotty alder, or fiberglass mahogany-grain
                doors, paired with multi-point locking systems and high-end hardware in finishes that match the
                home&apos;s existing fixtures. For patio openings, we install French doors, sliding patio doors, and
                multi-slide systems where the wall framing supports them.
              </p>

              <h3>HOA, Acreage, and Permitting in Lucas</h3>
              <p>
                Some Lucas subdivisions maintain HOA architectural review committees, while many of the acreage
                properties are deed-restricted only at the parcel level. The City of Lucas requires permits for
                most window and door replacements that alter the opening, and we handle that paperwork. For
                projects on rural water systems or septic, we coordinate around utility access during install
                without disrupting your daily life on the property.
              </p>

              <h3>Why Lucas Homeowners Choose Us</h3>
              <ul>
                <li>Headquartered in nearby McKinney for fast scheduling</li>
                <li>Factory-certified for Andersen, Pella, JELD-WEN, and Marvin</li>
                <li>Experience with Lucas custom estates and equestrian properties</li>
                <li>Custom-shape and architectural divided-lite capabilities</li>
                <li>Detailed written quotes and no high-pressure sales</li>
                <li>Lifetime workmanship warranty backed by local crews</li>
              </ul>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Lucas.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Lucas From</h3>
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
            <h2>Window &amp; Door Services in Lucas</h2>
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
          <h2>Ready to Transform Your Lucas Home?</h2>
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
