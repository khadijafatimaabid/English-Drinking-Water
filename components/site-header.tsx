"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Droplet, Menu, Phone, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ourproduct", label: "Our Product" },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="English Drinking Water home">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg shadow-blue-700/20">
            <Droplet className="h-5 w-5" fill="currentColor" />
          </div>
          <div>
            <p className="text-base font-semibold tracking-tight text-blue-900">
              English Drinking Water
            </p>
            <p className="text-xs text-slate-500">Premium 19L bottled water</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  active ? "text-blue-700" : "text-slate-600 hover:text-blue-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <a
            href="tel:03014979786"
            className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            <Phone className="h-4 w-4" /> Order Now
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-blue-200 p-2 text-blue-700 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-blue-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-3 py-2 text-sm font-medium ${
                    active ? "bg-blue-50 text-blue-700" : "text-slate-600"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:03014979786"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> Call for order
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
