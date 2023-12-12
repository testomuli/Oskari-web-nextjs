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
  external?: boolean
  newWindow?: boolean
}

const Button = ({
  variant,
  title,
  handleClick,
  handleHover,
  expandable,
  href,
  label,
  external,
  newWindow,
}: ButtonProps) => {
  const variantStyle = variant ? `btn--${variant}` : ''
  if (external) {
    ;<a
      className={`btn ${variantStyle}`}
      href={href}
      aria-label={`${label} – ${title}`}
      target={newWindow ? '_blank' : '_self'}
      rel='noopener noreferrer'
    >
      <span className='opacity-0 h-0 w-0 pointer-events-none absolute top-0'>
        {label} –{' '}
      </span>
      {title}
    </a>
  }
  if (href) {
    return (
      <Link
        className={`btn ${variantStyle}`}
        href={href}
        aria-label={`${label} – ${title}`}
        target={newWindow ? '_blank' : '_self'}
        rel='noopener noreferrer'
      >
        <span className='opacity-0 h-0 w-0 pointer-events-none absolute top-0'>
          {label} –{' '}
        </span>
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
