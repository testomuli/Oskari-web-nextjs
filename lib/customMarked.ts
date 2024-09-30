import { marked } from 'marked'

marked.use({
    gfm: true,
  })

export const MERMAID_SNIPPET = '<pre class="mermaid">'

// Just a wrapper for marker renderer so we could tune how different html-tags are processed
// but most of the special handling is in markdownToHtml.ts
const renderer = new marked.Renderer();
export const mdToHtml = (src: string) => marked(src, { renderer: renderer })