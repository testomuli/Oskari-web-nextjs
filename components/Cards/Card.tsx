import styles from '@/styles/card.module.scss'
import Button from '../Button'
import { CardItemType } from '@/types/types'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'

const Card = ({
  data,
  style,
}: {
  data: CardItemType
  style?: React.CSSProperties
}) => {
  const { date, title, description, href, image } = data
  return !image ? (
    <div className={styles.card} style={{ ...style }}>
      {date && (
        <div className={styles.card__date}>{format(date, 'yyyy-MM-dd')}</div>
      )}
      <h2 className={styles.card__title}>{title}</h2>
      <div className={styles.card__description}>{description}</div>
      {href && (
        <div className={styles.card__cta}>
          <Button
            variant='primary'
            href={href}
            title='Read more'
            label={`Read full story of ${title}`}
          />
        </div>
      )}
    </div>
  ) : (
    <div
      className={`${styles.card} !p-0 !flex-row overflow-hidden !grid grid-cols-1 md:grid-cols-[1fr_2fr] !gap-0`}
      style={{ ...style }}
    >
      <div>
        {href ? (
          <Link href={href}>
            <Image
              src={image}
              alt={title}
              height={360}
              width={478}
              className={`object-cover min-w-full min-h-full max-h-[360px]`}
            />
          </Link>
        ) : (
          <Image
            src={image}
            alt={title}
            height={360}
            width={478}
            className={`object-cover min-w-full min-h-full max-h-[360px]`}
          />
        )}
      </div>
      <div className='px-[2.75rem] py-[2.7rem] md:px-[3.75rem] flex flex-col gap-5'>
        {date && (
          <div className={styles.card__date}>{format(date, 'yyyy-MM-dd')}</div>
        )}
        <h2 className={styles.card__title}>
          {href ? (
            <Link href={href} className='hover:underline'>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <div className={styles.card__description}>{description}</div>
        {href && (
          <div className={styles.card__cta}>
            <Button
              variant='primary'
              href={href}
              title='Read more'
              label={`Read full story of ${title}`}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
