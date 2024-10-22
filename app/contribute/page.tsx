import IconCard from '@/components/Cards/IconCard'
import Layout from '@/components/Layout'
import Text from '@/components/Text'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contribute',
}

export default function ContributePage() {
  return (
    <Layout heroSmall heroTitle='Contribute'>
      <div>
        <Text>
          Oskari is an open source software. Its source code is
          open to anyone to view, use and enhance. Oskari stays up-to-date
          and is constantly developed by an active community.
        </Text>
        <Text>
          Do you have an idea how to develop and improve the software? Do you
          have any additions, suggestions or corrections to the content of the
          site or Oskari in general? There are several ways you can contribute
          to the codebase as well as the community in general.
        </Text>
      </div>
      <div>
        <h2 className='my-16' style={{fontSize: '1.625rem'}}>Come and develop Oskari together!</h2>
        <div className='flex flex-wrap justify-center xl:justify-evenly gap-x-8 gap-y-16 [&_a]:underline [text-wrap:pretty]'>
          <IconCard
            className='!min-w-[24rem]'
            title='Report a bug'
            content={
              <div>
                If you encounter a problem while using Oskari, please report it to us - {' '}
                <a
                  href='https://github.com/oskariorg/oskari-documentation/issues'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  open a GitHub issue!
                </a>
                .
              </div>
            }
          />
          <IconCard
            className='!min-w-[24rem]'
            title='Make a pull request'
            content={
              <div>
                By{' '}
                <a
                  href='https://github.com/oskariorg/oskari-documentation/pulls'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  creating a pull request
                </a>{' '}
                you can propose and collaborate on changes to Oskari repository.
              </div>
            }
          />
          <IconCard
            className='!min-w-[24rem]'
            title='Suggest improvements'
            content={
              <div>
                <a
                  href='https://github.com/oskariorg/oskari-documentation/issues'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Tell us how you think
                </a>{' '}
                Oskari could be improved. All ideas are appreciated.
              </div>
            }
          />
          <IconCard
            className='!min-w-[24rem]'
            title='Write in our blog'
            content={
              <div>
                Would you like to share your findings, give your view on Oskari or{' '}
                <a href='mailto:info@oskari.org'>
                  tell how your organization uses Oskari?
                </a>{' '}
                <Link href='/blog'>Oskari&apos;s blog</Link>{' '} is the platform for your ideas.
              </div>
            }
          />
          <IconCard
            className='!min-w-[24rem]'
            title='Join the Oskari community'
            content={
              <div>
                Join the regular <Link href='/community'>Oskari community</Link>{' '}
                meetings and network with other users and developers.
              </div>
            }
          />
          <IconCard
            className='!min-w-[24rem]'
            title='Got something else in mind?'
            content={
              <div>
                Don&apos;t hesitate to{' '}
                <a href='mailto:info@oskari.org'>contact us</a> about anything
                related to Oskari.
              </div>
            }
          />
        </div>
      </div>
    </Layout>
  )
}
