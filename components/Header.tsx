"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Menu, Phone, Twitter, X } from "lucide-react";
import { useState } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-[0_8px_24px_rgba(15,23,42,0.2)]">
      <div className="bg-dark text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-11 flex items-center justify-between gap-2 text-xs sm:text-sm">
          <div className="flex items-center gap-1 sm:gap-2">
            <Link href="https://facebook.com" target="_blank" rel="noreferrer" className="p-1.5 rounded-md hover:bg-white/10" aria-label="Facebook">
              <Facebook size={14} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noreferrer" className="p-1.5 rounded-md hover:bg-white/10" aria-label="Instagram">
              <Instagram size={14} />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noreferrer" className="p-1.5 rounded-md hover:bg-white/10" aria-label="Twitter">
              <Twitter size={14} />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`tel:${COMPANY.contacts[0].phone.replace(/-/g, "")}`}
              className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1.5 hover:bg-white/20 transition-colors"
            >
              <Phone size={12} /> Call
            </Link>
            <Link
              href={`https://wa.me/${COMPANY.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-[#25D366] text-white px-2.5 py-1.5 hover:opacity-90 transition-opacity"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>

      <div className="backdrop-blur-lg bg-dark/90 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/assets/hbplogo.jpeg"
            alt="HBP Properties"
            width={48}
            height={48}
            className="rounded-full object-cover border-2 border-gold/60 ring-4 ring-white/15 shadow-lg"
          />
          <div className="leading-tight">
            <span className="text-white font-semibold tracking-wide block">HBP Properties</span>
            <span className="text-[11px] text-gold/90 uppercase tracking-[0.12em]">Tri-City Real Estate</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold-300",
                pathname === link.href ? "text-gold" : "text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm">
            List Your Property
          </Link>
        </nav>

        <button
          className="md:hidden text-white p-2 rounded-lg border border-white/20"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      </div>

      {open ? (
        <div className="md:hidden px-4 pb-5 border-t border-white/10 bg-dark/95">
          <div className="pt-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-base font-medium py-2.5 px-1",
                  pathname === link.href ? "text-gold" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary text-center mt-2 text-base py-3.5">
              List Your Property
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
