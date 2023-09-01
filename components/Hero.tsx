import Image from 'next/image'
import styles from '../styles/hero.module.scss'
import Button from './Button'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.blobs}>
          <Image
            src='/assets/images/hero-blobs.svg'
            alt='blob'
            width={1920}
            height={700}
          />
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
