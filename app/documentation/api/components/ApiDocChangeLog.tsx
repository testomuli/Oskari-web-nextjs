import { getMarkdownContentAsHtml } from '@/lib/utils';
import React from 'react';
import ApiDocContentWrapper from './ApiDocContentWrapper';

export default async function ApiDocChangeLog({ version }: { version: string }) {
  const filePath = `_content/api/versions/${version}/CHANGELOG.md`;
  const html = await getMarkdownContentAsHtml(filePath, '');
  return <ApiDocContentWrapper html={html}/>;
}