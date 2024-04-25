import { getMarkdownContentAsHtml } from '@/lib/utils';
import React from 'react';

export default async function ApiDocChangeLog({ version }: { version: string }) {
  const filePath = `_content/api/versions/${version}/CHANGELOG.md`;
  const html = await getMarkdownContentAsHtml(filePath, '');
  return <>
    <article>
      <div style={{ wordWrap: 'break-word'}}dangerouslySetInnerHTML={{ __html: html }}></div>
    </article>
  </>
}