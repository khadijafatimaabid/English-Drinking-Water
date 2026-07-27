import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Droplet, Shield, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Product | 19 Litre Bottled Drinking Water in Lahore",
  description:
    "Explore English Drinking Water’s premium 19 litre bottled water, designed for homes, offices, and businesses across Lahore.",
  alternates: {
    canonical: "https://englishdrinkingwater.com/our-product",
  },
  openGraph: {
    title: "Our Product | 19 Litre Bottled Drinking Water in Lahore",
    description:
      "Premium 19 litre bottled drinking water with hygienic sealing and reliable delivery in Lahore.",
    url: "https://englishdrinkingwater.com/our-product",
    type: "website",
  },
};

const productBenefits = [
  {
    title: "Pure & refreshing",
    text: "Clean, mineral-balanced water suited for daily hydration at home or work.",
  },
  {
    title: "Convenient 19 litre size",
    text: "A practical bottle size for kitchens, offices, and shared spaces.",
  },
  {
    title: "Reliable Lahore delivery",
    text: "Fast service with easy ordering and repeat delivery support.",
  },
] as const;

export default function OurProductPage() {
  return (
    <main className="bg-sky-50 text-slate-800">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Our Product
          </p>
          <h1 className="font-serif text-4xl font-bold text-blue-900 sm:text-5xl">
            Premium 19 litre bottled water for everyday refreshment.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            English Drinking Water offers hygienically sealed 19 litre bottles that are ideal for homes, offices, and commercial spaces needing dependable water supply.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {productBenefits.map((item) => (
            <div key={item.title} className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-blue-900">{item.title}</h2>
              <p className="mt-3 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 rounded-3xl border border-blue-100 bg-white p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">How it works</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-blue-900">
              A simple ordering experience from request to delivery
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Place an order, confirm your location, and receive your bottle quickly through our dependable Lahore service.
            </p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                <span>Choose your preferred delivery option</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                <span>Receive a fresh, sealed bottle on schedule</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                <span>Repeat effortlessly for office or home needs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Order Now <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-800 transition hover:border-blue-300"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </main>
  );
}
