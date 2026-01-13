export const countries = [
  { code: "id", name: "Indonesia" },
  { code: "vi", name: "Vietnam" },
  { code: "th", name: "Thailand" },
];

export const specialties = [
  { id: "general", name: "General Checkup" },
  { id: "cardiology", name: "Cardiology" },
  { id: "dental", name: "Dental" },
  { id: "fertility", name: "Fertility" },
  { id: "orthopedic", name: "Orthopedic" },
];

export const citiesByCountry: Record<string, string[]> = {
  id: ["Jakarta", "Surabaya", "Denpasar"],
  vi: ["Ho Chi Minh City", "Hanoi", "Da Nang"],
  th: ["Bangkok", "Chiang Mai", "Phuket"],
};

export const samplePackages = [
  {
    id: "pkg1",
    country: "Indonesia",
    city: "Jakarta",
    title: "Full Body Screening",
    priceUsd: 150,
    specialty: "general",
    duration: "2.5h",
  },
  {
    id: "pkg2",
    country: "Vietnam",
    city: "Ho Chi Minh City",
    title: "Dental Care & Whitening",
    priceUsd: 120,
    specialty: "dental",
    duration: "1.5h",
  },
  {
    id: "pkg3",
    country: "Thailand",
    city: "Bangkok",
    title: "Cardiology Consultation",
    priceUsd: 95,
    specialty: "cardiology",
    duration: "40m",
  },
];

export const mapHospitals = [
  { id: "h1", name: "Jakarta Medical Center", city: "Jakarta", country: "ID", patients: "24k" },
  { id: "h2", name: "Saigon Heart Clinic", city: "HCMC", country: "VN", patients: "17k" },
  { id: "h3", name: "Bangkok Wellness", city: "Bangkok", country: "TH", patients: "31k" },
];
