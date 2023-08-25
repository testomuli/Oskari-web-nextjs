'use client'
import { NAVIGATION_ITEMS } from '@/utils/constants'
import Link from 'next/link'
import { useState } from 'react'
import NavigationSubMenu from './NavigationSubMenu'

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className='navMenu'>
      <nav className='navMenu__container'>
        <button
          type='button'
          title='Toggle navigation menu'
          className={`menuButton ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className='navMenu__list'>
          {NAVIGATION_ITEMS.map((item) => (
            <li className='navMenu__item' key={item.path}>
              {item.children && item.children.length > 0 ? (
                <NavigationSubMenu title={item.name} items={item.children} />
              ) : (
                <Link className='navMenu__link' href={item.path}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
