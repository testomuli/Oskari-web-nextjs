import { DocAnchorLinksType } from '@/types/types';
import slugify from 'slugify';
// import remarkGfm from 'remark-gfm'
// import rehypeStringify from 'rehype-stringify'
// import rehypeHighlight from 'rehype-highlight'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import { unified } from 'unified'

// export default async function markdownToHtml(markdown: string) {
//   const file = await unified()
//     .use(remarkParse)
//     .use(remarkGfm)
//     .use(remarkRehype)
//     .use(rehypeHighlight)
//     .use(rehypeStringify)
//     .process(markdown)
//   return insertIdsToHeaders(String(file))
// }

export const insertIdsToHeaders = (htmlString: string, startingSectionNumber: string) => {
  const headerRegex = /<h([1-3])>(.*?)<\/h\1>/g
  const anchorLinks: Array<DocAnchorLinksType> =
    []
  const sectionCounter = [parseInt(startingSectionNumber) - 1, 0, 0, 0, 0, 0];

  const newHtmlString = htmlString.replace(
    headerRegex,
    function (match: string, level: string, content: string) {
      sectionCounter[parseInt(level) - 1]++;
      const slug = slugify(content)
      const sectionNumber = sectionCounter.slice(0, parseInt(level)).join('.');
      anchorLinks.push({ level, content, slug, sectionNumber });
      return `<h${level} id="${slug}">${sectionNumber} ${content}</h${level}>`
    }
  )
  return {
    html: newHtmlString,
    anchorLinks
  }
}
