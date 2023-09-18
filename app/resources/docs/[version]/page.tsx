import React from 'react'
import Layout from '@/components/Layout'
import Accordion from '@/components/Accordion/Accordion'
import AccordionGroup from '@/components/Accordion/AccordionGroup'
import Link from 'next/link'
import styles from '@/styles/accordion.module.scss'
import { getAllDocuments, getAllVersions } from '@/lib/api'
import Card from '@/components/Cards/Card'

export default async function VersionPage({
  params,
}: {
  params: { version: string }
}) {
  const versionsData = getAllVersions()
  const documentData = getAllDocuments(params.version)
  const [versions, data] = await Promise.all([versionsData, documentData])
  const versionsWithoutSelected = versions.filter(
    (version) => version !== params.version
  )

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
                content={renderMenuContent(versionsWithoutSelected)}
              />
            </div>
            <AccordionGroup>
              {data.map((item) => (
                <Accordion title={item.title} content='asd' key={item.slug} />
              ))}
            </AccordionGroup>
          </aside>
          <article>
            {data?.map((item) => (
              <a
                href={`/resources/docs/${params.version}/${item.slug}`}
                key={item.slug}
              >
                <Card data={{ title: item.title, description: '' }} />
              </a>
            ))}
          </article>
        </div>
      </div>
    </Layout>
  )
}
