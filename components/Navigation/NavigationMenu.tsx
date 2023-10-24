'use client'

import { NAVIGATION_ITEMS } from '@/utils/constants'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import NavigationSubMenu from './NavigationSubMenu'
import Button from '../Button'
import Search from '../Search'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { width, height } = useWindowDimensions()
  const pathname = usePathname()

  useEffect(() => {
    closeMenu()
  }, [width, height])

  const toggleMenu = () => {
    const bodyEl = document.getElementsByTagName('body')[0]
    setIsOpen((prev) => !prev)
    bodyEl.classList.toggle('nav-open')
  }

  const closeMenu = () => {
    const bodyEl = document.getElementsByTagName('body')[0]
    setIsOpen(false)
    bodyEl.classList.remove('nav-open')
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
        <div className='navMenu__list-container'>
          <div className='mobile-sub-nav'>
            <Button title='Download' variant='primary' href='/download' />
          </div>
          <ul className='navMenu__list'>
            {NAVIGATION_ITEMS.map((item) => (
              <li className='navMenu__item' key={item.path}>
                {item.children && item.children.length > 0 ? (
                  <NavigationSubMenu
                    title={item.name}
                    items={[item, ...item.children]}
                  />
                ) : (
                  <Link
                    className={`navMenu__link ${
                      pathname === item.path && pathname !== '/' && 'active'
                    }`}
                    href={item.path}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li className='navMenu__item'></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
