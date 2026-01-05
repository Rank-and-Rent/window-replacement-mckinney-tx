import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Wood Windows Replacement McKinney TX | Authentic Natural Beauty',
  description: 'Premium solid wood replacement windows in McKinney, TX. Timeless natural beauty, superior craftsmanship, and authentic character. Everything priced including installation.',
  keywords: 'wood windows McKinney TX, solid wood windows, traditional wood windows, authentic wood windows, custom wood windows',
}

export default function WoodWindowsPage() {
  const content = {
    title: 'Wood Windows Replacement in McKinney, TX',
    subtitle: 'Timeless Beauty and Authentic Craftsmanship in Solid Wood',
    heroImage: '/window-types/wood-mckinney-tx.jpg',

    intro: "McKinney homeowners who appreciate authentic traditional craftsmanship and timeless natural beauty choose solid wood windows. Nothing matches the warmth, character, and architectural authenticity that genuine wood provides. For historic McKinney homes and discerning homeowners who prioritize traditional quality, solid wood windows offer unparalleled beauty and lasting value.",

    sections: [
      {
        heading: 'Unmatched Natural Beauty and Character',
        content: "Solid wood windows provide authenticity that synthetic materials cannot replicate. Each window features unique grain patterns, natural color variations, and organic warmth that change subtly with light and seasons. Wood accepts stains and finishes that enhance natural beauty while allowing the grain to show through. For McKinney\&apos;s historic homes and traditional architecture, wood windows provide period-appropriate authenticity that preserves architectural integrity.",
      },
      {
        heading: 'Superior Thermal Performance',
        content: "Wood is naturally insulating, providing thermal performance that rivals modern synthetics without requiring complex engineering. The cellular structure creates air pockets that resist heat transfer, keeping McKinney homes comfortable year-round. Quality wood windows achieve U-factors of 0.25-0.30, comparable to premium alternatives, while providing the added benefit of thermal mass that moderates temperature swings throughout the day.",
      },
      {
        heading: 'Exceptional Craftsmanship and Quality',
        content: "Solid wood windows represent traditional craftsmanship at its finest. Quality manufacturers select premium wood species—mahogany, oak, cherry, or pine—and craft windows using time-honored joinery techniques. The result is windows that operate smoothly, align perfectly, and provide decades of service. For McKinney homeowners who appreciate quality construction, wood windows offer satisfaction that mass-produced alternatives cannot match.",
      },
      {
        heading: 'Maintenance Requirements and Considerations',
        content: "Solid wood windows require regular maintenance to preserve their beauty and performance in McKinney\&apos;s climate. Exterior surfaces need repainting or refinishing every 3-5 years to protect against moisture and UV damage. Interior maintenance is minimal but benefits from occasional cleaning and refinishing. For homeowners willing to invest time in maintenance, wood windows reward with beauty and character that improve with age.",
      },
      {
        heading: 'Historic Preservation and Architectural Authenticity',
        content: "Wood windows are essential for authentic historic preservation in McKinney\&apos;s older neighborhoods. Historic districts often require wood windows to maintain period character. Beyond regulatory requirements, wood windows provide architectural correctness that honors original design intent. For homeowners passionate about preserving McKinney\&apos;s preservation architectural heritage, wood windows are the only authentic choice.",
      },
      {
        heading: 'Investment Value and Longevity',
        content: "Quality wood windows represent significant initial investment but provide exceptional long-term value. With proper maintenance, wood windows last 50-100 years or more—far longer than synthetic alternatives. The windows can be refinished repeatedly, allowing homeowners to refresh appearance without replacement. In McKinney\&apos;s historic neighborhoods, authentic wood windows significantly enhance property value and marketability.",
      },
    ],

    features: [
      'Authentic natural wood beauty',
      'Unique grain patterns and character',
      'Superior thermal insulation',
      'Traditional craftsmanship and joinery',
      'Unlimited staining and finishing options',
      'Can be refinished repeatedly',
      '50-100+ year lifespan with care',
      'Essential for historic preservation',
      'Premium wood species available',
      'Enhances property value significantly',
    ],

    brands: [
      {
        name: 'Andersen Traditional Wood Windows',
        description: 'Andersen\&apos;s traditional wood line offers authentic wood windows crafted from premium species with time-honored construction methods. Their windows combine historical accuracy with modern performance features for discerning McKinney homeowners.',
      },
      {
        name: 'Pella Wood Windows',
        description: 'Pella crafts solid wood windows using premium wood species and advanced preservation treatments. Their wood windows provide authentic beauty with enhanced longevity, perfect for McKinney\&apos;s historic homes and traditional architecture.',
      },
      {
        name: 'JELD-WEN Premium Wood Collection',
        description: 'JELD-WEN\&apos;s premium wood windows feature authentic construction using select wood species. Their AuraLast preservation system extends wood life while maintaining traditional appearance, ideal for McKinney\&apos;s climate.',
      },
    ],

    faq: [
      {
        question: 'Do wood windows require a lot of maintenance?',
        answer: 'Yes, solid wood windows require regular maintenance. Exterior surfaces need repainting or refinishing every 3-5 years in McKinney\&apos;s climate to prevent moisture damage and UV degradation. However, many homeowners find this maintenance rewarding.',
      },
      {
        question: 'How long do wood windows last?',
        answer: 'With proper maintenance, quality wood windows last 50-100 years or more. They can be refinished repeatedly, allowing homeowners to refresh appearance without replacement. Many McKinney homes feature original wood windows from the 1920s-1940s.',
      },
      {
        question: 'Are wood windows energy efficient?',
        answer: 'Yes, wood windows are naturally energy efficient. Wood\&apos;s cellular structure provides excellent insulation, achieving U-factors of 0.25-0.30. Combined with modern glass, wood windows reduce energy costs significantly.',
      },
      {
        question: 'Are wood windows required for historic homes?',
        answer: 'Many McKinney historic districts require wood windows to maintain period authenticity. Even when not mandated, wood windows are essential for authentic historic preservation and maintaining property value in historic neighborhoods.',
      },
      {
        question: 'Can wood windows be painted?',
        answer: 'Absolutely. Wood windows accept any exterior or interior paint or stain. Many homeowners change colors periodically to refresh appearance, taking advantage of wood\&apos;s ability to be refinished repeatedly throughout its long service life.',
      },
      {
        question: 'How much do wood windows cost with installation?',
        answer: 'Wood window costs with installation vary by style and features. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.',
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