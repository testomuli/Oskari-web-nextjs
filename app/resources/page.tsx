import IconCard from '@/components/Cards/IconCard'
import Container from '@/components/Container'
import Layout from '@/components/Layout'
import RoadMap from '@/components/RoadMap'
import Text from '@/components/Text'
import { Metadata } from 'next'
import roadmap from '@/utils/data/roadmap.json'
import HighlightBox from '@/components/HighlightBox'
import { SITE_CONFIG } from '@/utils/config'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Resources',
}

export default function ResourcesPage() {
  return (
    <Layout heroSmall heroTitle='Resources'>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: '5rem',
        }}
      >
        <div>
          <Text>
            This site contains technical instructions for using, configuring and
            developing Oskari software. The documentation of Oskari assumes that
            you are somewhat familiar with the basic geographical protocols used
            extensively in GIS applications, such as WMS (Web Map Service) and
            WFS (Web Feature Service).
          </Text>
          <Text>
            Also, experience in JavaScript and/or Java development is required
            to read and understand the developer documentation.
          </Text>
        </div>
      </Container>
      <HighlightBox
        style={{
          margin: '4rem 0',
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
          <h3 style={{ fontSize: '1.625rem' }}>Give it a try!</h3>
          <p style={{ textAlign: 'center', fontSize: '1.125rem' }}>
            How to view and visualise maps with Oskari? Try the sample
            application!
          </p>
          <Button
            variant='primary'
            title='See source code (Github)'
            href={SITE_CONFIG.socials.github.url}
          />
        </div>
      </HighlightBox>
      <div className='container--content'>
        <h2 style={{ marginBottom: '6rem' }}>Road map</h2>
        <RoadMap>
          {roadmap.map((item, index) => (
            <IconCard
              title={item.title + (index + 1)}
              subtitle={item.subtitle}
              content={item.content}
              key={index}
            />
          ))}
        </RoadMap>
      </div>
    </Layout>
  )
}
