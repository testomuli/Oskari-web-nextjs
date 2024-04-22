import ApiDocChangeLog from '../../components/ApiDocChangeLog';
import ApiSectionContentPage from '../../components/ApiSectionContentPage';
import EventsSidebarContent from '../../components/EventsSidebarContent';

export default async function EventsVersionPage({
  params,
}: {
  params: { version: string }
}) {

  const events = (await import('_content/api/versions/'+params.version+'/events.json')).default;
  const eventsBaseRef = '/resources/api/events/'+params.version+'/';

  return <ApiSectionContentPage
    version={params.version}
    sideBarContent={<EventsSidebarContent elements={events} baseHref={eventsBaseRef}/>}
    mainContent={<ApiDocChangeLog version={params.version}/>}
    title='Oskari API documentation'
    baseHref='/resources/api/events/'/>;
}
