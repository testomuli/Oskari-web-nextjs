
import VersionSidebar from '@/components/VersionSidebar';
import { compareSemanticVersions } from '@/utils/misc';
import availableVersions from '_content/api/versions'
import ApiDocChangeLog from '../components/ApiDocChangeLog';
import Layout from '../../docs/layout';
import { ReactNode } from 'react';
export default function ApiSectionMainPage({ title, sideBarContent, baseHref }: { title: string, sideBarContent: ReactNode, baseHref: string}) {
  const versions = [
    ...new Set(
      availableVersions
        .sort((a, b) => compareSemanticVersions(a, b))
        .reverse()
    ),
  ];

  return <Layout heroTitle={title}>
    <div>
        <VersionSidebar selectedVersion='latest' versions={versions} baseHref={baseHref} />
        {sideBarContent}
    </div>
    <div style={{overflow: 'hidden', wordWrap:'break-word'}}>
      <ApiDocChangeLog/>
    </div>
  </Layout>;
}
