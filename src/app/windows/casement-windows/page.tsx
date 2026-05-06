import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../service.module.css'

export const metadata: Metadata = {
  title: 'Casement Window Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Casement windows engineered for Stonebridge Ranch HOA standards and post-Uri freeze resilience. Compression seal, multi-point lock, Low-E argon. Free in-home estimate.',
  keywords: 'casement windows McKinney TX, crank windows, replacement casement windows, Andersen casement windows, Pella casement',
}

export default function CasementWindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows' && s.slug !== 'casement-windows')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/windows">Windows</Link>
          <span>/</span>
          <span>Casement Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Window Replacement</span>
              <h1>Casement Window Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Casement windows test among the tightest-sealing styles you can buy, which is why we specify
                them on the most exposed elevations of McKinney homes: west-facing rooms in Stonebridge Ranch,
                second-story bedrooms in Trinity Falls, and Craig Ranch elevations that take wind-driven storm
                rain. The compression seal also held up best in the homes we revisited after Winter Storm Uri.
                Multi-point lock, Low-E argon glass, factory-finished hardware.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Superior Seal &amp; Efficiency</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Unobstructed Views</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Easy Crank Operation</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Maximum Ventilation</span>
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
                src="/images/services/casement-windows/casement-window1.jpeg"
                alt="Premium casement windows installed in McKinney homes"
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
              <h2>The Most Energy-Efficient Window Style for McKinney Homes</h2>
              <p>
                Casement windows consistently test among the most energy-efficient window styles you can buy, and the
                physics behind that ranking is simple. A double-hung window has a meeting rail in the middle and
                tracks on the sides, both of which are friction-fit details that allow some air to pass when the
                wind hits a wall hard. A casement, by contrast, is hinged at one side and swings outward like a door,
                and when you crank it closed the sash compresses tightly against bulb-style weatherstripping all the
                way around the frame. The result is a near-complete air seal at every closed perimeter, which is
                exactly what you want during a North Texas summer when the AC is fighting to hold setpoint.
              </p>
              <p>
                That seal is also why casements are a frequent recommendation for the more exposed elevations of
                McKinney homes: west-facing rooms in Stonebridge Ranch, second-story bedrooms in Trinity Falls, and
                anywhere along a Craig Ranch elevation that takes wind-driven rain during severe storm season. Pair
                a quality casement with Low-E2 or Low-E3 glass and argon fill from Andersen, Pella, Marvin, or
                JELD-WEN and you get measurable cooling-load reductions and a noticeable drop in air infiltration on
                day one.
              </p>

              <h3>How Casements Capture McKinney&apos;s Breezes</h3>
              <p>
                A casement is unique among common window styles because it opens fully and projects outward into the
                airflow. That means the open sash itself acts like a small scoop, redirecting side breezes into the
                home. Position a pair of casements correctly on opposing walls and you can pull cross-flow ventilation
                through a room that a sliding or double-hung window would never catch. For McKinney homeowners who
                want to enjoy the pleasant spring and fall weather without running the AC, this is a real advantage.
              </p>

              <h3>Clean, Modern Aesthetic for Today&apos;s McKinney Architecture</h3>
              <p>
                Without a meeting rail crossing the middle of the glass, casements offer a cleaner, more contemporary
                sightline than a double-hung. That makes them a natural fit for the modern and transitional homes
                going up in Tucker Hill, Adriatica Village, and the newer Trinity Falls subdivisions. We also use
                casements in pairs flanking a fixed picture window to combine a clean view with operable ventilation
                in the same opening. This is a popular configuration in great rooms and primary suites throughout
                McKinney.
              </p>

              <h3>Premium Casement Brands We Install</h3>
              <p>
                <strong>Andersen 400 Series Casement:</strong> Andersen&apos;s flagship casement uses Fibrex composite
                framing for excellent dimensional stability and low long-term maintenance. The Easy-Operating
                hardware system delivers smooth crank action even on larger units.
              </p>
              <p>
                <strong>Pella Reserve Traditional Casement:</strong> Pella&apos;s premium wood casement with optional
                aluminum cladding, ideal for the higher-end custom homes near McKinney Country Club and in Tucker
                Hill. Available with extensive divided-lite patterns and color customization.
              </p>
              <p>
                <strong>Marvin Signature Ultimate Casement:</strong> Marvin&apos;s top-tier casement combines an
                aluminum-clad exterior with a true wood interior. Multiple interior species, factory finishes, and
                hardware lines make this a frequent specification for custom builds.
              </p>
              <p>
                <strong>JELD-WEN Premium Vinyl Casement:</strong> A strong value option for builder-grade
                replacements in Eldorado, Mallard Lakes, and Provine Farms. Fusion-welded frame and Low-E options
                cover most performance needs at a manageable price.
              </p>

              <h3>Casement Hardware and Long-Term Operation</h3>
              <p>
                The crank-operator and multi-point lock are the moving parts that distinguish a casement from
                simpler styles, and they need to be specified well to perform long term. The brands we install all
                use stainless or corrosion-resistant hardware rated for tens of thousands of operating cycles. We
                lubricate and adjust the operators on installation day and again at the end-of-job walkthrough,
                and we&apos;ll come back to fine-tune the multi-point engagement if anything settles after the seasons
                change.
              </p>

              <h3>Where Casements Fit in McKinney Homes</h3>
              <p>
                Casements work especially well over kitchen sinks, in bathrooms where ease of operation matters, in
                bedrooms where homeowners want maximum airflow, and on second floors where reaching across to crank
                a window is easier than lifting a heavy sash. We also use casements as egress windows in bedrooms
                where the local code requires a specific clear-opening dimension, because a casement&apos;s full-swing
                operation usually clears that minimum more easily than a comparable double-hung.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore casement window options for your McKinney home. We&apos;ll measure on site,
                walk you through the brand and glass options that make sense for your elevations, and send a
                detailed written estimate.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Casement Windows">
                    <option value="Casement Windows">Casement Windows</option>
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

      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Common Questions</span>
            <h2>Casement Window <em>FAQs</em></h2>
          </div>
          
          <div className={styles.faqGrid}>
            <details className={styles.faqItem}>
              <summary>Are casement windows more energy efficient?</summary>
              <p>Yes! The compression seal created when casement windows close makes them one of the most energy-efficient window styles available.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>Do casement windows require more maintenance?</summary>
              <p>The crank mechanism requires occasional lubrication, but otherwise casement windows are as low-maintenance as any other style.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>Can I install casement windows where I currently have double-hung?</summary>
              <p>In most cases, yes. Our team can retrofit casement windows into existing openings or modify the opening if needed.</p>
            </details>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Schedule Your Free Casement Window Consultation</h2>
          <p>Discover the energy efficiency and beauty of casement windows. Contact us today.</p>
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
