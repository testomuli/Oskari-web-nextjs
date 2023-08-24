import Link from 'next/link'
import style from '../styles/navigation.module.scss'
import Image from 'next/image'
import { NAVIGATION_ITEMS } from '@/utils/constants'
import Button from './Button'
import Search from './Search'

const renderChildren = (children: NavigationItem[]) => {
  return (
    <Image
      src='../assets/icons/arrow_down.svg'
      alt='Oskari Logo'
      width={24}
      height={24}
      priority={true}
    />
  )
}

export default function Navigation() {
  return (
    <div className={`${style.nav} ${style.dark}`}>
      <div className={`${style.nav__container} container`}>
        <div className={style.nav__logo}>
          <Image
            src='/assets/images/oskari-logo.svg'
            alt='Oskari Logo'
            width={200}
            height={90}
            priority={true}
          />
        </div>
        <Search />
        <div className={style.nav__menu}>
          <nav className={style.nav__menu__container}>
            <ul className={style.nav__menu__list}>
              {NAVIGATION_ITEMS.map((item) => (
                <li className={style.nav__menu__item} key={item.path}>
                  <Link className={style.nav__link} href={item.path}>
                    {item.name}{' '}
                    {item.children?.length && renderChildren(item.children)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={style.nav__cta}>
          <Button title='Download' variant='primary' />
        </div>
      </div>
    </div>
  )
}
