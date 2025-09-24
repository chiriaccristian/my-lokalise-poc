import {getRequestConfig} from 'next-intl/server';

const SUPPORTED_LOCALES = ['en', 'ro', 'fr'] as const;

type SupportedLocale = typeof SUPPORTED_LOCALES[number];

const FILE_LOCALE_MAP: Record<SupportedLocale, string> = {
  en: 'en_GB',
  ro: 'ro_RO',
  fr: 'fr_FR'
};

export default getRequestConfig(async ({locale, requestLocale}) => {
  const candidate = (locale ?? (await requestLocale) ?? 'ro').toString();
  const l: SupportedLocale = (SUPPORTED_LOCALES as readonly string[]).includes(candidate) ? (candidate as SupportedLocale) : 'ro';

  return {
    locale: l,
    messages: (await import(`../locale/${FILE_LOCALE_MAP[l]}.json`)).default
  };
});
