import ApiDocChangeLog from '../../components/ApiDocChangeLog';
import ApiSectionContentPage from '../../components/ApiSectionContentPage';
import EventsAndRequestsSidebarContent from '../../components/EventsAndRequestsSidebarContent';

export default async function EventsVersionPage({
  params,
}: {
  params: { version: string }
}) {

  const events = (await import('_content/api/versions/'+params.version+'/events.json')).default;
  const eventsBaseRef = '/documentation/api/events/'+params.version+'/';

  return <ApiSectionContentPage
    version={params.version}
    sideBarContent={<EventsAndRequestsSidebarContent title='Select event' elements={events} baseHref={eventsBaseRef}/>}
    mainContent={<ApiDocChangeLog version={params.version}/>}
    title='Oskari API documentation'
    baseHref='/documentation/api/events/'/>;
}
