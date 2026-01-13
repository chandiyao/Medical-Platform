import { mapHospitals } from "@/lib/options";
import { Card } from "@/components/ui/card";

export function MapPreview() {
  return (
    <Card className="relative flex flex-col gap-6 overflow-hidden p-8 bg-gradient-to-br from-white via-emerald-50/30 to-cyan-50/30 shadow-xl border-0 ring-1 ring-slate-200/50 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl font-bold text-slate-900">🗺️ Interactive Map View</p>
          <p className="text-sm text-slate-600">
            Discover healthcare providers across Southeast Asia. Real-time availability and locations.
          </p>
        </div>
        <div className="rounded-full bg-gradient-to-r from-emerald-100 to-cyan-100 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200 shadow-sm">
          🚀 Live Soon
        </div>
      </div>

      <div className="relative h-80 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-sky-50 shadow-inner">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(14,116,144,0.1),transparent_38%)]" />
        <div className="absolute inset-8 rounded-3xl border-2 border-dashed border-emerald-200/70" />
        
        {/* Animated markers */}
        <div className="absolute left-12 top-16 h-10 w-10 rounded-full bg-white shadow-xl shadow-emerald-200/50 ring-4 ring-emerald-300/70 animate-pulse">
          <div className="absolute inset-2 rounded-full bg-emerald-500"></div>
        </div>
        <div className="absolute right-20 top-24 h-12 w-12 rounded-full bg-white shadow-xl shadow-cyan-200/50 ring-4 ring-cyan-300/60 animate-pulse delay-1000">
          <div className="absolute inset-3 rounded-full bg-cyan-500"></div>
        </div>
        <div className="absolute bottom-16 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-white shadow-xl shadow-blue-200/50 ring-4 ring-blue-300/70 animate-pulse delay-500">
          <div className="absolute inset-2 rounded-full bg-blue-500"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col gap-4 rounded-3xl bg-white/95 px-6 py-5 shadow-2xl shadow-emerald-200/50 ring-1 ring-emerald-100 backdrop-blur-sm">
            {mapHospitals.map((item) => (
              <div key={item.id} className="flex items-center gap-4 text-sm hover:bg-emerald-50/50 px-3 py-2 rounded-xl transition-colors cursor-pointer">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-100 to-cyan-100 text-sm font-bold text-emerald-700 ring-2 ring-emerald-200 shadow-sm">
                  {item.country}
                </span>
                <div>
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">
                    📍 {item.city} • 👥 {item.patients} patients
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
