import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Aluminum Windows Replacement McKinney TX | Durable, Modern Design',
  description: 'High-quality aluminum replacement windows in McKinney, TX. Durable, sleek, and energy-efficient with thermal breaks. Andersen, Pella & JELD-WEN aluminum options. Call 945-206-3998.',
  keywords: 'aluminum windows McKinney TX, aluminum replacement windows, durable windows, modern aluminum windows, Andersen aluminum windows, Pella aluminum windows, JELD-WEN aluminum windows',
}

export default function AluminumWindowsPage() {
  const content = {
    title: 'Aluminum Windows Replacement in McKinney, TX',
    subtitle: 'Sleek, Durable Performance with Modern Thermal Efficiency',
    heroImage: '/window-types/aluminum-mckinney-tx.jpg',

    intro: "Aluminum windows occupy a specific niche in the McKinney replacement market. They are the strongest and slimmest framing material on the residential side of the industry, which makes them the right answer for contemporary architecture, large openings that need narrow sightlines, and homeowners who want a window with a defined modern look. Modern aluminum is nothing like the leaky, conductive single-pane aluminum that defined the 1970s. Today's residential aluminum windows incorporate thermal breaks, multi-cavity extrusions, and high-performance Low-E glass packages that push their U-factor performance into the same range as quality vinyl, while preserving the strength and minimalism that aluminum is known for.",

    sections: [
      {
        heading: 'Thermal Break Technology That Changes the Equation',
        content: "The single biggest improvement in residential aluminum window technology over the last 30 years is the thermal break. A thermal break is a non-conductive material (typically polyurethane or polyamide) inserted between the inside and outside aluminum extrusions, creating an insulating barrier that prevents heat conduction through the metal. Without it, aluminum is a poor performer thermally because metal conducts heat readily. With a properly engineered thermal break, the same window achieves U-factor values comparable to vinyl. For McKinney's hot summers, this is the difference between a window that radiates heat into the room all afternoon and one that holds a comfortable interior surface temperature.",
      },
      {
        heading: 'Strength and Slim Sightlines for Larger Openings',
        content: "Aluminum is structurally stronger than vinyl, fiberglass, or wood at the same frame thickness, which is why modern aluminum windows can be extruded into much narrower profiles than other materials. A standard vinyl window might have 3 inches of frame on each side of the glass; a comparable aluminum window can have 2 inches or less. That extra glass area is meaningful in great rooms, primary suites, and any room where the homeowner wants the window to feel more like a window than a wall. For McKinney custom homes in Tucker Hill and Adriatica Village where contemporary architecture is the design language, aluminum's slim sightlines are often the right answer.",
      },
      {
        heading: 'Long-Term Durability in McKinney Conditions',
        content: "Aluminum simply does not warp, rot, or swell. It does not absorb moisture, it does not feed mold, and it does not change dimension with seasonal temperature swings the way wood and (to a lesser degree) vinyl can. In McKinney's climate where summer humidity and severe storm season both put windows under stress, aluminum's dimensional stability translates directly into longer service life and tighter long-term seals. The frames themselves regularly outlast the insulating glass units they hold. With a quality factory finish, exterior repainting is needed only every 8 to 12 years, and the frames themselves can run 40 years or more in service.",
      },
      {
        heading: 'Where Aluminum Fits in McKinney Homes',
        content: "Aluminum is at its best in modern and contemporary architecture: clean-lined homes in Tucker Hill, contemporary new builds in Trinity Falls, transitional designs along the Stonebridge Ranch fairways, and any home where the design intent calls for narrow window frames that step back from the view. Aluminum is also a strong choice in commercial-influenced residential designs where large picture windows and floor-to-ceiling glass are part of the program. By contrast, aluminum is usually not the first choice for traditional Victorian or craftsman homes in Old East McKinney, where the wider sightlines of wood or wood-clad windows match the home's original character better.",
      },
      {
        heading: 'Color, Finish, and Customization Options',
        content: "Aluminum accepts an enormous range of factory finishes. Powder-coat colors are available in essentially any shade you can specify, including matte black, anodized bronze, satin nickel, and dozens of custom colors that match contemporary architectural palettes. The finishes are far more durable than paint applied later in the field, and they typically carry 15- to 20-year warranties against fading and chalking. For McKinney homeowners who want their windows to be a defining design element rather than something to disappear into the wall, aluminum's color flexibility is one of its strongest selling points.",
      },
      {
        heading: 'Glass Packages and Energy Performance',
        content: "Modern aluminum windows pair with the same Low-E glass packages, argon fills, and warm-edge spacers as any other premium framing material. We typically spec Low-E2 or Low-E3 coatings with argon fill on McKinney installations, and on west-facing or south-facing elevations we sometimes upgrade to dual Low-E packages tuned for solar control. Triple-pane glass is available in some lines for homeowners who want the best possible thermal performance, although in the McKinney climate dual-pane Low-E with argon is usually sufficient for code, comfort, and ENERGY STAR qualification.",
      },
    ],

    features: [
      'Thermal break technology for energy efficiency',
      'Exceptional strength and impact resistance',
      'Sleek, contemporary appearance',
      'Narrow sightlines maximize glass area',
      'Available in unlimited custom colors',
      '40+ year frame lifespan',
      'Resists rot, warp, and corrosion',
      'Compatible with all glass types',
      'Smooth, precise operation',
      '100% recyclable at end of life',
    ],

    brands: [
      {
        name: 'Andersen Aluminum Series',
        description: "Andersen pairs proven window engineering with advanced aluminum extrusion. Their thermal-break aluminum lines deliver durable performance with the slim sightlines and contemporary look that custom McKinney homes often require.",
      },
      {
        name: 'Pella Aluminum Windows',
        description: "Pella's aluminum windows incorporate the EnduraClad protection system and engineered thermal barriers. The result is aluminum performance with the weather resistance and color longevity that McKinney's climate demands.",
      },
      {
        name: 'JELD-WEN Aluminum Collection',
        description: "JELD-WEN offers premium aluminum windows with fusion-welded construction and comprehensive thermal breaks. Their custom color program matches almost any architectural palette specified for contemporary McKinney homes.",
      },
    ],

    faq: [
      {
        question: 'Do aluminum windows require special maintenance in McKinney?',
        answer: "Aluminum windows are exceptionally low-maintenance. The frames themselves never rust, rot, or warp. The factory finish typically goes 8 to 12 years before any cosmetic refinishing is needed, and many homeowners go longer than that. Operational hardware needs only occasional cleaning and lubrication.",
      },
      {
        question: 'Are aluminum windows energy efficient in the McKinney climate?',
        answer: "Modern aluminum windows with proper thermal breaks deliver U-factor and SHGC numbers comparable to quality vinyl. In McKinney's climate, properly specified aluminum with Low-E2 or Low-E3 glass and argon fill performs at ENERGY STAR levels and produces measurable cooling-load reductions on west-facing elevations.",
      },
      {
        question: 'How long do aluminum windows last in North Texas?',
        answer: "Quality aluminum window frames routinely last 40 years or more. The insulating glass unit inside the frame typically carries a 20-year manufacturer warranty against seal failure. With a quality factory finish maintained every 8 to 12 years, aluminum windows often outlast the homes they're installed in.",
      },
      {
        question: 'Are aluminum windows a good choice for McKinney custom homes?',
        answer: "Yes, particularly for contemporary, modern, and transitional architecture. The narrow sightlines, custom color program, and structural strength of aluminum make it a frequent specification for custom builds in Tucker Hill, Adriatica Village, and the contemporary corners of Stonebridge Ranch and Trinity Falls.",
      },
      {
        question: 'Are aluminum windows recyclable?',
        answer: "Yes. Aluminum is 100% recyclable without loss of quality, and recycled aluminum requires only about 5% of the energy needed to produce new aluminum. Many aluminum window manufacturers use significant recycled content in their products, and the frames can be recycled at end of life.",
      },
      {
        question: 'How much do aluminum windows cost with installation?',
        answer: "Aluminum window costs vary by size, line, and glass package. Everything we sell is priced including installation. Pricing on small vinyl units starts around $850 per opening; aluminum and premium frame materials run higher, up to roughly $3,500 per window for top-tier custom configurations. We do not sell windows without installation.",
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
