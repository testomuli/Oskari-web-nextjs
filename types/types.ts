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
