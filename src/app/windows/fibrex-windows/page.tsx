import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Fibrex Windows Replacement McKinney TX | Andersen Premium Composite',
  description: "Andersen Fibrex composite replacement windows in McKinney, TX. Wood-fiber and polymer composite for excellent dimensional stability and energy performance. Call 945-206-3998.",
  keywords: 'Fibrex windows McKinney TX, Andersen Fibrex windows, composite windows, premium replacement windows, energy efficient Fibrex windows, durable composite windows',
}

export default function FibrexWindowsPage() {
  const content = {
    title: 'Fibrex Windows Replacement in McKinney, TX',
    subtitle: "Andersen's Composite Technology for Stability and Long-Term Performance",
    heroImage: '/window-types/fibrex-mckinney-tx.jpg',

    intro: "Fibrex is Andersen's proprietary composite material, made from reclaimed wood fibers bound with thermoplastic polymer. It is engineered to deliver the dimensional stability and natural insulation properties of wood with the moisture resistance and consistency of synthetic materials. Andersen has been refining the formula since the 1990s, and the result is a frame material that resists the warping common in solid wood, the brittleness common in early-generation vinyl, and the thermal conductivity that limits aluminum's performance in residential applications. For McKinney homeowners considering an Andersen window package, Fibrex is the material at the heart of the 100 Series and a structural component in several of the higher-tier lines.",

    sections: [
      {
        heading: 'What Fibrex Actually Is',
        content: "Fibrex is a wood-and-polymer composite, not a vinyl, not a fiberglass, and not a solid wood. The material starts with wood fibers, typically reclaimed from Andersen's own manufacturing waste streams, blended with a thermoplastic polymer matrix and extruded into the window frame profile. The wood content gives the frame its natural insulating properties and a slightly warmer feel than pure synthetic materials. The polymer matrix gives it dimensional stability across temperature swings and resistance to moisture intrusion. The end result performs in roughly the same band as fiberglass on most key metrics, with a slightly different look and feel, and at a price point that often comes in below comparable fiberglass.",
      },
      {
        heading: 'Why Fibrex Suits the McKinney Climate',
        content: "Fibrex's coefficient of thermal expansion is much lower than vinyl, which means the frames don't grow noticeably during a 105-degree August afternoon and shrink during a January cold front. That stability matters for the long-term integrity of the seals around the glass and the weatherstripping at the sash. Solid wood is dimensionally stable across temperature but reacts to humidity, which can be an issue in McKinney during the wetter parts of spring and summer. Fibrex doesn't react to moisture the way wood does. The combination produces a frame that holds its shape and its seal year-round, which translates to consistent thermal performance and air-tightness across seasons.",
      },
      {
        heading: 'Where Fibrex Fits in McKinney Homes',
        content: "Fibrex is the right answer for McKinney homeowners who want better long-term performance than standard vinyl can deliver, but don't need the wood interior of a clad wood line. We see it most often in mid- to upper-tier replacements throughout Stonebridge Ranch, Trinity Falls, and Tucker Hill, where the homeowner is staying long-term and wants a window that will hold its appearance and performance through multiple decades. Andersen's 100 Series uses Fibrex as the core frame material, and 200 Series and 400 Series use Fibrex in various structural applications combined with other materials. We help you decide which Andersen line maps to your home and your priorities.",
      },
      {
        heading: 'Aesthetics, Color, and Finish',
        content: "Fibrex is factory-finished in a range of standard colors: white, sandtone, dark bronze, terratone, and several wood-grain laminate options that approximate the look of stained wood from the curb. Custom colors are available on the 200 and 400 Series. The frames have a slightly different texture than smooth vinyl; some homeowners describe them as feeling more substantial and slightly more matte than glossy vinyl, which is a function of the wood-fiber content in the composite. The finishes are baked in at the factory and carry long warranties against fading and chalking, with no exterior repainting required during the warranty period.",
      },
      {
        heading: 'Energy Performance and Glass Packages',
        content: "Fibrex windows pair with Andersen's Low-E4 SmartSun, Low-E4, and standard Low-E2 glass packages depending on the line and the specifications of the home. For McKinney's climate, we typically recommend SmartSun on west- and south-facing elevations to control solar heat gain, and standard Low-E4 on north and east where SHGC tuning is less critical. Combined with argon fill and Andersen's edge-spacer technology, premium Fibrex windows produce U-factor numbers in the 0.27-0.30 range that satisfy ENERGY STAR requirements for the southern climate zone and produce measurable cooling-load reductions during peak summer.",
      },
      {
        heading: 'Long-Term Durability and Warranty Coverage',
        content: "Andersen warrants Fibrex frames for 20 years against defects in material and manufacturing, with an additional 20-year glass warranty against insulating glass seal failure. Realistic service life on the frame is well past those warranty periods, with many of the earliest Fibrex installations from the late 1990s and early 2000s still performing as designed in McKinney homes. The material itself is designed to be recyclable at end of life, and Andersen continues to use significant amounts of post-industrial recycled wood fiber in current production. For McKinney homeowners thinking past the first decade, Fibrex represents a strong long-term investment.",
      },
    ],

    features: [
      "Andersen's proprietary wood-polymer composite",
      'Low coefficient of thermal expansion',
      'Strong moisture resistance and dimensional stability',
      'ENERGY STAR-qualified configurations available',
      'Fusion-welded frame construction',
      'Standard and custom color options',
      '20-year frame and glass warranty coverage',
      'Long realistic service life',
      'Available across Andersen 100, 200, and 400 Series',
      'Compatible with Low-E4 SmartSun glass packages',
    ],

    brands: [
      {
        name: 'Andersen 100 Series Fibrex',
        description: "Andersen's value-tier Fibrex line. Strong picks for McKinney builder-grade replacements where the homeowner wants to step up from standard vinyl performance without paying premium prices.",
      },
      {
        name: 'Andersen 200 Series Fibrex',
        description: "Mid-range Fibrex with extended grille and color options. A frequent specification across Stonebridge Ranch, Trinity Falls, and the master-planned communities where the homeowner wants flexibility on aesthetic details.",
      },
      {
        name: 'Andersen 400 Series Woodwright',
        description: "Andersen's premium line that combines Fibrex with a wood interior. The right answer for higher-end McKinney homes that need a wood interior look without committing to full solid wood maintenance.",
      },
    ],

    faq: [
      {
        question: 'How is Fibrex different from vinyl?',
        answer: "Fibrex is a wood-and-polymer composite, while vinyl is a pure thermoplastic polymer. Fibrex has lower thermal expansion, better dimensional stability across seasons, and a slightly more substantial feel than vinyl. It's also priced as a step up from standard vinyl in most Andersen line comparisons.",
      },
      {
        question: 'Is Fibrex the same as fiberglass?',
        answer: "No. Fibrex is a wood-fiber composite, while fiberglass is a glass-fiber composite. They perform in similar bands on most key metrics. The choice between Fibrex (Andersen-specific) and fiberglass (Marvin Elevate, Pella Impervia) usually comes down to which brand and product line fits the home's needs.",
      },
      {
        question: 'How long do Fibrex windows last in McKinney?',
        answer: "Andersen's frame and glass warranties run 20 years on most lines, and realistic service life on the frame is well beyond that. Some of the earliest Fibrex installations from the late 1990s are still performing as designed in McKinney homes today.",
      },
      {
        question: 'Are Fibrex windows energy efficient in the Texas climate?',
        answer: "Yes. Premium Fibrex configurations with Low-E4 SmartSun glass and argon fill produce ENERGY STAR-qualified U-factor and SHGC numbers for the southern climate zone, and they deliver measurable cooling-load reductions on west- and south-facing McKinney elevations.",
      },
      {
        question: 'Does Fibrex need to be painted or refinished?',
        answer: "No. The factory finish is baked into the material and carries long warranties against fading and chalking. Routine cleaning is the only maintenance the frames require.",
      },
      {
        question: 'How much do Fibrex windows cost with installation?',
        answer: "Fibrex window costs vary by line, size, and glass package. Everything we sell is priced including installation. Andersen 100 Series is priced as a step above standard vinyl; 200 and 400 Series sit in the upper portion of our pricing range, up to roughly $3,500 per window for top-tier configurations. We do not sell windows without installation.",
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
