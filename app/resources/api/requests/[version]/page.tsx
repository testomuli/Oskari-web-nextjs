import ApiDocChangeLog from '../../components/ApiDocChangeLog';
import ApiSectionContentPage from '../../components/ApiSectionContentPage';
import EventsAndRequestsSidebarContent from '../../components/EventsAndRequestsSidebarContent';

export default async function EventsVersionPage({
  params,
}: {
  params: { version: string }
}) {

  const requests = (await import('_content/api/versions/'+params.version+'/requests.json')).default;
  const requestsBaseRef = '/resources/api/requests/'+params.version+'/';

  return <ApiSectionContentPage
    version={params.version}
    sideBarContent={<EventsAndRequestsSidebarContent elements={requests} baseHref={requestsBaseRef}/>}
    mainContent={<ApiDocChangeLog version={params.version}/>}
    title='Oskari API documentation'
    baseHref='/resources/api/requests/'/>;
}
