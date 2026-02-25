import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { ScrollProgress } from "@/components/sections/scroll-progress";
import "./globals.css";
import "@/styles/animations.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rooftophaveli.com"),
  title: {
    default: "The Rooftop Haveli Restaurant & Cafe",
    template: "%s | The Rooftop Haveli"
  },
  description:
    "A premium rooftop restaurant in Mehsana offering elevated dining, curated events, and seamless reservations.",
  openGraph: {
    title: "The Rooftop Haveli Restaurant & Cafe",
    description:
      "A premium rooftop restaurant in Mehsana offering elevated dining, curated events, and seamless reservations.",
    url: "https://rooftophaveli.com",
    siteName: "The Rooftop Haveli",
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "The Rooftop Haveli Restaurant & Cafe",
  servesCuisine: ["Indian", "Fusion", "Cafe"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mehsana",
    addressRegion: "Gujarat",
    addressCountry: "IN"
  },
  telephone: "+91-99999-99999"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-body antialiased`}>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Script id="local-business-schema" type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </Script>
      </body>
    </html>
  );
}
