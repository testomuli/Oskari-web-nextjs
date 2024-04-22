
import slugify from 'slugify';
import ApiSectionContentPage from '../../../components/ApiSectionContentPage';
import HtmlContentPage from '../../../components/HtmlContentPage';
import Error from '@/components/Error';
import { OskariEvent } from '@/types/api';
import EventsSidebarContent from '../../../components/EventsSidebarContent';
export default async function BundlesMainPage({
  params
}: {
  params: { version: string, slug: string }
}) {

  const basePath = '_content/api/versions/' + params.version + '/';
  const events = (await import('_content/api/versions/' + params.version + '/events.json')).default;
  const eventsBaseRef = '/resources/api/events/' + params.version + '/';

  const foundEvent = events.find((element: OskariEvent) => slugify(element.name) === params.slug);
  if (!foundEvent) {
    return <Error text='No event doc found' code='404' />
  }
  const foundPath = foundEvent.path.replace('.md', '.html');
  return <ApiSectionContentPage
    version={params.version}
    sideBarContent={<EventsSidebarContent elements={events} baseHref={eventsBaseRef}/>}
    mainContent={<HtmlContentPage path={basePath + '/' + foundPath} />}
    title='Oskari API documentation'
    baseHref='/resources/api/events/'/>;
}
