import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach the Rooftop Haveli Team"
        description="Connect for reservations, private events, partnerships, or guest assistance."
      />
      <SectionWrapper title="Visit & Connect" subtitle="Contact Information">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="font-heading text-2xl">Restaurant Details</h3>
            <p className="mt-3 text-sm text-zinc-600">Mehsana, Gujarat, India</p>
            <p className="mt-2 text-sm text-zinc-600">+91 99999 99999</p>
            <p className="mt-2 text-sm text-zinc-600">hello@rooftophaveli.com</p>
          </Card>
          <Card>
            <h3 className="font-heading text-2xl">Google Maps</h3>
            <iframe
              title="Rooftop Haveli location map"
              className="mt-4 h-64 w-full rounded-xl border-0"
              src="https://www.google.com/maps?q=mehsana&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}
