"use client";
import { HeaderBar } from "@/components/landing/HeaderBar";
import { MapPreview } from "@/components/landing/MapPreview";
import { PackageGrid } from "@/components/landing/PackageGrid";
import { SearchBar } from "@/components/landing/SearchBar";
import { StatsStrip } from "@/components/landing/StatsStrip";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/hooks/useI18n";

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-8 shadow-lg shadow-emerald-100/50 ring-1 ring-emerald-100/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5"></div>
      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-700 mb-4">
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors">🌊 SEA Medical Marketplace</Badge>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-100 transition-colors">👥 Patients</span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-100 transition-colors">
            🏥 Hospitals / Doctors
          </span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-100 transition-colors">⚙️ Admin</span>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            {t.heroTitle}
          </h1>
          <p className="text-lg text-slate-600 md:text-xl max-w-2xl leading-relaxed">
            {t.heroSubtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            {t.ctaPrimary}
          </Button>
          <Button variant="secondary" className="bg-white/80 backdrop-blur-sm border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            {t.ctaSecondary}
          </Button>
        </div>
      </div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-emerald-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-2xl"></div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-10 md:py-16">
        <HeaderBar />
        <Hero />
        <StatsStrip />
        <SearchBar />
        <div className="grid gap-8 lg:grid-cols-2">
          <MapPreview />
          <Card className="flex flex-col gap-4 p-8 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 ring-1 ring-slate-200/50">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-slate-900">🔄 Workflow Snapshot</p>
              <Badge className="bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 ring-emerald-200">3-sided Platform</Badge>
            </div>
            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 mt-0.5">👥</span>
                <p>Patients search, compare prices, and book appointments seamlessly across borders.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-500 mt-0.5">🏥</span>
                <p>Providers list services, set local currency pricing, and manage bookings efficiently.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 mt-0.5">⚙️</span>
                <p>Admins verify providers, oversee commissions, and track transactions securely.</p>
              </div>
            </div>
          </Card>
        </div>
        <PackageGrid />
      </div>
      
      {/* Footer */}
      <footer className="mt-16 rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-900 to-cyan-900 p-8 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white text-lg font-bold">
                  ME
                </div>
                <span className="text-xl font-bold">MediSEA Hub</span>
              </div>
              <p className="text-slate-300 text-sm">
                Connecting patients with healthcare providers across Southeast Asia through innovative technology.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-emerald-300">For Patients</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>🔍 Find Providers</li>
                <li>📅 Book Appointments</li>
                <li>💳 Secure Payments</li>
                <li>⭐ Reviews & Ratings</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-cyan-300">For Providers</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>📊 Dashboard</li>
                <li>💰 Pricing Tools</li>
                <li>📈 Analytics</li>
                <li>🔒 Secure Platform</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-300">Support</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>📞 Help Center</li>
                <li>📧 Contact Us</li>
                <li>🛡️ Privacy Policy</li>
                <li>📋 Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
            <p>&copy; 2026 MediSEA Hub. All rights reserved. 🌊 Connecting Healthcare Across Borders</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
