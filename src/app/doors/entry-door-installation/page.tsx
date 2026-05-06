import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'Entry Door Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Entry doors for Old East McKinney historic facades and Stonebridge Ranch curb appeal. Fiberglass and solid wood, multi-point lock, weatherstripping that holds against Uri-style cold.',
  keywords: 'entry doors McKinney TX, front door replacement, entry door installation, Andersen doors, Pella doors McKinney',
}

export default function EntryDoorPage() {
  const doorServices = servicesData.filter(s => s.category === 'Doors' && s.slug !== 'entry-door-installation')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/doors">Doors</Link>
          <span>/</span>
          <span>Entry Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Door Replacement</span>
              <h1>Entry Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Entry doors do double duty in McKinney: they carry the curb appeal of an Old East McKinney
                Victorian or Stonebridge Ranch traditional, and they hold the building envelope tight
                against North Texas summer heat and the post-Uri cold fronts that exposed weak weatherstripping
                across the metroplex. We install fiberglass and solid-wood entry doors from Andersen,
                Pella, JELD-WEN, and Marvin with multi-point locks and properly-set astragals.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Enhanced Security</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Energy Efficient</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Custom Designs Available</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Premium Hardware Options</span>
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
                src="/doors/entry-doors-mckinney-tx.jpg"
                alt="Entry door replacement services in McKinney, TX"
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
              <h2>Your Front Door Sets the Tone for the Entire Home</h2>
              <p>
                The entry door is one of the most heavily used components of your house, and in McKinney&apos;s
                climate it&apos;s also one of the most weather-stressed. A south- or west-facing front door takes
                hours of direct Texas sun every summer afternoon, hot enough to soften factory finishes and warp
                builder-grade steel. The same door faces freezing temperatures during winter cold fronts, severe
                storm-driven rain in spring, and the everyday wear of family use. Most original builder-grade
                steel entry doors in McKinney homes start showing real problems by year ten: rust at the bottom
                rail, sun-faded finish, weatherstripping that no longer compresses tightly, and a visible gap at
                the threshold during cold snaps. Replacement is a high-leverage upgrade.
              </p>
              <p>
                We replace entry doors throughout McKinney with premium fiberglass, true wood, and engineered
                composite products from Andersen, Pella, JELD-WEN, and Marvin. The result is a door that performs
                better thermally, looks better from the curb, and dramatically improves the security profile of
                the home with multi-point locking systems and reinforced strike plates.
              </p>

              <h3>Material Options for McKinney Front Doors</h3>
              <p>
                <strong>Fiberglass:</strong> The most-installed entry door material in McKinney, and for good
                reason. Fiberglass doesn&apos;t warp, doesn&apos;t rust, holds factory finishes well in Texas sun, and
                accepts wood-grain textures convincing enough to look like real stained wood from the curb. We
                install fiberglass smooth-skin doors for transitional and contemporary homes, and fiberglass
                mahogany-grain or oak-grain doors for traditional homes throughout Stonebridge Ranch, Trinity
                Falls, and the master-planned communities.
              </p>
              <p>
                <strong>Wood:</strong> True solid wood is the right choice for high-end custom homes and historic
                restorations in Old East McKinney where the original door was wood and the architectural intent
                calls for wood. Mahogany, knotty alder, and Douglas fir are common species, often with carved
                panels, divided-lite glass inserts, and custom hardware. Wood doors require periodic finishing
                maintenance, especially on south- and west-facing elevations, but the resulting look is
                impossible to fully replicate with synthetics.
              </p>
              <p>
                <strong>Steel:</strong> Modern steel entry doors with foam-insulated cores offer maximum security
                at an accessible price point. Factory finishes have improved significantly over the original
                builder-grade steel doors of the 1990s and 2000s, and current models hold up well to Texas
                conditions when properly specified.
              </p>

              <h3>Security Features We Recommend</h3>
              <p>
                Modern entry doors incorporate security features that older doors simply don&apos;t have. Multi-point
                locking systems engage at the head, foot, and middle of the door, distributing force across the
                jamb so a kicked door is far harder to breach. Reinforced strike plates with three-inch screws
                anchor into framing rather than the trim. Impact-resistant glass options on doors with sidelights
                or transoms eliminate the easy break-in path that simple tempered glass provides. We walk you
                through which features actually move the needle for your McKinney home and your specific concerns.
              </p>

              <h3>Energy Performance and Weather Sealing</h3>
              <p>
                A well-installed premium entry door produces a dramatically better thermal envelope than a
                builder-grade unit. Foam-insulated cores deliver R-values well above what older steel-only doors
                achieved. Compression weatherstripping at the head and jamb, plus a properly adjusted threshold
                with sweep at the bottom, eliminate the drafts that homeowners often feel during winter cold
                fronts. For McKinney homes that have noticed cold air pouring under the front door during a
                January freeze, the upgrade pays back in comfort immediately.
              </p>

              <h3>Glass, Sidelights, and Transoms</h3>
              <p>
                Most McKinney entry door upgrades include some glass component: a half-light, three-quarter
                light, or full-light pattern in the door itself, plus sidelights flanking the door and sometimes
                a transom above. We coordinate these as a single integrated assembly so the divided-lite patterns,
                hardware, and finish color match across the whole opening. Privacy glass, decorative leaded
                glass, and impact-resistant laminated options are all available depending on the design intent.
              </p>

              <h3>Hardware and Finishing Details</h3>
              <p>
                Entry door hardware sets the finishing tone: lever, knob, or thumb-latch handle in finishes from
                satin nickel to matte black to oil-rubbed bronze, paired with deadbolts and (often) decorative
                door knockers, kick plates, and house numbers. We help select hardware that matches the rest of
                the home&apos;s fixtures and the architectural style of the elevation. For McKinney custom homes
                where the existing interior fixtures define a finish palette, the entry door hardware should
                tie in cleanly.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore entry door options for your McKinney home. We&apos;ll measure on site,
                walk through material and design options, and send a detailed written estimate with no high-
                pressure sales follow-up.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Entry Doors">
                    <option value="Entry Doors">Entry Doors</option>
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
          <h2>Schedule Your Free Entry Door Consultation</h2>
          <p>Transform your McKinney home&apos;s entrance. Contact us today.</p>
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
