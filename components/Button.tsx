import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'dark' | 'link'
  title: string
  handleClick?: () => void
  href?: string
  expandable?: boolean
  style?: React.CSSProperties
}

const Button = ({
  variant,
  title,
  handleClick,
  expandable,
  href,
}: ButtonProps) => {
  const variantStyle = variant ? `btn--${variant}` : ''
  if (href) {
    return (
      <Link className={`btn ${variantStyle}`} href={href}>
        {title}
      </Link>
    )
  }
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
