
import slugify from 'slugify';
import ApiSectionContentPage from '../../../components/ApiSectionContentPage';
import HtmlContentPage from '../../../components/HtmlContentPage';
import Error from '@/components/Error';
import { OskariEventOrRequest } from '@/types/api';
import EventsAndRequestsSidebarContent from '../../../components/EventsAndRequestsSidebarContent';
export default async function EventsContentPage({
  params
}: {
  params: { version: string, slug: string }
}) {

  const basePath = '_content/api/versions/' + params.version + '/';
  const events = (await import('_content/api/versions/' + params.version + '/events.json')).default;
  const eventsBaseRef = '/resources/api/events/' + params.version + '/';

  const foundEvent = events.find((element: OskariEventOrRequest) => slugify(element.name) === params.slug);
  if (!foundEvent) {
    return <Error text='No event doc found' code='404' />
  }
  const foundPath = foundEvent.path.replace('.md', '.html');
  return <ApiSectionContentPage
    version={params.version}
    sideBarContent={<EventsAndRequestsSidebarContent elements={events} baseHref={eventsBaseRef}/>}
    mainContent={<HtmlContentPage path={basePath + '/' + foundPath} />}
    title='Oskari API documentation'
    baseHref='/resources/api/events/'/>;
}
