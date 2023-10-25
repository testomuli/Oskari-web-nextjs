import styles from '@/styles/iconcard.module.scss'

type IconCardProps = {
  title: string
  subtitle?: string
  content: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function IconCard({
  title,
  subtitle,
  content,
  style,
  className,
}: IconCardProps) {
  return (
    <div className={`${styles.iconCard} ${className || ''}`} style={style}>
      <div className={styles.iconCard__icon}></div>
      <h3 className={styles.iconCard__title}>{title}</h3>
      {subtitle && <div className={styles.iconCard__subtitle}>{subtitle}</div>}
      <div className={styles.iconCard__content}>
        <div>{content}</div>
      </div>
    </div>
  )
}
