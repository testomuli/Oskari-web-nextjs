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
          subtitle='2.13.2'
          content={
            <>
              <div className='mb-8'>
                2.13.2 fixes various issues and enables semi-transparent fill
                for polygons. The previously released 2.13.0 had numerous
                improvements for end-users with small screens and better admin functionalities.
              </div>
              <div className='flex justify-center'>
                <Button
                  variant='dark'
                  title='Download'
                  href='https://oskari.org/build/server/oskari-latest-stable.zip'
                  external
                />
              </div>
            </>
          }
        />
        <IconCard
          className='!bg-[var(--color-accent)]'
          title='Release notes'
          content={
            <>
              <div className='mb-8'>
                See what updates, fixes and new features have been added in previous versions.
              </div>
              <div className='flex justify-center'>
                <Button
                  variant='dark'
                  title='Release notes'
                  href='https://github.com/oskariorg/oskari-frontend/blob/master/ReleaseNotes.md'
                  external
                  newWindow
                />
              </div>
            </>
          }
        />
      </div>
      <HighlightBox style={{ marginBottom: '12rem' }}>
        <h2 className='mb-8'>First timer?</h2>
        <Button
          variant='dark'
          title='Read installation instructions'
          href='/documentation/docs'
        />
      </HighlightBox>
    </Layout>
  )
}
