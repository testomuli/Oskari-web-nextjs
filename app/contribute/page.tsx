import IconCard from '@/components/Cards/IconCard'
import Container from '@/components/Container'
import Layout from '@/components/Layout'
import Text from '@/components/Text'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contribute',
}

export default function ContributePage() {
  return (
    <Layout heroSmall heroTitle='Contribute'>
      <Container>
        <Text>
          Oskari is an open source software, which means that its source code is
          open to anyone for modifying and enhancing. Oskari stays up-to-date
          and is constantly developed by an active community.
        </Text>
        <Text>
          Do you have an idea how to develop and improve the software? Do you
          have any additions, suggestions or corrections to the content of the
          site or Oskari in general? There are several ways you can contribute
          to the codebase as well as the community in general.
        </Text>
        <h3 className='my-16'>Come and develop Oskari together!</h3>
        <div className='flex flex-wrap justify-center xl:justify-between gap-x-8 gap-y-16'>
          <IconCard
            className='!min-w-[24rem]'
            title='Report a bug'
            content='If you encounter a problem while using Oskari, please report it to us.'
          />
          <IconCard
            className='!min-w-[24rem]'
            title='Make a pull request'
            content='By creating a pull request you can propose and collaborate on changes to a repository.'
          />
          <IconCard
            className='!min-w-[24rem]'
            title='Suggest improvements'
            content='Tell us how you think Oskari could be improved. All ideas are appreciated.'
          />
          <IconCard
            className='!min-w-[24rem]'
            title='Write in our blog'
            content="Would you like to share your findings or tell  how your organization uses Oskari? Oskari's blog is the platform for your ideas."
          />
          <IconCard
            className='!min-w-[24rem]'
            title='Join community groups'
            content='Join the regular Oskari community meetings and network with other users and developers.'
          />
          <IconCard
            className='!min-w-[24rem]'
            title='Got something else in mind?'
            content="Don't hesitate to contact us about anything related to Oskari."
          />
        </div>
      </Container>
    </Layout>
  )
}
