import {ReactNode} from 'react';
import {setRequestLocale} from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  // Ensure the locale is set for the server components in this subtree
  setRequestLocale(locale);
  return children;
}
