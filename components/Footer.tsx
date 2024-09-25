import styles from '@/styles/footer.module.scss'
import { SITE_CONFIG } from '@/utils/config'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const { socials, sitemap } = SITE_CONFIG
  return (
    <footer className={styles.footer}>
      <Image
        src='/assets/footer_wave_pseudo.svg'
        height={95}
        width={1920}
        alt='Footer wave'
        className={styles.footer__wave}
      />
      <div className={`${styles.footer__wrapper} content-grid`}>
        <div className={`${styles.footer__container} container`}>
          <div className={styles.footer__contact}>
            <h2>Contact</h2>
            <a href='mailto:info@oskari.org'>info@oskari.org</a>
            <p>
              Oskari project’s coordinator is National Land Survey of Finland
            </p>
            <a href='https://www.maanmittauslaitos.fi/tietoa-maanmittauslaitoksesta/organisaatio/saavutettavuus-huomioitu/oskariorg' target="_blank">Accessibility statement</a>

          </div>
          <div className={styles.footer__sitemap}>
            <h2>Sitemap</h2>
            <div role='navigation' aria-label='Footer navigation'>
              <ul className={styles['footer__sitemap-links']}>
                {sitemap.map((item) => (
                  <li
                    key={item.title}
                    className={styles['footer__sitemap-links-item']}
                  >
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.footer__social}>
            <h2>Follow us</h2>
            <ul className={styles['footer__social-links']} aria-label='Socials'>
              {(Object.keys(socials) as Array<keyof typeof socials>).map(
                (key) => {
                  const item = socials[key]
                  return (
                    <li key={item.icon}>
                      <a
                        href={item.url}
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        <Image
                          width={52}
                          height={52}
                          src={item.icon}
                          alt={item.name}
                        />
                      </a>
                    </li>
                  )
                }
              )}
            </ul>
          </div>
          <div className={styles.footer__community}>
            <h2>OSGeo community</h2>
            <Image
              src='/assets/images/osgeo_logo.png'
              alt='OSGeo community logo'
              width={593}
              height={228}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
