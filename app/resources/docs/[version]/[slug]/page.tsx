import VersionSidebar from '@/components/VersionSidebar'
import { getAllVersions, getDocumentData } from '@/lib/api'
import { getHeadersFromMarkdownContent } from '@/utils/misc'

export async function generateStaticParams() {
  const versions = getAllVersions()
  return versions.map((item) => ({ version: item }))
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string; title: string; content: string; version: string }
}) {
  const data = await getDocumentData(params.slug, params.version)
  const headings = getHeadersFromMarkdownContent(data._raw)
  console.log(headings)

  return (
    <>
      <VersionSidebar
        selectedVersion={params.version}
        subTitle={data.title}
        subTitleLinks={headings.map((item) => item.headerSlug)}
        params={params}
      />
      <article className='md-content'>
        <h1 style={{ fontSize: '3rem' }}>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
      </article>
    </>
  )
}
