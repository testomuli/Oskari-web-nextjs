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
  const containerClass = small
    ? styles['hero__container--small']
    : styles.hero__container

  const contentClass = small
    ? styles['hero__content--small']
    : styles.hero__content

  const imageClass = "bg-[url('/assets/images/hero-blob.svg')] aspect-auto min-h-[100svh] lg:min-h-[unset] lg:h-auto lg:aspect-video pt-[calc(var(--navigation-height)+1rem)] pb-[calc(var(--navigation-height)*2+1rem)]"
  return (
    <div
      className={`relative full-width ${imageClass} bg-no-repeat bg-cover lg:bg-contain inset-0 lg:bg-center`}
    >
      <div className={`${containerClass}`}>
        <div className={contentClass}>
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
    </div>
  )
}
