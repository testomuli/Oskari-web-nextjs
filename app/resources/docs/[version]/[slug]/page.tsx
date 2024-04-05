import Accordion from '@/components/Accordion/Accordion'
import AccordionGroup from '@/components/Accordion/AccordionGroup'
import VersionSidebar from '@/components/VersionSidebar'
import { compareSemanticVersions } from '@/utils/misc'
import Link from 'next/link'
import styles from '@/styles/accordion.module.scss'
import { generateAllDocs, getVersionIndex } from '@/lib/utils'

export async function generateStaticParams() {
  return [];
  /*
  const allDocs = generateAllDocs()
  return (
    allDocs?.map((post) => ({
      slug: post.slug,
      version: post.version,
    })) || []
  )
  */
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string; version: string }
}) => {
  /*
  const allDocs = generateAllDocs()
  const post =
    allDocs?.find((post) => post.url === `${params.version}/${params.slug}`) ||
    null
  if (post) {
    return { title: post.title }
  }
  return { title: 'Documentation' }
  */
/*
  const indexJSON = await getVersionIndex(params.version);
  const section = indexJSON?.find((item) => item.slug === params.slug);

  if (section) {
    return { title: section.slug }
  }
  */
  return { title: 'Documentation' }

}

export default async function SingleDocPage({
  params,
}: {
  params: { slug: string; version: string }
}) {


  return (<div>
    <h1>{ params.version } / { params.slug }</h1>
  </div>);
}
  /*

  const allDocs = generateAllDocs()
  const post =
    allDocs?.find((post) => post.url === `${params.version}/${params.slug}`) ||
    null

  const versions = [
    ...new Set(
      allDocs
        ?.map((doc) => doc.version)
        .sort((a, b) => compareSemanticVersions(a, b))
        .reverse() || []
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
*/
    // Case "Other" in version docs -> when we are just stuffing this with all our orphan headings this really ain't makin' any sense and besides all these links lead to nowhere anyway.
    // Pass for now.
    /*
    if (isNaN(parseInt(linkNum))) {
      groupedAnchorLinks['other'] = groupedAnchorLinks['other'] || []
      groupedAnchorLinks['other'].push({
        content: link.content,
        slug: link.slug,
      })
    }
    */
   /*
  })

  const renderAccordionContent = (
    items: Array<{ slug: string; content: string }>
  ) => {
    return (
      <ul className={styles.accordionMenu}>
        {items?.map((item) => (
          <li key={item.slug}>
            <Link
              href={
                parseInt(items[0].slug) === parseInt(params.slug)
                  ? `#${item.slug}`
                  : `${items[0].slug}#${item.slug}`
              }
            >
              {item.content}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <VersionSidebar selectedVersion={params.version} versions={versions} />
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
          <div className='md-content max-w-[70ch] mt-7'>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </div>
        ) : (
          <h2>Document not found</h2>
        )}
      </div>
    </>
  )

}
*/