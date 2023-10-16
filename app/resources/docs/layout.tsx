import DefaultLayout from '@/components/Layout'
import { Suspense } from 'react'
import Loading from './loading'
import VersionSidebar from '@/components/VersionSidebar'
import { allDocs } from '@/.contentlayer/generated'
import { compareSemanticVersions } from '@/utils/misc'
// import { allDocuments } from 'contentlayer/generated'

export default function Layout({ children }: { children: React.ReactNode }) {
  // const versions = allDocuments.map((doc) => doc.title)
  const versions = [
    ...new Set(
      allDocs
        .map((doc) => doc.version)
        .sort((a, b) => compareSemanticVersions(a, b))
        .reverse()
    ),
  ]
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
          <Suspense fallback={<Loading />}>
            <VersionSidebar selectedVersion={''} versions={versions} />
            {children}
          </Suspense>
        </div>
      </div>
    </DefaultLayout>
  )
}
