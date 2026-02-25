"use client";

import { useScrollBlur } from "@/hooks/use-scroll-blur";
import { cn } from "@/lib/utils";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Container } from "../ui/container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" }
] as const satisfies ReadonlyArray<{ href: Route; label: string }>;

export function Navbar() {
  const pathname = usePathname();
  const isBlurred = useScrollBlur(16);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isBlurred
          ? "border-b border-white/20 bg-primary/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="font-heading text-xl font-semibold tracking-wide text-white">
          The Rooftop Haveli
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm text-white/90 transition hover:text-gold",
                  isActive && "text-gold"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Button href="/reservation" size="sm">
          Reserve Now
        </Button>
      </Container>
    </header>
  );
}
