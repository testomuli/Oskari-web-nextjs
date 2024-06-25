import Container from '@/components/Container'
import Layout from '@/components/Layout'
import { Metadata } from 'next'
import Accordion from '@/components/Accordion/Accordion'
import AccordionGroup from '@/components/Accordion/AccordionGroup'
import Button from '@/components/Button'
import HighlightBox from '@/components/HighlightBox'
import allPosts from '@/_content/faq';

export const metadata: Metadata = {
  title: 'FAQ',
}

export default function FaqPage() {

  const faqDevelopers = allPosts[0] || null;
  const faqUsers = allPosts[1] || null;

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
          {faqUsers?.questionsAndAnswers?.map(
            ({ question, answer }: Record<string, string>) => (
              <Accordion
                title={question}
                content={
                  <div
                    className='md-content'
                    dangerouslySetInnerHTML={{
                      __html: answer || '',
                    }}
                  />
                }
                key={question}
              />
            )
          )}
        </AccordionGroup>

        <h2>For developers</h2>
        <AccordionGroup>
          {faqDevelopers?.questionsAndAnswers?.map(
            ({ question, answer }: Record<string, string>) => {
              return (
                <Accordion
                  title={question}
                  content={
                    <div
                      className='md-content'
                      dangerouslySetInnerHTML={{ __html: answer || '' }}
                    />
                  }
                  key={question}
                />
              )
            }
          )}
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
          <Button
            variant='primary'
            title='Ask in GIS Stack Exchange'
            href='https://gis.stackexchange.com/'
            external
            newWindow
          />
        </div>
      </HighlightBox>
    </Layout>
  )
}
