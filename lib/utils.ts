import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { insertIdsToHeaders } from './markdownToHtml'
import { DocAnchorLinksType, VersionDocType } from '@/types/types'

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

function compileMarkdownToHTML(markdown: string): {
  html: string
  anchorLinks: VersionDocType['anchorLinks']
} {
  const { content } = matter(markdown)
  const markedHtml = marked(content)
  const { html, anchorLinks } = insertIdsToHeaders(markedHtml)
  return {
    html,
    anchorLinks,
  }
}

export function compileMarkdownFilesInDirectory(directoryPath: string): {
  html: VersionDocType['html']
  anchorLinks: VersionDocType['anchorLinks']
} {
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
  const { html, anchorLinks } = insertIdsToHeaders(compiledHTML)
  return {
    html,
    anchorLinks,
  }
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
): VersionDocType[] {
  const versionFolder = path.join(rootFolder, version)
  const mainTopics = fs.readdirSync(versionFolder)
  const topics = []
  const anchorLinks: DocAnchorLinksType[] = []

  for (const topic of mainTopics) {
    const topicFolder = path.join(versionFolder, topic)
    const subTopics = fs.readdirSync(topicFolder)

    let html = ''

    for (const file of subTopics) {
      const filePath = path.join(topicFolder, file)
      const stats = fs.statSync(filePath)

      if (stats.isFile()) {
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { content } = matter(fileContent)
        const { html: compiledHTML, anchorLinks: compiledAnchorLinks } =
          compileMarkdownToHTML(content)
        anchorLinks.push(...compiledAnchorLinks)
        html += compiledHTML
      }
    }

    topics.push({
      title: topic,
      version: version,
      slug: slugify(topic),
      url: `${version}/${slugify(topic)}`,
      html,
      anchorLinks,
    })
  }
  return topics
}

// export function generateAllDocsGroupedByVersion(
//   rootFolder: string
// ): Record<string, unknown> {
//   const versionDirs = readVersionDirs(rootFolder)
//   const docsByVersion: Record<string, unknown> = {}
//   for (const version of versionDirs) {
//     docsByVersion[version] = generateVersionDocs(rootFolder, version)
//   }
//   console.log(docsByVersion)
//   return docsByVersion
// }

export function generateAllDocs(rootFolder: string): VersionDocType[] {
  const versionDirs = readVersionDirs(rootFolder)
  const docsByVersion: VersionDocType[] = []
  for (const version of versionDirs) {
    docsByVersion.push(...generateVersionDocs(rootFolder, version))
  }
  return docsByVersion
}
