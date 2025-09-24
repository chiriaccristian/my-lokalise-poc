import HomePage from '@/components/HomePage';

// Ensure both locales are statically generated so translations change with the URL
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ro'}];
}

export default function Home() {
  return <HomePage />;
}
