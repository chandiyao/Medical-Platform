import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/hooks/useCurrency";
import { useI18n } from "@/hooks/useI18n";
import { samplePackages } from "@/lib/options";

export function PackageGrid() {
  const { t } = useI18n();
  const { format, currency } = useCurrency();

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <p className="text-3xl font-bold text-slate-900 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
          {t.servicesTitle}
        </p>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.servicesSubtitle}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {samplePackages.slice(0, 9).map((pkg) => (
          <Card key={pkg.id} className="flex flex-col gap-4 p-6 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-0 ring-1 ring-slate-200/50 hover:ring-emerald-200/50 group cursor-pointer">
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{pkg.title}</p>
              <Badge className="bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700 ring-emerald-200">
                {pkg.country} · {pkg.city}
              </Badge>
            </div>
            <p className="text-sm text-slate-500">
              ⏱️ {pkg.duration} · 🩺 {pkg.specialty}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">{format(pkg.priceUsd)}</p>
              <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">💱 {currency}</span>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-emerald-200 to-cyan-200 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </Card>
        ))}
      </div>
    </div>
  );
}
