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
      <div className={styles.footer__wrapper}>
        <div className={`${styles.footer__container} container`}>
          <div className={styles.footer__contact}>
            <h3>Contact</h3>
            <a href='mailto:info@oskari.org'>info@oskari.org</a>
            <p>
              Oskari project’s coordinator is National Land Survey of Finland
            </p>
          </div>
          <div className={styles.footer__sitemap}>
            <h3>Sitemap</h3>
            <ul role='navigation' className={styles['footer__sitemap-links']}>
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
          <div className={styles.footer__social}>
            <h3>Follow us</h3>
            <ul role='menu' className={styles['footer__social-links']}>
              {socials.map((item) => (
                <li key={item.icon}>
                  <Link href={item.url}>
                    <Image
                      width={52}
                      height={52}
                      src={item.icon}
                      alt={item.name}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footer__community}>
            <h3>OSGeo community</h3>
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
