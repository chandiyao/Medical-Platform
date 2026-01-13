"use client";

import { useContext } from "react";
import { CurrencyContext } from "@/providers/currency-provider";

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return ctx;
}
