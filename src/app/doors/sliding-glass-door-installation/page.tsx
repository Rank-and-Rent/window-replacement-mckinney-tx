import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'Sliding Glass Door Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Premium sliding glass door replacement in McKinney, TX. Space-saving doors with expansive glass panels. Expert installation. Free estimates. Call 945-206-3998.',
  keywords: 'sliding glass doors McKinney TX, sliding door replacement, glass doors McKinney, patio sliding doors',
}

export default function SlidingGlassDoorPage() {
  const doorServices = servicesData.filter(s => s.category === 'Doors' && s.slug !== 'sliding-glass-door-installation')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/doors">Doors</Link>
          <span>/</span>
          <span>Sliding Glass Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Door Replacement</span>
              <h1>Sliding Glass Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Maximize your views and natural light with sleek sliding glass doors. These space-saving 
                doors operate smoothly on precision tracks, providing easy access to patios, decks, and 
                outdoor living areas.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Space-Saving Design</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Expansive Glass Panels</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Smooth Track Operation</span>
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
              <Image
                src="/doors/sliding-glass-doors-mckinney-tx.avif"
                alt="Sliding glass door replacement services in McKinney, TX"
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
              <h2>Sliding Glass Doors and Modern McKinney Outdoor Living</h2>
              <p>
                A sliding glass door is the architectural seam between the inside of your home and the patio,
                pool, or backyard living area on the other side. In McKinney, where outdoor living is part of
                the lifestyle for most of the year, the sliding glass door is one of the most-used and most-
                visible components of the rear elevation. The original builder-grade sliders that came with
                most McKinney homes from the 1990s and early 2000s are now well past their service life, and
                the symptoms are predictable: rollers that drag, latches that no longer engage cleanly, glass
                that fogs from failed seals, and a meaningful air leak around the perimeter on cold winter
                mornings. Replacement is a high-leverage upgrade.
              </p>
              <p>
                We replace sliding glass doors throughout McKinney with premium products from Andersen, Pella,
                Marvin, and JELD-WEN, sized to the existing opening and engineered to perform far better than
                the original. The result is a door that operates smoothly with two fingers, seals tightly when
                latched, and looks like a defining design element of the rear elevation rather than a worn-out
                opening someone clearly intended to replace eventually.
              </p>

              <h3>Configurations That Work for McKinney Homes</h3>
              <p>
                Sliding glass doors come in several configurations. The most common is a two-panel XO or OX, with
                one fixed panel and one operating panel; the X marks the operating side. Three-panel OXO sliders
                have a fixed center with operating panels on each end, common in great rooms and master suites
                where the homeowner wants the option of opening either or both ends. Four-panel configurations
                exist for very wide openings, often paired with stacking or pocket designs. Marvin and Andersen
                also offer multi-slide systems where multiple panels stack to one side, opening up to 80% of the
                wall to outdoor living. We help match configuration to room layout, prevailing wind direction,
                and ventilation goals.
              </p>

              <h3>Modern Track Systems and Smooth Operation</h3>
              <p>
                Premium sliding glass doors use stainless or zinc-plated rollers on adjustable mounting brackets,
                running on extruded aluminum or stainless steel tracks engineered to resist debris accumulation
                and wear. The result is a door that operates with two fingers even on full 8-foot panels,
                including over hundreds of cycles. We adjust roller height during installation to ensure the
                door tracks cleanly and the multi-point lock engages without binding, and we go over the
                cleaning routine that keeps the track operating cleanly long-term.
              </p>

              <h3>Energy Performance and Glass Packages</h3>
              <p>
                Sliding glass doors typically have larger glass area than any other opening in the wall, which
                means glass package selection drives most of the door&apos;s thermal performance. We spec Low-E2 or
                Low-E3 packages on most McKinney installations, with solar-control coatings on west- and south-
                facing patios where summer heat gain is the limiting factor. Argon fill is standard, and
                laminated impact-resistant glass is available for severe storm exposure. Properly specified
                premium sliding glass doors achieve U-factor numbers in the 0.30-0.35 range that satisfy ENERGY
                STAR requirements for the southern climate zone.
              </p>

              <h3>Hardware and Security</h3>
              <p>
                Modern sliding glass door hardware has evolved substantially. We install multi-point locking
                systems that engage at the head, foot, and middle of the operating panel, distributing force
                across the frame so the door is far harder to force open from outside. Reinforced aluminum or
                steel reinforcement at the latch position adds to the security profile. Foot bolts at the bottom
                rail provide additional locking when the door is fully closed. For McKinney homeowners who&apos;ve
                been concerned about the security of an aging slider, this is a meaningful upgrade.
              </p>

              <h3>Frame Material Choices</h3>
              <p>
                Premium sliding glass doors come in vinyl, fiberglass, aluminum, and clad wood frames. Vinyl is
                the most common pick for builder-grade replacements and works well at standard sizes. Fiberglass
                handles larger openings better because of its dimensional stability. Aluminum offers the slimmest
                sightlines for contemporary architecture in Tucker Hill and Adriatica Village. Clad wood (Marvin
                Signature Ultimate, Pella Reserve) is the right pick for high-end custom homes where the door
                interior matters as much as the exterior. We help match frame material to the home&apos;s style and
                the homeowner&apos;s long-term plans.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore sliding glass door options for your McKinney home. We&apos;ll measure on
                site, walk through configuration and hardware options, and send a detailed written estimate.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Sliding Glass Doors">
                    <option value="Sliding Glass Doors">Sliding Glass Doors</option>
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
          <h2>Schedule Your Free Sliding Glass Door Consultation</h2>
          <p>Maximize your views with beautiful sliding glass doors. Contact us today.</p>
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
