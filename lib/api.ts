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
  version: string
  content: string
}

export function getAllVersions(): string[] {
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

export function getAllDocuments(): DocumentMetadata[] {
  const docsDirectory = path.join(process.cwd(), '_docs')
  const fileNames = fs.readdirSync(docsDirectory)
  const versions: DocumentMetadata[] = []

  fileNames.forEach((fileName) => {
    const filePath = path.join(docsDirectory, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    versions.push({
      title: data.title,
      version: data.version,
      content: data.content,
    })
  })

  return versions
}
