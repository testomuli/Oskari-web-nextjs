
import VersionSidebar from '@/components/VersionSidebar';
import { compareSemanticVersions } from '@/utils/misc';
import availableVersions from '_content/api/versions'
export default function RequestsMainPage() {
  const versions = [
    ...new Set(
      availableVersions
        .sort((a, b) => compareSemanticVersions(a, b))
        .reverse()
    ),
  ]
  return <>
    <h1>REQUESTS</h1>
    <div>
        <VersionSidebar versions={versions} selectedVersion='' baseHref='/resources/api/requests/'/>
    </div>
  </>;
}
