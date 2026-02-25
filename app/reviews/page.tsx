import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews"
};

const sampleReviews = [
  {
    name: "Nikita Shah",
    rating: 5,
    review: "The rooftop vibe and food quality were exceptional. Great service throughout."
  },
  {
    name: "Rajan Patel",
    rating: 5,
    review: "Perfect for family dinners and celebrations. Ambience feels truly premium."
  },
  {
    name: "Mitesh Soni",
    rating: 4,
    review: "Loved the sunset seating and special dishes. Will visit again soon."
  }
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Voices"
        title="Reviews from Our Guests"
        description="This section is prepared for live Supabase-driven reviews and moderation."
      />
      <SectionWrapper title="Guest Experiences" subtitle="Testimonials">
        <div className="grid gap-6 md:grid-cols-3">
          {sampleReviews.map((item) => (
            <Card key={item.name}>
              <p className="text-sm font-semibold text-gold">{"★".repeat(item.rating)}</p>
              <p className="mt-3 text-sm text-zinc-600">{item.review}</p>
              <p className="mt-4 text-sm font-medium text-primary">{item.name}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
