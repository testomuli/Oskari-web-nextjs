import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { mdToHtml, MERMAID_SNIPPET } from './customMarked'
import { insertIdsToHeaders } from './markdownToHtml'
import { DocAnchorLinksType, VersionDocType } from '@/types/types'

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
  const markedHtml = mdToHtml(content)
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

export function readVersionDirs(rootFolder: string): string[] | undefined {
  if (!fs.existsSync(rootFolder) || !fs.statSync(rootFolder).isDirectory()) {
    return
  }
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
    // inject script to make mermaid js work its magic
    if (html.includes(MERMAID_SNIPPET)) {
      html += `<script src="https://cdn.jsdelivr.net/npm/mermaid@10.6.1/dist/mermaid.min.js"></script>
      <script>
      mermaid.initialize({
        startOnLoad:true,
        htmlLabels:true,
        theme: 'base'
      });
      </script>
      `
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

export function generateAllDocs(): VersionDocType[] | undefined {
  const rootFolder = '_content/docs'
  if (!fs.existsSync(rootFolder) || !fs.statSync(rootFolder).isDirectory()) {
    return
  }
  const versionDirs = readVersionDirs(rootFolder)
  const docsByVersion: VersionDocType[] = []
  if (versionDirs) {
    for (const version of versionDirs) {
      const versionPath = path.join(rootFolder, version)

      if (
        !fs.existsSync(versionPath) ||
        !fs.statSync(versionPath).isDirectory()
      ) {
        console.warn(
          `Version folder "${versionPath}" does not exist or is not a directory.`
        )
        continue
      }

      docsByVersion.push(...generateVersionDocs(rootFolder, version))
    }
  }
  return docsByVersion
}

export async function getMdFile(filepath: string) {
  const root = process.cwd()
  const source = fs.readFileSync(
    path.join(root, '_content', `${filepath}.md`),
    'utf8'
  )

  const { data, content } = matter(source)

  return {
    frontMatter: data,
    markdownBody: content,
  }
}

export const readMarkdownFile = async function(filePath: string) {
  const markdown = fs.readFileSync(filePath, 'utf8');
  return markdown;
};
