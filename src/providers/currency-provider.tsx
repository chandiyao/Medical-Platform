"use client";

import { createContext, useMemo, useState } from "react";
import { convertFromUsd, currencyMeta, formatMoney, type SupportedCurrency } from "@/lib/currency";

type CurrencyContextValue = {
  currency: SupportedCurrency;
  setCurrency: (currency: SupportedCurrency) => void;
  format: (amount: number) => string;
  rateNote: string;
};

export const CurrencyContext = createContext<CurrencyContextValue>({
  currency: "IDR",
  setCurrency: () => {},
  format: (amount: number) => formatMoney(amount, "IDR"),
  rateNote: "",
});

type Props = {
  children: React.ReactNode;
  defaultCurrency?: SupportedCurrency;
};

export function CurrencyProvider({ children, defaultCurrency = "IDR" }: Props) {
  const [currency, setCurrency] = useState<SupportedCurrency>(defaultCurrency);

  const value = useMemo(() => {
    const format = (amountInUsd: number) => formatMoney(convertFromUsd(amountInUsd, currency), currency);
    const meta = currencyMeta[currency];
    return {
      currency,
      setCurrency,
      format,
      rateNote: `${meta.symbol}1 based on indicative FX, format adjusts automatically`,
    };
  }, [currency]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}
