# The Rooftop Haveli Restaurant & Cafe

Production-oriented Next.js 14 starter for a premium restaurant website with Supabase integration.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- Supabase (PostgreSQL + Storage + Auth)
- TypeScript

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Add environment variables:

```bash
cp .env.example .env.local
```

Set:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. Run dev server:

```bash
npm run dev
```

## Database Setup

Run SQL in Supabase SQL editor:

- `supabase/schema.sql`

## Included Routes

- `/`
- `/about`
- `/menu`
- `/gallery`
- `/reviews`
- `/reservation`
- `/events`
- `/contact`
- `/admin`
- `/privacy-policy`
- Custom `not-found` route

## Notes

- Dynamic menu, reservation form actions, and admin auth workflow are scaffolded for next implementation steps.
