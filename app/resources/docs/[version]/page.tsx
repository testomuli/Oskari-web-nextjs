import DocumentCard from '@/components/Cards/DocumentCard'
import VersionSidebar from '@/components/VersionSidebar'
import { getVersionIndex } from '@/lib/utils'
import Link from 'next/link'
import { compareSemanticVersions } from '@/utils/misc'

import availableVersions from '@/_content/docs';
export const generateMetadata = ({
  params,
}: {
  params: { slug: string; version: string }
}) => {
  return { title: params.version || 'Documentation' }
}

export default async function VersionPage({
  params,
}: {
  params: { version: string }
}) {

  const versions = [
    ...new Set(
      availableVersions
        .sort((a, b) => compareSemanticVersions(a, b))
        .reverse() || []
    ),
  ]

  const indexJSON = await getVersionIndex(params.version);
  const titles = indexJSON?.map((item) => {
    return { title: item.slug, url: params.version + '/' + item.slug, slug: item.slug };
  }) || [];

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
