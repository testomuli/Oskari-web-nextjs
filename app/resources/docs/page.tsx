import React from 'react'
import Container from '@/components/Container'
import Layout from '@/components/Layout'
import { Metadata } from 'next'
import Accordion from '@/components/Accordion/Accordion'
import AccordionGroup from '@/components/Accordion/AccordionGroup'
import Button from '@/components/Button'
import HighlightBox from '@/components/HighlightBox'

export const metadata: Metadata = {
  title: 'Documentation',
}

export default function DocsPage() {
  return (
    <Layout heroSmall heroTitle='Documentation'>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 4fr',
        }}
      >
        <aside>
          <h3>Select version</h3>
          <Accordion
            title='v1.0.0'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget.'
          />
        </aside>
      </div>
    </Layout>
  )
}
