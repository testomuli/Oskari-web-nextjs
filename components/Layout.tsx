import * as React from 'react'
import Navigation from './Navigation/Navigation'
import '../styles/main.scss'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='page-wrapper'>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
