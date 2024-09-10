import AccordionGroup from '@/components/Accordion/AccordionGroup'
import VersionSidebar from '@/components/VersionSidebar'
import { compareSemanticVersions } from '@/utils/misc'
import {  getVersionIndex } from '@/lib/utils'
import availableVersions from '@/_content/docs';
import Error from '@/components/Error'
import { MarkdownFileMetadata } from '@/types/types'
import '@/styles/apidoc.scss'
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import ApiDocContentWrapper from '@/app/documentation/api/components/ApiDocContentWrapper'
import AccordionListWrapper from '@/app/documentation/docs/[version]/[slug]/AccordionListWrapper'

let indexJSON: { [key: string]: MarkdownFileMetadata[] } = {};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string; version: string }
}) => {
  await initIndexJSON(params.version)
  const section = indexJSON[params.version]?.find((item: MarkdownFileMetadata) => item.slug === params.slug);

  if (section) {
    return { title: section.title }
  }

}

const initIndexJSON = async (version: string) => {
  if (!indexJSON || !indexJSON[version]) {
    if (!indexJSON) {
      indexJSON = {};
    }
    indexJSON[version] = await getVersionIndex(version);
  }
}

export default async function SingleDocPage({
  params,
}: {
  params: { slug: string; version: string }
}) {


  const { version } = params;
  await initIndexJSON(params.version)
  const activeSection = indexJSON[version]?.find((item: MarkdownFileMetadata) => item.slug === params.slug);
  const path = activeSection?.children[0].path;
  if (!activeSection || !path) {
    return <Error text='No documents found' code='404' />;
  }

  const versions = [
    ...new Set(
      availableVersions
        .sort((a, b) => compareSemanticVersions(a, b))
        .reverse() || []
    ),
  ];

  return <>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <VersionSidebar selectedVersion={params.version} versions={versions} baseHref='/documentation/docs/' />
      <AccordionGroup>
        <AccordionListWrapper items={indexJSON[params.version]} initialOpenSections={[activeSection.slug]}/>
      </AccordionGroup>
    </div>
    <div>
      {activeSection ? (
        <div className='md-content max-w-[70ch] mt-7'>
          <ApiDocContentWrapper html={activeSection.html}/>
        </div>
    ) : (
        <h2>Document not found</h2>
      )}
    </div>
  </>;
}
