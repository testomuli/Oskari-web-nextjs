import Button from '@/components/Button'
import FeatureCard from '@/components/Cards/FeatureCard'
import ImageCard from '@/components/Cards/ImageCard'
import Container from '@/components/Container'
import HighlightBox from '@/components/HighlightBox'
import Layout from '@/components/Layout'
import Text from '@/components/Text'
import { DISCOVER_FEATURE_DATA } from '@/utils/data/whychooseoskari'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Discover',
}

export default function DiscoverPage() {
  return (
    <Layout heroSmall heroTitle={'Discover Oskari'}>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5rem',
        }}
      >
        <div>
          <Text>
            Oskari is a Finnish open-source software for building web maps and
            displaying and analyzing geospatial data. Oskari is a tool that
            allows anyone to create easy-to-use map services for websites. The
            goal of Oskari is to help businesses and municipalities offer better
            online and mobile map services to their citizens and consumers. With
            Oskari, you can embed a working map on your website. By adding
            layers of other location data on top of the background map, in the
            simplest case your organization&apos;s office locations, you get a
            map service that is exactly what you need. You can add tools to the
            map, such as user positioning.
          </Text>
          <Text>
            Oskari supports the EU directive INSPIRE and OGC standards. The name
            Oskari comes from the words open-source map window (open source
            karttaikkuna).
          </Text>

          <h3>Oskari is developed together</h3>
          <Text>
            Oskari is coordinated by the National Land Survey of Finland, but
            the software is developed according to the open-source principles -
            anyone can participate in the development. The results of the
            development work will be published as an open code.
          </Text>
          <Text>
            The first versions of the Oskari software date back to 2009. They
            were created in the context of the piloting and implementation of
            the National Land Survey of Finland&apos;s geographic information
            portal, the Spatial Information Window (PGI).
          </Text>
          <Text>
            The Oskari community values the contribution of everyone involved in
            its development. The network has nearly 50 members from both the
            public and private sectors.
          </Text>
          <Text>Welcome aboard!</Text>
        </div>
        <h2>Why choose Oskari?</h2>
        {DISCOVER_FEATURE_DATA?.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            features={feature.features}
            title={feature.title}
            imageSrc={feature.img}
            reverse={index % 2 === 0}
          />
        ))}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant='primary'
            title='Read more in documentation'
            href='/docs'
            style={{ alignSelf: 'center', color: 'red' }}
          />
        </div>
      </Container>
      <HighlightBox
        style={{
          margin: '8rem 0',
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
          <Button variant='dark' title='Try Oskari' />
        </div>
      </HighlightBox>
      <ImageCard
        imageSrc='/assets/images/placeholder.png'
        altText='Placeholder'
        title='Card title'
        content='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      />
      <ImageCard
        imageSrc='/assets/images/placeholder.png'
        altText='Placeholder'
        title='Card title'
        content='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      />
    </Layout>
  )
}
