import { getBundleContent } from '@/lib/utils';

export default async function BundleContentPage({ path }: { path: string }) {
  const html = await getBundleContent(path);
  return <>
    <article>
      <div style={{ wordWrap: 'break-word'}}dangerouslySetInnerHTML={{ __html: html }}></div>
    </article>
  </>
}