import { createSlug } from '@/utils/misc'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).use(remarkGfm).process(markdown)
  return insertIdsToHeaders(result.toString())
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
