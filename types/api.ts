export type BundleItem = {
  path: string,
  name: string,
  desc: string
}
export type Bundle = {
  name: string,
  bundles: Array<BundleItem>
}

export type OskariEventOrRequest = {
  name: string,
  desc: string,
  path: string,
  rpc: boolean,
  bundle: string,
  ns: string
}

export type SidebarAccordionItem = {
  name: string,
  desc: string
}