-- MediSEA Hub - Supabase/Postgres schema

create type public.user_role as enum ('patient', 'provider', 'admin');
create type public.booking_status as enum ('pending', 'confirmed', 'completed', 'cancelled');
create type public.currency_code as enum ('IDR', 'VND', 'THB');

create table if not exists public.profiles (
  id uuid primary key references auth.users(id),
  email text unique not null,
  full_name text,
  role public.user_role not null default 'patient',
  country_code char(2),
  created_at timestamptz default now()
);

create table if not exists public.hospitals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  address text,
  city text,
  country char(2) not null,
  bio text,
  coordinates geography(point, 4326),
  verified boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  hospital_id uuid not null references public.hospitals(id) on delete cascade,
  title text not null,
  description text,
  category text,
  price numeric not null,
  currency public.currency_code not null,
  duration_minutes int,
  created_at timestamptz default now()
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.profiles(id) on delete cascade,
  hospital_id uuid not null references public.hospitals(id),
  service_id uuid not null references public.services(id),
  appointment_date timestamptz not null,
  status public.booking_status not null default 'pending',
  notes text,
  created_at timestamptz default now()
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null unique references public.bookings(id) on delete cascade,
  rating int not null check (rating between 1 and 5),
  comment text,
  created_at timestamptz default now()
);

create table if not exists public.transactions (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id) on delete cascade,
  amount numeric not null,
  currency public.currency_code not null,
  commission_fee numeric,
  status text default 'pending',
  created_at timestamptz default now()
);

create table if not exists public.provider_verifications (
  id uuid primary key default gen_random_uuid(),
  hospital_id uuid not null references public.hospitals(id) on delete cascade,
  status text not null default 'pending',
  notes text,
  reviewed_by uuid references public.profiles(id),
  created_at timestamptz default now()
);

-- Indexes to speed up lookups
create index if not exists idx_hospitals_country_city on public.hospitals (country, city);
create index if not exists idx_services_hospital on public.services (hospital_id);
create index if not exists idx_bookings_patient_status on public.bookings (patient_id, status);
create index if not exists idx_bookings_hospital_status on public.bookings (hospital_id, status);
