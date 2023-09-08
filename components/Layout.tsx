import '../styles/main.scss'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation/Navigation'

interface LayoutProps {
  children: React.ReactNode
  meta?: { title: string; description: string }
  heroSmall?: boolean
  heroTitle?: string
}

export default function Layout({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  meta,
  heroSmall = false,
  heroTitle = 'Oskari – a mapping tool that adapts to your needs',
}: LayoutProps) {
  return (
    <>
      <Navigation />
      <Hero small={heroSmall} title={heroTitle} />
      <main className='content-wrapper'>{children}</main>
      <Footer />
    </>
  )
}
