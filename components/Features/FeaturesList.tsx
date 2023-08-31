import { FeaturesItemType } from '@/types/types'
import styles from '@/styles/features.module.scss'
import FeaturesItem from './FeaturesItem'

const FeaturesList = ({
  data,
  title,
  padding = true,
}: {
  data: FeaturesItemType[]
  title: string
  padding?: boolean
}) => {
  return (
    <section
      className={`${styles.featuresGrid} container--content ${
        padding ? 'section-padding' : ''
      }`}
    >
      {title && <h2 className={styles.featuresGrid__title}>{title}</h2>}
      {data.map(({ title, icon, description }: FeaturesItemType) => (
        <FeaturesItem
          key={title}
          icon={icon}
          title={title}
          description={description}
        />
      ))}
    </section>
  )
}

export default FeaturesList
