import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { insertIdsToHeaders } from './lib/markdownToHtml'
import { slugify } from './lib/utils'

export const Docs = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `docs/**/*.md`,
  fields: {
    title: { type: 'string', required: false },
  },
  computedFields: {
    version: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileDir.split('/')[1],
    },
    url: {
      type: 'string',
      resolve: (doc) => {
        const splittedUrl = doc._raw.flattenedPath.split('/')
        return `${splittedUrl[1]}/${splittedUrl[2]}`
      },
    },
    altTitle: {
      type: 'string',
      resolve: (doc) => {
        return doc._raw.sourceFileName.replace('.md', '')
      },
    },
    htmlWithIds: {
      type: 'json',
      resolve: (doc) => {
        return insertIdsToHeaders(doc.body.html)
      },
    },
  },
}))

export default makeSource({
  contentDirPath: '_content',
  documentTypes: [Docs],
  contentDirExclude: ['*blog/**', '*coordinators/**'],
  markdown: {
    remarkPlugins: [remarkGfm],
    // ignore mermaid for highlighting (```mermaid ... ```)
    rehypePlugins: [[rehypeHighlight, { plainText: ['mermaid'] }]],
  },
})
