import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservation"
};

export default function ReservationPage() {
  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Reserve Your Table in Seconds"
        description="Reservation form submission and Supabase persistence will be connected in the next implementation step."
      />
      <SectionWrapper title="Booking Workflow" subtitle="Prepared">
        <Card className="max-w-2xl">
          <ol className="space-y-3 text-sm text-zinc-700">
            <li>1. Guest submits booking request with date, time, and guest count.</li>
            <li>2. Reservation data is stored in Supabase with pending status.</li>
            <li>3. Admin reviews and confirms booking from dashboard.</li>
            <li>4. Live status updates are available for operational visibility.</li>
          </ol>
        </Card>
      </SectionWrapper>
    </>
  );
}
