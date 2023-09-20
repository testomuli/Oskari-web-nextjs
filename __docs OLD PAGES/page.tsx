import { getAllVersions } from '@/lib/api'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Documentation',
}

export default async function DocsPage() {
  const versionsData = getAllVersions()
  const [versions] = await Promise.all([versionsData])
  redirect(`/resources/docs/${versions[0]}`)
}
