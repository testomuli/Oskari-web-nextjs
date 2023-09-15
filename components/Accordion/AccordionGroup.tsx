import React from 'react'
import styles from '@/styles/accordion.module.scss'
export default function AccordionGroup({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles.accordionGroup}>{children}</div>
}
