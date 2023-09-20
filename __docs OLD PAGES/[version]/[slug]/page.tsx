import Layout from '@/components/Layout'
import Accordion from '@/components/Accordion/Accordion'
import AccordionGroup from '@/components/Accordion/AccordionGroup'
import Link from 'next/link'
import styles from '@/styles/accordion.module.scss'
import { getDocumentBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import { getHeadersFromMarkdownContent } from '@/utils/misc'

export default async function VersionPage({
  params,
}: {
  params: { version: string; slug: string }
}) {
  const documentBySlug = getDocumentBySlug(params.version, params.slug)
  const [data] = await Promise.all([documentBySlug])
  const content = await markdownToHtml(data.content)
  const headings = getHeadersFromMarkdownContent(data.content)
  const headingsContent = headings?.map((item) => item.content)

  const renderMenuContent = (items: string[]) => (
    <ul className={styles.accordionMenu}>
      {items?.map((item) => (
        <li key={item}>
          <Link href={`/resources/docs/#${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  )

  return (
    <Layout heroSmall heroTitle='Documentation'>
      <div className='container'>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 4fr',
            gap: '2.5rem',
          }}
        >
          <aside
            style={{ display: 'flex', gap: '3rem', flexDirection: 'column' }}
          >
            <div>
              <h3 style={{ fontSize: '1.125rem' }}>Select version</h3>
              <Accordion
                title={params.version}
                content={renderMenuContent([])}
              />
            </div>
            <AccordionGroup>
              <Accordion title='Application environment' content='asd' />
              <Accordion
                title='Application environment'
                content={renderMenuContent(headingsContent)}
              />
            </AccordionGroup>
          </aside>
          <article dangerouslySetInnerHTML={{ __html: content }}></article>
        </div>
      </div>
    </Layout>
  )
}
