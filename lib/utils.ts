import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { insertIdsToHeaders } from './markdownToHtml'

marked.use({
  gfm: true,
})

// const rootFolder = '_content/docs/2.12.0' // Set the root folder path

function compileMarkdownToHTML(markdown: string): string {
  return marked(markdown) // You can use markdown-it or other libraries if preferred
}

export function compileMarkdownFilesInDirectory(directoryPath: string): string {
  // skip if not a directory
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
): string {
  const versionFolder = path.join(rootFolder, version)
  const docsFolder = path.join(versionFolder, '')
  const html = compileMarkdownFilesInDirectory(docsFolder)
  return html
}

export function generateAllDocsGroupedByVersion(
  rootFolder: string
): Record<string, string> {
  const versionDirs = readVersionDirs(rootFolder)
  const docsByVersion: Record<string, string> = {}
  for (const version of versionDirs) {
    docsByVersion[version] = generateVersionDocs(rootFolder, version)
  }
  return docsByVersion
}
