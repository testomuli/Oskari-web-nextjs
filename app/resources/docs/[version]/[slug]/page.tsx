import Accordion from '@/components/Accordion/Accordion'
import AccordionGroup from '@/components/Accordion/AccordionGroup'
import VersionSidebar from '@/components/VersionSidebar'
import { compareSemanticVersions } from '@/utils/misc'
import Link from 'next/link'
import styles from '@/styles/accordion.module.scss'
import {  getVersionIndex, readMarkdownFile } from '@/lib/utils'
import availableVersions from '@/_content/docs';
import { MDXRemote } from 'next-mdx-remote/rsc'
import Error from '@/components/Error'

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string; version: string }
}) => {
  const indexJSON = await getVersionIndex(params.version);
  const section = indexJSON?.find((item) => item.slug === params.slug);

  if (section) {
    return { title: section.title }
  }

}

const renderAccordionContent = (
  items: Array<{ slug: string; content: string }>, parentSlug: string
) => {
  return (
    <ul className={styles.accordionMenu}>
      {items?.map((item) => (
        <li key={item.slug}>
          <Link
            href={item.slug === parentSlug ? item.slug : parentSlug + '#' + item.slug}
          >
            {item.content}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default async function SingleDocPage({
  params,
}: {
  params: { slug: string; version: string }
}) {

  const indexJSON = await getVersionIndex(params.version);
  const activeSection = indexJSON?.find((item) => item.slug === params.slug);
  const path = activeSection?.children[0].path;

  if (!activeSection || !path) {
    return <Error text='No documents found' code='404' />;
  }

  const markdown = await readMarkdownFile(path);

  const versions = [
    ...new Set(
      availableVersions
        .sort((a, b) => compareSemanticVersions(a, b))
        .reverse() || []
    ),
  ];

  const groupedAnchorLinks = indexJSON?.map((item) => item) || [];
  return <>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <VersionSidebar selectedVersion={params.version} versions={versions} />
      {markdown && (
          <AccordionGroup>
            {groupedAnchorLinks.map((item) => (
              <Accordion
                key={item.slug}
                title={ item?.title || `Chapter ${item.slug}`}
                content={renderAccordionContent(item.children, item.slug)}
              />
            ))}
          </AccordionGroup>
        )}
    </div>
    <div>
      {markdown ? (
        <div className='md-content max-w-[70ch] mt-7'>
          <MDXRemote source={markdown} options={{ parseFrontmatter: true }} />
        </div>
      ) : (
        <h2>Document not found</h2>
      )}
    </div>
  </>;
}
  /*

  const allDocs = generateAllDocs()
  const post =
    allDocs?.find((post) => post.url === `${params.version}/${params.slug}`) ||
    null

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