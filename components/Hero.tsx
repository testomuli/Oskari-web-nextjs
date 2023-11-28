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
  const heroClass = small
    ? styles['hero__container--small']
    : styles.hero__container

  const heroContentClass = small
    ? styles['hero__content--small']
    : styles.hero__content
  return (
    <div
      className={`content-grid relative ${
        small ? 'max-h-[500px]' : 'aspect-video'
      }`}
    >
      <div
        className={`${
          !small
            ? "bg-[url('/assets/images/hero-blob.svg')]"
            : "bg-[url('/assets/images/hero-blob-small.svg')]"
        } bg-no-repeat bg-cover inset-0 absolute lg:bg-center full-width`}
      ></div>
      <div className={`${styles.hero}`}>
        <div className={`${heroClass}`}>
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
    </div>
  )
}
