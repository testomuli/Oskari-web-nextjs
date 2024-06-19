import Image from 'next/image'
import styles from '../styles/hero.module.scss'
import Button from './Button'

export default function Hero({
  small = false,
  title,
  isFrontPage = false
}: {
  title?: string
  small?: boolean
  isFrontPage?: boolean
}) {
  const heroClass = small
    ? styles['hero__container--small']
    : styles.hero__container

  const heroContentClass = small
    ? styles['hero__content--small']
    : styles.hero__content

  const heroImageClass = small
    ? "bg-[url('/assets/images/hero-blob-small.svg')] h-[calc(500px+var(--navigation-height))] !bg-cover"
    : "bg-[url('/assets/images/hero-blob.svg')] aspect-auto min-h-[100svh] lg:min-h-[unset] lg:h-auto lg:aspect-video pt-[calc(var(--navigation-height)+1rem)] pb-[calc(var(--navigation-height)*2+1rem)]"
  return (
    <div
      className={`relative full-width ${heroImageClass} bg-no-repeat bg-cover lg:bg-contain inset-0 lg:bg-center`}
    >
      <div className={`${heroClass}`}>
        <div className={heroContentClass}>
          <div>
            <h1 className={styles.hero__title}>{title}</h1>
            {isFrontPage && (
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
          {isFrontPage && (
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
