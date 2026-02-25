import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Container } from "./container";

type SectionWrapperProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

export function SectionWrapper({
  id,
  title,
  subtitle,
  className,
  children
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <Container>
        {(title || subtitle) && (
          <header className="mb-10 max-w-2xl">
            {subtitle && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="font-heading text-3xl text-primary sm:text-4xl">{title}</h2>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
