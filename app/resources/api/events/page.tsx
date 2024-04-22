
import { redirect } from 'next/navigation';
export default async function EventsMainPage({version = 'latest'}: { version: string }) {
  redirect('/resources/api/events/'+version+'/');
}
