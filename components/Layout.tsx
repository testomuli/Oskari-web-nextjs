import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation/Navigation'

interface LayoutProps {
  children: React.ReactNode
  heroSmall?: boolean
  heroTitle?: string
}

export default function Layout({
  children,
  heroSmall = false,
  heroTitle = 'Oskari – a mapping tool that adapts to your needs',
}: LayoutProps) {
  /*
  let heroImageClass = heroSmall
    ? "bg-[url('/assets/images/hero-blob-small.svg')] h-[calc(700px+var(--navigation-height))] !bg-cover"
    : "bg-[url('/assets/images/hero-blob.svg')] min-h-[100svh] lg:min-h-[unset] lg:h-auto lg:aspect-video pt-[calc(var(--navigation-height)+1rem)]"
  */
  // lose the "small" option (for now at least). It's causing issues with the new dom-structure, now that the colored balls stay on the background instead of as a block-level node
  const heroImageClass = "bg-[url('/assets/images/hero-blob.svg')] min-h-[100svh] lg:min-h-[unset] lg:h-auto lg:aspect-video pt-[calc(var(--navigation-height)+1rem)]";
  return (
    <>
      <Navigation />
      <div style={{ marginTop: '8rem'}}>
        <div className={`full-width full-height ${heroImageClass} bg-no-repeat bg-cover lg:bg-contain inset-0 lg:bg-top`}>
          <Hero small={heroSmall} title={heroTitle} />
          <main className='content-wrapper content-grid'>{children}</main>
        </div>
        <Footer/>
      </div>
    </>
  )
}