
import VersionSidebar from '@/components/VersionSidebar';
import { compareSemanticVersions } from '@/utils/misc';
import availableVersions from '_content/api/versions'
export default function EventsMainPage() {
  const versions = [
    ...new Set(
      availableVersions
        .sort((a, b) => compareSemanticVersions(a, b))
        .reverse()
    ),
  ]
  return <>
    <h1>Events</h1>
    <div>
        <VersionSidebar versions={versions} selectedVersion='' baseHref='/resources/api/events/'/>
    </div>
  </>;
}
