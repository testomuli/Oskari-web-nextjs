import Button from '@/components/Button'
import IconCard from '@/components/Cards/IconCard'
import HighlightBox from '@/components/HighlightBox'
import Layout from '@/components/Layout'
import { Metadata } from 'next'
import availableVersions from '@/_content/docs';
import { LATEST_STABLE_VERSION, UNRELEASED_VERSION } from '@/utils/constants'
import { compareSemanticVersions } from '@/utils/misc'
import { getVersionIndex } from '@/lib/utils'
import { MarkdownFileMetadata } from '@/types/types'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Download',
}

const findLatestVersionNumber = (): string => {
  const versions = availableVersions
    .filter((version) => version !== UNRELEASED_VERSION && version !== LATEST_STABLE_VERSION)
    .sort((a, b) => compareSemanticVersions(a, b))
    .reverse();

  return versions && versions[0] ? versions[0] : 'latest';
}

const findSlugForSection = async (versionNumber: string, title: string) => {
  const index = await getVersionIndex(versionNumber);
  const setupInstructionsSlug = index.filter((item: MarkdownFileMetadata) => item?.title?.indexOf(title) > -1);
  return setupInstructionsSlug && setupInstructionsSlug[0] ? setupInstructionsSlug[0].slug : '';
}

export default async function DownloadPage() {

  const versionNumber = findLatestVersionNumber();
  const setupInstructionsSlug = await findSlugForSection(versionNumber, 'Setup instructions');
  const releaseNotesSlug = await findSlugForSection(versionNumber, 'Changelog');

  return (
    <Layout heroTitle='Download' heroSmall>
      <div className='my-24 flex flex-wrap justify-center gap-16 items-start'>
        <IconCard
          className='!bg-[var(--color-accent)]'
          title='Latest version'
          content={
            <>
              <div className='flex justify-center'>
                <Button
                  variant='dark'
                  title={ 'Download ' + versionNumber}
                  href='https://oskari.org/build/server/oskari-latest-stable.zip'
                  external
                />
              </div>
              <div className='flex flex-col justify-center '>
                <div className='mt-8 mb-4'>
                  See what changed in the latest version.
                </div>
                <div className="flex justify-center">
                  <Button variant='dark' title={'Release notes'} href={'/documentation/docs/'+versionNumber+'/'+releaseNotesSlug}/> <br/>
                </div>

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
          href={'/documentation/docs/'+versionNumber+'/'+setupInstructionsSlug}
        />

        <h2 className='mb-8 mt-8'>Download old versions</h2>
        <Button
          variant='dark'
          title='Download from archive'
          external={true}
          href='https://download.osgeo.org/oskari/'
        />

      </HighlightBox>
    </Layout>
  )
}
