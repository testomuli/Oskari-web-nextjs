'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/accordion.module.scss'
import Image from 'next/image'

export default function Accordion({
  title,
  content,
  initialOpen = false,
}: {
  title: string
  content: string | React.ReactNode
  initialOpen?: boolean
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
      return
    }
    setIsOpen((prev) => !prev)
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
        className={styles.accordion__header}
        onClick={toggleAccordion}
      >
        {title}
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
