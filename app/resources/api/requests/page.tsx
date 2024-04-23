
import { redirect } from 'next/navigation';
export default async function RequestsMainPage({version = 'latest'}: { version: string }) {
  redirect('/resources/api/requests/'+version+'/');
}
