import styles from '@/styles/imagecard.module.scss'
import Image from 'next/image'

type ImageCardProps = {
  imageSrc: string
  altText: string
  title: string
  content: string
  width?: number
}
export default function ImageCard({
  imageSrc,
  altText,
  title,
  content,
  width,
}: ImageCardProps) {
  return (
    <div
      className={styles.imageCard}
      style={{ width: width ? `${width}px` : '' }}
    >
      <div className={styles.imageCard__image}>
        <Image width={364} height={214} src={imageSrc} alt={altText} />
      </div>
      <div className={styles.imageCard__content}>
        <h3 className={styles.imageCard__heading}>{title}</h3>
        <p className={styles.imageCard__text}>{content}</p>
      </div>
    </div>
  )
}
