import DefaultLayout from '@/components/Layout'
import { Suspense } from 'react'
import Loading from '../../docs/loading'

/**
 * This way is "wrong". We should instead use layout in a more orderly nextjs fashion
 * This will need some refactoring at some point. This is just a quick and dirty solution
 * to make app work just like before even after migration to nextjs 14
 */
export default function ApiDocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <DefaultLayout heroSmall heroTitle={'Oskari API Documentation'}>
      <div className='container--content'>
        <div className='layout--docs'>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </DefaultLayout>
  )
}
