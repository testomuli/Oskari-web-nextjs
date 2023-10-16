import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Docs = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
  },
  computedFields: {
    version: { type: 'string', resolve: (doc) => doc._raw.sourceFileDir },
    url: {
      type: 'string',
      resolve: (doc) => `docs/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: '_docs',
  documentTypes: [Docs],
})
