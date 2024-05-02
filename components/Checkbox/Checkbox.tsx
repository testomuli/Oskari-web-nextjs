'use client'
import styles from '@/styles/checkbox.module.scss'
import { ReactNode } from 'react';

export function CheckboxGroup({children}: {children: Array<ReactNode>}) {
  return <div className={`${styles.checkbox_group}`}>{children}</div>
}

export default function Checkbox({checked, title, onChange}: {checked: boolean, title: string, onChange: (checked: boolean) => void}) {
  return <div className={`${styles.checkbox}`} onClick={() => onChange(!checked)}>
    <div className={`${styles.checkbox__header}`}>{title}</div>
    <input type='checkbox' checked={checked}/>
  </div>;
}
