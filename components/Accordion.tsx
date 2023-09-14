'use client'
import React, { useState } from 'react'
import styles from '@/styles/accordion.module.scss'

export default function Accordion({
  title,
  content,
}: {
  title: string
  content: string | React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={`${styles.accordion} ${isOpen && styles.open}`}>
      <div
        role='button'
        className={styles.accordion__header}
        onClick={toggleAccordion}
      >
        {title}
      </div>
      <div className={styles.accordion__wrapper}>
        <div className={styles.accordion__content}>{content}</div>
      </div>
    </div>
  )
}
