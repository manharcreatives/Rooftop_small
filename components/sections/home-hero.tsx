"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-dark-bg text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1800&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <Container className="relative pt-24">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 text-sm uppercase tracking-[0.24em] text-gold"
        >
          Rooftop Dining Experience
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-4xl font-heading text-4xl leading-tight sm:text-5xl lg:text-7xl"
        >
          Premium Evenings at The Rooftop Haveli Restaurant & Cafe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base text-zinc-200 sm:text-lg"
        >
          Elevated cuisine, skyline ambiance, and curated hospitality for memorable nights.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="/reservation" size="lg">
            Book a Table
          </Button>
          <Button href="/menu" size="lg" variant="outline">
            Explore Menu
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
