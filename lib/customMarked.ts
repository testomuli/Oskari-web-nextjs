import { marked } from 'marked'

marked.use({
    gfm: true,
  })

export const MERMAID_SNIPPET = '<pre class="mermaid">'


const renderer = new marked.Renderer();
renderer.code = function (code, language) {
  if (language === 'mermaid') {
    return MERMAID_SNIPPET + code + '</pre>';
  } else {
    return '<pre><code>' + code + '</code></pre>';
  }
};
export const mdToHtml = (src: string) => marked(src, { renderer: renderer })