
import { redirect } from 'next/navigation';
export default async function RequestsMainPage() {
  redirect('/documentation/api/requests/latest/');
}
