import styles from '@/styles/card.module.scss'
import Image from 'next/image'
import Button from '@/components/Button'
import { format } from 'date-fns'

type UseCasesCardProps = {
  title: string
  image: string
  date: string
  excerpt: string
  url: string
}

const DEFAULT_IMAGE = '/assets/images/placeholder.png'

export default function UseCasesCard({
  title,
  image,
  date,
  excerpt,
  url,
}: UseCasesCardProps) {
  return (
    <div className={styles.useCasesCard}>
      <div className='h-[265px] w-[360px] bg-gray-200'>
        <Image
          src={image || DEFAULT_IMAGE}
          alt={title}
          width={360}
          height={265}
          className='min-h-full object-cover min-w-full'
        />
      </div>
      <div className='flex flex-col gap-4 px-10'>
        <p className={styles.useCasesCard__date}>
          {format(new Date(date), 'yyyy-MM-dd')}
        </p>
        <h3 className={styles.useCasesCard__title}>{title}</h3>
        <p className={styles.useCasesCard__excerpt}>{excerpt}</p>
      </div>
      <div className='flex justify-end p-10'>
        <Button
          href={`/${url}`}
          title='Read more'
          variant='primary'
          label={`Read full story of ${title}`}
        />
      </div>
    </div>
  )
}
