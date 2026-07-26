"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Droplet, Mail, MapPin, MessageCircle, Phone, Shield, Truck } from "lucide-react";

const whatsappUrl =
  "https://wa.me/923014979786?text=Assalam-o-Alaikum%2C%20I%20would%20like%20to%20order%2019L%20English%20Drinking%20Water.";

const features = [
  {
    icon: Droplet,
    title: "100% Pure",
    desc: "Multi-stage filtration and hygienic handling for crystal clear, mineral-balanced water.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Reliable same-day or scheduled delivery across homes, offices, and businesses in Lahore.",
  },
  {
    icon: Shield,
    title: "Sealed & Safe",
    desc: "Hygienically packed 19L bottles delivered with care and consistent quality.",
  },
] as const;

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden bg-linear-to-b from-sky-50 to-blue-100 text-slate-800">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-600 to-sky-400 opacity-95" />
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-blue-500/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24 lg:px-8">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] backdrop-blur">
              <Droplet className="h-3.5 w-3.5" /> Pure • Clear • Refreshing
            </span>
            <h1 className="mt-5 font-serif text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Premium <span className="text-sky-200">19 Litre</span> Drinking Water
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/85">
              Fresh, hygienic bottled water delivered to homes, offices, and businesses across Lahore with dependable service.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white shadow-lg shadow-green-500/40 transition hover:scale-105 hover:bg-green-600"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Order
              </a>
              <a
                href="tel:03014979786"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/25"
              >
                <Phone className="h-5 w-5" /> 0301 4979786
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4" /> Lahore-wide delivery
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" /> Hygienically sealed
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full bg-white/20 blur-2xl md:h-96 md:w-96" />
            </div>
            <Image
              src="/water-bottle-removebg-preview (1).png"
              alt="English Drinking Water 19 litre bottle"
              width={1024}
              height={1536}
              priority
              className="relative h-105 w-auto drop-shadow-2xl md:h-140"
              style={{ animation: "float 5s ease-in-out infinite" }}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-blue-800 md:text-5xl">
            A trusted bottled water partner for daily hydration
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We combine purification, hygiene, and friendly service to make every delivery easy and dependable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-700 to-sky-400 text-white shadow-lg shadow-blue-500/30">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-blue-800">{feature.title}</h3>
                <p className="mt-2 text-slate-600">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-blue-100 bg-white p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Service Coverage</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-blue-900">
              Delivered with efficiency to homes, offices, and growing businesses
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Whether you need regular office refill support or a dependable home water solution, English Drinking Water makes ordering simple and fast.
            </p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                <span>Quick WhatsApp ordering for repeat customers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                <span>Flexible delivery plans for households and commercial spaces</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                <span>Friendly support for pricing and service coordination</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-700 to-sky-500" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center text-white lg:px-8">
          <h2 className="font-serif text-4xl font-bold md:text-5xl">
            Order Your 19L Bottle Today
          </h2>
          <p className="mt-3 text-white/85">
            Reach out through any of these channels and we will help you place your order quickly.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <a
              href="tel:03014979786"
              className="rounded-2xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/20"
            >
              <Phone className="mx-auto h-7 w-7" />
              <div className="mt-3 text-sm text-white/70">Call Us</div>
              <div className="mt-1 font-semibold">0301 4979786</div>
              <div className="font-semibold">0300 4750005</div>
            </a>
            <a
              href="mailto:englishdrinkingwater@gmail.com"
              className="rounded-2xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/20"
            >
              <Mail className="mx-auto h-7 w-7" />
              <div className="mt-3 text-sm text-white/70">Email</div>
              <div className="mt-1 break-all font-semibold">englishdrinkingwater@gmail.com</div>
            </a>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <MapPin className="mx-auto h-7 w-7" />
              <div className="mt-3 text-sm text-white/70">Service Area</div>
              <div className="mt-1 font-semibold">Lahore, Pakistan</div>
              <div className="text-sm text-white/80">Delivery Available</div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 text-lg font-semibold shadow-lg shadow-green-500/40 transition hover:scale-105 hover:bg-green-600"
            >
              <MessageCircle className="h-6 w-6" /> Chat on WhatsApp
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/20"
            >
              Learn More <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/50 transition hover:scale-110 hover:bg-green-600"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
        <svg viewBox="0 0 24 24" className="relative h-8 w-8" fill="currentColor" aria-hidden="true">
          <path d="M19.11 4.91A10.02 10.02 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.27-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.84-7.01ZM12.04 20.15h-.01a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.13.82.83-3.05-.2-.31a8.22 8.22 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.22 8.23Zm4.51-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.22-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.83-.2-.48-.4-.42-.55-.42-.14-.01-.31-.01-.47-.01-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.74 2.66 4.23 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.17.21-.58.21-1.07.14-1.17-.06-.11-.23-.17-.48-.29Z" />
        </svg>
      </a>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
}
