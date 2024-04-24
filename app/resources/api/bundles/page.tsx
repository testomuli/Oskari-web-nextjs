import { redirect } from 'next/navigation';
export default function BundlesMainPage() {
  redirect('/resources/api/bundles/latest/');
}
