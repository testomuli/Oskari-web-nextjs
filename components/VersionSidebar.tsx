import { LATEST_STABLE_VERSION, UNRELEASED_VERSION } from '@/utils/constants'
import AccordionGroup from './Accordion/AccordionGroup'
import VersionAccordionWrapper from './VersionAccordionWrapper';
import styles from '@/styles/accordion.module.scss'

export default async function VersionSidebar({
  selectedVersion,
  versions,
  baseHref
}: {
  selectedVersion: string
  versions?: string[],
  baseHref: string
}) {

  const allVersions = versions?.sort((a, b) => {
    if (a === UNRELEASED_VERSION) {
      return -1
    };

    if (a === LATEST_STABLE_VERSION && b !== UNRELEASED_VERSION) {
      return -1
    }

    return 0;
  })|| [];

  const versionDropdownLabelId = 'selectVersionLabel';
  return (
    <aside style={{ display: 'flex', gap: '3rem', flexDirection: 'column' }}>
      <div>
        <h2 className={styles.accordion__label} id={versionDropdownLabelId}>Select version</h2>

        <AccordionGroup>
          <VersionAccordionWrapper
            baseHref={baseHref}
            selectedVersion={selectedVersion}
            allVersions={allVersions}
            labelId={versionDropdownLabelId}
          />
        </AccordionGroup>
      </div>
    </aside>
  )
}
