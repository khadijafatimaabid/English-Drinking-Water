import Link from "next/link";
import { ArrowRight, Droplet, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ourproduct", label: "Our Product" },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-blue-100 bg-blue-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sky-300">
              <Droplet className="h-5 w-5" fill="currentColor" />
            </div>
            <div>
              <p className="text-lg font-semibold">English Drinking Water</p>
              <p className="text-sm text-blue-100/80">Fresh 19L water delivered in Lahore</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-blue-100/80">
            We provide hygienically sealed bottled water for homes, offices, and businesses with dependable Lahore-wide delivery.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-blue-100/80">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
            Contact Details
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-blue-100/80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> <a href="tel:03014979786" className="hover:text-white">0301 4979786</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> <a href="mailto:englishdrinkingwater@gmail.com" className="hover:text-white">englishdrinkingwater@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Lahore, Pakistan
            </li>
          </ul>
          <a
            href="https://wa.me/923014979786?text=Assalam-o-Alaikum%2C%20I%20would%20like%20to%20order%2019L%20English%20Drinking%20Water."
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
          >
            Order on WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-blue-100/70 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} English Drinking Water. All rights reserved.
      </div>
    </footer>
  );
}
