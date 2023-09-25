import DocumentCard from '@/components/Cards/DocumentCard'
import VersionSidebar from '@/components/VersionSidebar'
import { getAllVersions, getDocumentsByVersion } from '@/lib/api'

// export const dynamicParams = false

export async function generateStaticParams() {
  const versions = getAllVersions()
  return versions.map((item) => ({ version: item }))
}

export default async function VersionPage({
  params,
}: {
  params: { version: string; slug: string }
}) {
  console.log(params)
  const data = await getDocumentsByVersion(params.version)
  console.log(data)
  return (
    <>
      {params.slug}
      <VersionSidebar selectedVersion={params.version} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2rem',
        }}
      >
        {data?.map((item) => (
          <a href={`${params.version}/${item.id}`} key={item.id}>
            <DocumentCard title={item.title} />
          </a>
        ))}
      </div>
    </>
  )
}
