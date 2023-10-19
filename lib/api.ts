// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
// import { compareSemanticVersions } from '@/utils/misc'
// import markdownToHtml from './markdownToHtml'

// interface DocumentMetadata {
//   title: string
//   slug: string
//   version: string
//   content: string
// }

// const docsDirectory = path.join(process.cwd(), '_docs')

// export function getAllVersions(): string[] {
//   const contents = fs.readdirSync(docsDirectory)

//   const directories = contents.filter((item) => {
//     const itemPath = path.join(docsDirectory, item)
//     return fs.statSync(itemPath).isDirectory()
//   })

//   const sortedVersions = directories.sort(compareSemanticVersions).reverse()

//   return sortedVersions
// }

// export function _getAllVersions(): string[] {
//   const fileNames = fs.readdirSync(docsDirectory)
//   const versions: string[] = []

//   fileNames.forEach((fileName) => {
//     const filePath = path.join(docsDirectory, fileName)
//     const fileContents = fs.readFileSync(filePath, 'utf8')
//     const { data } = matter(fileContents)

//     versions.push(data.version)
//   })

//   // remove duplicates from array
//   const uniqueVersions = [...new Set(versions)]

//   const sortedVersions = uniqueVersions.sort(compareSemanticVersions).reverse()

//   return sortedVersions
// }

// export function getAllDocuments(version?: string): DocumentMetadata[] {
//   if (!version) return []

//   const fileNames = fs.readdirSync(`${docsDirectory}/${version}`)
//   const contentData: DocumentMetadata[] = []

//   fileNames.forEach((fileName) => {
//     const filePath = path.join(docsDirectory, fileName)
//     const fileContents = fs.readFileSync(filePath, 'utf8')
//     const { data, content } = matter(fileContents)

//     contentData.push({
//       title: data.title,
//       slug: data.slug,
//       version: data.version,
//       content: content,
//     })
//   })

//   return contentData
// }

// export function getDocument(version?: string): DocumentMetadata[] {
//   if (!version) return []

//   const fileNames = fs.readdirSync(`${docsDirectory}/${version}`)
//   const contentData: DocumentMetadata[] = []

//   fileNames.forEach((fileName) => {
//     const filePath = path.join(docsDirectory, fileName)
//     const fileContents = fs.readFileSync(filePath, 'utf8')
//     const { data, content } = matter(fileContents)
//     contentData.push({
//       title: data.title,
//       slug: data.slug,
//       version: data.version,
//       content: content,
//     })
//   })

//   return contentData
// }

// export function getDocumentBySlug(
//   version: string,
//   slug: string
// ): DocumentMetadata {
//   const realSlug = slug.replace(/\.md$/, '')
//   const fullPath = path.join(`${docsDirectory}/${version}`, `${realSlug}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf8')
//   const { data, content } = matter(fileContents)

//   return {
//     title: data.title,
//     slug: data.slug,
//     version: data.version,
//     content: content,
//   }
// }

// export function getDocuments() {
//   const fileNames = fs.readdirSync(docsDirectory)

//   const allDocsData = fileNames.map((fileName) => {
//     const id = fileName.replace(/\.md$/, '')
//     const filePath = path.join(docsDirectory, fileName)
//     const fileContents = fs.readFileSync(filePath, 'utf8')
//     const { data } = matter(fileContents)

//     return {
//       id,
//       ...data,
//     }
//   })

//   return allDocsData
// }

// export async function getDocumentsByVersion(version: string) {
//   if (!version) throw Error('No version provided')

//   const fileNames = fs.readdirSync(path.join(docsDirectory, version))

//   const allDocsData = Promise.all(
//     fileNames.map(async (fileName) => {
//       const id = fileName.replace(/\.md$/, '')
//       const filePath = path.join(docsDirectory, version, fileName)
//       const fileContents = fs.readFileSync(filePath, 'utf8')
//       const { content, data } = matter(fileContents)
//       const contentHtml = await markdownToHtml(content)

//       return {
//         id,
//         title: data.title,
//         version: data.version,
//         content: contentHtml,
//       }
//     })
//   )

//   return allDocsData
// }

// export async function getDocumentData(id: string, version: string) {
//   const fullPath = path.join(`${docsDirectory}/${version}`, `${id}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf8')

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents)

//   // Use remark to convert markdown into HTML string
//   const contentHtml = await markdownToHtml(matterResult.content)

//   // Combine the data with the id
//   return {
//     id,
//     contentHtml,
//     _raw: matterResult.content,
//     ...(matterResult.data as { version: string; title: string }),
//   }
// }

// export async function generateDocuments() {
//   const versions = getAllVersions()
//   const result: any = []
//   versions.map(async (version) => {
//     const docs = await getDocumentsByVersion(version)
//     result.push({ [version]: docs })
//   })

//   return result
// }
