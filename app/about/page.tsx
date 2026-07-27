import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, Droplet, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About English Drinking Water | Premium 19 Litre Water in Lahore",
  description:
    "Learn about English Drinking Water, our commitment to purity, and our reliable 19 litre bottled water delivery service across Lahore.",
  alternates: {
    canonical: "https://englishdrinkingwater.com/about",
  },
  openGraph: {
    title: "About English Drinking Water | Premium 19 Litre Water in Lahore",
    description:
      "Discover why English Drinking Water is a trusted choice for homes, offices, and businesses in Lahore.",
    url: "https://englishdrinkingwater.com/about",
    type: "website",
  },
};

const values = [
  {
    title: "Hygienic handling",
    text: "Every bottle is packed and delivered with careful hygiene standards from our team.",
  },
  {
    title: "Dependable delivery",
    text: "We support regular and one-time orders for homes, offices, and commercial premises.",
  },
  {
    title: "Customer-first service",
    text: "Friendly support and clear communication make every order simple and straightforward.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="bg-sky-50 text-slate-800">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
              About Us
            </p>
            <h1 className="font-serif text-4xl font-bold text-blue-900 sm:text-5xl">
              Delivering fresh, purified 19 litre water to Lahore with care.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              English Drinking Water is committed to providing families, offices, and businesses with premium bottled water that is clean, safe, and conveniently delivered.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We focus on hygiene, consistency, and dependable service so you can receive fresh water whenever you need it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/our-product"
                className="rounded-full border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-800 transition hover:border-blue-300"
              >
                Explore Products
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-blue-900">Why customers trust us</h2>
                <p className="text-sm text-slate-500">Reliable quality and easy ordering</p>
              </div>
            </div>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                <span>Hygienically sealed 19 litre bottles</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                <span>Fast delivery across Lahore</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                <span>Friendly phone and WhatsApp support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Quality Assurance</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-blue-900">
                Water quality is checked by PCSIR regularly
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Our water quality standards are taken seriously. The quality of the water is checked by PCSIR regularly to support safe, dependable drinking water for customers across Lahore.
              </p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-700 shadow-sm">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Regular testing and monitoring</h3>
                  <p className="text-sm text-slate-600">A transparent commitment to safe hydration</p>
                </div>
              </div>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <Droplet className="mt-0.5 h-5 w-5 text-blue-700" />
                  <span>Consistent quality checks for customer confidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <Droplet className="mt-0.5 h-5 w-5 text-blue-700" />
                  <span>Hygienic bottle handling and delivery practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-900">{value.title}</h3>
              <p className="mt-3 text-slate-600">{value.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
