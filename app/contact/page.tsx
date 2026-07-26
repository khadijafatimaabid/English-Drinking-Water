import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact English Drinking Water | Order 19 Litre Water in Lahore",
  description:
    "Contact English Drinking Water for bottled water orders, delivery support, and quick WhatsApp assistance in Lahore.",
  alternates: {
    canonical: "https://englishdrinkingwater.com/contact",
  },
  openGraph: {
    title: "Contact English Drinking Water | Order 19 Litre Water in Lahore",
    description:
      "Get in touch for fast bottled water delivery and easy ordering in Lahore.",
    url: "https://englishdrinkingwater.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-blue-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Contact Us
          </p>
          <h1 className="font-serif text-4xl font-bold sm:text-5xl">
            Order fresh 19 litre water for your home or business.
          </h1>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            Reach out to English Drinking Water for bottle orders, delivery questions, or support across Lahore.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold">Call or WhatsApp</h2>
            <p className="mt-4 text-blue-100">0301 4979786</p>
            <p className="mt-2 text-blue-100">0300 4750005</p>
            <a
              href="https://wa.me/923014979786?text=Assalam-o-Alaikum%2C%20I%20would%20like%20to%20order%2019L%20English%20Drinking%20Water."
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold">Email & service area</h2>
            <p className="mt-4 flex items-center gap-2 text-blue-100">
              <Mail className="h-4 w-4" /> englishdrinkingwater@gmail.com
            </p>
            <p className="mt-2 flex items-center gap-2 text-blue-100">
              <MapPin className="h-4 w-4" /> Serving Lahore, Pakistan
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Back to Home <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <Phone className="h-6 w-6 text-sky-300" />
            <h3 className="mt-4 text-lg font-semibold">Fast response</h3>
            <p className="mt-2 text-sm leading-7 text-blue-100/80">Call us directly for quick order support.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <MessageCircle className="h-6 w-6 text-sky-300" />
            <h3 className="mt-4 text-lg font-semibold">WhatsApp convenience</h3>
            <p className="mt-2 text-sm leading-7 text-blue-100/80">Message for repeat orders or delivery questions.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <MapPin className="h-6 w-6 text-sky-300" />
            <h3 className="mt-4 text-lg font-semibold">Lahore coverage</h3>
            <p className="mt-2 text-sm leading-7 text-blue-100/80">We serve residential and commercial customers throughout the city.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
