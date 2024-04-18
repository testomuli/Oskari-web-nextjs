import { getApiChangeLog } from '@/lib/utils';
import React from 'react';

export default async function ApiDocChangeLog() {
  const html = await getApiChangeLog();
  return <>
    <article>
      <div style={{ wordWrap: 'break-word'}}dangerouslySetInnerHTML={{ __html: html }}></div>
    </article>
  </>
}