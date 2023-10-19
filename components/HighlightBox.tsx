import styles from '@/styles/highlightbox.module.scss'
import Image from 'next/image'

type HighlightBoxProps = {
  children: React.ReactNode
  otter?: boolean
  style?: React.CSSProperties
  contentStyles?: React.CSSProperties
}

export default function HighlightBox({
  children,
  contentStyles,
  otter = true,
  ...props
}: HighlightBoxProps) {
  return (
    <div className={styles.highlightBox} {...props}>
      <div
        className={`${styles.highlightBox__content} container--content`}
        style={contentStyles}
      >
        {otter && (
          <Image
            src='/assets/images/oskari_swim_logo_black.svg'
            className={styles.highlightBox__otter}
            height={92}
            width={330}
            alt='Oskari Otter'
          />
        )}
        {children}
      </div>
    </div>
  )
}
