import DefaultLayout from '@/components/Layout'
import { Suspense } from 'react'
import Loading from './loading'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DefaultLayout heroSmall heroTitle='Documentation'>
      <div className='container--content'>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 4fr',
            gap: '4rem',
          }}
        >
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </DefaultLayout>
  )
}
