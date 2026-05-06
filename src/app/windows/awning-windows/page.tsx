import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../service.module.css'

export const metadata: Metadata = {
  title: 'Awning Window Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Top-hinged awning windows for McKinney basements, baths, and high transom openings. Open during spring storms, sealed against Collin County hail and post-Uri cold fronts.',
  keywords: 'awning windows McKinney TX, replacement awning windows, bathroom windows, basement windows McKinney',
}

export default function AwningWindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows' && s.slug !== 'awning-windows')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/windows">Windows</Link>
          <span>/</span>
          <span>Awning Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Window Replacement</span>
              <h1>Awning Window Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Awning windows hinge at the top and open outward like a small canopy, which makes them the
                right call for McKinney bathrooms, basement-level egress on properties with daylight basements,
                and the high transom strips above kitchen sinks and great-room picture units in Trinity Falls
                and Stonebridge Ranch. Compression seal performs comparably to a casement; closed, the unit
                holds up against Collin County hail and post-Uri freeze cycling.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Ventilation Rain or Shine</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Excellent Basement Option</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Pairs with Fixed Windows</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Energy Star Certified</span>
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
              <img
                src="/images/services/awning-windows/awning-window1.jpeg"
                alt="Premium awning windows installed in McKinney homes"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.content}>
              <h2>Ventilation Without Worry in McKinney&apos;s Climate</h2>
              <p>
                Awning windows are top-hinged: the bottom of the sash swings outward when you crank the operator,
                which means the glass itself acts as a small overhead shield over the open opening. That single
                detail makes awnings the go-to ventilation window for McKinney homeowners who want to leave a window
                open during a passing North Texas thunderstorm without worrying about water blowing into the home.
                Spring storm season can move through quickly here, and awnings let you stay ahead of it.
              </p>
              <p>
                The other reason awnings are so common in McKinney is that their rectangular, wider-than-tall
                proportion fits the kind of openings that double-hungs and casements can&apos;t cover well: high above
                a kitchen sink, in a small bathroom near the ceiling, in a laundry room above a washer and dryer,
                or stacked above and below a fixed picture window for a contemporary great-room composition. The
                geometry just works in places where other styles don&apos;t.
              </p>

              <h3>Where Awnings Fit Best in McKinney Homes</h3>
              <p>
                Bathrooms are the most common application. The window can sit above the shower or tub for privacy
                and ventilation without compromising either. Above kitchen sinks, an awning&apos;s side-tilt operation
                is more accessible than reaching across a deep counter to lift a double-hung sash. In master suites
                and great rooms, we frequently install awnings as a horizontal band above or below a fixed picture
                window, adding operable ventilation to a composition that would otherwise be all-fixed glass.
                Modern and transitional homes in Tucker Hill, Trinity Falls, and Adriatica Village often use this
                pattern.
              </p>

              <h3>Pairings With Picture Windows</h3>
              <p>
                The strongest design move with an awning is pairing it with a fixed picture window above. A large
                clean expanse of fixed glass at eye level captures the view, while a horizontal awning at the bottom
                provides usable ventilation. We mull these together in custom factory orders so the unit ships as a
                single integrated assembly with consistent frame profiles and a clean transition. The result reads
                as one architectural feature rather than two separate windows.
              </p>

              <h3>Energy Performance and Air Sealing</h3>
              <p>
                Like casements, awnings benefit from a compression seal: when you crank the window closed, the sash
                presses tightly against bulb-style weatherstripping all the way around the frame, which produces a
                near-airtight seal. That makes awnings one of the more energy-efficient operable styles available,
                which matters in McKinney&apos;s climate where air infiltration around old single-hungs is often the
                largest source of unwanted heat gain or loss. Pair the window with Low-E2 or Low-E3 glass and argon
                fill from Andersen, Pella, Marvin, or JELD-WEN and you have a high-performing operable window in a
                small footprint.
              </p>

              <h3>Security Advantages</h3>
              <p>
                Awning windows are inherently harder to force open from outside than a sliding or hung window. The
                crank operator only releases when turned from inside, the multi-point lock engages along the
                perimeter, and the limited opening angle means there&apos;s no easy purchase point for a pry bar from
                the exterior. For ground-floor and basement installations, this is a meaningful security upgrade
                without resorting to bars or impact glass.
              </p>

              <h3>Premium Awning Brands We Install</h3>
              <p>
                <strong>Andersen 400 Series Awning:</strong> Andersen&apos;s composite Fibrex frame paired with their
                Stormwatch coastal package when needed. A great choice for McKinney homes facing severe weather.
              </p>
              <p>
                <strong>Pella Reserve Traditional Awning:</strong> Premium wood awning with optional aluminum
                cladding, ideal for the higher-end custom homes in McKinney where design integration matters.
              </p>
              <p>
                <strong>Marvin Signature Ultimate Awning:</strong> True wood interior with aluminum-clad exterior;
                multiple finishes and divided-lite patterns are available for the most discerning specifications.
              </p>
              <p>
                <strong>JELD-WEN Premium Vinyl Awning:</strong> Strong value pick for McKinney bathrooms, laundries,
                and kitchen-sink applications where a vinyl frame is the right call for the room.
              </p>

              <h3>Installation Notes for McKinney Homes</h3>
              <p>
                Awning windows are typically retrofitted into existing openings without changing the rough-opening
                dimensions, which makes them a relatively quick install. We pull the original window, prepare the
                opening with proper flashing, set the new unit level and plumb, foam the perimeter with low-expansion
                sealant, and install interior trim to match the existing room. Most awning replacements take an
                hour or two per opening, and we adjust the operator and multi-point lock for smooth long-term
                performance before we leave.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to learn how awning windows can enhance ventilation in your McKinney home. We&apos;ll
                measure on site, walk you through brand options, and send a detailed written estimate with no
                pressure follow-up.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Awning Windows">
                    <option value="Awning Windows">Awning Windows</option>
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
                  {windowServices.slice(0, 4).map((service) => (
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
          <h2>Schedule Your Free Awning Window Consultation</h2>
          <p>Add versatile ventilation to your McKinney home. Contact us today.</p>
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
