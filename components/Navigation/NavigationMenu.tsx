'use client'
import styles from '@/styles/navigationmenu.module.scss'
import { NAVIGATION_ITEMS } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const renderChildren = (children: NavigationItem[]) => {
  return (
    <Image
      src='/assets/icons/arrow_down.svg'
      alt='Oskari Logo'
      width={24}
      height={24}
      priority={true}
    />
  )
}
console.log(styles)
export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={styles.navMenu}>
      <nav className={styles.navMenu__container}>
        <button
          type='button'
          title='Toggle navigation menu'
          className={`${styles.menuButton} ${isOpen ? styles.open : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={styles.navMenu__list}>
          {NAVIGATION_ITEMS.map((item) => (
            <li className={styles.navMenu__item} key={item.path}>
              <Link className={styles.navMenu__link} href={item.path}>
                {item.name}{' '}
                {item.children?.length && renderChildren(item.children)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
