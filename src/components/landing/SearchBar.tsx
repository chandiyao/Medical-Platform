"use client";

import { useMemo, useState } from "react";
import { useCurrency } from "@/hooks/useCurrency";
import { useI18n } from "@/hooks/useI18n";
import { countries, specialties, citiesByCountry, samplePackages } from "@/lib/options";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SearchBar() {
  const { t } = useI18n();
  const { currency, format } = useCurrency();
  const [country, setCountry] = useState<string>("id");
  const [city, setCity] = useState<string>("");
  const [specialty, setSpecialty] = useState<string>("general");
  const [status, setStatus] = useState<string>("");

  const cityOptions = citiesByCountry[country];

  const filteredPackages = useMemo(
    () =>
      samplePackages.filter((pkg) => {
        const matchesCountry = pkg.country.toLowerCase().startsWith(country);
        const matchesSpecialty = specialty === "all" || pkg.specialty === specialty;
        const matchesCity = city ? pkg.city.toLowerCase().includes(city.toLowerCase()) : true;
        return matchesCountry && matchesSpecialty && matchesCity;
      }),
    [country, specialty, city],
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(
      `${filteredPackages.length} option${filteredPackages.length === 1 ? "" : "s"} ready in ${country.toUpperCase()}.`,
    );
  };

  return (
    <Card className="flex w-full flex-col gap-8 p-8 lg:p-10 bg-gradient-to-r from-white via-slate-50/50 to-emerald-50/30 shadow-xl border-0 ring-1 ring-slate-200/50 backdrop-blur-sm">
      <div className="flex flex-col gap-3">
        <Badge className="bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 w-fit">🔍 {t.searchTitle}</Badge>
        <p className="text-3xl font-bold text-slate-900 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          Find Your Perfect Medical Package
        </p>
        <p className="text-base text-slate-600">{t.searchHint}</p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Select label={t.searchCountry} value={country} onChange={(e) => setCountry(e.target.value)} className="bg-white/80 backdrop-blur-sm">
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </Select>

        <Select
          label={t.searchCity}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          hint="Top cities listed; type to narrow."
          className="bg-white/80 backdrop-blur-sm"
        >
          <option value="">Any city</option>
          {cityOptions.map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </Select>

        <Select label={t.searchSpecialty} value={specialty} onChange={(e) => setSpecialty(e.target.value)} className="bg-white/80 backdrop-blur-sm">
          <option value="all">All</option>
          {specialties.map((special) => (
            <option key={special.id} value={special.id}>
              {special.name}
            </option>
          ))}
        </Select>

        <div className="flex items-end">
          <Button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            {t.searchButton}
          </Button>
        </div>
      </form>

      <div className="grid gap-6 md:grid-cols-3">
        {filteredPackages.slice(0, 6).map((pkg) => (
          <Card key={pkg.id} className="flex flex-col gap-3 p-6 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 border-0 ring-1 ring-slate-200/50 hover:ring-emerald-200/50 group">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{pkg.title}</p>
              <Badge className="bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700 ring-emerald-200">
                {pkg.country} • {pkg.city}
              </Badge>
            </div>
            <p className="text-sm text-slate-500">
              ⏱️ {pkg.duration} • 🩺 {pkg.specialty}
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">{format(pkg.priceUsd)}</p>
            <p className="text-xs text-slate-500">💱 Currency: {currency}</p>
          </Card>
        ))}
      </div>

      {status && (
        <div className="text-center">
          <p className="text-lg font-semibold text-emerald-700 bg-emerald-50 px-6 py-3 rounded-full inline-block shadow-sm">
            ✅ {status}
          </p>
        </div>
      )}
    </Card>
  );
}
