
import ApiDocChangeLog from '../components/ApiDocChangeLog';
import ApiSectionMainPage from '../components/ApiSectionMainPage';
import BundlesSidebarContent from '../components/BundlesSidebarContent';
export default async function BundlesMainPage({version = 'latest'}: { version: string}) {

  const bundles = (await import('_content/api/versions/'+version+'/bundles.json')).default;
  const bundleBaseRef = '/resources/api/bundles/'+version+'/';

  return <ApiSectionMainPage
    version={version}
    sideBarContent={<BundlesSidebarContent elements={bundles} baseHref={bundleBaseRef}/>}
    mainContent={<ApiDocChangeLog version={version}/>}
    title='Oskari API documentation'
    baseHref='/resources/api/bundles/'/>;
}
