import { LATEST_STABLE_VERSION, UNRELEASED_VERSION } from '@/utils/constants'
import AccordionGroup from './Accordion/AccordionGroup'
import VersionAccordionWrapper from './VersionAccordionWrapper';

export default async function VersionSidebar({
  selectedVersion,
  versions,
  baseHref
}: {
  selectedVersion: string
  versions?: string[],
  baseHref: string
}) {

  const versionsWithoutSelected = versions?.filter((version) => selectedVersion !== version)
    .sort((a, b) => {
      if (a === UNRELEASED_VERSION) {
        return -1
      };

      if (a === LATEST_STABLE_VERSION && b !== UNRELEASED_VERSION) {
        return -1
      }

      return 0;
    })|| [];

  return (
    <aside style={{ display: 'flex', gap: '3rem', flexDirection: 'column' }}>
      <div>
        <h2 style={{ fontSize: '1.125rem' }}>Select version</h2>
        <AccordionGroup>
          <VersionAccordionWrapper
            baseHref={baseHref}
            selectedVersion={selectedVersion}
            versionsWithoutSelected={versionsWithoutSelected}/>
        </AccordionGroup>
      </div>
    </aside>
  )
}
