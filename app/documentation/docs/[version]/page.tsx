import { getVersionIndex } from '@/lib/utils'
import { redirect } from 'next/navigation'
export default async function VersionPage({
  params,
}: {
  params: { version: string }
}) {
  const indexJSON = await getVersionIndex(params.version);
  redirect('/documentation/docs/' + params.version + '/' + indexJSON[0].slug);
}
