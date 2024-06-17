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
    <>
      <div className={`${heroClass}`}>
        <div className={heroContentClass}>
          <div>
            <h1 className={styles.hero__title}>{title}</h1>
            {!small && (
              <div className={`${styles.hero__cta} flex gap-4`}>
                <Button title='Download' variant='dark' href='/download' />
                <Button
                  title='Try demo'
                  variant='dark'
                  href='https://demo.oskari.org'
                  external
                  newWindow
                />
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
    </>
  )
}
