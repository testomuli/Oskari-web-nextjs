import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compareSemanticVersions } from '@/utils/misc'

// interface DocumentMetadata {
//   title: string
//   version: string
//   content: string
// }

interface DocumentMetadata {
  title: string
  slug: string
  version: string
  content: string
}

export function getAllVersions(): string[] {
  const docsDirectory = path.join(process.cwd(), '_docs')
  const contents = fs.readdirSync(docsDirectory)

  const directories = contents.filter((item) => {
    const itemPath = path.join(docsDirectory, item)
    return fs.statSync(itemPath).isDirectory()
  })

  const sortedVersions = directories.sort(compareSemanticVersions).reverse()

  return sortedVersions
}

export function _getAllVersions(): string[] {
  const docsDirectory = path.join(process.cwd(), '_docs')
  const fileNames = fs.readdirSync(docsDirectory)
  const versions: string[] = []

  fileNames.forEach((fileName) => {
    const filePath = path.join(docsDirectory, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    versions.push(data.version)
  })

  // remove duplicates from array
  const uniqueVersions = [...new Set(versions)]

  const sortedVersions = uniqueVersions.sort(compareSemanticVersions).reverse()

  return sortedVersions
}

export function getAllDocuments(version?: string): DocumentMetadata[] {
  if (!version) return []

  const docsDirectory = path.join(process.cwd(), `_docs/${version}`)
  const fileNames = fs.readdirSync(docsDirectory)
  const contentData: DocumentMetadata[] = []

  fileNames.forEach((fileName) => {
    const filePath = path.join(docsDirectory, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    contentData.push({
      title: data.title,
      slug: data.slug,
      version: data.version,
      content: content,
    })
  })

  return contentData
}
