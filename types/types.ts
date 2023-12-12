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
  slug: string
}

export type VersionDocType = {
  title: string
  version: string
  slug: string
  url: string
  html: string
  anchorLinks: DocAnchorLinksType[]
}
