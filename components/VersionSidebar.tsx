import { getAllVersions } from '@/lib/api'
import Link from 'next/link'
import styles from '@/styles/accordion.module.scss'
import Accordion from './Accordion/Accordion'

export async function getData(selectedVersion?: string) {
  const versionsData = getAllVersions()
  const [versions] = await Promise.all([versionsData])
  const versionsWithoutSelected = versions.filter(
    (version) => selectedVersion !== version
  )
  if (!selectedVersion) {
    return versions
  }
  return versionsWithoutSelected
}

type subtitleLinks = {
  slug: string
  title: string
}

export default async function VersionSidebar({
  selectedVersion,
  subTitle,
  subTitleLinks = [],
  open = false,
}: {
  selectedVersion: string
  subTitle?: string
  subTitleLinks?: subtitleLinks[]
  open?: boolean
}) {
  const versionsWithoutSelected = await getData(selectedVersion)

  const renderVersionMenuContent = (items: string[]) => (
    <ul className={styles.accordionMenu}>
      {items?.map((item) => (
        <li key={item}>
          <Link href={`/resources/docs/${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  )

  const renderMenuContent = (items: { slug: string; title: string }[]) => (
    <ul className={styles.accordionMenu}>
      {items?.map((item) => (
        <li key={item.slug}>
          <Link href={`#${item.slug}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  )
  return (
    <aside style={{ display: 'flex', gap: '3rem', flexDirection: 'column' }}>
      <div>
        <h3 style={{ fontSize: '1.125rem' }}>Select version</h3>
        <Accordion
          title={selectedVersion || 'Select'}
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
