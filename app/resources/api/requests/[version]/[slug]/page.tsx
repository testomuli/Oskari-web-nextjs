
import slugify from 'slugify';
import ApiSectionContentPage from '../../../components/ApiSectionContentPage';
import HtmlContentPage from '../../../components/HtmlContentPage';
import Error from '@/components/Error';
import { OskariEventOrRequest } from '@/types/api';
import EventsAndRequestsSidebarContent from '../../../components/EventsAndRequestsSidebarContent';
export default async function RequestsMainPage({
  params
}: {
  params: { version: string, slug: string }
}) {

  const basePath = '_content/api/versions/' + params.version + '/';
  const requests = (await import('_content/api/versions/' + params.version + '/requests.json')).default;
  const requestsBaseRef = '/resources/api/requests/' + params.version + '/';

  const foundEvent = requests.find((element: OskariEventOrRequest) => slugify(element.name) === params.slug);
  if (!foundEvent) {
    return <Error text='No request doc found' code='404' />
  }
  const foundPath = foundEvent.path.replace('.md', '.html');
  return <ApiSectionContentPage
    version={params.version}
    sideBarContent={<EventsAndRequestsSidebarContent elements={requests} baseHref={requestsBaseRef}/>}
    mainContent={<HtmlContentPage path={basePath + '/' + foundPath} />}
    title='Oskari API documentation'
    baseHref='/resources/api/requests/'/>;
}
