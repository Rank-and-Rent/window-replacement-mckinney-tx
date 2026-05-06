import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'Custom Door Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Custom doors for Adriatica Croatian-style facades, McKinney Country Club estates, and one-off historic Old East replacements. Custom size, species, glass, and hardware specs.',
  keywords: 'custom doors McKinney TX, custom door installation, unique doors, specialty doors McKinney',
}

export default function CustomDoorPage() {
  const doorServices = servicesData.filter(s => s.category === 'Doors' && s.slug !== 'custom-door-installation')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/doors">Doors</Link>
          <span>/</span>
          <span>Custom Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Door Replacement</span>
              <h1>Custom Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Custom doors solve the openings that stock specs can&apos;t: the oversized vestibule at a
                McKinney Country Club estate, the round-top entry of an Adriatica Village faux-historic
                facade, and the irregular jamb dimensions of a 1900-era Old East Victorian where every
                opening is its own unique field measurement. We coordinate with Marvin, Pella, and
                Andersen custom-shop programs on size, species, glass, and hardware specs.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Custom Sizes &amp; Shapes</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Unique Design Options</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Made to Your Specifications</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Premium Materials</span>
                </div>
              </div>
              <div className={styles.heroCta}>
                <Link href="/contact" className="btn-primary large">Get Your Free Estimate</Link>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-secondary large">
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/doors/custom-doors-mckinney-tx.jpg"
                alt="Custom door replacement services in McKinney, TX"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.content}>
              <h2>When Stock Doors Don&apos;t Fit the McKinney Home</h2>
              <p>
                Custom doors are factory-built to specific opening dimensions and design specifications, rather
                than ordered from standard stock sizes. They&apos;re the right answer when your McKinney home has
                a non-standard opening (which is common in older homes near downtown McKinney and in custom-built
                estates), when the architectural intent of the home calls for an entry, patio, or interior door
                that doesn&apos;t exist as a stock unit, or when historic preservation requires a door that matches
                an original detail no longer in production. We coordinate custom door orders with Andersen, Pella,
                JELD-WEN, Marvin, and selected boutique manufacturers depending on the project requirements.
              </p>
              <p>
                Custom doors take longer to deliver than stock units (typically 6 to 12 weeks from order
                placement), and the cost premium reflects the actual custom fabrication. We&apos;re straightforward
                about both during the consultation, so the project timeline and budget reflect reality from day
                one. For McKinney homeowners who&apos;ve been frustrated trying to make a stock door work in an
                opening that wants something else, custom is often the cleaner path.
              </p>

              <h3>Common Custom Door Scenarios in McKinney</h3>
              <p>
                <strong>Older Home Openings:</strong> Pre-1970s homes in Old East McKinney often have door
                openings that don&apos;t match modern stock sizes. Rather than modifying the rough opening (which can
                affect framing, plaster, or original architectural detail), we order custom-sized units to fit
                the existing opening exactly.
              </p>
              <p>
                <strong>Historic Preservation:</strong> Custom-built doors with period-correct panel patterns,
                divided-lite glass, and traditional hardware are essential for restorations of Victorian,
                craftsman, and bungalow homes throughout downtown McKinney&apos;s historic district.
              </p>
              <p>
                <strong>Custom Architecture:</strong> Higher-end custom builds in Tucker Hill, Adriatica, around
                McKinney Country Club, and in the larger Stonebridge Ranch homes often have entry openings
                designed around custom doors, not the other way around. Oversized entries, tall openings, and
                non-standard panel arrangements all call for custom fabrication.
              </p>
              <p>
                <strong>Specialty Glass and Privacy:</strong> Custom doors with leaded glass, beveled glass,
                custom etching, or specific privacy patterns require special fabrication that stock programs
                don&apos;t support. We work with manufacturers who specialize in these custom glass treatments.
              </p>

              <h3>Custom Sizes and Shapes</h3>
              <p>
                Custom door programs handle non-standard widths, heights, arched tops, full radius half-rounds
                above the door, sidelights of any width, and integrated transom assemblies. We measure on site
                with multiple check points to make sure the order specifications match the opening exactly,
                because custom doors are far less forgiving than stock units when the dimensions are slightly
                off.
              </p>

              <h3>Material and Finish Options</h3>
              <p>
                Custom doors are available in nearly every residential door material: solid mahogany, knotty
                alder, cherry, walnut, Douglas fir, fiberglass with mahogany or oak grain, smooth-skin
                fiberglass, painted steel, or hybrid wood-and-fiberglass constructions. Hardware finishes span
                the full range from polished brass through satin nickel through matte black to oil-rubbed
                bronze. Glass options include single tempered, dual insulating with Low-E, laminated impact-
                resistant, and custom-fabricated leaded or beveled glass for historic detail.
              </p>

              <h3>Hardware and Locking Systems</h3>
              <p>
                Custom doors typically include premium hardware as part of the order: multi-point locking
                systems, three-point ball-bearing hinges, oversized strike plates with three-inch screws into
                framing, and decorative hardware (knockers, kick plates, address plates) coordinated to the
                home&apos;s overall finish palette. For McKinney custom homes where the existing interior fixtures
                define a clear finish program, the entry door hardware should integrate seamlessly.
              </p>

              <h3>Lead Times and Project Coordination</h3>
              <p>
                Custom doors typically run 6 to 12 weeks from order placement to delivery, depending on the
                manufacturer and the specifications. We coordinate the order, track production, and schedule
                installation so the project lines up cleanly with your overall remodel or build schedule. For
                homeowners working with a general contractor on a major project, we serve as the door
                specialist on the team and handle all manufacturer coordination directly.
              </p>

              <h2>Ready for Your Free Consultation?</h2>
              <p>
                Contact us today to discuss your custom door project. We&apos;ll measure on site, review options
                with the manufacturers that fit your specifications, and send a detailed written estimate that
                reflects the lead time and budget honestly.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Custom Doors">
                    <option value="Custom Doors">Custom Doors</option>
                  </select>
                  <input type="text" name="address" placeholder="Property Address *" required />
                  <select name="timeline" required>
                    <option value="">Select timeline...</option>
                    <option value="ASAP">ASAP</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Within 6 months">Within 6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Just researching">Just researching</option>
                  </select>
                  <textarea name="description" placeholder="Project Description *" rows={3} required></textarea>
                  <button type="submit" className="btn-primary">Get Free Estimate</button>
                </form>
              </div>

              <div className={styles.sidebarCard}>
                <h4>Related Services</h4>
                <ul className={styles.relatedLinks}>
                  {doorServices.map((service) => (
                    <li key={service.slug}>
                      <Link href={service.route}>{service.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.sidebarCard} ${styles.highlight}`}>
                <h4>Why Choose Us?</h4>
                <ul className={styles.checkList}>
                  <li>Factory-certified installers</li>
                  <li>15+ years serving McKinney</li>
                  <li>Lifetime warranty protection</li>
                  <li>Financing available</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Schedule Your Free Custom Door Consultation</h2>
          <p>Let us create the perfect door for your McKinney home. Contact us today.</p>
          <div className={styles.ctaButtons}>
            <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary large">
              Call {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-secondary large">Request Online Estimate</Link>
          </div>
        </div>
      </section>
    </>
  )
}
