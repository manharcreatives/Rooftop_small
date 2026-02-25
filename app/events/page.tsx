import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events"
};

const eventTypes = ["Birthday Celebrations", "Anniversary Dinners", "Corporate Gatherings"];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Private Dining and Premium Event Hosting"
        description="Host curated occasions with custom décor, menu planning, and rooftop hospitality."
      />
      <SectionWrapper title="Event Capabilities" subtitle="Built for Moments">
        <div className="grid gap-6 md:grid-cols-3">
          {eventTypes.map((item) => (
            <Card key={item}>
              <h3 className="font-heading text-2xl">{item}</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Dedicated support and tailored arrangements based on guest profile.
              </p>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
