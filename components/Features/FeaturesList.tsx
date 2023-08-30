import { FeaturesItemType } from '@/types/types'
import styles from '@/styles/features.module.scss'
import FeaturesItem from './FeaturesItem'

const FeaturesList = ({
  data,
  title,
}: {
  data: FeaturesItemType[]
  title: string
}) => {
  return (
    <div className={`${styles.featuresGrid} container--content`}>
      {title && <h2 className={styles.featuresGrid__title}>{title}</h2>}
      {data.map(({ title, icon, description }: FeaturesItemType) => (
        <FeaturesItem
          key={title}
          icon={icon}
          title={title}
          description={description}
        />
      ))}
    </div>
  )
}

export default FeaturesList
