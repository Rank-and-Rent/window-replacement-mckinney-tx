import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Wood Windows Replacement McKinney TX | Authentic Natural Beauty',
  description: 'Premium solid wood replacement windows in McKinney, TX. Timeless natural beauty, superior craftsmanship, and authentic period-correct character. Call 945-206-3998.',
  keywords: 'wood windows McKinney TX, solid wood windows, traditional wood windows, authentic wood windows, custom wood windows',
}

export default function WoodWindowsPage() {
  const content = {
    title: 'Wood Windows Replacement in McKinney, TX',
    subtitle: 'Authentic Craftsmanship for Period Homes and Custom Builds',
    heroImage: '/window-types/wood-mckinney-tx.jpg',

    intro: "Solid wood windows occupy a specific high-end niche in the McKinney replacement market. They are the right answer for two distinct kinds of homes: the historic Victorian, craftsman, and bungalow homes of Old East McKinney where period authenticity matters as much as performance, and the high-end custom builds in Tucker Hill, Adriatica Village, and the country club area where wood is part of the original design language. They are not the right answer for builder-grade replacements in master-planned communities, where vinyl, fiberglass, or Andersen's Fibrex composite deliver better value at the price point. Wood is a deliberate choice; we'll help you decide if it's the right one for your home.",

    sections: [
      {
        heading: 'Why Wood Still Matters in McKinney',
        content: "There is no synthetic material that fully reproduces the look and feel of true solid wood. The grain pattern of mahogany, the warm tone of stained pine, the way oak takes a finish, the way cherry darkens over decades; all of these are properties of the actual material that vinyl wood-grain laminates and fiberglass paint can only approximate. For homes where the original windows were wood and the architectural integrity of the elevation depends on that material, replacing with anything other than wood is a visible compromise from the curb. McKinney's older neighborhoods include enough authentic period homes that wood remains a regular specification on our project board.",
      },
      {
        heading: 'Where Wood Windows Belong in McKinney',
        content: "The clearest application is the historic homes of Old East McKinney, particularly the Victorian and craftsman properties along Church Street, Tucker Street, and the surrounding blocks. Many of these homes still have original wood double-hungs from the early 1900s, and authentic wood replacements (often in matching divided-lite patterns) preserve the architectural character that makes the neighborhood special. Wood is also a frequent specification in the custom-built estates near McKinney Country Club and along Stonebridge Drive, where the original architect chose wood as part of the design intent. New high-end custom homes in Tucker Hill and Adriatica Village often include wood windows as a defining material on at least the front elevation.",
      },
      {
        heading: 'Thermal Performance of Modern Wood Windows',
        content: "Wood is naturally insulating because of its cellular structure, which contains millions of tiny air pockets that resist heat transfer. A properly built solid wood window with Low-E2 or Low-E3 glass and argon fill can achieve U-factor numbers in the 0.25 to 0.30 range, which puts it in the same performance band as premium vinyl, fiberglass, or aluminum-clad wood. Wood also moderates interior surface temperatures slightly compared to metal-framed windows, which gives the rooms a marginally warmer feel during cold snaps. For McKinney's climate, modern wood windows perform well thermally when paired with the right glass package.",
      },
      {
        heading: 'Maintenance Realities You Should Know',
        content: "Wood windows require ongoing exterior maintenance, and we'll be straightforward about it. Exterior surfaces need to be repainted or refinished every 3 to 5 years to prevent moisture intrusion and UV degradation, particularly on south- and west-facing elevations where Texas sun is most intense. Improperly maintained wood windows can rot at the bottom rail, fail at the muntins, and require replacement well before their natural service life. For homeowners who don't want this maintenance commitment, we typically recommend Pella Reserve Traditional or Marvin Signature Ultimate (both aluminum-clad wood) instead of full solid wood. The cladding does the maintenance work that the homeowner would otherwise have to do.",
      },
      {
        heading: 'Wood Species and Custom Options',
        content: "Premium wood window manufacturers offer a range of species: pine (the most economical and common), Douglas fir (slightly stronger and more dimensionally stable), mahogany (deeper color and excellent rot resistance), oak (strong open grain), and cherry (rich tone that darkens with age). Each takes stains and finishes differently, and each suits different architectural contexts. Pine works well in painted-finish applications throughout McKinney's craftsman homes. Mahogany is a frequent specification in higher-end custom builds. Cherry and oak appear in rooms where the homeowner wants the wood interior to be a defining feature, often paired with stained interior trim and casework.",
      },
      {
        heading: 'Lifespan and Long-Term Value',
        content: "A properly maintained solid wood window can easily last 50 to 100 years. Many McKinney homes still have original wood windows from the 1920s and 1930s that, with periodic refinishing and balance work, continue to function as designed. Modern wood windows from Marvin, Pella, and JELD-WEN benefit from preservation treatments that the original 1920s windows didn't have, which extends the realistic service life further. Wood is also unique among framing materials in that it can be refinished, sanded, restained, or repainted indefinitely; the same window can present different finishes across different decades of ownership.",
      },
    ],

    features: [
      'Authentic solid wood character',
      'Multiple species available (pine, fir, mahogany, oak, cherry)',
      'Strong natural thermal insulation',
      'Time-tested traditional joinery',
      'Refinishable indefinitely',
      'Period-correct for historic homes',
      'Custom divided-lite patterns and grilles',
      '50-100 year potential lifespan',
      'Significant property-value contribution in historic districts',
      'Compatible with all premium glass packages',
    ],

    brands: [
      {
        name: 'Marvin Signature Ultimate Wood',
        description: "Marvin's flagship solid wood line offers extensive species, finishes, and divided-lite options. The construction quality and customization range make it our most-recommended specification for high-end custom McKinney homes and historic restorations.",
      },
      {
        name: 'Pella Reserve Traditional Wood',
        description: "Pella's premium wood line uses select wood species and advanced preservation treatments to extend service life in the McKinney climate. A frequent specification in restorations throughout Old East McKinney where authentic detailing is essential.",
      },
      {
        name: 'JELD-WEN Custom Wood Windows',
        description: "JELD-WEN's premium wood windows feature authentic construction with their AuraLast preservation system, which extends wood life by reducing rot and decay risk. Strong choice for traditional homes throughout McKinney's older neighborhoods.",
      },
    ],

    faq: [
      {
        question: 'How much maintenance do wood windows really require in McKinney?',
        answer: "Wood windows need exterior repainting or refinishing every 3 to 5 years in the McKinney climate to prevent moisture damage and UV degradation. Interior surfaces require minimal maintenance beyond occasional cleaning. For homeowners who don't want exterior maintenance, aluminum-clad wood is a sensible alternative that preserves the wood interior while eliminating the painting cycle.",
      },
      {
        question: 'How long do wood windows last in North Texas?',
        answer: "With proper maintenance, quality wood windows last 50 to 100 years. The windows can be refinished repeatedly without replacement, and many of McKinney's historic homes still have original wood windows from the early 1900s that continue to function with periodic refinishing.",
      },
      {
        question: 'Are wood windows energy efficient enough for the Texas climate?',
        answer: "Yes. Modern wood windows with Low-E2 or Low-E3 glass and argon fill achieve U-factor numbers comparable to premium vinyl or fiberglass. Wood's natural insulating properties combined with modern glass packages produce ENERGY STAR-qualified configurations for the southern climate zone.",
      },
      {
        question: 'Are wood windows required in historic McKinney districts?',
        answer: "Some restorations in McKinney's historic neighborhoods are subject to architectural review where wood windows or convincing wood-look replacements are expected to maintain period character. Even when not technically required, wood windows are usually the right choice for authentic preservation of these properties.",
      },
      {
        question: 'Can I paint or stain wood windows myself?',
        answer: "Yes, wood windows accept any quality exterior or interior paint or stain. Many of the brands we install ship with a factory primer or sealer that prepares the wood for field finishing. We can also order pre-finished factory-painted or stained units if you'd rather not handle finishing yourself.",
      },
      {
        question: 'How much do solid wood windows cost with installation?',
        answer: "Wood window costs vary substantially by species, configuration, and finish package. Everything we sell is priced including installation. Premium wood and aluminum-clad wood units typically run toward the upper end of our pricing range, up to roughly $3,500 per window for top-tier custom configurations. We do not sell windows without installation.",
      },
    ],
  }

  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title={content.title}
          subtitle={content.subtitle}
          image={content.heroImage}
        />
        <ServiceContent content={content} />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
