export type NavigationItemType = {
  name: string
  path: string
  children?: NavigationItemType[]
}

export type FeaturesItemType = {
  title: string
  description: string
  icon?: string
}

export type CardItemType = {
  date?: Date
  title: string
  description?: string
  href?: string
  image?: string | null
  tags?: string[]
}

export type DiscoverFeatureDataType = {
  title: string
  img: string
  features: FeaturesItemType[]
}

export type DocAnchorLinksType = {
  level: string
  content: string
  slug: string,
  sectionNumber: string
}

export type VersionDocType = {
  title: string
  version: string
  slug: string
  url: string
  html: string
  anchorLinks: DocAnchorLinksType[]
}

export type MarkdownFileMetadata = {
  path: string,
  fileName: string,
  ordinal?: string,
  slug: string,
  title: string,
  anchorLinks: Array<DocAnchorLinksType>,
  children: Array<MarkdownFileMetadata>,
  html: string
}

export type VersionedResourceLink = {
  title: string,
  url: string,
  slug: string
}