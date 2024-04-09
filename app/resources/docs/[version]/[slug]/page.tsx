import Accordion from '@/components/Accordion/Accordion'
import AccordionGroup from '@/components/Accordion/AccordionGroup'
import VersionSidebar from '@/components/VersionSidebar'
import { compareSemanticVersions } from '@/utils/misc'
import Link from 'next/link'
import styles from '@/styles/accordion.module.scss'
import {  getVersionIndex, readAndConcatMarkdownFiles } from '@/lib/utils'
import availableVersions from '@/_content/docs';
import Error from '@/components/Error'
import { DocAnchorLinksType, MarkdownFileMetadata } from '@/types/types'

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string; version: string }
}) => {
  const indexJSON = await getVersionIndex(params.version);
  const section = indexJSON?.find((item: MarkdownFileMetadata) => item.slug === params.slug);

  if (section) {
    return { title: section.title }
  }

}

const renderAccordionContent = (
  items: Array<DocAnchorLinksType>, parentSlug: string
) => {
  return (
    <ul className={styles.accordionMenu}>
      {items?.map((item) => (
        <li key={parentSlug + item.level + item.slug}>
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
  const activeSection = indexJSON?.find((item: MarkdownFileMetadata) => item.slug === params.slug);
  const path = activeSection?.children[0].path;

  if (!activeSection || !path) {
    return <Error text='No documents found' code='404' />;
  }

  await indexJSON.forEach(async (element: MarkdownFileMetadata) => {
    const { html, anchorLinks } = await readAndConcatMarkdownFiles(element);
    element.anchorLinks = anchorLinks;
    element.html = html;
  });

  const versions = [
    ...new Set(
      availableVersions
        .sort((a, b) => compareSemanticVersions(a, b))
        .reverse() || []
    ),
  ];

  return <>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <VersionSidebar selectedVersion={params.version} versions={versions} />
        <AccordionGroup>
          {indexJSON?.map((item: MarkdownFileMetadata) => (
            <Accordion
              key={item.slug}
              title={ item?.title || `Chapter ${item.slug}`}
              content={renderAccordionContent(item.anchorLinks, item.slug)}
            />
          ))}
        </AccordionGroup>

    </div>
    <div>
      {activeSection ? (
        <div className='md-content max-w-[70ch] mt-7'>
          <div dangerouslySetInnerHTML={{ __html: activeSection.html }}></div>
        </div>
    ) : (
        <h2>Document not found</h2>
      )}
    </div>
  </>;
}
