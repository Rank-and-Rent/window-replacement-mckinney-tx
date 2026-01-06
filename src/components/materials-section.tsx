'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import styles from './materials-section.module.css'

const materialTypes = [
  {
    name: 'Vinyl Windows',
    slug: '/materials/vinyl-windows',
    description: 'Low-maintenance vinyl windows with superior energy efficiency and durability. Perfect for McKinney homeowners seeking hassle-free performance.',
    features: ['Low maintenance', 'Energy efficient', 'Weather resistant'],
    image: '/window-types/vinyl-mckinney-tx.jpg',
  },
  {
    name: 'Aluminum Windows',
    slug: '/materials/aluminum-windows',
    description: 'Durable aluminum windows with modern thermal efficiency and sleek contemporary styling. Exceptional strength for any McKinney home.',
    features: ['Durable & strong', 'Sleek design', 'Impact resistant'],
    image: '/window-types/aluminum-mckinney-tx.jpg',
  },
  {
    name: 'Fibrex Windows',
    slug: '/materials/fibrex-windows',
    description: 'Andersen\&apos;s premium composite material combining wood-like beauty with advanced durability. The ultimate in window frame technology.',
    features: ['Wood-like beauty', 'Composite strength', 'Premium performance'],
    image: '/window-types/fibrex-mckinney-tx.jpg',
  },
  {
    name: 'Fiberglass Windows',
    slug: '/materials/fiberglass-windows',
    description: 'Ultimate strength and insulation with authentic wood-like appearance. Maximum durability and energy efficiency in one package.',
    features: ['Ultimate strength', 'Superior insulation', 'Wood-like aesthetics'],
    image: '/window-types/fiberglass-mckinney-tx.jpg',
  },
  {
    name: 'Wood Clad Windows',
    slug: '/materials/wood-clad-windows',
    description: 'Authentic wood interiors with weather-resistant exterior protection. Traditional beauty meets modern durability and low maintenance.',
    features: ['Authentic wood', 'Weather protection', 'Traditional appeal'],
    image: '/window-types/wood-clad-mckinney-tx.jpg',
  },
  {
    name: 'Wood Windows',
    slug: '/materials/wood-windows',
    description: 'Traditional wood windows with natural beauty and superior insulation. Timeless character and craftsmanship for discerning McKinney homeowners.',
    features: ['Natural beauty', 'Superior insulation', 'Timeless character'],
    image: '/window-types/wood-mckinney-tx.jpg',
  },
]

export default function MaterialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Window Materials</h2>
          <p className={styles.subtitle}>
            Choose from premium window materials designed for McKinney&apos;s climate.
            Each material offers unique benefits in terms of durability, energy efficiency,
            and aesthetic appeal.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {materialTypes.map((material, index) => (
            <motion.div
              key={material.name}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={material.image}
                  alt={`${material.name} in McKinney, TX`}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.materialName}>{material.name}</h3>
                <p className={styles.description}>{material.description}</p>

                <ul className={styles.features}>
                  {material.features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={material.slug} className={styles.link}>
                  Learn More
                  <svg className={styles.arrow} viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className={styles.ctaTitle}>Find the Perfect Material for Your Home</h3>
          <p className={styles.ctaText}>
            Our experts help you choose the ideal window material based on your budget,
            style preferences, and McKinney climate considerations.
          </p>
          <Link href="/#contact" className={styles.ctaButton}>
            Get Expert Advice
          </Link>
        </motion.div>
      </div>
    </section>
  )
}