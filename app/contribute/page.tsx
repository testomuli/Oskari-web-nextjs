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
          There are several ways you can contribute to the codebase as well as the community in general.
        </Text>
        <Text>
          Do you have a spesific question about Oskari? Do you
          have any additions, suggestions or corrections to the content of the
          site or Oskari in general? 
          There are various ways to get in contact with the coordinators and JDF.
        </Text>
      </div>
      <div>
        <h2 className='my-16' style={{fontSize: '1.625rem'}}>Come and develop Oskari together!</h2>
        <div className='flex flex-wrap justify-center xl:justify-evenly gap-x-8 gap-y-16 [&_a]:underline [text-wrap:pretty]'>
          <IconCard
            className='!min-w-[24rem]'
            title='Report a bug & suggest improvements'
            content={
              <div>
                If you encounter a problem while using Oskari, please report it to us - {' '}
                <a
                  href='https://github.com/oskariorg/oskari-documentation/issues'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  open a GitHub issue!</a> You can also suggest improvements via issues.
              </div>
            }
          />
          <IconCard
            className='!min-w-[24rem]'
            title='Contact us'
            content={
              <div>
                Do you want to hear more about Oskari? {' '}
                <a href='mailto:info@oskari.org'>Send us an e-mail</a> to discuss anything
                Oskari-related. 
                For technical questions, <a href='https://app.gitter.im/#/room/#oskariorg_chat:gitter.im'>ask your questions on Gitter chat room</a>.
                You can also ask your question <a href='https://lists.osgeo.org/mailman/listinfo/oskari-user'>on the Oskari user-list</a>.
              </div>
            }
          />
          <IconCard
            className='!min-w-[24rem]'
            title='Write in our blog'
            content={
              <div>
                Would you like to share your findings, give your view on Oskari or tell how your organization uses Oskari?{' '}
                <a href='mailto:juho@gispo.fi'>
                  Contact our communications coordinator.</a>
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
        </div>
      </div>
    </Layout>
  )
}
