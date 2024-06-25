import { getMarkdownContentAsHtml } from '@/lib/utils';
import ApiDocContentWrapper from './ApiDocContentWrapper';

export default async function HtmlContentPage({ mdPath, imagesPath }: { mdPath: string, imagesPath: string }) {
  const html = await getMarkdownContentAsHtml(mdPath, imagesPath);
  return <ApiDocContentWrapper html={html}/>
}