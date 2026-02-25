import { PageHero } from "@/components/sections/page-hero";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery"
};

const galleryImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A Visual Journey of Rooftop Evenings"
        description="Masonry and lightbox integration will be powered from Supabase storage in the next build step."
      />
      <SectionWrapper title="Moments at Haveli" subtitle="Preview">
        <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
          {galleryImages.map((src) => (
            <div key={src} className="relative overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt="Rooftop gallery preview"
                width={900}
                height={1100}
                className="h-auto w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
