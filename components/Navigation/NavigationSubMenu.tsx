'use client'
import Link from 'next/link'
import { useState } from 'react'
import Button from '../Button'

type NavigationSubMenuProps = {
  items: {
    name: string
    path: string
  }[]
  title: string
}

export default function NavigationSubMenu({
  items,
  title,
}: NavigationSubMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const handleTitleClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      {isOpen && (
        <div
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={handleTitleClick}
        ></div>
      )}
      <Button
        variant='link'
        handleClick={handleTitleClick}
        title={title}
        expandable
      />
      <div
        className={`navigationsubmenu ${isOpen ? ' open' : ''}`}
        data-sub-menu-open={isOpen ? true : false}
      >
        <div className='navigationsubmenu__container'>
          <ul className='navigationsubmenu__list'>
            {items.map((item) => (
              <li className='navMenu__item' key={item.name}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
