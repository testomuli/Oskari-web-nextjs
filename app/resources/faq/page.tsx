import Container from '@/components/Container'
import Layout from '@/components/Layout'
import { Metadata } from 'next'
import Accordion from '@/components/Accordion'
import styles from '@/styles/accordion.module.scss'

export const metadata: Metadata = {
  title: 'FAQ',
}

export default function FaqPage() {
  return (
    <Layout heroSmall heroTitle='FAQ'>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <div className={styles.accordionGroup}>
          <Accordion
            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.?'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. '
          />
          <Accordion
            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.?'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. '
          />
          <Accordion
            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.?'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. '
          />
        </div>
      </Container>
    </Layout>
  )
}
