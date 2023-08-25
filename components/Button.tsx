import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'dark' | 'link'
  title: string
  handleClick?: () => void
  href?: string
  expandable?: boolean
}

const Button = ({ variant, title, handleClick, expandable }: ButtonProps) => {
  const variantStyle = variant ? `btn--${variant}` : ''
  return (
    <button className={`btn ${variantStyle}`} onClick={handleClick}>
      {title}{' '}
      {expandable && (
        <ChevronDownIcon style={{ width: '1em', height: '1em' }} />
      )}
    </button>
  )
}

export default Button
