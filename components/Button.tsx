import React from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'dark'
  title: string
  handleClick?: () => void
  href?: string
}

const Button = ({ variant, title }: ButtonProps) => {
  const variantStyle = variant ? `btn--${variant}` : ''
  return <button className={`btn ${variantStyle}`}>{title}</button>
}

export default Button
