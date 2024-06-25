
import { redirect } from 'next/navigation';
export default async function EventsMainPage() {
  redirect('/documentation/api/events/latest/');
}
