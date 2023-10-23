import HighlightBox from '@/components/HighlightBox'
import Layout from '@/components/Layout'
import Text from '@/components/Text'

export default function CommunityPage() {
  return (
    <Layout heroTitle='Community' heroSmall>
      <div className='container--content' style={{ marginBottom: '6rem' }}>
        <Text>
          Community is Oskari’s core value. Oskari Community includes growing
          group of organizations, individuals and developers putting their
          interests together to improve and develop Oskari software. Members of
          the Oskari community share openly their skills and knowledge with each
          other and develop Oskari together. At the community, we are constantly
          developing new solutions and ways of working. Thanks to active
          development by the community, Oskari stays up to date. Everyone is
          welcome to participate in the development of Oskari. There are
          different ways people can join Oskari development community.
        </Text>
      </div>
      <HighlightBox
        otter
        style={{
          backgroundColor: '#fafafa',
        }}
        contentStyles={{
          paddingBottom: '4rem',
          paddingTop: '4rem',
        }}
        left
      >
        <h2>Coordinators</h2>
        <Text>
          The community is coordinated by the National Land Survey of Finland.
          Oskari coordination is carried out by the technical coordinator, the
          product owners and the communication coordinator.
        </Text>
      </HighlightBox>
      <div className='container--content'></div>
    </Layout>
  )
}
