import type { Metadata } from "next";
import LandingPage from "@/components/landing-page";

export const metadata: Metadata = {
  title: "English Drinking Water | 19 Litre Bottled Water in Lahore",
  description:
    "Order premium 19 litre bottled drinking water in Lahore with fast delivery, hygienic sealing, and easy WhatsApp ordering.",
  keywords: [
    "19 litre water Lahore",
    "bottled drinking water Lahore",
    "English Drinking Water",
    "pure drinking water",
    "water delivery Lahore",
  ],
  alternates: {
    canonical: "https://englishdrinkingwater.com/",
  },
  openGraph: {
    title: "English Drinking Water | 19 Litre Bottled Water in Lahore",
    description:
      "Premium 19 litre drinking water delivered across Lahore with fast service and hygienic sealing.",
    type: "website",
    locale: "en_US",
    url: "https://englishdrinkingwater.com/",
    siteName: "English Drinking Water",
    images: [
      {
        url: "/water-bottle-removebg-preview (1).png",
        width: 1200,
        height: 1600,
        alt: "English Drinking Water 19 litre bottle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "English Drinking Water | 19 Litre Bottled Water in Lahore",
    description:
      "Premium 19 litre drinking water delivered across Lahore with fast service and hygienic sealing.",
    images: ["/water-bottle-removebg-preview (1).png"],
  },
  other: {
    "article:publisher": "English Drinking Water",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "English Drinking Water",
  "description": "Premium 19 litre bottled drinking water delivered across Lahore with fast service and hygienic sealing.",
  "url": "https://englishdrinkingwater.com/",
  "telephone": "+923014979786",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lahore",
    "addressCountry": "PK",
  },
  "areaServed": "Lahore",
  "serviceArea": {
    "@type": "Place",
    "name": "Lahore, Pakistan",
  },
  "openingHoursSpecification": [],
  "sameAs": ["https://wa.me/923014979786"],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <LandingPage />
    </>
  );
}
