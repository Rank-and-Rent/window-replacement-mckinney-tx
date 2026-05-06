import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Wood Clad Windows Replacement McKinney TX | Wood Inside, Aluminum Outside',
  description: 'Wood-clad windows that match Old East McKinney Victorian sash lines and survive Collin County hail. Marvin Signature, Pella Reserve, Andersen 400 with factory finishes.',
  keywords: 'wood clad windows McKinney TX, aluminum clad wood windows, Marvin clad windows, Pella architect series, Andersen 400 Series',
}

export default function WoodCladWindowsPage() {
  const content = {
    title: 'Wood Clad Windows Replacement in McKinney, TX',
    subtitle: 'Authentic Wood Interior With Maintenance-Free Cladding',
    heroImage: '/window-types/wood-clad-mckinney-tx.jpg',

    intro: "Wood clad windows are a hybrid construction: genuine solid wood on the room side, factory-applied aluminum or vinyl cladding on the exterior. The point of the design is to give homeowners the look and feel of a real wood window from inside the home, without the multi-year exterior repainting cycle that limits the practicality of full solid wood in the McKinney climate. For high-end custom builds in Tucker Hill, Adriatica Village, and the McKinney Country Club area, and for any home where the homeowner wants a wood interior but can't commit to ongoing exterior maintenance, wood clad is usually the right answer. Marvin, Pella, and Andersen all build excellent wood clad lines that we install regularly throughout McKinney.",

    sections: [
      {
        heading: 'How Wood Clad Construction Works',
        content: "A wood clad window starts with a solid wood interior frame, typically pine, Douglas fir, mahogany, or another premium species depending on the line. The exterior of that wood frame is then wrapped in factory-applied aluminum or vinyl cladding that bonds permanently to the wood, creating a continuous weather barrier. The cladding is mechanically formed and sealed at the corners so water cannot reach the wood, which solves the single biggest maintenance issue with traditional solid wood: rot at the bottom rail and corners from prolonged moisture exposure. The interior wood is left exposed for staining, painting, or natural finish.",
      },
      {
        heading: "Why Wood Clad Wins in McKinney's Climate",
        content: "Solid wood windows on a south- or west-facing McKinney elevation will need exterior repainting every three to five years to keep up with Texas UV and summer heat exposure. That commitment is fine for some homeowners and not realistic for others. Wood clad eliminates the cycle entirely; the factory finish on the aluminum cladding typically carries a 20-year warranty against fading and chalking, with no field maintenance required during that window. For McKinney homeowners who want the look of wood without the painting routine, wood clad is the right call.",
      },
      {
        heading: 'Where Wood Clad Belongs in McKinney Homes',
        content: "We see wood clad most often in three contexts. Custom builds where the architect specified wood interiors but the homeowner doesn't want to commit to long-term exterior maintenance; this covers most high-end work in Tucker Hill, Adriatica, and the country club area. Major remodels where the existing wood windows are at end of life and the homeowner wants to replicate the original look without the original maintenance burden. And new-build phases where the framing is in place to accept full-frame wood clad units sized to the architectural intent. Wood clad is generally not the right choice for builder-grade replacements in master-planned communities, where vinyl or fiberglass deliver better value at the price point.",
      },
      {
        heading: 'Cladding Material Choices: Aluminum vs Vinyl',
        content: "Aluminum cladding is the higher-performance choice and the one we recommend for most McKinney installations. The aluminum is extruded into a precise profile, factory-finished in the homeowner's chosen color, and bonded to the wood with mechanical and adhesive details that prevent water intrusion. Aluminum holds the factory color longer than vinyl in Texas sun, accepts a wider range of custom colors, and produces sharper architectural lines. Vinyl cladding is less expensive but has a more limited color range and tends to expand and contract more in seasonal temperature swings, which can stress seals over time. Marvin and Pella's premium wood clad lines use aluminum exclusively.",
      },
      {
        heading: 'Interior Finishing Options',
        content: "The interior wood arrives at the home unfinished or factory-primed in most lines, ready for stain, paint, or clear coat. Marvin, Pella, and Andersen all offer extensive factory finishing programs where the wood interior is stained, sealed, and shipped finished, eliminating the field finishing step. We coordinate this with your interior designer or your own paint and stain selections so the windows tie into the room's finish package. For McKinney homeowners building or remodeling, this is often the cleanest path to a finished room without dust and odor in the home during the finishing process.",
      },
      {
        heading: 'Performance and Long-Term Value',
        content: "Wood clad windows perform thermally on par with solid wood; the cladding adds little to U-factor either way. Combined with Low-E2 or Low-E3 glass and argon fill, premium wood clad lines achieve U-factor numbers in the 0.25 to 0.30 range that put them at the top of the residential performance band. Service life with proper installation runs 30 to 40 years on the cladding and longer on the wood interior, which can be refinished or restained as the homeowner's preferences change. The combination of long service life, low exterior maintenance, and authentic wood interior is why wood clad commands premium pricing and delivers premium long-term value.",
      },
    ],

    features: [
      'Genuine wood interior for authentic appearance',
      'Factory-applied aluminum or vinyl exterior cladding',
      'No exterior repainting cycle required',
      'Strong U-factor and air infiltration performance',
      'Multiple wood species available',
      'Extensive custom color program on cladding',
      'Factory-stained or factory-painted interior options',
      'Compatible with all premium glass packages',
      '30-40 year service life with proper installation',
      'High-end appearance from inside and out',
    ],

    brands: [
      {
        name: 'Marvin Signature Ultimate Aluminum Clad',
        description: "Marvin's flagship wood clad line. Solid wood interior, extruded aluminum exterior, extensive species and finish options. The custom shape and grille capabilities make this a frequent specification for McKinney custom homes.",
      },
      {
        name: 'Pella Reserve Traditional Aluminum Clad',
        description: "Pella's premium wood clad line uses select wood species, EnduraClad aluminum exterior protection, and factory finishing programs that produce a complete-package window ready to install. Strong choice for high-end McKinney remodels.",
      },
      {
        name: 'Andersen 400 Series Woodwright',
        description: "Andersen's wood interior with their proprietary aluminum-clad exterior. Excellent thermal performance, broad availability, and a track record across thousands of McKinney installations.",
      },
    ],

    faq: [
      {
        question: 'What is the difference between solid wood and wood clad windows?',
        answer: "Both have genuine wood interiors. Solid wood has bare wood on the exterior, which needs repainting or refinishing every 3 to 5 years in the McKinney climate. Wood clad has factory-applied aluminum or vinyl cladding on the exterior that eliminates exterior repainting for the life of the window.",
      },
      {
        question: 'Do wood clad windows still need any exterior maintenance?',
        answer: "Very little. The cladding does not need to be painted, sealed, or refinished. Routine cleaning with mild soap and water is the only exterior maintenance required for the life of the window in most cases.",
      },
      {
        question: 'How long do wood clad windows last in McKinney?',
        answer: "Quality wood clad windows from Marvin, Pella, or Andersen typically deliver 30 to 40 years of service with minimal maintenance. The interior wood can be refinished or restained as needed without affecting exterior performance.",
      },
      {
        question: 'Can the interior wood be stained or painted later?',
        answer: "Yes. The interior wood accepts any quality stain, paint, or clear finish. Many homeowners change interior finishes during major remodels to refresh the room's look without replacing the windows.",
      },
      {
        question: 'Is wood clad worth the premium over vinyl in McKinney?',
        answer: "For high-end custom homes and serious remodels where wood interior matters to the design, yes. For builder-grade replacements in master-planned communities where the existing windows are vinyl and budget matters more than wood interior, vinyl or fiberglass is usually the better value.",
      },
      {
        question: 'How much do wood clad windows cost with installation?',
        answer: "Wood clad costs vary by line, species, finish package, and configuration. Everything we sell is priced including installation. Premium wood clad units typically run toward the upper end of our pricing range, up to roughly $3,500 per window for top-tier custom configurations. We do not sell windows without installation.",
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
