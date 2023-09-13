import IconCard from '@/components/Cards/IconCard'
import Container from '@/components/Container'
import Layout from '@/components/Layout'
import RoadMap from '@/components/RoadMap'
import Text from '@/components/Text'
import { Metadata } from 'next'
import roadmap from '@/utils/data/roadmap.json'

export const metadata: Metadata = {
  title: 'Contribute',
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Text>
        </div>
        <div>
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
      </Container>
    </Layout>
  )
}
