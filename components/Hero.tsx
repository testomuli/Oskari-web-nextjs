import Image from 'next/image'
import styles from '../styles/hero.module.scss'
import Button from './Button'

const renderHeroImage = (small: boolean = false) => {
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

export default function Hero({ small = true }) {
  return (
    <div className={styles.hero}>
      <div
        className={`${
          small ? styles['hero__container--small'] : styles.hero__container
        }`}
      >
        <div className={styles.blobs}>
          {renderHeroImage(small ? true : false)}
        </div>
        <div className={`${styles.hero__content} container--content`}>
          <div>
            <h1 className={styles.hero__title}>
              Oskari – a mapping tool that adapts to your needs
            </h1>
            <div className={styles.hero__cta}>
              <Button title='Download' variant='dark' />
            </div>
          </div>
          <div className={styles.hero__imageContainer}>
            <Image
              src='/assets/images/header-hero-image.png'
              width={600}
              height={427}
              alt='kuva'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
