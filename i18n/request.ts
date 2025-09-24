import {getRequestConfig} from 'next-intl/server';

const SUPPORTED_LOCALES = ['en', 'ro'] as const;

type SupportedLocale = typeof SUPPORTED_LOCALES[number];

export default getRequestConfig(async ({locale, requestLocale}) => {
  const candidate = (locale ?? (await requestLocale) ?? 'ro').toString();
  const l: SupportedLocale = (SUPPORTED_LOCALES as readonly string[]).includes(candidate) ? (candidate as SupportedLocale) : 'ro';

  return {
    locale: l,
    messages: (await import(`../messages/${l}.json`)).default
  };
});
