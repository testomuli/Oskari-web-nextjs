
import { redirect } from 'next/navigation';
export default async function EventsMainPage() {
  redirect('/resources/api/events/latest/');
}
