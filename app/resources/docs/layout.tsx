import DefaultLayout from '@/components/Layout'
import { Suspense } from 'react'
import Loading from './loading'

export default function Layout({ children, heroTitle = 'Documentation' }: { children: React.ReactNode, heroTitle: string }) {
  return (
    <DefaultLayout heroSmall heroTitle={heroTitle}>
      <div className='container--content'>
        <div className='layout--docs'>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </DefaultLayout>
  )
}
