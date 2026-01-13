"use client";

import { useCurrency } from "@/hooks/useCurrency";
import { useI18n } from "@/hooks/useI18n";
import { currencyMeta } from "@/lib/currency";
import { cn } from "@/utils/cn";

const localeOptions = [
  { code: "en", label: "English" },
  { code: "id", label: "Bahasa" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "th", label: "ไทย" },
];

const currencyOptions = [
  { code: "IDR", label: "IDR" },
  { code: "VND", label: "VND" },
  { code: "THB", label: "THB" },
];

export function HeaderBar() {
  const { locale, setLocale, t } = useI18n();
  const { currency, setCurrency } = useCurrency();

  return (
    <header className="flex items-center justify-between gap-6 rounded-3xl border border-slate-200/50 bg-white/90 px-8 py-5 shadow-xl shadow-emerald-100/30 ring-1 ring-slate-100/50 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-200 text-lg font-bold">
          ME
        </div>
        <div>
          <p className="text-lg font-bold text-emerald-700">{t.brand}</p>
          <p className="text-sm text-slate-500">🌊 Patients · 🏥 Hospitals · ⚙️ Admin</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <select
          className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 backdrop-blur-sm"
          value={locale}
          onChange={(e) => setLocale(e.target.value as typeof locale)}
        >
          {localeOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 backdrop-blur-sm"
          value={currency}
          onChange={(e) => setCurrency(e.target.value as typeof currency)}
        >
          {currencyOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.label}
            </option>
          ))}
        </select>
        <div className={cn("hidden items-center gap-2 rounded-full bg-gradient-to-r from-emerald-50 to-cyan-50 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-200 sm:flex")}>
          <span className="text-emerald-600">💱</span>
          FX • 1 USD ≈ {currencyMeta[currency].symbol}
          {(1 / currencyMeta[currency].rateToUsd).toLocaleString(currencyMeta[currency].locale)}
        </div>
      </div>
    </header>
  );
}
