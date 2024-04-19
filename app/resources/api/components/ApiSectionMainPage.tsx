
import VersionSidebar from '@/components/VersionSidebar';
import { compareSemanticVersions } from '@/utils/misc';
import availableVersions from '_content/api/versions'
import ApiDocChangeLog from '../components/ApiDocChangeLog';
import Layout from '../../docs/layout';
import { ReactNode } from 'react';
export default function ApiSectionMainPage({ title, sideBarContent, baseHref, version }: { title: string, sideBarContent: ReactNode, baseHref: string, version: string}) {
  const versions = [
    ...new Set(
      availableVersions
        .sort((a, b) => compareSemanticVersions(a, b))
        .reverse()
    ),
  ];

  console.log('Main page, version: ', version);
  return <Layout heroTitle={title}>
    <div>
        <VersionSidebar selectedVersion={version} versions={versions} baseHref={baseHref} />
        {sideBarContent}
    </div>
    <div style={{overflow: 'hidden', wordWrap:'break-word'}}>
      <ApiDocChangeLog/>
    </div>
  </Layout>;
}
