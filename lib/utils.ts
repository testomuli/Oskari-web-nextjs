import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { insertIdsToHeaders } from './markdownToHtml'

marked.use({
  gfm: true,
})

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^\w\s.-]/g, '') // Remove special characters
    .replace(/[\s]+/g, '-') // Replace spaces with hyphens
    .replace(/[-]+/g, '-') // Replace consecutive hyphens with a single hyphen
    .replace(/\.md$/, '') // Remove the ".md" extension
    .trim() // Trim leading/trailing whitespace
}

function compileMarkdownToHTML(markdown: string): string {
  return marked(markdown)
}

export function compileMarkdownFilesInDirectory(directoryPath: string): string {
  const files: string[] = fs.readdirSync(directoryPath)
  let compiledHTML = ''

  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = path.join(directoryPath, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')

      const { content } = matter(fileContent)
      const html = compileMarkdownToHTML(content)

      compiledHTML += html
    }
  }
  return insertIdsToHeaders(compiledHTML).html
}

export function readVersionDirs(rootFolder: string): string[] {
  const files: string[] = fs.readdirSync(rootFolder)
  const dirs: string[] = []
  for (const file of files) {
    const filePath = path.join(rootFolder, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      dirs.push(file)
    }
  }
  return dirs
}

export function generateVersionDocs(
  rootFolder: string,
  version: string
): Record<string, unknown> {
  const versionFolder = path.join(rootFolder, version)
  const mainTopics = fs.readdirSync(versionFolder)
  let compiledHTML = ''
  let slug = ''
  for (const topic of mainTopics) {
    const topicFolder = path.join(versionFolder, topic)
    const subTopics = fs.readdirSync(topicFolder)
    for (const file of subTopics) {
      const filePath = path.join(topicFolder, file)
      slug = slugify(path.basename(filePath, '.md'))
      const stats = fs.statSync(filePath)
      if (stats.isFile()) {
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { content } = matter(fileContent)
        const html = compileMarkdownToHTML(content)
        compiledHTML += html
      }
    }
  }
  return {
    version,
    slug,
    url: `/resources/docs/${version}/${slug}`,
    body: {
      html: compiledHTML,
    },
  }
}

export function generateAllDocsGroupedByVersion(
  rootFolder: string
): Record<string, unknown> {
  const versionDirs = readVersionDirs(rootFolder)
  const docsByVersion: Record<string, unknown> = {}
  for (const version of versionDirs) {
    docsByVersion[version] = generateVersionDocs(rootFolder, version)
  }
  return docsByVersion
}
