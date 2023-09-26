type ContainerProps = {
  children: React.ReactNode
  props?: never
  style?: React.CSSProperties
}

const Container = ({ children, ...props }: ContainerProps) => (
  <div className='container--content' {...props}>
    {children}
  </div>
)

export default Container
