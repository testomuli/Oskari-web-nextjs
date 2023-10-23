import DefaultLayout from '@/components/Layout'
import { Suspense } from 'react'
import Loading from './loading'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DefaultLayout heroSmall heroTitle='Documentation'>
      <div className='container--content'>
        <div className='layout--docs'>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </DefaultLayout>
  )
}
