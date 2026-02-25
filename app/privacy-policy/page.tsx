import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy"
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="How we collect, use, and protect your reservation and communication details."
      />
      <SectionWrapper>
        <Card className="max-w-4xl space-y-5">
          <p className="text-sm text-zinc-700">
            We collect only necessary information for reservations and support, including name,
            contact details, and booking preferences.
          </p>
          <p className="text-sm text-zinc-700">
            Guest data is stored securely in Supabase and accessed only by authorized admin users.
          </p>
          <p className="text-sm text-zinc-700">
            For account or data requests, contact us at hello@rooftophaveli.com.
          </p>
        </Card>
      </SectionWrapper>
    </>
  );
}
