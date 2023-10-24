import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

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
  },
}))

export const Posts = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/*.md`,
  fields: {
    title: { type: 'string', required: false },
    date: { type: 'string', required: false },
    author: { type: 'string', required: false },
    excerpt: { type: 'string', required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}))

export const Coordinators = defineDocumentType(() => ({
  name: 'Coordinator',
  filePathPattern: `coordinators/*.md`,
  fields: {
    name: { type: 'string', required: true },
    title: { type: 'string', required: false },
    avatar: { type: 'string', required: false },
  },
}))

export default makeSource({
  contentDirPath: '_content',
  documentTypes: [Docs, Posts, Coordinators],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
})
