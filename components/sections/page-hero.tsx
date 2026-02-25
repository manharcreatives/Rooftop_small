import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { Route } from "next";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: Route;
};

export function PageHero({ eyebrow, title, description, ctaLabel, ctaHref }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary pb-20 pt-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.2),_transparent_60%)]" />
      <Container className="relative">
        {eyebrow && (
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl font-heading text-4xl sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base text-zinc-200 sm:text-lg">{description}</p>
        {ctaHref && ctaLabel && (
          <div className="mt-8">
            <Button href={ctaHref}>{ctaLabel}</Button>
          </div>
        )}
      </Container>
    </section>
  );
}
