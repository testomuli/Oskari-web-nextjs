import { getMarkdownContentAsHtml } from '@/lib/utils';

export default async function HtmlContentPage({ mdPath, imagesPath }: { mdPath: string, imagesPath: string }) {
  const html = await getMarkdownContentAsHtml(mdPath, imagesPath);
  return <>
    <article>
      <div style={{ wordWrap: 'break-word'}}dangerouslySetInnerHTML={{ __html: html }}></div>
    </article>
  </>
}