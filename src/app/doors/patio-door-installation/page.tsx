import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'Patio Door Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Patio doors for Tucker Hill and Eldorado outdoor-living additions. Sliding and hinged options, Low-E3 against Texas sun, multi-point locks for Collin County security expectations.',
  keywords: 'patio doors McKinney TX, patio door replacement, sliding patio doors, hinged patio doors McKinney',
}

export default function PatioDoorPage() {
  const doorServices = servicesData.filter(s => s.category === 'Doors' && s.slug !== 'patio-door-installation')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/doors">Doors</Link>
          <span>/</span>
          <span>Patio Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Door Replacement</span>
              <h1>Patio Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Patio doors are core to the indoor-outdoor program of McKinney&apos;s newer master-planned
                builds: the covered loggia openings of Tucker Hill, the screened-room transitions in
                Trinity Falls, and the pool-deck access points of Eldorado golf-course estates. We
                install sliding, multi-slide, and hinged patio configurations with Low-E3 against the
                Texas sun and multi-point locks for the Collin County security expectations.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Seamless Indoor-Outdoor Flow</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Multiple Operation Styles</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Energy Star Certified</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Enhanced Security Options</span>
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
                src="/doors/patio-doors-mckinney-tx.avif"
                alt="Patio door replacement services in McKinney, TX"
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
              <h2>Patio Doors and the Rear Elevation of a McKinney Home</h2>
              <p>
                In most McKinney homes, the patio door is the largest and most important opening on the rear of
                the house. It controls how the indoor living space connects to the backyard, sets the
                architectural tone of the rear elevation, and accounts for a meaningful portion of the home&apos;s
                total glass area. Original builder-grade patio doors from 1990s and 2000s construction are now
                approaching or past the end of their service life, with predictable problems: failed glass seals,
                worn rollers or hinges, latches that no longer engage cleanly, and weather sealing that no longer
                holds out wind-driven rain. Replacement is a high-leverage upgrade, both for daily use and for
                the visual presentation of the back of the house.
              </p>
              <p>
                We install patio doors throughout McKinney in three primary configurations: sliding patio doors
                (the most common builder-grade replacement), hinged French-style patio doors (more architectural
                presence), and multi-slide or folding glass walls (high-end indoor-outdoor connections in custom
                homes). Each has different strengths and suits different home styles.
              </p>

              <h3>Sliding Patio Doors</h3>
              <p>
                Sliders are the most common patio door style in McKinney because they fit standard rough openings
                from the original builder, they don&apos;t require swing clearance inside or outside, and they&apos;re the
                most economical premium upgrade. Two-panel XO/OX sliders cover most builder-grade openings.
                Three-panel OXO configurations work in great rooms and primary suites where the homeowner wants
                operating panels at both ends. Modern premium sliders use stainless rollers, multi-point locking,
                and Low-E2 or Low-E3 glass that performs far better than the original builder-grade unit.
              </p>

              <h3>Hinged French-Style Patio Doors</h3>
              <p>
                Hinged patio doors (French-style pairs) swing fully open and clear the entire rough opening,
                producing a more continuous indoor-outdoor transition. They&apos;re a popular replacement for
                aging sliders in McKinney homes where the owner wants more architectural presence on the rear
                elevation. Hinged patio doors typically have an active and inactive leaf with multi-point locks
                on the active side, divided-lite or full-glass panels, and weatherstripping designed for
                exterior use. Frame materials range from vinyl through fiberglass through clad wood; we match
                to the home&apos;s overall finish program.
              </p>

              <h3>Multi-Slide and Folding Glass Walls</h3>
              <p>
                For high-end McKinney custom homes where the rear elevation is part of the architectural
                statement, multi-slide and folding glass wall systems open up to 80% of the wall to outdoor
                living. Marvin Signature Modern multi-slide and Andersen folding wall systems let the homeowner
                stack panels to one side or fold them accordion-style, creating openings up to 30 feet wide on
                a single floor. These are significant projects involving structural engineering, header
                replacement, and careful threshold detailing, but the result is genuinely transformative on the
                right home.
              </p>

              <h3>Energy Performance for the Rear of the Home</h3>
              <p>
                The patio door is often the largest single piece of glass in the rear elevation, which means its
                glass package drives a lot of the rear of the home&apos;s thermal performance. We typically spec Low-E2
                or Low-E3 packages on McKinney patio doors, with solar-control coatings on west-facing patios
                where afternoon sun is the dominant performance issue. Argon fill is standard. Laminated impact-
                resistant glass is available for severe storm exposure, particularly on patios that face
                prevailing storm direction.
              </p>

              <h3>Hardware, Security, and Long-Term Operation</h3>
              <p>
                Modern premium patio doors use multi-point locking systems that engage at multiple positions
                along the active panel, distributing force across the frame and dramatically improving security
                over older single-deadbolt configurations. Foot bolts at the bottom rail provide an additional
                layer when the door is fully closed. Hardware finishes match the rest of the home&apos;s exterior
                fixtures: satin nickel, matte black, oil-rubbed bronze, or whatever the homeowner&apos;s palette
                calls for. We adjust hinges, rollers, and locks during installation so the door operates
                smoothly through years of use.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore patio door options for your McKinney home. We&apos;ll measure on site,
                walk through configurations and brand options, and send a detailed written estimate.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Patio Doors">
                    <option value="Patio Doors">Patio Doors</option>
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
          <h2>Schedule Your Free Patio Door Consultation</h2>
          <p>Connect your indoor and outdoor spaces. Contact us today.</p>
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
