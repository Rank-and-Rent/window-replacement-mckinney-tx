import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Vinyl Windows Replacement McKinney TX | Low Maintenance, Energy Efficient',
  description: 'Vinyl replacement windows for Eldorado, Mallard Lakes, Provine Farms, and Wilmeth Ridge tract builds. Multi-chambered fusion-welded frames, Low-E argon, install included.',
  keywords: 'vinyl windows McKinney TX, vinyl replacement windows, low maintenance windows, energy efficient vinyl windows, Andersen vinyl windows, Pella vinyl windows, JELD-WEN vinyl windows',
}

export default function VinylWindowsPage() {
  const content = {
    title: 'Vinyl Windows Replacement in McKinney, TX',
    subtitle: 'Low-Maintenance Excellence with Strong Energy Performance',
    heroImage: '/window-types/vinyl-mckinney-tx.jpg',

    intro: "Vinyl is by far the most common replacement window material we install in McKinney, and it earns that position with a hard-to-beat combination of price, performance, and low maintenance. Modern vinyl is nothing like the early generations of the 1980s and 90s; today's premium vinyl windows from Andersen, Pella, JELD-WEN, and Marvin use multi-chambered fusion-welded frames, high-performance Low-E glass packages, argon fills, and warm-edge spacers that produce ENERGY STAR-qualified performance at price points well below wood, fiberglass, or aluminum-clad wood. For McKinney homeowners replacing builder-grade windows in Stonebridge Ranch, Eldorado, Trinity Falls, or any of the city's other established neighborhoods, vinyl is usually the most rational choice on a dollars-per-window basis.",

    sections: [
      {
        heading: 'Why Vinyl Dominates the McKinney Replacement Market',
        content: "Vinyl windows hold the largest market share in residential replacement for clear reasons. The material itself is dimensionally stable, doesn't rot, doesn't rust, and doesn't need to be painted or stained over its service life. The frames arrive at the home with their finish color baked in at the factory, which means the white frame stays white, the bronze frame stays bronze, and there's no annual maintenance routine to maintain appearance. For busy McKinney families with kids, jobs, and weekends that don't include painting window sashes, that single feature is often the deciding factor.",
      },
      {
        heading: 'Energy Performance for the McKinney Climate',
        content: "Premium vinyl windows perform very well in North Texas conditions. The multi-chambered frame design creates internal air pockets that act as thermal barriers, keeping the conducted heat path from inside the room to outside (or vice versa) longer than a single-chamber profile. Combined with Low-E2 or Low-E3 glass coatings tuned for Texas-style solar gain and argon fills between the panes, premium vinyl windows produce U-factors in the 0.27-0.30 range that satisfy ENERGY STAR requirements for the southern climate zone. For McKinney homeowners replacing original builder-grade vinyl or older single-pane glass, the comfort and cooling-cost differences are usually obvious within the first summer.",
      },
      {
        heading: 'Color, Finish, and Style Range',
        content: "Modern vinyl is no longer just white. Major manufacturers offer factory finishes in beige, almond, clay, bronze, black, and a range of wood-grain laminate exteriors that approximate the look of stained wood from the curb. Interior finishes include white, off-white, and several wood-grain options that give the room a warmer feel than bare vinyl. For McKinney homeowners trying to match an existing exterior color scheme or upgrade away from the standard white frame, the customization options are extensive. Most major lines also offer dual-color frames (different exterior and interior finishes) for situations where the room interior calls for one finish and the elevation calls for another.",
      },
      {
        heading: "Where Vinyl Excels and Where It Doesn't",
        content: "Vinyl is at its best on standard rectangular openings in modest to mid-size homes throughout McKinney's master-planned communities. It's the right answer for full-home replacements where the homeowner needs to keep total cost manageable across 15 to 25 windows, for rental properties where ROI matters, and for any home where the existing windows are vinyl and the goal is straightforward upgrade. Vinyl is generally not the right answer for very large openings (where structural strength matters and aluminum or fiberglass perform better), for historic homes where the wider sightlines clash with the home's architectural character, or for high-end custom builds where wood or wood-clad framing is part of the design language.",
      },
      {
        heading: 'Long-Term Durability and Warranty Coverage',
        content: "Quality vinyl windows from the brands we install carry 20- to 25-year manufacturer warranties on the frame, glass seal, and components. The frames themselves are typically expected to provide 30 or more years of service in the McKinney climate, and the insulating glass units are warrantied against seal failure for 20 years on most lines. We honor these warranties locally; if a balance fails or a glass unit fogs within the warranty period, we come back out and replace it under warranty rather than referring you to a national customer service line.",
      },
      {
        heading: 'Premium Vinyl Lines We Install in McKinney',
        content: "We work with the lines that have proven track records in North Texas conditions. Andersen 100 Series uses Fibrex composite, which is technically a step beyond standard vinyl but priced and engineered comparably. Pella 250 Series and 350 Series are reliable workhorses with InsulShield Low-E options that perform well on McKinney's west-facing elevations. JELD-WEN Premium Vinyl uses fusion-welded construction that stays tight in seasonal temperature swings. Marvin Elevate combines a fiberglass exterior with a vinyl-grade interior that gives a slightly more upscale feel without a major price increase. We help you choose the right line based on the home, the budget, and the long-term plan.",
      },
    ],

    features: [
      'Low-maintenance frames that never need painting',
      'Multi-chambered fusion-welded construction',
      'Strong thermal insulation for North Texas climate',
      'Resistant to moisture, mold, and mildew',
      '20-25 year manufacturer warranties',
      'Available in all standard window styles',
      'ENERGY STAR-qualified models available',
      'UV-stabilized for Texas sun exposure',
      'Smooth, easy-to-clean surfaces',
      'Wide range of factory finish colors',
    ],

    brands: [
      {
        name: 'Andersen 100 Series Composite',
        description: "Andersen's value-tier line uses their proprietary Fibrex composite, which sits between vinyl and fiberglass on the performance spectrum. Multi-chambered frames, fusion-welded corners, and Low-E glass deliver strong McKinney-climate performance at a competitive price.",
      },
      {
        name: 'Pella 250 and 350 Series Vinyl',
        description: "Pella's premium vinyl lines combine multi-chambered fusion-welded frames with InsulShield Low-E glass and warm-edge spacer technology. Strong picks for McKinney builder-grade replacements where homeowners want a step up without paying premium-tier prices.",
      },
      {
        name: 'JELD-WEN Premium Vinyl',
        description: "JELD-WEN's Premium Vinyl line delivers outstanding performance with fusion-welded frames, ScreenMaximizer hidden screens, and a range of factory finishes. A reliable choice across McKinney's full housing inventory.",
      },
    ],

    faq: [
      {
        question: 'Are vinyl windows a good fit for McKinney homes?',
        answer: "Vinyl is the most popular replacement choice in McKinney for good reason. It's low-maintenance, energy-efficient, and priced reasonably across most home sizes. For builder-grade replacements throughout Stonebridge Ranch, Eldorado, Trinity Falls, and similar neighborhoods, vinyl is usually the right answer.",
      },
      {
        question: 'How long do vinyl windows last in North Texas?',
        answer: "Quality vinyl windows from premium manufacturers typically last 30 or more years in the McKinney climate. The insulating glass units carry 20-year warranties against seal failure, and the frames themselves regularly outlast that.",
      },
      {
        question: 'Do vinyl windows yellow or fade over time?',
        answer: "Modern premium vinyl uses UV-stabilized formulations and quality factory finishes that resist yellowing and fading well. The first generations of vinyl windows in the 1980s had this problem; current products from Andersen, Pella, JELD-WEN, and Marvin are engineered specifically to avoid it.",
      },
      {
        question: 'Are vinyl windows ENERGY STAR qualified?',
        answer: "Yes. Premium vinyl windows from the brands we install offer ENERGY STAR-qualified configurations for the southern climate zone, with U-factor and SHGC numbers that meet or exceed program requirements. Pair with Low-E2 or Low-E3 glass and argon fill for full McKinney performance.",
      },
      {
        question: 'Can vinyl windows be repaired if a balance or seal fails?',
        answer: "Yes. The brands we install offer balance assemblies, weatherstripping, and replacement insulating glass units as warranty parts. We service warranty calls locally rather than referring you to a national customer service line.",
      },
      {
        question: 'How much do vinyl windows cost with installation in McKinney?',
        answer: "Vinyl window costs with installation vary by size, line, and glass package. Everything we sell is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to roughly $3,500 per window for premium frame materials. We do not sell windows without installation.",
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
