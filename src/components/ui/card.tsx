import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-100 bg-white shadow-sm shadow-emerald-50/50 ring-1 ring-slate-50",
        className,
      )}
      {...props}
    />
  );
}
