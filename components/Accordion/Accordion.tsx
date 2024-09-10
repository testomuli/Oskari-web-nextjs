'use client'
import React, { KeyboardEvent, useEffect, useRef, useState } from 'react'
import styles from '@/styles/accordion.module.scss'
import Image from 'next/image'

export default function Accordion({
  id,
  title,
  content,
  initialOpen = false,
  updateIsOpen,
}: {
  id?: string
  title: string
  content: string | React.ReactNode
  initialOpen?: boolean,
  updateIsOpen?: (key: string, isOpen: boolean) => void,
}) {
  const [isOpen, setIsOpen] = useState(initialOpen)
  const [isAccordionGroup, setIsAccordionGroup] = useState(false)
  const accordionRef = useRef<HTMLDivElement>(null)

  const toggleAccordion = () => {
    if (isAccordionGroup && accordionRef.current?.parentElement) {
      const children = Array.from(accordionRef.current.parentElement.children)

      if (children.length > 0) {
        children.forEach((child) => {
          if (child !== accordionRef.current) {
            child.classList.remove(styles.open)
            return
          }
          child.classList.toggle(styles.open)
        })
      }
    }
    setIsOpen((prev) => !prev)
    if (updateIsOpen && id) {
      updateIsOpen(id, !isOpen);
    }

  }

  const accordionKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      toggleAccordion();
    }
  }

  useEffect(() => {
    const hasAccordionGroupParent =
      accordionRef.current?.parentElement?.className.includes('accordionGroup')
    if (hasAccordionGroupParent) {
      setIsAccordionGroup(true)
    }
  }, [])

  return (
    <div
      className={`${styles.accordion} ${isOpen ? styles.open : ''}`}
      ref={accordionRef}
    >
      <div
        role='button'
        tabIndex={0}
        className={styles.accordion__header}
        onClick={toggleAccordion}
        onKeyUp={accordionKeyUp}
      >
        {title} - { initialOpen } - { isOpen }
        <span className={styles.arrowIndicator}>
          <Image
            src='/assets/icons/arrow_down.svg'
            height={24}
            width={24}
            alt='down-arrow'
          />
        </span>
      </div>
      <div className={styles.accordion__wrapper}>
        <div className={styles.accordion__content}>{content}</div>
      </div>
    </div>
  )
}
