import styles from '@/styles/card.module.scss'
import Card from './Card'
import Button from '../Button'
import { CardItemType } from '@/types/types'

const CardList = ({ title, data, isFrontPage = false }: { title: string; data: CardItemType[], isFrontPage?: boolean }) => {
  let className = 'section-padding';
  if (isFrontPage) {
    className += 'section-padding-top-0';
  }
  return (
    <section className={`${className}`}>
      <h2 className={styles.cardList__heading}>{title}</h2>
      <div className={styles.cardList}>
        {data.map((item) => (
          <Card data={item} key={item.href} />
        ))}
        <div className={styles.cardList__cta}>
          <Button variant='primary' href='/blog' title='Go to blog' />
        </div>
      </div>
    </section>
  )
}

export default CardList
