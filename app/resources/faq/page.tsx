import Container from '@/components/Container'
import Layout from '@/components/Layout'
import { Metadata } from 'next'
import Accordion from '@/components/Accordion/Accordion'
import AccordionGroup from '@/components/Accordion/AccordionGroup'
import Button from '@/components/Button'
import HighlightBox from '@/components/HighlightBox'

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
          gap: '5rem',
        }}
      >
        <h2>For users</h2>
        <AccordionGroup>
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
          <Accordion
            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.?'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. '
          />
        </AccordionGroup>

        <h2>For developers</h2>
        <AccordionGroup>
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
          <Accordion
            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.?'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. '
          />
        </AccordionGroup>
      </Container>
      <HighlightBox
        style={{
          margin: '8rem 0',
          backgroundColor: '#FAFAFA',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.625rem' }}>Got a question?</h3>
          <Button variant='primary' title='Ask in GIS Stack Exchange' href='' />
        </div>
      </HighlightBox>
    </Layout>
  )
}
