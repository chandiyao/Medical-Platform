
"use client";
import React from "react";
import { useCurrency } from "@/hooks/useCurrency";
import { useI18n } from "@/hooks/useI18n";
import { currencyMeta } from "@/lib/currency";
import { cn } from "@/utils/cn";

const localeOptions = [
  { code: "zh", label: "Chinese" },
  { code: "en", label: "English" },
  { code: "ms", label: "Malay" },
];

const currencyOptions = [
  { code: "BND", label: "Brunei Darussalam" },
  { code: "MMK", label: "Burma" },
  { code: "KHR", label: "Cambodia" },
  { code: "IDR", label: "Indonesia" },
  { code: "LAK", label: "Laos" },
  { code: "MYR", label: "Malaysia" },
  { code: "PHP", label: "Philippines" },
  { code: "SGD", label: "Singapore" },
  { code: "THB", label: "Thailand" },
  { code: "VND", label: "Vietnam" },
];

export function HeaderBar() {
  const { locale, setLocale, t } = useI18n();
  const { currency, setCurrency } = useCurrency();

  const [showLogin, setShowLogin] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

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
        <div className="ml-4">
          <button
            className="px-6 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow hover:from-emerald-600 hover:to-cyan-600 transition-all"
            onClick={() => setShowLogin(true)}
            type="button"
          >
            Login
          </button>
        </div>
        {showLogin && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl ring-1 ring-emerald-100 p-8 relative z-[9999]">
              <button
                className="absolute top-4 right-4 text-slate-400 hover:text-emerald-600 text-xl font-bold"
                onClick={() => setShowLogin(false)}
                type="button"
              >
                ×
              </button>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setLoading(true);
                  setError("");
                  // TODO: Replace with your Supabase login logic
                  setTimeout(() => {
                    setLoading(false);
                    setShowLogin(false);
                  }, 1000);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white focus:border-emerald-400 focus:ring-emerald-50"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white focus:border-emerald-400 focus:ring-emerald-50"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="text-xs text-emerald-600 mt-1"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded text-xs">{error}</div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-2 rounded-lg shadow"
                >
                  {loading ? "Signing in..." : "Login"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
