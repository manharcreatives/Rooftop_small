create extension if not exists "pgcrypto";

create table if not exists public.menu_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.menu_items (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.menu_categories(id) on delete cascade,
  name text not null,
  description text,
  price numeric(10, 2) not null check (price >= 0),
  image_url text,
  is_special boolean not null default false,
  available boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists idx_menu_items_category_id on public.menu_items(category_id);
create index if not exists idx_menu_items_available on public.menu_items(available);

create table if not exists public.gallery_images (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  category text,
  uploaded_at timestamptz not null default now()
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  rating int not null check (rating between 1 and 5),
  review text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  date date not null,
  time time not null,
  guests int not null check (guests > 0),
  special_request text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected', 'completed')),
  created_at timestamptz not null default now()
);

create index if not exists idx_reservations_date on public.reservations(date);
create index if not exists idx_reservations_status on public.reservations(status);

create table if not exists public.admins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  email text not null unique,
  role text not null default 'manager',
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admins a
    where a.user_id = auth.uid()
       or lower(a.email) = lower(auth.jwt() ->> 'email')
  );
$$;

alter table public.menu_categories enable row level security;
alter table public.menu_items enable row level security;
alter table public.gallery_images enable row level security;
alter table public.reviews enable row level security;
alter table public.reservations enable row level security;
alter table public.admins enable row level security;

drop policy if exists "Public read menu categories" on public.menu_categories;
create policy "Public read menu categories"
on public.menu_categories
for select
to anon, authenticated
using (true);

drop policy if exists "Admin manage menu categories" on public.menu_categories;
create policy "Admin manage menu categories"
on public.menu_categories
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Public read menu items" on public.menu_items;
create policy "Public read menu items"
on public.menu_items
for select
to anon, authenticated
using (true);

drop policy if exists "Admin manage menu items" on public.menu_items;
create policy "Admin manage menu items"
on public.menu_items
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Public read gallery images" on public.gallery_images;
create policy "Public read gallery images"
on public.gallery_images
for select
to anon, authenticated
using (true);

drop policy if exists "Admin manage gallery images" on public.gallery_images;
create policy "Admin manage gallery images"
on public.gallery_images
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Public read reviews" on public.reviews;
create policy "Public read reviews"
on public.reviews
for select
to anon, authenticated
using (true);

drop policy if exists "Guest submit reviews" on public.reviews;
create policy "Guest submit reviews"
on public.reviews
for insert
to anon, authenticated
with check (true);

drop policy if exists "Admin manage reviews" on public.reviews;
create policy "Admin manage reviews"
on public.reviews
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Guest submit reservations" on public.reservations;
create policy "Guest submit reservations"
on public.reservations
for insert
to anon, authenticated
with check (true);

drop policy if exists "Admin read reservations" on public.reservations;
create policy "Admin read reservations"
on public.reservations
for select
to authenticated
using (public.is_admin());

drop policy if exists "Admin update reservations" on public.reservations;
create policy "Admin update reservations"
on public.reservations
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Admin read admins" on public.admins;
create policy "Admin read admins"
on public.admins
for select
to authenticated
using (public.is_admin());

drop policy if exists "Admin manage admins" on public.admins;
create policy "Admin manage admins"
on public.admins
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

insert into storage.buckets (id, name, public)
values ('gallery', 'gallery', true)
on conflict (id) do nothing;

drop policy if exists "Public read gallery bucket" on storage.objects;
create policy "Public read gallery bucket"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'gallery');

drop policy if exists "Admin upload gallery bucket" on storage.objects;
create policy "Admin upload gallery bucket"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'gallery' and public.is_admin());

drop policy if exists "Admin update gallery bucket" on storage.objects;
create policy "Admin update gallery bucket"
on storage.objects
for update
to authenticated
using (bucket_id = 'gallery' and public.is_admin())
with check (bucket_id = 'gallery' and public.is_admin());

drop policy if exists "Admin delete gallery bucket" on storage.objects;
create policy "Admin delete gallery bucket"
on storage.objects
for delete
to authenticated
using (bucket_id = 'gallery' and public.is_admin());
