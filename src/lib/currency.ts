export type SupportedCurrency = "IDR" | "VND" | "THB";

export const currencyMeta: Record<
  SupportedCurrency,
  { label: string; symbol: string; locale: string; rateToUsd: number }
> = {
  IDR: { label: "Indonesian Rupiah", symbol: "Rp", locale: "id-ID", rateToUsd: 0.000064 },
  VND: { label: "Vietnamese Dong", symbol: "₫", locale: "vi-VN", rateToUsd: 0.000041 },
  THB: { label: "Thai Baht", symbol: "฿", locale: "th-TH", rateToUsd: 0.028 },
};

export function formatMoney(amount: number, currency: SupportedCurrency) {
  const meta = currencyMeta[currency];
  return new Intl.NumberFormat(meta.locale, {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "IDR" || currency === "VND" ? 0 : 2,
  }).format(amount);
}

export function convertFromUsd(usd: number, currency: SupportedCurrency) {
  const meta = currencyMeta[currency];
  return usd / meta.rateToUsd;
}
