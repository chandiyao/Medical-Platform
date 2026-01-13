import { Card } from "@/components/ui/card";
import { useI18n } from "@/hooks/useI18n";

const stats = [
  { labelKey: "statsPatients", value: "120k+" },
  { labelKey: "statsProviders", value: "340+" },
  { labelKey: "statsCities", value: "35" },
];

export function StatsStrip() {
  const { t } = useI18n();

  return (
    <Card className="grid gap-6 p-8 md:grid-cols-3 bg-gradient-to-r from-white via-emerald-50/50 to-cyan-50/50 shadow-lg border-0 ring-1 ring-slate-200/50 backdrop-blur-sm">
      {stats.map((stat, index) => (
        <div key={stat.labelKey} className="flex flex-col gap-2 text-center group">
          <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
            {stat.value}
          </p>
          <p className="text-sm md:text-base text-slate-600 font-medium">{t[stat.labelKey as keyof typeof t]}</p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto mt-2 opacity-60 group-hover:opacity-100 transition-opacity"></div>
        </div>
      ))}
    </Card>
  );
}
