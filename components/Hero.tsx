import Image from 'next/image'
import styles from '../styles/hero.module.scss'
import Button from './Button'

export default function Hero({
  small = false,
  title,
}: {
  title?: string
  small?: boolean
}) {
  const renderHeroImage = () => {
    if (small) {
      return (
        <Image
          src='/assets/images/hero-pills.svg'
          alt='blob'
          width={1920}
          height={500}
        />
      )
    }
    return (
      <Image
        src='/assets/images/hero-blobs.svg'
        alt='blob'
        width={1920}
        height={700}
      />
    )
  }

  const heroClass = small
    ? styles['hero__container--small']
    : styles.hero__container

  const heroContentClass = small
    ? styles['hero__content--small']
    : styles.hero__content
  return (
    <div className={styles.hero}>
      <div className={heroClass}>
        <div className={styles.blobs}>{renderHeroImage()}</div>
        <div className={`${heroContentClass} container--content`}>
          <div>
            <h1 className={styles.hero__title}>{title}</h1>
            {!small && (
              <div className={styles.hero__cta}>
                <Button title='Download' variant='dark' href='/download' />
              </div>
            )}
          </div>
          {!small && (
            <div className={styles.hero__imageContainer}>
              <Image
                src='/assets/images/header-hero-image.png'
                width={600}
                height={427}
                alt='kuva'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
