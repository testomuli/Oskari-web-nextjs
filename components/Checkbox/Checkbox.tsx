'use client'
import styles from '@/styles/checkbox.module.scss'
import { ReactNode } from 'react';

export function CheckboxGroup({children}: {children: Array<ReactNode>}) {
  return <div className={`${styles.checkbox_group}`}>{children}</div>
}

export default function Checkbox({isChecked, title, onChange}: {isChecked: boolean, title: string, onChange: (checked: boolean) => void}) {
  return <div className={`${styles.checkbox}`} onClick={() => onChange(!isChecked)}>
    <div className={`${styles.checkbox__header}`}>{title}</div>
    <input type='checkbox' defaultChecked={isChecked}/>
  </div>;
}
