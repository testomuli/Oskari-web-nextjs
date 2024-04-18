
import VersionSidebar from '@/components/VersionSidebar';
import { compareSemanticVersions } from '@/utils/misc';
import availableVersions from '_content/api/versions'
import ApiDocChangeLog from '../components/ApiDocChangeLog';
import Layout from '../../docs/layout';
export default function BundlesMainPage() {
  const versions = [
    ...new Set(
      availableVersions
        .sort((a, b) => compareSemanticVersions(a, b))
        .reverse()
    ),
  ];

  return <Layout heroTitle='Oskari API documentation'>
    <VersionSidebar selectedVersion='latest' versions={versions} baseHref='/resources/api/bundles/' />
    <div style={{overflow: 'hidden', wordWrap:'break-word'}}>
      <ApiDocChangeLog/>
    </div>
  </Layout>;
}
