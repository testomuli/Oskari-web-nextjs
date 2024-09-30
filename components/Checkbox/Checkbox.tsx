'use client'
import styles from '@/styles/checkbox.module.scss'
import { ReactNode } from 'react';
import { KeyboardEvent } from 'react';

export function CheckboxGroup({children}: {children: Array<ReactNode>}) {
  return <div className={`${styles.checkbox_group}`}>{children}</div>
}

function shouldToggle(event: KeyboardEvent) {
  return event?.key === 'Enter';
}

export default function Checkbox({isChecked, title, onChange}: {isChecked: boolean, title: string, onChange: (checked: boolean) => void}) {
  return <div className={`${styles.checkbox} pr-2`} onClick={() => onChange(!isChecked)}>
    <label htmlFor={'checkbox_' + title} className={`${styles.checkbox__header}`}>{title}</label>
    <input id={'checkbox_' + title} type='checkbox' defaultChecked={isChecked} onKeyUp={(event) => { if (shouldToggle(event)) { onChange(!isChecked); }}}/>
  </div>;
}
