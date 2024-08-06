import { redirect } from 'next/navigation'
export default function MainPage() {
  redirect('/intro');

  return (
    <main className="main-page">
      메인 페이지
    </main>
  );
}
