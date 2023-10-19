// import DocumentCard from '@/components/Cards/DocumentCard'
// import VersionSidebar from '@/components/VersionSidebar'

import DocumentCard from '@/components/Cards/DocumentCard'
import VersionSidebar from '@/components/VersionSidebar'
import { compareSemanticVersions } from '@/utils/misc'
import { allDocs } from 'contentlayer/generated'
import Link from 'next/link'

export async function generateStaticParams() {
  return allDocs.map((post) => ({
    slug: post._raw.flattenedPath.split('/'),
  }))
}

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] }
}) => {
  const post = allDocs.find((post) => post.url === params.slug.join('/'))
  if (post) return { title: post.title || post.altTitle || '' }
}

export default async function SingleDocPage({
  params,
}: {
  params: { slug: string[] }
}) {
  const post = allDocs.find((post) => post.url === params.slug.join('/'))
  const titles = allDocs.filter((post) => post.version === params.slug[0])
  const versions = [
    ...new Set(
      allDocs
        .map((doc) => doc.version)
        .sort((a, b) => compareSemanticVersions(a, b))
        .reverse()
    ),
  ]

  return (
    <>
      <VersionSidebar selectedVersion={params.slug[0]} versions={versions} />

      <div>
        {post?.body.html ? (
          <div className='md-content'>
            <div dangerouslySetInnerHTML={{ __html: post.body.html }}></div>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '2rem',
              marginTop: 27,
            }}
          >
            {titles?.map((item) => (
              <Link href={`/resources/docs/${item.url}`} key={item._id}>
                <DocumentCard title={item.title || item.altTitle || ''} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
