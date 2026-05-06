import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'French Door Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'French doors for Old East McKinney historic interiors and Adriatica Village courtyard openings. True divided lite, weatherstripped astragal, period-correct hardware lines.',
  keywords: 'French doors McKinney TX, French door replacement, double doors, glass panel doors McKinney',
}

export default function FrenchDoorPage() {
  const doorServices = servicesData.filter(s => s.category === 'Doors' && s.slug !== 'french-door-installation')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/doors">Doors</Link>
          <span>/</span>
          <span>French Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Door Replacement</span>
              <h1>French Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                French doors fit two specific McKinney contexts: the parlor-to-dining and study openings
                of Old East McKinney historic interiors where divided lite and proper hardware reads
                period-correct, and the courtyard openings of Adriatica Village where the European
                inspiration calls for inswing French units. We install Marvin Signature, Pella Reserve,
                and Andersen 400 French doors with weatherstripped astragals and multi-point locks.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Timeless Elegance</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Maximum Natural Light</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Interior &amp; Exterior Options</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Custom Glass Options</span>
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
                src="/doors/french-doors-mckinney-tx.avif"
                alt="French door replacement services in McKinney, TX"
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
              <h2>French Doors: Classic Style That Works for Modern McKinney Homes</h2>
              <p>
                A French door is a hinged double-door pair, typically with multiple glass panels (the divided
                lights or grilles) running the full height of each door, designed to swing inward or outward as
                a paired unit. The style has been used in residential architecture for centuries, and it remains
                one of the most flexible patio and interior door configurations available. For McKinney homeowners
                who want the look of traditional architecture, the airflow of fully-opening doors, and a finished
                appearance that holds up at resale, French doors deliver in a way that sliders and bi-fold systems
                don&apos;t fully match.
              </p>
              <p>
                We install French doors throughout McKinney as both interior and exterior units, with frame
                materials and glass packages selected to suit the application. The exterior version is the more
                common project: replacing an aging slider with a French door pair on a backyard patio, or
                adding French doors as an opening to a screened porch or rear deck. Interior French doors are a
                regular feature in McKinney custom homes, separating formal dining from kitchen, primary suite
                from primary bath, or a study from the rest of the open plan.
              </p>

              <h3>Interior French Doors in McKinney Homes</h3>
              <p>
                Interior French doors provide a graceful transition between rooms while preserving the open
                feel of a contemporary floor plan. They&apos;re the right pick for separating a home office or study
                from the main living areas (the doors close for privacy on calls and conferences), for finishing
                off a primary suite where the bedroom and bath connect, and for creating a defined formal
                dining room when the floor plan otherwise would have flowed continuously. Interior French
                doors are typically wood or fiberglass with clear or frosted glass panels, sized to standard
                interior door dimensions or custom-built for unusual openings.
              </p>

              <h3>Exterior French Doors and Outdoor Living</h3>
              <p>
                Exterior French doors are a popular replacement for original sliding glass doors in McKinney
                homes where the homeowner wants a more architectural feel on the rear elevation. Unlike a slider
                that has at least one fixed panel and a track running across the floor, French doors swing fully
                open to clear the entire rough opening, which means the indoor-outdoor transition feels more
                continuous and the doors themselves present better aesthetically. Premium exterior French doors
                from Andersen, Pella, Marvin, and JELD-WEN use multi-point locking systems, weather-stripping
                designed for severe-storm exposure, and Low-E glass packages tuned for solar control.
              </p>

              <h3>Glass and Grille Options</h3>
              <p>
                French doors are defined visually by their glass treatment. Traditional divided-lite patterns
                (3-lite, 6-lite, 10-lite, 15-lite) replicate the historic French door aesthetic and work well
                in transitional and traditional McKinney architecture. Single-pane full-glass French doors offer
                a more contemporary look, popular in modern homes in Tucker Hill and Adriatica. Frosted, etched,
                or laminated privacy glass is available for interior applications where light transmission
                matters but visual privacy does too. Low-E coatings and argon fill are standard on exterior
                applications.
              </p>

              <h3>Hardware and Operation</h3>
              <p>
                French doors typically have an active leaf and a stationary leaf. The active leaf has the lever
                or knob handle and operates daily; the stationary leaf is held in place by flush bolts at the
                head and foot, and is opened only when the homeowner wants the full opening cleared (entertaining,
                furniture moves, etc). For exterior French doors, multi-point locking systems on the active leaf
                engage at the head, foot, and middle of the door, distributing force and dramatically improving
                security over a single-deadbolt configuration. Hardware finishes match interior or exterior
                fixtures: satin nickel, matte black, oil-rubbed bronze, or whatever ties cleanly into the rest of
                the home.
              </p>

              <h3>Installation Considerations for McKinney Homes</h3>
              <p>
                French door rough openings are larger than most other door types, and the exterior framing has to
                be properly detailed for weather. Our crews handle full-frame replacement when the original
                opening was a slider with different dimensions, including framing modifications, header
                adjustments, and exterior trim integration. We detail the head flashing carefully because the
                wider opening produces more water shed during a severe storm, and we shim the units precisely so
                the active leaf swings free without binding against the inactive leaf or the stop.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore French door options for your McKinney home. We&apos;ll measure on site,
                walk through configuration and glass options, and send a detailed written estimate.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="French Doors">
                    <option value="French Doors">French Doors</option>
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
          <h2>Schedule Your Free French Door Consultation</h2>
          <p>Add timeless elegance to your McKinney home. Contact us today.</p>
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
