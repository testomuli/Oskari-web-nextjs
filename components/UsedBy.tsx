import styles from '@/styles/usedby.module.scss'
import Image from 'next/image'

const UsedBy = ({
  data,
  title,
}: {
  data: { src: string; alt: string }[]
  title: string
}) => {
  return (
    <div className='section-padding'>
      <section className={styles.usedBy}>
        <div className={`container--content ${styles.usedBy__wrapper}`}>
          <h2 className={styles.usedBy__title}>{title}</h2>
          <div className={styles.usedBy__container}>
            <div className={styles.usedBy__list}>
              {data?.length > 0 &&
                data.map((item) => (
                  <div className={styles['usedBy__list-item']} key={item.src}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={240}
                      height={125}
                      loading='eager'
                    />
                  </div>
                ))}
            </div>
            <div className={styles.usedBy__list}>
              {data?.length > 0 &&
                data.map((item) => (
                  <div className={styles['usedBy__list-item']} key={item.src}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={240}
                      height={126}
                      loading='eager'
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UsedBy
