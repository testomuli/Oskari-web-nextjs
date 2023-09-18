import React from 'react'
import Layout from '@/components/Layout'
import Accordion from '@/components/Accordion/Accordion'
import AccordionGroup from '@/components/Accordion/AccordionGroup'
import Link from 'next/link'
import styles from '@/styles/accordion.module.scss'
import { getDocumentBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'

export default async function VersionPage({
  params,
}: {
  params: { version: string; slug: string }
}) {
  const documentBySlug = getDocumentBySlug(params.version, params.slug)
  const [data] = await Promise.all([documentBySlug])
  const content = await markdownToHtml(data.content)

  const renderMenuContent = (items: string[]) => (
    <ul className={styles.accordionMenu}>
      {items?.map((item) => (
        <li key={item}>
          <Link href={`/resources/docs/${item}`}>{item}</Link>
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
                content={renderMenuContent([])}
              />
            </AccordionGroup>
          </aside>
          <article dangerouslySetInnerHTML={{ __html: content }}></article>
        </div>
      </div>
    </Layout>
  )
}
