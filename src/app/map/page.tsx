import { Card } from "@/components/ui/card";
import { mapHospitals } from "@/lib/options";

export default function MapPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 flex items-center justify-center">
      <Card className="w-full max-w-4xl p-8 shadow-xl ring-1 ring-emerald-100">
        <h1 className="text-2xl font-bold mb-4 text-emerald-700">Hospital Map View</h1>
        <div className="mb-6 text-slate-600">Discover hospitals and their real-time availability across Southeast Asia.</div>
        <div className="grid gap-4 md:grid-cols-2">
          {mapHospitals.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow ring-1 ring-emerald-100">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-100 to-cyan-100 text-sm font-bold text-emerald-700 ring-2 ring-emerald-200 shadow-sm">
                {item.country}
              </span>
              <div>
                <p className="font-bold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-500">📍 {item.city} • 👥 {item.patients} patients</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </main>
  );
}
