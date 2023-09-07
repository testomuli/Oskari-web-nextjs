import React from 'react'

const Container = ({ children, ...props }: any) => (
  <div className='container--content' {...props}>
    {children}
  </div>
)

export default Container
