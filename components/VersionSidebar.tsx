import Link from 'next/link'
import styles from '@/styles/accordion.module.scss'
import Accordion from './Accordion/Accordion'
import { LATEST_STABLE_VERSION, LATEST_STABLE_VERSION_LABEL, UNRELEASED_VERSION, UNRELEASED_VERSION_LABEL } from '@/utils/constants'

type subtitleLinks = {
  slug: string
  title: string
}

export default async function VersionSidebar({
  selectedVersion,
  subTitle,
  subTitleLinks = [],
  versions,
  baseHref
}: {
  selectedVersion: string
  subTitle?: string
  subTitleLinks?: subtitleLinks[]
  versions?: string[],
  baseHref: string
}) {

  const mapLabelToVersion = (item: string) => {
    let displayVersion = item === UNRELEASED_VERSION ? UNRELEASED_VERSION_LABEL : item;
    displayVersion = item === LATEST_STABLE_VERSION ? LATEST_STABLE_VERSION_LABEL : displayVersion;
    return displayVersion;
  }

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

    const renderVersionMenuContent = (items: string[]) => (
    <ul className={styles.accordionMenu}>
      {items?.map((item) => (
          <li key={item}>
            <Link href={`${baseHref}${item}`}>{mapLabelToVersion(item)}</Link>
          </li>
        )
      )}
    </ul>
  );

  const renderMenuContent = (items: { slug: string; title: string }[]) => (
    <ul className={styles.accordionMenu}>
      {items?.map((item) => (
        <li key={item.slug}>
          <Link href={`#${item.slug}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <aside style={{ display: 'flex', gap: '3rem', flexDirection: 'column' }}>
      <div>
        <h2 style={{ fontSize: '1.125rem' }}>Select version</h2>
        <Accordion
          title={mapLabelToVersion(selectedVersion) || 'Select'}
          content={renderVersionMenuContent(versionsWithoutSelected)}
        />
      </div>
      {selectedVersion && subTitleLinks?.length > 0 && (
        <Accordion
          title={subTitle || ''}
          content={renderMenuContent(subTitleLinks)}
          initialOpen={true}
        />
      )}
    </aside>
  )
}
