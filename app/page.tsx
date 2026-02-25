import { HomeHero } from "@/components/sections/home-hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Sparkles, Star, UtensilsCrossed, Wine } from "lucide-react";

const signatureDishes = [
  {
    name: "Haveli Royal Platter",
    description: "Chef-curated signature tasting with premium seasonal picks."
  },
  {
    name: "Smoked Paneer Tikka",
    description: "Charred spices, saffron yogurt, and rooftop grilled aroma."
  },
  {
    name: "Lemongrass Fusion Soup",
    description: "Comfort-forward broth with elevated Indo-Asian notes."
  }
];

const reasons = [
  {
    title: "Premium Ambience",
    detail: "Skyline seating, cinematic lighting, and curated music.",
    icon: Sparkles
  },
  {
    title: "Crafted Menu",
    detail: "Fresh ingredients, balanced flavors, and chef-led innovation.",
    icon: UtensilsCrossed
  },
  {
    title: "Celebration Ready",
    detail: "Designed for birthdays, anniversaries, and private dinners.",
    icon: Wine
  }
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <SectionWrapper subtitle="Signature Dishes" title="A Menu Designed to Impress">
        <div className="grid gap-6 md:grid-cols-3">
          {signatureDishes.map((dish) => (
            <Card key={dish.name}>
              <p className="text-sm uppercase tracking-[0.18em] text-gold">Chef Special</p>
              <h3 className="mt-3 font-heading text-2xl">{dish.name}</h3>
              <p className="mt-3 text-sm text-zinc-600">{dish.description}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        subtitle="Rooftop Experience"
        title="Luxury Dining with a Panoramic Skyline"
        className="bg-zinc-50"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-dark-bg text-white">
            <h3 className="font-heading text-2xl text-gold">Sunset Seating</h3>
            <p className="mt-3 text-sm text-zinc-300">
              Golden-hour tables, live kitchen theatrics, and handcrafted beverages.
            </p>
          </Card>
          <Card className="bg-dark-bg text-white">
            <h3 className="font-heading text-2xl text-gold">Night Lounge Mood</h3>
            <p className="mt-3 text-sm text-zinc-300">
              Ambient lighting and skyline views for date nights and premium gatherings.
            </p>
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper subtitle="Why Choose Us" title="Hospitality That Feels Personal">
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((item) => (
            <Card key={item.title}>
              <item.icon className="h-8 w-8 text-gold" />
              <h3 className="mt-4 font-heading text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm text-zinc-600">{item.detail}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-dark-bg text-white">
        <div className="mx-auto max-w-4xl text-center">
          <Star className="mx-auto h-9 w-9 text-gold" />
          <h2 className="mt-5 font-heading text-3xl sm:text-4xl">
            Reserve Your Premium Rooftop Evening
          </h2>
          <p className="mt-4 text-zinc-300">
            Instant reservation flow with admin-confirmed slots and event support.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/reservation" size="lg">
              Book Now
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Contact Team
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
