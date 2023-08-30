import Image from 'next/image'
import styles from '@/styles/features.module.scss'
import { FeaturesItemType } from '@/types/types'

const FeaturesItem = ({ icon, title, description }: FeaturesItemType) => {
  return (
    <div className={styles.featuresItem}>
      <div className={styles.featuresItem__icon}>
        {icon && <Image src={icon} alt={title} width={80} height={80} />}
      </div>
      <div className={styles.featuresItem__content}>
        <h3 className={styles.featuresItem__title}>{title}</h3>
        <p className={styles.featuresItem__description}>{description}</p>
      </div>
    </div>
  )
}

export default FeaturesItem
