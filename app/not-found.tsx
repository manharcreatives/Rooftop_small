import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-primary px-6 text-white">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-gold">404</p>
        <h1 className="mt-3 font-heading text-4xl sm:text-5xl">Page Not Found</h1>
        <p className="mt-4 text-zinc-300">The page you requested does not exist.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-primary"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
