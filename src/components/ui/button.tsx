"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 px-4 py-2.5";
  const styles = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:outline-emerald-600",
    secondary:
      "bg-white text-slate-900 border border-slate-200 hover:border-emerald-200 hover:text-emerald-700 focus-visible:outline-emerald-600",
    ghost: "bg-transparent text-slate-700 hover:text-emerald-700 focus-visible:outline-emerald-600",
  };

  return <button className={cn(base, styles[variant], className)} {...props} />;
}
