"use client";

import {usePathname, useRouter} from 'next/navigation';
import {ChangeEvent, useMemo, useTransition} from 'react';

const locales = ['en', 'ro', 'fr'] as const;

type Locale = typeof locales[number];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const currentLocale: Locale = useMemo(() => {
    const seg = pathname.split('/').filter(Boolean)[0];
    return (locales as readonly string[]).includes(seg) ? (seg as Locale) : 'en';
  }, [pathname]);

  function onChange(e: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value as Locale;
    const parts = pathname.split('/').filter(Boolean);
    if ((locales as readonly string[]).includes(parts[0])) {
      parts[0] = nextLocale;
    } else {
      parts.unshift(nextLocale);
    }
    const nextPath = '/' + parts.join('/');
    startTransition(() => {
      router.replace(nextPath);
    });
  }

  return (
    <div className="flex justify-end items-center gap-3 w-full">
      <select
        id="language"
        name="language"
        className="border rounded-md px-3 py-2 bg-white dark:bg-neutral-900"
        value={currentLocale}
        onChange={onChange}
        disabled={isPending}
      >
        <option value="en">Engleza</option>
        <option value="ro">Romana</option>
        <option value="fr">Franceza</option>
      </select>
    </div>
  );
}
