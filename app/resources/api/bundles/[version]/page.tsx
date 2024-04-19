
import ApiDocChangeLog from '../../components/ApiDocChangeLog';
import ApiSectionContentPage from '../../components/ApiSectionMainPage';
import BundlesSidebarContent from '../../components/BundlesSidebarContent';
export default async function BundlesMainPage({
  params
}: {
  params: { version: string }
}) {

  const bundles = (await import('_content/api/versions/'+params.version+'/bundles.json')).default;
  const bundleBaseRef = '/resources/api/bundles/'+params.version+'/';

  return <ApiSectionContentPage
    version={params.version}
    sideBarContent={<BundlesSidebarContent elements={bundles} baseHref={bundleBaseRef}/>}
    mainContent={<ApiDocChangeLog version={params.version}/>}
    title='Oskari API documentation'
    baseHref='/resources/api/bundles/'/>;
}
