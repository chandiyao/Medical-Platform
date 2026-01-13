"use client";

import { SelectHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  hint?: string;
};

export function Select({ className, label, hint, children, ...props }: Props) {
  return (
    <label className="flex w-full flex-col gap-1 text-sm font-medium text-slate-700">
      {label}
      <div className="relative">
        <select
          className={cn(
            "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50",
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">▾</span>
      </div>
      {hint && <span className="text-xs font-normal text-slate-500">{hint}</span>}
    </label>
  );
}
