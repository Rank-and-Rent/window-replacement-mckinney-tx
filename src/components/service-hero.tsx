import styles from './service-hero.module.css'

interface ServiceHeroProps {
  title: string
  subtitle: string
  image: string
}

export default function ServiceHero({ title, subtitle, image }: ServiceHeroProps) {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.breadcrumb}>
          <a href="/">Home</a>
          <span>/</span>
          <a href="/#windows">Windows</a>
          <span>/</span>
          <span>{title}</span>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  )
}