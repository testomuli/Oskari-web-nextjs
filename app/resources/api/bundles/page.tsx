
import VersionSidebar from '@/components/VersionSidebar';
import { compareSemanticVersions } from '@/utils/misc';
import availableVersions from '_content/api/versions'
export default function BundlesMainPage() {
  const versions = [
    ...new Set(
      availableVersions
        .sort((a, b) => compareSemanticVersions(a, b))
        .reverse()
    ),
  ]
  return <>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <VersionSidebar selectedVersion='' versions={versions} baseHref='/resources/api/bundles/' />
    </div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '2rem',
        marginTop: 27,
      }}>
        temp
      </div>
  </>;
}
