import { marked } from 'marked'

marked.use({
    gfm: true,
  })

export const MERMAID_SNIPPET = '<pre class="mermaid">'

// Just a wrapper for marker renderer so we could tune how different html-tags are processed
// but most of the special handling is in markdownToHtml.ts
const renderer = new marked.Renderer();
/*
// mermaid blocks are processed earlier before the other language snippets so hljs doesn't mess it up
// in markdownToHtml.ts:
// 1) processMermaidCodeBlocks()
// 2) processLanguageSpecificCodeBlocks()
renderer.code = function (code, language) {
  if (language === 'mermaid') {
    return MERMAID_SNIPPET + code + '</pre>';
  } else {
    return '<pre><code>' + code + '</code></pre>';
  }
};
*/
export const mdToHtml = (src: string) => marked(src, { renderer: renderer })