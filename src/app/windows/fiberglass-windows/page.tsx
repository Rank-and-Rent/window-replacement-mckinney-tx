import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Fiberglass Windows Replacement McKinney TX | Strength, Stability, Long Service Life',
  description: 'Premium fiberglass replacement windows in McKinney, TX. Pultruded fiberglass for maximum strength, dimensional stability, and 30+ year service life. Call 945-206-3998.',
  keywords: 'fiberglass windows McKinney TX, fiberglass replacement windows, pultruded fiberglass, Marvin Elevate, Pella Impervia',
}

export default function FiberglassWindowsPage() {
  const content = {
    title: 'Fiberglass Windows Replacement in McKinney, TX',
    subtitle: 'Pultruded Fiberglass for Strength, Stability, and Long-Term Performance',
    heroImage: '/window-types/fiberglass-mckinney-tx.jpg',

    intro: "Fiberglass occupies a unique position in the McKinney replacement market: stronger than vinyl, more dimensionally stable than wood, and lighter than aluminum, with thermal performance that meets or exceeds any of them. The frames are pultruded, which means glass fibers and resin are pulled through a heated die under tension to produce a continuous fiber-reinforced profile. The result is a window frame that is essentially indifferent to temperature swings, doesn't expand and contract noticeably across seasons, holds its dimensional accuracy for decades, and accepts factory finishes that hold up well in Texas sun. For McKinney homeowners who plan to stay in the home long-term and want a window that will outlast vinyl, fiberglass is the right answer.",

    sections: [
      {
        heading: 'Pultruded Construction and Why It Matters',
        content: "The pultrusion process produces a frame profile with very high strength-to-weight ratio and almost zero thermal expansion compared to vinyl or aluminum. In practical terms, a fiberglass frame doesn't grow during summer heat and shrink during winter cold the way other materials do, which means the seals around the glass and the weatherstripping around the sash stay tight year-round. For McKinney's climate, where the temperature can swing from 110 degrees in August to 15 degrees in a January cold front, this stability is meaningful. It also means the corners stay tight; pultruded fiberglass corners can be mechanically joined or thermally welded with confidence that the joint will hold up over decades of seasonal cycling.",
      },
      {
        heading: 'Strength and Long-Term Stability',
        content: "Fiberglass has a tensile strength comparable to steel at a fraction of the weight, which translates into structurally robust window frames that resist bowing, twisting, and racking even at large sizes. For larger McKinney homes with oversized openings (great rooms in Stonebridge Ranch, primary suites in Trinity Falls, custom builds in Tucker Hill), fiberglass holds its shape better than vinyl across larger windows. The material also handles impact better than vinyl, which matters during severe storm season when hail and wind-driven debris are realistic threats. The frames are also fully resistant to rot, rust, and corrosion, and they will not warp the way wood can in humid conditions.",
      },
      {
        heading: 'Energy Performance for the McKinney Climate',
        content: "Fiberglass conducts heat far more slowly than aluminum and somewhat less than vinyl, which produces strong thermal performance when paired with quality glass. Premium fiberglass lines achieve U-factor numbers in the 0.25 to 0.30 range with Low-E2 or Low-E3 glass and argon fill, putting them in the same band as wood and aluminum-clad wood at a fraction of the price. For McKinney homeowners replacing original or builder-grade windows, the cooling-load reduction during peak summer is usually noticeable within the first billing cycle, and west-facing room temperatures stabilize meaningfully as the AC stops fighting heat gain through old single-pane or first-generation dual-pane glass.",
      },
      {
        heading: 'Where Fiberglass Fits in McKinney Homes',
        content: "Fiberglass is at its best in mid- to high-end replacements where the homeowner wants better performance and longer service life than vinyl can deliver, but doesn't need the wood interior of a clad wood line. We see fiberglass most often in two contexts: full-home replacements in custom or near-custom homes throughout Tucker Hill, Adriatica Village, and the Stonebridge Ranch fairway lots where the homeowner is staying long-term, and partial replacements where a few specific elevations (large great-room walls, west-facing primary suites) get fiberglass while the rest of the home gets vinyl. We help you decide where the upgrade pays back the additional cost and where vinyl is sufficient.",
      },
      {
        heading: 'Color, Finish, and Customization',
        content: "Pultruded fiberglass accepts factory finishes far more reliably than vinyl. The standard color palette across major lines includes white, tan, beige, bronze, black, and a range of architectural neutrals, with custom colors available on most lines. Some manufacturers (Marvin Elevate especially) pair a fiberglass exterior with a wood interior, which gives you the long service life of fiberglass on the weather side and the warm look of wood inside. Wood-grain laminate finishes are also available and look convincing on both interior and exterior surfaces. Finish warranties typically run 15 to 20 years against fading and chalking.",
      },
      {
        heading: 'Maintenance and Long-Term Service',
        content: "Fiberglass requires almost no maintenance beyond routine cleaning. The factory finish doesn't need to be repainted, the frames don't expand and contract enough to stress seals, and the operational hardware is rated for tens of thousands of cycles. Service life expectations on premium fiberglass lines run 30 to 40 years on the frame and 20 years on the insulating glass unit, which is competitive with the longest-running window materials available. For McKinney homeowners thinking past the first decade, fiberglass is one of the strongest long-term value picks in the replacement market.",
      },
    ],

    features: [
      'Pultruded fiberglass for maximum strength and stability',
      'Near-zero thermal expansion across seasons',
      'Excellent U-factor performance with Low-E glass',
      'Resistant to rot, rust, warp, and corrosion',
      'Outperforms vinyl for long-term dimensional accuracy',
      'Available with wood interior cladding (Marvin Elevate)',
      'Custom color and finish options',
      '15-20 year finish warranties',
      '30-40 year frame service life',
      'Strong fit for large openings and severe weather elevations',
    ],

    brands: [
      {
        name: 'Marvin Elevate Fiberglass-Wood Hybrid',
        description: "Marvin's Elevate line pairs a pultruded fiberglass exterior with a true wood interior, giving you long-term exterior durability without giving up the warmth of wood inside. A frequent specification for McKinney custom homes where premium-tier feel matters but maintenance commitment is limited.",
      },
      {
        name: 'Pella Impervia Fiberglass',
        description: "Pella's all-fiberglass line built on their Duracast pultruded composite. Strong picks for McKinney homes that need exceptional impact resistance and dimensional stability across seasons.",
      },
      {
        name: 'Andersen 100 Series Composite',
        description: "Andersen's composite Fibrex line, technically a wood-fiber-and-thermoplastic blend that performs in the same band as fiberglass. Excellent value across most of McKinney's replacement market.",
      },
    ],

    faq: [
      {
        question: 'How does fiberglass compare to vinyl in McKinney conditions?',
        answer: "Fiberglass is more dimensionally stable than vinyl across temperature swings, which means the seals stay tighter long-term and the frame holds its shape across larger openings. Fiberglass also accepts factory finishes more reliably than vinyl. Expect 30-40 year frame service life on fiberglass versus roughly 30 years on premium vinyl in McKinney conditions.",
      },
      {
        question: 'Are fiberglass windows worth the extra cost over vinyl?',
        answer: "For homeowners staying in the home long-term, yes. The additional service life and dimensional stability typically justify the price premium over a 20-30 year window. For shorter-term ownership or builder-grade replacements where vinyl meets the goal, vinyl is usually sufficient.",
      },
      {
        question: 'How energy efficient are fiberglass windows in the Texas climate?',
        answer: "Premium fiberglass lines with Low-E2 or Low-E3 glass and argon fill produce U-factor numbers in the 0.25-0.30 range and ENERGY STAR-qualified configurations for the southern climate zone. Strong picks for McKinney's hot summer cooling-load reduction.",
      },
      {
        question: 'Can fiberglass windows be painted later?',
        answer: "Yes, although it's rarely necessary. Premium fiberglass lines accept high-quality acrylic latex paint over the factory primer if you want to change colors. Most homeowners specify the desired color at the factory and never repaint.",
      },
      {
        question: 'Do fiberglass windows handle hail and severe weather better?',
        answer: "Yes. Fiberglass frames are stronger than vinyl and absorb impact better. Combined with laminated impact-resistant glass on exposed elevations, fiberglass windows hold up well to the severe storm season McKinney sees in spring.",
      },
      {
        question: 'How much do fiberglass windows cost with installation?',
        answer: "Fiberglass costs vary by line, size, and glass package. Everything we sell is priced including installation. Premium fiberglass lines run mid to upper range in our pricing, up to roughly $3,500 per window for top-tier configurations. We do not sell windows without installation.",
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
