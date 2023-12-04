import Button from '@/components/Button'
import IconCard from '@/components/Cards/IconCard'
import HighlightBox from '@/components/HighlightBox'
import Layout from '@/components/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Download',
}

export default function DownloadPage() {
  return (
    <Layout heroTitle='Download' heroSmall>
      <div className='my-24 flex flex-wrap justify-center gap-16 items-start'>
        <IconCard
          className='!bg-[var(--color-accent)]'
          title='Latest version'
          subtitle='2.10.3'
          content={
            <>
              <div className='mb-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
