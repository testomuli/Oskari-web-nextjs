import FeatureCard from '@/components/Cards/FeatureCard'
import Container from '@/components/Container'
import Layout from '@/components/Layout'

const meta = {
  title: 'Oskari Map Application Platform',
  description:
    'Oskari is a framework for easily building multipurpose web mapping applications utilizing distributed Spatial Data Infrastructures like INSPIRE.',
}

const FEATURE_DATA = [
  {
    icon: '',
    title: 'RPC functionality improves the user experience',
    description: "The map reacts in real time to the user's actions.",
  },
  {
    icon: '',
    title: 'RPC functionality improves the user experience',
    description: "The map reacts in real time to the user's actions.",
  },
  {
    icon: '',
    title: 'RPC functionality improves the user experience',
    description: "The map reacts in real time to the user's actions.",
  },
]

export default function Home() {
  return (
    <Layout meta={meta} heroSmall heroTitle='Discover Oskari'>
      <Container
        style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}
      >
        <p>
          Oskari is a Finnish open-source software for building web maps and
          displaying and analyzing geospatial data. Oskari is a tool that allows
          anyone to create easy-to-use map services for websites. The goal of
          Oskari is to help businesses and municipalities offer better online
          and mobile map services to their citizens and consumers. With Oskari,
          you can embed a working map on your website. By adding layers of other
          location data on top of the background map, in the simplest case your
          organization's office locations, you get a map service that is exactly
          what you need. You can add tools to the map, such as user positioning.
          Oskari supports the EU directive INSPIRE and OGC standards. The name
          Oskari comes from the words open-source map window (open source
          karttaikkuna).
        </p>

        <FeatureCard
          features={FEATURE_DATA}
          title='Adaptive software'
          imageSrc='/assets/images/lounaistieto.png'
        />
        <FeatureCard
          features={FEATURE_DATA}
          title='Adaptive software'
          imageSrc='/assets/images/lounaistieto.png'
          reverse
        />
      </Container>
    </Layout>
  )
}
