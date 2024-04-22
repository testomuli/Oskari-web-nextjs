import { redirect } from 'next/navigation';
export default async function BundlesMainPage({version = 'latest'}: { version: string}) {
  redirect('/resources/api/bundles/'+version+'/');
}
