import { getHtmlContent as getHtmlContent } from '@/lib/utils';

export default async function HtmlContentPage({ path }: { path: string }) {
  const html = await getHtmlContent(path);
  return <>
    <article>
      <div style={{ wordWrap: 'break-word'}}dangerouslySetInnerHTML={{ __html: html }}></div>
    </article>
  </>
}