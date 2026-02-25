import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu"
};

const sampleMenu = [
  { name: "Royal Paneer Sizzler", category: "Main Course", price: "399" },
  { name: "Haveli Special Mocktail", category: "Beverages", price: "229" },
  { name: "Saffron Delight Cheesecake", category: "Dessert", price: "259" }
];

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Menu"
        title="Curated Dishes with Premium Ingredients"
        description="This static starter is ready to be switched to dynamic Supabase-powered categories and items."
      />
      <SectionWrapper title="Popular Menu" subtitle="Preview">
        <div className="grid gap-6 md:grid-cols-3">
          {sampleMenu.map((item) => (
            <Card key={item.name}>
              <p className="text-xs uppercase tracking-[0.18em] text-gold">{item.category}</p>
              <h3 className="mt-3 font-heading text-2xl">{item.name}</h3>
              <p className="mt-3 text-sm text-zinc-600">INR {item.price}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
