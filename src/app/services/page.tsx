import { Card } from "@/components/ui/card";
import { SearchBar } from "@/components/landing/SearchBar";
import { PackageGrid } from "@/components/landing/PackageGrid";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="mx-auto max-w-6xl flex flex-col gap-8 px-4 py-10">
        <h1 className="text-3xl font-bold text-emerald-700 mb-2">Explore Services</h1>
        <p className="text-lg text-slate-600 mb-6">Browse hospitals by country, city, and specialty. Use filters and search to find the right provider.</p>
        <SearchBar />
        <PackageGrid />
      </div>
    </main>
  );
}
