import Link from 'next/link'
import styles from '@/styles/accordion.module.scss'
import Accordion from './Accordion/Accordion'

type subtitleLinks = {
  slug: string
  title: string
}

export default async function VersionSidebar({
  selectedVersion,
  subTitle,
  subTitleLinks = [],
  versions,
}: {
  selectedVersion: string
  subTitle?: string
  subTitleLinks?: subtitleLinks[]
  versions: string[]
}) {
  const versionsWithoutSelected =
    versions?.filter((version) => selectedVersion !== version) || []

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
