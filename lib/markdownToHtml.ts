import { createSlug } from '@/utils/misc'
import remarkGfm from 'remark-gfm'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export default async function markdownToHtml(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown)
  return insertIdsToHeaders(String(file))
}

const insertIdsToHeaders = (htmlString: string) => {
  const headerRegex = /<h([1-6])>(.*?)<\/h\1>/g
  const newHtmlString = htmlString.replace(
    headerRegex,
    function (match: string, level: string, content: string) {
      const slug = createSlug(content)

      return `<h${level} id="${slug}">${content}</h${level}>`
    }
  )

  return newHtmlString
}
