export type Locale = "en" | "id" | "vi" | "th";

type Dictionary = {
  brand: string;
  heroTitle: string;
  heroSubtitle: string;
  searchTitle: string;
  searchCountry: string;
  searchCity: string;
  searchSpecialty: string;
  searchButton: string;
  searchHint: string;
  statsPatients: string;
  statsProviders: string;
  statsCities: string;
  mapTitle: string;
  mapSubtitle: string;
  servicesTitle: string;
  servicesSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    brand: "MediSEA Hub",
    heroTitle: "Book cross-border medical care with trusted hospitals",
    heroSubtitle:
      "Compare pricing across Indonesia, Vietnam, and Thailand. Book in minutes with transparent fees and verified providers.",
    searchTitle: "Find a service",
    searchCountry: "Country",
    searchCity: "City",
    searchSpecialty: "Medical specialty",
    searchButton: "Search availability",
    searchHint: "Pick a country and specialty to see nearby hospitals.",
    statsPatients: "Patients served",
    statsProviders: "Verified hospitals",
    statsCities: "Cities covered",
    mapTitle: "Grab-style map",
    mapSubtitle: "Preview locations before booking. Live maps plug into Google Maps or Leaflet.",
    servicesTitle: "Popular packages",
    servicesSubtitle: "Curated screenings, dental, and specialist care with upfront prices.",
    ctaPrimary: "Explore services",
    ctaSecondary: "Talk to support",
  },
  id: {
    brand: "MediSEA Hub",
    heroTitle: "Pesan layanan medis lintas negara dengan rumah sakit tepercaya",
    heroSubtitle:
      "Bandingkan harga di Indonesia, Vietnam, dan Thailand. Booking cepat dengan biaya transparan dan penyedia terverifikasi.",
    searchTitle: "Cari layanan",
    searchCountry: "Negara",
    searchCity: "Kota",
    searchSpecialty: "Spesialisasi medis",
    searchButton: "Cari jadwal",
    searchHint: "Pilih negara dan spesialisasi untuk melihat rumah sakit terdekat.",
    statsPatients: "Pasien terbantu",
    statsProviders: "Rumah sakit terverifikasi",
    statsCities: "Kota terlayani",
    mapTitle: "Peta ala Grab",
    mapSubtitle: "Lihat lokasi sebelum booking. Peta live terhubung ke Google Maps atau Leaflet.",
    servicesTitle: "Paket populer",
    servicesSubtitle: "Pemeriksaan lengkap, gigi, dan spesialis dengan harga pasti.",
    ctaPrimary: "Jelajahi layanan",
    ctaSecondary: "Hubungi dukungan",
  },
  vi: {
    brand: "MediSEA Hub",
    heroTitle: "Đặt lịch chăm sóc y tế xuyên biên giới với bệnh viện uy tín",
    heroSubtitle:
      "So sánh giá tại Indonesia, Việt Nam và Thái Lan. Đặt lịch trong vài phút với chi phí minh bạch và nhà cung cấp đã xác minh.",
    searchTitle: "Tìm dịch vụ",
    searchCountry: "Quốc gia",
    searchCity: "Thành phố",
    searchSpecialty: "Chuyên khoa",
    searchButton: "Tìm lịch trống",
    searchHint: "Chọn quốc gia và chuyên khoa để thấy bệnh viện gần bạn.",
    statsPatients: "Bệnh nhân đã phục vụ",
    statsProviders: "Bệnh viện xác minh",
    statsCities: "Thành phố phủ sóng",
    mapTitle: "Bản đồ kiểu Grab",
    mapSubtitle: "Xem vị trí trước khi đặt. Bản đồ live kết nối Google Maps hoặc Leaflet.",
    servicesTitle: "Gói phổ biến",
    servicesSubtitle: "Gói khám tổng quát, nha khoa và chuyên khoa với giá rõ ràng.",
    ctaPrimary: "Khám phá dịch vụ",
    ctaSecondary: "Liên hệ hỗ trợ",
  },
  th: {
    brand: "MediSEA Hub",
    heroTitle: "จองการรักษาพยาบาลข้ามประเทศกับโรงพยาบาลที่เชื่อถือได้",
    heroSubtitle:
      "เปรียบเทียบราคาในอินโดนีเซีย เวียดนาม และไทย จองง่ายในไม่กี่นาที ค่าบริการโปร่งใสและผู้ให้บริการผ่านการตรวจสอบ",
    searchTitle: "ค้นหาบริการ",
    searchCountry: "ประเทศ",
    searchCity: "เมือง",
    searchSpecialty: "สาขาแพทย์",
    searchButton: "ค้นหาคิวว่าง",
    searchHint: "เลือกประเทศและสาขาแพทย์เพื่อดูโรงพยาบาลใกล้คุณ",
    statsPatients: "ผู้ป่วยที่ให้บริการ",
    statsProviders: "โรงพยาบาลที่ยืนยันแล้ว",
    statsCities: "เมืองที่ครอบคลุม",
    mapTitle: "แผนที่สไตล์แกร็บ",
    mapSubtitle: "ดูตำแหน่งก่อนจอง แผนที่สดเชื่อมต่อ Google Maps หรือ Leaflet",
    servicesTitle: "แพ็กเกจยอดนิยม",
    servicesSubtitle: "ตรวจสุขภาพ ฟัน และเฉพาะทาง พร้อมราคาชัดเจน",
    ctaPrimary: "ดูบริการ",
    ctaSecondary: "ติดต่อฝ่ายช่วยเหลือ",
  },
};
