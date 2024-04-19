import { getApiChangeLog } from '@/lib/utils';
import React from 'react';

export default async function ApiDocChangeLog({ version }: { version: string }) {
  const html = await getApiChangeLog(version);
  return <>
    <article>
      <div style={{ wordWrap: 'break-word'}}dangerouslySetInnerHTML={{ __html: html }}></div>
    </article>
  </>
}