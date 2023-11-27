import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'dark' | 'link' | 'black'
  title: string
  handleClick?: () => void
  handleHover?: () => void
  href?: string
  expandable?: boolean
  style?: React.CSSProperties
  label?: string
}

const Button = ({
  variant,
  title,
  handleClick,
  handleHover,
  expandable,
  href,
  label,
}: ButtonProps) => {
  const variantStyle = variant ? `btn--${variant}` : ''
  if (href) {
    return (
      <Link className={`btn ${variantStyle}`} href={href} aria-label={label}>
        {title}
      </Link>
    )
  }
  return (
    <button
      className={`btn ${variantStyle}`}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {title}{' '}
      {expandable && (
        <ChevronDownIcon style={{ width: '1em', height: '1em' }} />
      )}
    </button>
  )
}

export default Button
