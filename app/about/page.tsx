import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A Rooftop Destination Built for Memorable Nights"
        description="The Rooftop Haveli blends timeless hospitality with modern culinary craft in the heart of Mehsana."
      />
      <SectionWrapper title="Our Promise" subtitle="What We Stand For">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="font-heading text-2xl">Warm Hospitality</h3>
            <p className="mt-3 text-sm text-zinc-600">
              Every table is hosted with care, precision, and attention to detail.
            </p>
          </Card>
          <Card>
            <h3 className="font-heading text-2xl">Chef-Led Cuisine</h3>
            <p className="mt-3 text-sm text-zinc-600">
              Seasonal ingredients and premium preparations define our dining experience.
            </p>
          </Card>
          <Card>
            <h3 className="font-heading text-2xl">Celebration Focus</h3>
            <p className="mt-3 text-sm text-zinc-600">
              Built for milestone events, intimate evenings, and corporate gatherings.
            </p>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}
