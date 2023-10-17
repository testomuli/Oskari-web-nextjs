import styles from '@/styles/card.module.scss'
import Button from '../Button'
import { CardItemType } from '@/types/types'

const Card = ({
  data,
  style,
}: {
  data: CardItemType
  style: React.CSSProperties
}) => {
  const { date, title, description, href } = data
  return (
    <div className={styles.card} style={{ ...style }}>
      {date && <div className={styles.card__date}>{date}</div>}
      <h3 className={styles.card__title}>{title}</h3>
      <div className={styles.card__description}>{description}</div>
      {href && (
        <div className={styles.card__cta}>
          <Button variant='primary' href={href} title='Read more' />
        </div>
      )}
    </div>
  )
}

export default Card
