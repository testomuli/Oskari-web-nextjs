// import DocumentCard from '@/components/Cards/DocumentCard'
// import VersionSidebar from '@/components/VersionSidebar'

import { allDocs } from 'contentlayer/generated'

export async function generateStaticParams() {
  return allDocs.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  console.log(params)
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === params.slug)
  if (!doc) throw new Error(`Failed to find document for slug: ${params.slug}`)
  return {
    title: doc?.title,
  }
}

export default async function SingleDocPage({ params }: any) {
  return (
    <>
      {JSON.stringify(params)}
      {/* <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: 27,
        }}
      >
        {data?.map((item) => (
          <a href={`${params.version}/${item.id}`} key={item.id}>
            <DocumentCard title={item.title} />
          </a>
        ))}
      </div> */}
    </>
  )
}
