import HomePage from '@/components/HomePage';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ro'}, {locale: 'fr'}];
}

export default function Home() {
  return <HomePage />;
}
