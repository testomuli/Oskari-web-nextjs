import React from 'react'
import Layout from '@/components/Layout'
import Accordion from '@/components/Accordion/Accordion'
import AccordionGroup from '@/components/Accordion/AccordionGroup'
import Text from '@/components/Text'
import Link from 'next/link'
import styles from '@/styles/accordion.module.scss'
import { getAllVersions } from '@/lib/api'

export default async function VersionPage({
  params,
}: {
  params: { version: string }
}) {
  console.log(params)
  const versionsData = getAllVersions()

  const [versions] = await Promise.all([versionsData])

  console.log(versions)
  const renderMenuContent = (items: string[]) => (
    <ul className={styles.accordionMenu}>
      {items?.map((item) => (
        <li key={item}>
          <Link href={item}>{item}</Link>
        </li>
      ))}
    </ul>
  )

  return (
    <Layout heroSmall heroTitle='Documentation'>
      <div className='container'>
        {JSON.stringify(versions)}
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
              <h3>Select version</h3>
              <Accordion title='2.11.0' content={renderMenuContent(versions)} />
            </div>
            <AccordionGroup>
              <Accordion title='Application environment' content='asd' />
              <Accordion
                title='Application environment'
                content={renderMenuContent([])}
              />
            </AccordionGroup>
          </aside>
          <article>
            <h2>Application environment</h2>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <h3 id='#1.1-frontend'>1.1 Frontend</h3>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </article>
        </div>
      </div>
    </Layout>
  )
}
