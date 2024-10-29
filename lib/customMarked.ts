import { marked } from 'marked'
import hljs from 'highlight.js';
import 'highlight.js/scss/a11y-dark.scss';

marked.use({
    gfm: true,
  })

export const MERMAID_SNIPPET = '<pre class="mermaid">'

// Just a wrapper for marker renderer so we could tune how different html-tags are processed
// but most of the special handling is in markdownToHtml.ts
const renderer = new marked.Renderer();

renderer.code = (code: string, infostring?: string): string => {
  if (infostring && infostring === 'mermaid') {
    return `<pre class="mermaid">${code}</pre>`;
  } else if (infostring) {
    return `<pre><code class="language-${infostring} hljs">${hljs.highlightAuto(code).value}</code></pre>`;
  }

  return `<pre><code>${code}</code></pre>`;
};

export const mdToHtml = (src: string) => marked(src, { renderer: renderer })