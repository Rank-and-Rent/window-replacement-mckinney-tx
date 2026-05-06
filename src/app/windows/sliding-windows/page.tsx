import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../service.module.css'

export const metadata: Metadata = {
  title: 'Sliding Window Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Premium sliding window replacement in McKinney, TX. Horizontally gliding windows for wide openings. Expert installation. Free estimates. Call 945-206-3998.',
  keywords: 'sliding windows McKinney TX, horizontal sliding windows, gliding windows, wide opening windows McKinney',
}

export default function SlidingWindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows' && s.slug !== 'sliding-windows')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/windows">Windows</Link>
          <span>/</span>
          <span>Sliding Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Window Replacement</span>
              <h1>Sliding Window Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Gliding horizontally on smooth tracks, sliding windows are ideal for wide openings and areas 
                with limited exterior clearance. Their contemporary profile complements modern McKinney 
                architecture while maximizing your view.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Wide Opening Capability</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>No Exterior Swing Space</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Modern, Clean Aesthetic</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Easy Operation</span>
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
                src="/images/services/sliding-windows/sliding-window1.jpeg"
                alt="Premium sliding windows installed in McKinney homes"
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
              <h2>Sliding Windows: When Wide Openings Work Best</h2>
              <p>
                Sliding windows operate horizontally on roller tracks, with one or both sashes gliding side-to-side
                instead of moving vertically like a hung window or swinging outward like a casement. That single
                operational difference makes sliders the right answer for a particular subset of McKinney window
                openings: spans that are wider than they are tall, openings adjacent to patios or walkways where an
                outward-swinging casement would interfere with traffic, and elevations where a horizontal proportion
                fits the architecture better than a vertical hung window.
              </p>
              <p>
                We see sliders most often in 1970s and 1980s ranch-style homes throughout McKinney&apos;s established
                neighborhoods, where the original aluminum sliders are well past their service life and need to be
                replaced with a modern equivalent. They also appear regularly in newer construction in Trinity Falls
                and Craig Ranch, particularly in great-room compositions where a wide horizontal slider acts as an
                operable element below a fixed picture window.
              </p>

              <h3>Why Sliders Make Sense in Many McKinney Homes</h3>
              <p>
                The first practical benefit is exterior clearance. A casement projects outward when open, which can
                be a problem along a side yard, near a deck rail, or where a walkway runs close to the house. A
                slider stays inside its own frame, so it&apos;s a better choice anywhere outside clearance matters.
                The second benefit is operational simplicity: there&apos;s no crank to turn, no balance to adjust, and
                the moving sash glides with two fingers when the rollers are clean. For McKinney homeowners with
                mobility considerations or for primary-suite applications where the homeowner just wants the window
                to open easily, a slider is often the right answer.
              </p>

              <h3>Configurations: XO, OX, and OXO</h3>
              <p>
                Sliding windows come in several common configurations. A two-panel XO or OX slider has one fixed and
                one operating sash, with the X marking the operating side. A three-panel OXO slider has a fixed
                center panel with operating panels on each side, and is common in great rooms and master suites
                where the homeowner wants the option of opening either or both ends. We help you choose based on
                room layout, prevailing wind direction, and ventilation goals during the design consultation.
              </p>

              <h3>Energy Performance and Modern Sliders</h3>
              <p>
                The big knock on older aluminum sliders was air infiltration: the original tracks weren&apos;t sealed
                tightly, and air could pass freely between the sashes even when the window was closed. Modern
                premium sliders from Andersen, Pella, Marvin, and JELD-WEN solve this with multi-point latches,
                interlock seals at the meeting rail, and vinyl-bulb weatherstripping that compresses tightly when
                latched. The result is a slider that performs comparably to a casement or double-hung in air
                infiltration testing, when properly specified and installed. Pair it with Low-E2 or Low-E3 glass
                and argon fill for full McKinney-climate performance.
              </p>

              <h3>Premium Sliding Window Brands We Install</h3>
              <p>
                <strong>Andersen 100 Series Gliding Windows:</strong> Andersen&apos;s composite Fibrex gliding window is
                a value-leading option with excellent thermal performance and a long-lasting frame.
              </p>
              <p>
                <strong>Pella 250 Series Sliding:</strong> Pella&apos;s vinyl slider with InsulShield Low-E options.
                A reliable workhorse for McKinney builder-grade replacements where horizontal proportions are
                already in place.
              </p>
              <p>
                <strong>Marvin Elevate Sliding:</strong> Fiberglass exterior with wood interior, ideal for upmarket
                replacements in Tucker Hill or Adriatica Village where a wood interior matters but exterior maintenance
                does not.
              </p>
              <p>
                <strong>JELD-WEN Premium Vinyl Sliding:</strong> Strong value pick with fusion-welded frames and
                Low-E glass options that perform well in the McKinney climate.
              </p>

              <h3>Maintenance and Long-Term Operation</h3>
              <p>
                The roller track is the part of a sliding window that needs occasional attention. Dust and debris
                accumulate over time, and most premium sliders have a removable sill cover or accessible track design
                that lets you vacuum the channel during normal cleaning. Many of the lines we install also offer
                lift-out sashes, which makes deep cleaning of the track and exterior glass straightforward. We
                show homeowners the operation and maintenance routine on installation day so the windows continue
                to perform as designed.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore sliding window options for your McKinney home. We&apos;ll measure on site,
                walk through configurations, and send a detailed written estimate.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Sliding Windows">
                    <option value="Sliding Windows">Sliding Windows</option>
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
          <h2>Schedule Your Free Sliding Window Consultation</h2>
          <p>Experience the modern functionality of sliding windows. Contact us today.</p>
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
