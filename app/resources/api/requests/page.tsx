
import { redirect } from 'next/navigation';
export default async function RequestsMainPage() {
  redirect('/resources/api/requests/latest/');
}
