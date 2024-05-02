
import slugify from 'slugify';
import ApiSectionContentPage from '../../../components/ApiSectionContentPage';
import HtmlContentPage from '../../../components/HtmlContentPage';
import Error from '@/components/Error';
import { OskariEventOrRequest } from '@/types/api';
import EventsAndRequestsSidebarContent from '../../../components/EventsAndRequestsSidebarContent';
import path from 'path';
export default async function RequestsContentPage({
  params
}: {
  params: { version: string, slug: string }
}) {

  const basePath = '_content/api/versions/' + params.version + '/';
  const requests = (await import('_content/api/versions/' + params.version + '/requests.json')).default;
  const requestsBaseRef = '/resources/api/requests/' + params.version + '/';

  const foundItem = requests.find((element: OskariEventOrRequest) => slugify(element.name) === params.slug);
  if (!foundItem) {
    return <Error text='No request doc found' code='404' />
  }

  const normalized = path.normalize(foundItem.path);
  const imagesRelativePath = normalized.substring(0, normalized.lastIndexOf(path.sep));
  const imagesPath = '/assets/api/'+params.version+'/'+imagesRelativePath;

  return <ApiSectionContentPage
    version={params.version}
    sideBarContent={<EventsAndRequestsSidebarContent title='Select request' elements={requests} baseHref={requestsBaseRef}/>}
    mainContent={<HtmlContentPage mdPath={basePath + '/' + foundItem.path} imagesPath={imagesPath}/>}
    title='Oskari API documentation'
    baseHref='/resources/api/requests/'/>;
}
