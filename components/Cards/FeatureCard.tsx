import styles from '@/styles/featurecard.module.scss'
import Image from 'next/image'

type FeatureCardProps = {
  title?: string
  imageSrc?: string
  features?: FeatureCardItem[]
  reverse?: boolean
}

type FeatureCardItem = {
  icon?: React.ReactNode | string | undefined
  title?: string
  description: string
}

export default function FeatureCard({
  title,
  features,
  imageSrc,
  reverse = false,
}: FeatureCardProps) {
  const featureCardClass = reverse
    ? `${styles.featureCard} ${styles.flexRowReverse}`
    : styles.featureCard

  return (
    <div className={featureCardClass}>
      <div className={styles.featureCard__content}>
        {title && <h2>{title}</h2>}
        {features?.map((feature) => (
          <div
            className={styles['featureCard__content-item']}
            key={feature.title}
          >
            <div className={styles['featureCard__content-item-icon']}>
              {feature.icon}
            </div>
            <div className={styles['featureCard__content-item-text']}>
              <h3>{feature.title}</h3>
              <span>{feature.description}</span>
            </div>
          </div>
        ))}
      </div>
      {imageSrc && (
        <div className={styles.featureCard__image}>
          <Image
            src={imageSrc}
            alt={title || 'Feature card image'}
            height={460}
            width={460}
          />
        </div>
      )}
    </div>
  )
}
