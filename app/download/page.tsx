import Button from '@/components/Button'
import IconCard from '@/components/Cards/IconCard'
import Container from '@/components/Container'
import HighlightBox from '@/components/HighlightBox'
import Layout from '@/components/Layout'
import Text from '@/components/Text'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Download',
}

export default function DownloadPage() {
  return (
    <Layout heroTitle='Download' heroSmall>
      <Container>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <div className='my-24 flex flex-wrap justify-center gap-16 items-start'>
          <IconCard
            className='!bg-[var(--color-accent)]'
            title='Latest version'
            subtitle='2.10.3'
            content={
              <>
                <div className='mb-8'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className='flex justify-center'>
                  <Button
                    variant='dark'
                    title='Download'
                    href='https://oskari.org/build/server/oskari-latest-stable.zip'
                  />
                </div>
              </>
            }
          />
          <IconCard
            className='!bg-[var(--color-accent)]'
            title='Other versions'
            content={
              <>
                <div className='mb-8'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className='flex justify-center'>
                  <Button
                    variant='dark'
                    title='Download'
                    href='http://download.osgeo.org/oskari/'
                  />
                </div>
              </>
            }
          />
        </div>
      </Container>
      <HighlightBox style={{ marginBottom: '12rem' }}>
        <h2 className='mb-2'>First timer?</h2>
        <p className='max-w-md text-center mb-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button
          variant='dark'
          title='Read installation instructions'
          href='/resources/docs'
        />
      </HighlightBox>
    </Layout>
  )
}
