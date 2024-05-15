'use client'
import Link from 'next/link'
import { useState } from 'react'
import Button from '../Button'

type NavigationSubMenuProps = {
  items: {
    name: string
    path: string,
  }[]
  title: string,
  paramIsOpen: boolean,
  toggleMenuCallback: (menuitem: string, itemIsOpen: boolean) => void
}

export default function NavigationSubMenu({
  items,
  title,
  paramIsOpen = false,
  toggleMenuCallback
}: NavigationSubMenuProps) {

  const [isOpen, setIsOpen] = useState(paramIsOpen)
  const handleTitleClick = () => {
    setIsOpen((prev) => !prev);
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
        handleClick={() => toggleMenuCallback(title, !paramIsOpen)}
        title={title}
        expandable
      />
      <div
        className={`navigationsubmenu ${paramIsOpen ? ' open' : ''}`}
        data-sub-menu-open={paramIsOpen}
      >
        <div className='navigationsubmenu__container'>
          <ul className='navigationsubmenu__list'>
            {items.map((item) => (
              <li className='navMenu__item' key={item.name}>
                <Link href={item.path} onClick={handleTitleClick}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
