import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Aluminum Windows Replacement McKinney TX | Durable, Modern Design',
  description: 'High-quality aluminum replacement windows in McKinney, TX. Durable, sleek, and energy-efficient. Andersen, Pella & JELD-WEN aluminum options. Everything priced including installation. Call 817-592-8870.',
  keywords: 'aluminum windows McKinney TX, aluminum replacement windows, durable windows, modern aluminum windows, Andersen aluminum windows, Pella aluminum windows, JELD-WEN aluminum windows',
}

export default function AluminumWindowsPage() {
  const content = {
    title: 'Aluminum Windows Replacement in McKinney, TX',
    subtitle: 'Sleek, Durable Performance with Modern Thermal Efficiency',
    heroImage: '/window-types/aluminum-mckinney-tx.jpg',

    intro: "McKinney&apos;s rapid suburban growth and family-friendly environment make modern aluminum windows an excellent choice for homeowners seeking sophisticated durability. As one of North Texas' fastest-growing communities, McKinney attracts families who appreciate aluminum windows' combination of sleek contemporary styling, exceptional strength, and thermal break efficiency. Whether in established neighborhoods or new developments around Lake Lavon, aluminum windows provide the modern aesthetic and lasting performance that McKinney homeowners demand. With the area&apos;s blend of traditional and contemporary architecture, aluminum windows offer versatile design that enhances McKinney&apos;s progressive character.",

    sections: [
      {
        heading: 'Thermal Break Technology for North Texas Efficiency',
        content: "McKinney&apos;s North Texas climate with hot summers and cool winters benefits greatly from aluminum windows' advanced thermal break technology. A thermal break is a non-conductive material inserted between aluminum sections, creating an insulating barrier that dramatically improves energy performance. This prevents heat conduction through the metal, achieving U-factors comparable to vinyl windows while maintaining aluminum&apos;s sleek appearance. In McKinney&apos;s variable climate, thermally broken aluminum windows reduce heating and cooling costs by 25-35%, providing measurable savings for growing families. Many models qualify for ENERGY STAR certification, making them an economical choice for McKinney&apos;s cost-conscious homeowners.",
      },
      {
        heading: 'Family-Friendly Durability and Strength',
        content: "Aluminum&apos;s fundamental properties make it exceptionally well-suited for McKinney&apos;s active family environment. The material never rusts, rots, or warps, maintaining structural integrity indefinitely. Aluminum windows are virtually indestructible—they resist impact damage from sports equipment, bicycles, or severe weather far better than alternatives. This makes them ideal for McKinney homes with children, pets, and active lifestyles. The frames are extruded to precise tolerances, ensuring smooth operation and perfect alignment. Aluminum&apos;s strength enables larger window units and thinner sightlines that maximize views while maintaining structural stability. With proper maintenance, quality aluminum windows provide 40+ years of service in McKinney&apos;s growing community.",
      },
      {
        heading: 'Contemporary Aesthetics for Modern McKinney',
        content: "Aluminum windows excel at delivering the clean, minimalist aesthetic that complements McKinney&apos;s modern suburban developments. The material&apos;s ability to be extruded into thin, precise profiles creates narrow sightlines that maximize glass area with minimal framing. Aluminum accepts a wide range of exterior finishes, from natural silver tones to custom powder-coated colors that match McKinney&apos;s architectural preferences. Unlike wood windows that can swell or shrink with Lake Lavon&apos;s humidity, aluminum maintains perfectly straight lines year-round. For McKinney homeowners seeking sophisticated, low-maintenance windows that reflect the city&apos;s growth and modernity, aluminum provides the perfect balance of form and function.",
      },
      {
        heading: 'Low Maintenance with Professional Care',
        content: "While aluminum windows require more maintenance than vinyl options, they offer excellent long-term value with manageable care requirements for McKinney families. Exterior surfaces benefit from periodic refinishing (typically every 8-12 years) to maintain appearance and protect the metal. The frames themselves never corrode or degrade, and interior surfaces require no maintenance beyond occasional cleaning. This maintenance schedule fits well with McKinney&apos;s family-oriented lifestyle, where homeowners can schedule professional care during school breaks or holidays. Compared to wood windows that require annual maintenance, aluminum windows represent a significant time and cost savings for busy families.",
      },
      {
        heading: 'Versatility for McKinney\&apos;s Growing Architecture',
        content: "Aluminum&apos;s workability allows it to be formed into virtually any window configuration, making it ideal for McKinney&apos;s diverse and growing architectural landscape. From contemporary designs in new developments to traditional styles in established neighborhoods, aluminum adapts beautifully. The material accommodates all major glass types, from single-pane for cost-conscious applications to triple-pane insulated units for maximum energy efficiency. In McKinney, aluminum windows excel in family rooms and living areas that need durability and style. The material&apos;s compatibility with impact-resistant glass makes it suitable for areas with occasional severe weather. Whether for new construction or replacement in established homes, aluminum provides the design flexibility required in McKinney&apos;s dynamic community.",
      },
      {
        heading: 'Sustainable Investment for Growing Families',
        content: "Aluminum represents one of the most environmentally responsible building materials available, perfectly aligning with McKinney&apos;s family-oriented environmental values. The material is 100% recyclable without loss of quality—recycled aluminum requires just 5% of the energy needed to produce new aluminum. Many aluminum window manufacturers use significant amounts of recycled content in their products. The material&apos;s longevity reduces the environmental impact of replacement over time. Aluminum windows contribute to sustainable living by enabling larger glass areas that maximize natural light and reduce artificial lighting needs. For environmentally conscious McKinney families, aluminum windows provide premium performance with significantly lower ecological footprint than traditional materials.",
      },
    ],

    features: [
      'Thermal break technology for energy efficiency',
      'Exceptional strength and impact resistance',
      'Sleek, contemporary appearance',
      'Narrow sightlines maximize glass area',
      'Available in unlimited color options',
      '40+ year lifespan with proper maintenance',
      'Resists rust, rot, and corrosion',
      'Compatible with all glass types',
      'Smooth, precise operation',
      'Environmentally recyclable',
    ],

    brands: [
      {
        name: 'Andersen Aluminum Series',
        description: 'Andersen combines their expertise in window design with advanced aluminum extrusion technology. Their aluminum windows feature comprehensive thermal breaks and premium hardware for exceptional performance and longevity.',
      },
      {
        name: 'Pella Aluminum Windows',
        description: 'Pella\&apos;s aluminum windows incorporate their signature EnduraClad protection system and advanced thermal barrier systems. The result is aluminum performance with superior weather resistance and energy efficiency.',
      },
      {
        name: 'JELD-WEN Aluminum Collection',
        description: 'JELD-WEN offers premium aluminum windows with fusion-welded construction and comprehensive thermal breaks. Their extensive color selection ensures you can match any design aesthetic.',
      },
    ],

    faq: [
      {
        question: 'Do aluminum windows need painting in McKinney?',
        answer: 'Yes, aluminum windows require periodic exterior painting (typically every 8-12 years) to maintain their appearance and protect the metal from oxidation. However, the frames never rust or corrode, and the maintenance is far less frequent than wood windows.',
      },
      {
        question: 'Are aluminum windows energy efficient for McKinney families?',
        answer: 'Modern aluminum windows with thermal breaks are highly energy efficient, achieving U-factors comparable to vinyl windows. They can reduce heating and cooling costs by 25-35% in McKinney\&apos;s climate when properly specified with insulated glass.',
      },
      {
        question: 'How long do aluminum windows last in McKinney?',
        answer: 'Quality aluminum windows last 40+ years with proper maintenance. The frames never degrade like wood or vinyl, and with periodic repainting, they maintain their appearance and performance indefinitely.',
      },
      {
        question: 'Are aluminum windows suitable for McKinney family homes?',
        answer: 'Absolutely. Aluminum windows are perfect for McKinney families with their exceptional durability, strength, and resistance to impact damage from children, pets, and active lifestyles.',
      },
      {
        question: 'Can aluminum windows be recycled?',
        answer: 'Yes, aluminum is 100% recyclable without loss of quality. Many aluminum windows contain recycled content, and the frames can be recycled at the end of their service life, making them an environmentally responsible choice.',
      },
      {
        question: 'How much do aluminum windows cost with installation?',
        answer: 'Aluminum window costs with installation vary by style and features. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.',
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