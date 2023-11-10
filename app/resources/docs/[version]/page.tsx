import DocumentCard from '@/components/Cards/DocumentCard'
import VersionSidebar from '@/components/VersionSidebar'
import { generateAllDocs } from '@/lib/utils'
import Link from 'next/link'
import { compareSemanticVersions } from '@/utils/misc'

export default function VersionPage({
  params,
}: {
  params: { version: string }
}) {
  const allDocs = generateAllDocs()
  const titles =
    allDocs
      ?.filter((post) => post.version === params.version)
      ?.map((post) => ({
        url: post.url,
        slug: post.slug,
        title: post.title,
      })) || []

  const versions = [
    ...new Set(
      allDocs
        ?.map((doc) => doc.version)
        .sort((a, b) => compareSemanticVersions(a, b))
        .reverse() || []
    ),
  ]

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <VersionSidebar selectedVersion={params.version} versions={versions} />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: 27,
        }}
      >
        {titles?.map((item) => (
          <Link href={`/resources/docs/${item.url}`} key={item.slug}>
            <DocumentCard title={item.title || ''} />
          </Link>
        ))}
      </div>
    </>
  )
}
