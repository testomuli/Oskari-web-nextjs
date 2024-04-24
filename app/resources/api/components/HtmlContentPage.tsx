import { getMarkdownContentAsHtml } from '@/lib/utils';

export default async function HtmlContentPage({ path }: { path: string }) {
  const html = await getMarkdownContentAsHtml(path);
  return <>
    <article>
      <div style={{ wordWrap: 'break-word'}}dangerouslySetInnerHTML={{ __html: html }}></div>
    </article>
  </>
}