import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).use(remarkGfm).process(markdown)
  return result.toString()
}
