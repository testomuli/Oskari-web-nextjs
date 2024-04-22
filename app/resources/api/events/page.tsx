
import ApiDocChangeLog from '../components/ApiDocChangeLog';
import ApiSectionMainPage from '../components/ApiSectionMainPage';
import EventsSidebarContent from '../components/EventsSidebarContent';
export default async function EventsMainPage({version = 'latest'}: { version: string }) {
  const events = (await import('_content/api/versions/'+version+'/events.json')).default;
  const eventsBaseRef = '/resources/api/events/'+version+'/';

  return <ApiSectionMainPage
    version={version}
    sideBarContent={<EventsSidebarContent elements={events} baseHref={eventsBaseRef}/>}
    mainContent={<ApiDocChangeLog version={version}/>}
    title='Oskari API documentation'
    baseHref='/resources/api/events/'/>;
}
