import { allCoordinators } from '@/.contentlayer/generated'
import AvatarCard from '@/components/Cards/AvatarCard'
import HighlightBox from '@/components/HighlightBox'
import Layout from '@/components/Layout'
import LogoPill from '@/components/LogoPill'
import Text from '@/components/Text'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community',
}

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
        <div className='flex flex-wrap justify-center lg:justify-between py-14 gap-x-8 gap-y-16 w-full'>
          {allCoordinators.map((coordinator) => {
            const { name, title, avatar } = coordinator
            return (
              <AvatarCard
                key={name}
                name={name}
                title={title}
                avatar={avatar || ''}
                content={coordinator.body.raw}
              />
            )
          })}
        </div>
      </HighlightBox>
      <div className='container--content py-10'>
        <h2>Joint developer forum</h2>
        <Text>
          Joint Development Forum is a tight group of organisations that have an
          interest in developing Oskari togerther. It is formed by several
          organisational members providing funding for joint development,
          communication and bug fixing. Joint Development Forum,JDF, meets on a
          monthly basis.
        </Text>
        <div className='flex flex-wrap justify-center xl:justify-between py-14 gap-x-8 gap-y-16 w-full'>
          <LogoPill logo='/assets/images/tampere_logo.png' />
          <LogoPill logo='/assets/images/tampere_logo.png' />
          <LogoPill logo='/assets/images/tampere_logo.png' />
          <LogoPill logo='/assets/images/tampere_logo.png' />
          <LogoPill logo='/assets/images/tampere_logo.png' />
          <LogoPill logo='/assets/images/tampere_logo.png' />
        </div>
      </div>
    </Layout>
  )
}
