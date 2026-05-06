import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'Storm Door Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Storm doors for McKinney Old East porches and Trinity Falls covered entries. Adds insulation against post-Uri cold fronts and shields entry finishes from spring hail spray.',
  keywords: 'storm doors McKinney TX, storm door installation, screen doors, security doors McKinney',
}

export default function StormDoorPage() {
  const doorServices = servicesData.filter(s => s.category === 'Doors' && s.slug !== 'storm-door-installation')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/doors">Doors</Link>
          <span>/</span>
          <span>Storm Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Door Replacement</span>
              <h1>Storm Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Storm doors add a meaningful insulating air gap in front of the entry door, which matters
                more in McKinney since Winter Storm Uri than it did before. They also shield the entry
                finish from spring hail spray and Old East McKinney&apos;s mature-tree pollen and debris. We
                spec full-view, mid-view, and ventilating storm doors with Low-E glass, retractable
                screens, and finish hardware that matches the existing entry.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Added Security Layer</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Weather Protection</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Improved Energy Efficiency</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Ventilation Options</span>
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
                src="/doors/storm-doors-mckinney-tx.jpg"
                alt="Storm door replacement services in McKinney, TX"
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
              <h2>Why a Storm Door Still Matters in McKinney</h2>
              <p>
                A storm door sits in front of your primary entry door and serves three distinct functions:
                weather protection that extends the life of the entry door behind it, ventilation when the
                weather is pleasant, and an additional security layer at the front of the house. In McKinney&apos;s
                climate, the weather-protection role is the most economically meaningful. A premium fiberglass
                or wood entry door with a south- or west-facing exposure takes hard UV every summer afternoon,
                wind-driven rain during severe storm season, and freezing temperatures during winter cold fronts.
                A quality storm door takes most of that abuse instead, and meaningfully extends the service life
                of the more expensive door behind it.
              </p>
              <p>
                We install storm doors throughout McKinney from Andersen, Pella, and Larson (a JELD-WEN-affiliated
                manufacturer), in full-view, half-view, and security configurations, with retractable screens,
                self-storing screens, and ventilating models. The right pick depends on your front door
                orientation, your security concerns, and the architectural style of the home.
              </p>

              <h3>Full-View Storm Doors</h3>
              <p>
                Full-view storm doors use a single large glass panel that lets you see your primary entry door
                from the curb. They&apos;re the right pick when the homeowner has invested in a beautiful entry door
                (a custom mahogany, a stained fiberglass mahogany-grain, or a high-end painted unit) and wants
                that door to remain the visible focal point of the elevation. Many full-view models offer
                interchangeable glass and screen panels: glass for winter protection, screen for spring and fall
                ventilation. We also install models with retractable screens that disappear when not in use,
                eliminating the seasonal panel swap entirely.
              </p>

              <h3>Ventilating Storm Doors</h3>
              <p>
                Ventilating models use a sliding-glass-and-screen design where the glass and screen are both
                permanently installed in the door, and you slide the glass panel up or down to expose the screen
                for airflow. This is the most practical configuration for homeowners who want frequent
                ventilation without seasonal panel changes. Larson&apos;s ventilating screen-away storm doors with
                retractable screens are particularly popular in McKinney because they look clean when the screen
                isn&apos;t deployed.
              </p>

              <h3>Security Storm Doors</h3>
              <p>
                Security-rated storm doors use reinforced frames, heavy-duty hinges, and multi-point locking
                systems to add a meaningful layer of resistance to forced entry. Some include grille work over
                the glass to prevent break-in attempts that rely on breaking the storm door glass to reach the
                primary door&apos;s deadbolt. For McKinney homeowners with specific security concerns, especially on
                ground-floor units in less-busy neighborhoods, security storm doors are a worthwhile upgrade
                that doesn&apos;t require replacing the primary entry door.
              </p>

              <h3>Energy Performance Considerations</h3>
              <p>
                A storm door installed properly in front of an existing entry door creates a small dead-air space
                between the two units, which functions as additional insulation and reduces the perceived draft
                during winter cold fronts. The energy gain isn&apos;t enormous on its own (a high-quality entry door
                already seals well), but in combination with the primary door, the storm door produces a
                measurably tighter envelope at the entry. For older McKinney homes with original entry doors that
                no longer seal as designed, a storm door can also serve as a temporary fix while the homeowner
                budgets for a full entry door replacement.
              </p>

              <h3>Material and Frame Options</h3>
              <p>
                Most premium storm doors use aluminum or fiberglass frames with engineered insert panels. The
                aluminum is typically painted in a factory-applied finish that matches popular entry door colors,
                and fiberglass frames offer the same color stability with slightly more dimensional stability
                across the McKinney temperature range. Lower-tier models use thinner aluminum and may not hold up
                as well to slamming or wind events. We install premium tier products as standard on McKinney
                projects because the performance gap is meaningful.
              </p>

              <h3>Hardware and Closing Mechanisms</h3>
              <p>
                A modern storm door uses a hydraulic closer that prevents the door from slamming shut in wind,
                paired with a top-mounted closer cylinder that adjusts speed. Some models include a hold-open
                feature that lets you keep the door propped open when carrying groceries or coordinating with
                deliveries. Hardware finishes match the entry door hardware: satin nickel, matte black, oil-
                rubbed bronze, or whatever ties cleanly into the rest of the home&apos;s exterior fixtures.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore storm door options for your McKinney home. We&apos;ll measure on site,
                walk through configuration options, and send a detailed written estimate.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Storm Doors">
                    <option value="Storm Doors">Storm Doors</option>
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
          <h2>Schedule Your Free Storm Door Consultation</h2>
          <p>Add protection and efficiency to your entry. Contact us today.</p>
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
