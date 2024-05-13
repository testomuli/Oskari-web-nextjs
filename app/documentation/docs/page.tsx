import { getVersionIndex } from '@/lib/utils'
import { redirect } from 'next/navigation'
export default async function DocsMainPage() {
  const indexJSON = await getVersionIndex('latest');
  redirect('/documentation/docs/latest/' + indexJSON[0].slug);
}
