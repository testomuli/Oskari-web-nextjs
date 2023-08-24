import Link from 'next/link'
import style from '@/styles/navigation.module.scss'
import Image from 'next/image'
import { NAVIGATION_ITEMS } from '@/utils/constants'
import Button from '../Button'
import Search from '../Search'
import NavigationMenu from './NavigationMenu'

export default function Navigation() {
  return (
    <div className={`${style.nav}`}>
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
        <NavigationMenu />
        <div className={style.nav__cta}>
          <Button title='Download' variant='primary' />
        </div>
      </div>
    </div>
  )
}
