"use client";

import { createContext, useMemo, useState } from "react";
import { dictionaries, type Locale } from "@/lib/i18n/dictionaries";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof dictionaries["en"];
};

export const I18nContext = createContext<I18nContextValue>({
  locale: "en",
  setLocale: () => {},
  t: dictionaries.en,
});

type Props = {
  children: React.ReactNode;
  defaultLocale?: Locale;
};

export function I18nProvider({ children, defaultLocale = "en" }: Props) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale],
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
