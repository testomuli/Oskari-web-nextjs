import DocumentCard from '@/components/Cards/DocumentCard'
import { getAllDocuments } from '@/lib/api'

async function getData(selectedVersion?: string) {
  const documentsData = getAllDocuments(selectedVersion)
  return await Promise.all(documentsData)
}

export default async function VersionPage({
  params,
}: {
  params: { version: string }
}) {
  const data = await getData(params.version)
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
      }}
    >
      {data?.map((item) => (
        <a href={`${params.version}/${item.slug}`} key={item.slug}>
          <DocumentCard
            title={item.title}
            excerpt={item.content.slice(0, 50)}
          />
        </a>
      ))}
    </div>
  )
}
