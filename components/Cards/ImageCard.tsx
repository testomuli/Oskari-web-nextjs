import styles from '@/styles/imagecard.module.scss'
import Image from 'next/image'
import Link from 'next/link'

type ImageCardProps = {
  imageSrc: string
  altText: string
  title: string
  content: string
  width?: number
  url: string
}
export default function ImageCard({
  imageSrc,
  altText,
  title,
  content,
  width,
  url,
}: ImageCardProps) {
  return (
    <Link
      href={url}
      data-label={title}
      className='pointer-events-none'
      draggable={false}
    >
      <div
        className={styles.imageCard}
        style={{ width: width ? `${width}px` : '' }}
      >
        <div className={styles.imageCard__image}>
          <Image
            width={364}
            height={214}
            src={imageSrc}
            alt={altText}
            className='pointer-events-auto'
            draggable={false}
          />
        </div>
        <div className={styles.imageCard__content}>
          <h3 className={`pointer-events-auto ${styles.imageCard__heading}`}>
            {title}
          </h3>
          <p className={styles.imageCard__text}>{content}</p>
        </div>
      </div>
    </Link>
  )
}
