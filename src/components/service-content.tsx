import styles from './service-content.module.css'

interface Section {
  heading: string
  content: string
}

interface Brand {
  name: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

interface ServiceContentProps {
  content: {
    intro: string
    sections: Section[]
    features: string[]
    brands: Brand[]
    faq: FAQ[]
  }
}

export default function ServiceContent({ content }: ServiceContentProps) {
  return (
    <div className={styles.wrapper}>
      <article className={styles.container}>
        <div className={styles.intro}>
          <p>{content.intro}</p>
        </div>

        {content.sections.map((section, index) => (
          <section key={index} className={styles.section}>
            <h2 className={styles.heading}>{section.heading}</h2>
            <p className={styles.paragraph}>{section.content}</p>
          </section>
        ))}

        <section className={styles.features}>
          <h2 className={styles.heading}>Key Features & Benefits</h2>
          <ul className={styles.featureList}>
            {content.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className={styles.brands}>
          <h2 className={styles.heading}>Our Recommended Brands</h2>
          <div className={styles.brandGrid}>
            {content.brands.map((brand, index) => (
              <div key={index} className={styles.brandCard}>
                <h3 className={styles.brandName}>{brand.name}</h3>
                <p className={styles.brandDescription}>{brand.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.faq}>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {content.faq.map((item, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{item.question}</h3>
                <p className={styles.faqAnswer}>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}