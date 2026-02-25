import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin"
};

const modules = [
  "Add / edit menu categories and menu items",
  "Upload and manage gallery images",
  "Review incoming reservations and set status",
  "Monitor customer review submissions"
];

export default function AdminPage() {
  return (
    <>
      <PageHero
        eyebrow="Admin Dashboard"
        title="Operations Control Center"
        description="Protected route shell prepared for Supabase Auth + RLS-controlled actions."
      />
      <SectionWrapper title="Planned Modules" subtitle="Dashboard Scope">
        <div className="grid gap-4 md:grid-cols-2">
          {modules.map((module) => (
            <Card key={module}>
              <p className="text-sm text-zinc-700">{module}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
