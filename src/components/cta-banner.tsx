'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './cta-banner.module.css'

export default function CtaBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Ready to Transform Your Irving Home?
          </h2>
          <p className={styles.description}>
            Get a free, no-obligation estimate from Irving&apos;s window replacement experts.
            We&apos;ll help you choose the perfect windows for your home and budget.
          </p>
          <div className={styles.actions}>
            <Link href="#contact" className={styles.primaryBtn}>
              Get Free Quote
            </Link>
            <a href="tel:817-592-8870" className={styles.secondaryBtn}>
              Call 817-592-8870
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}