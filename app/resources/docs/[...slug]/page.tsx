import Accordion from '@/components/Accordion/Accordion'
import AccordionGroup from '@/components/Accordion/AccordionGroup'
import DocumentCard from '@/components/Cards/DocumentCard'
import VersionSidebar from '@/components/VersionSidebar'
import { compareSemanticVersions } from '@/utils/misc'
// import { allDocs } from 'contentlayer/generated'
import Link from 'next/link'
import styles from '@/styles/accordion.module.scss'
import { generateAllDocs } from '@/lib/utils'

export async function generateStaticParams() {
  const allDocs = generateAllDocs()
  const stuff = allDocs.map((post) => ({
    slug: post.url.split('/'),
  }))
  const versions = allDocs.map((doc) => ({
    slug: doc.version,
  }))

  return [...stuff, versions]
}

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] }
}) => {
  const allDocs = generateAllDocs()
  const post = allDocs.find((post) => post.url === params.slug.join('/'))
  if (post) {
    return { title: post.title }
  }
}

export default async function SingleDocPage({
  params,
}: {
  params: { slug: string[] }
}) {
  const allDocs = generateAllDocs()
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

  const anchorLinks = post?.anchorLinks || []

  const groupedAnchorLinks: Record<
    string,
    { content: string; slug: string }[]
  > = {}
  anchorLinks?.forEach((link: { content: string; slug: string }) => {
    const linkNum = parseInt(link.content).toString()
    if (!isNaN(parseInt(linkNum))) {
      groupedAnchorLinks[linkNum] = groupedAnchorLinks[linkNum] || []
      groupedAnchorLinks[linkNum].push({
        content: link.content,
        slug: link.slug,
      })
    }
    if (isNaN(parseInt(linkNum))) {
      groupedAnchorLinks['other'] = groupedAnchorLinks['other'] || []
      groupedAnchorLinks['other'].push({
        content: link.content,
        slug: link.slug,
      })
    }
  })

  const renderAccordionContent = (
    items: Array<{ slug: string; content: string }>
  ) => (
    <ul className={styles.accordionMenu}>
      {items?.map((item) => (
        <li key={item.slug}>
          <Link href={`#${item.slug}`}>{item.content}</Link>
        </li>
      ))}
    </ul>
  )

  if (params.slug.length === 1) {
    return (
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
    )
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <VersionSidebar selectedVersion={params.slug[0]} versions={versions} />
        {post?.html && (
          <AccordionGroup>
            {Object.keys(groupedAnchorLinks).map((key) => (
              <Accordion
                key={key}
                title={
                  key === 'other'
                    ? 'Other'
                    : groupedAnchorLinks[key]?.[0].content || `Chapter ${key}`
                }
                content={renderAccordionContent(groupedAnchorLinks[key])}
              />
            ))}
          </AccordionGroup>
        )}
      </div>
      <div>
        {post?.html ? (
          <div className='md-content'>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
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
              <Link href={`/resources/docs/${item.url}`} key={item.slug}>
                <DocumentCard title={item.title || ''} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
