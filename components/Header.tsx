"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/assets/hbplogo.jpeg"
            alt="HBP Properties"
            width={48}
            height={48}
            className="rounded-full object-cover border border-white/20 shadow-md w-12 h-12"
          />
          <span className="text-white font-semibold text-xl tracking-wide">HBP Properties</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-base text-gray-200">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "hover:text-white transition",
                pathname === link.href ? "text-white" : "text-gray-300"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 text-gray-200">
          <Link
            href="https://www.instagram.com/hbp.properties?igsh=MWE4MmwwbWl5OG94eQ=="
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 text-2xl transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </Link>
          <Link
            href={`https://wa.me/${COMPANY.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 text-2xl transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </Link>
          <Link
            href="https://maps.google.com/?q=HBP%20Property%2C%20near%20Govt%20Girls%20School%2C%20Sector%2077%2C%20Sohana%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308"
            target="_blank"
            rel="noreferrer"
            className="locate-glow inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-base transition hover:bg-amber-200"
          >
            <FaMapMarkerAlt />
            Locate Us
          </Link>
        </div>

        <button
          className="md:hidden justify-self-end text-white p-2 rounded-lg border border-white/20"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden px-6 pb-5 border-t border-white/10 bg-[#0f172a]/95">
          <div className="pt-4 flex items-center gap-4 text-gray-200">
            <Link
              href="https://www.instagram.com/hbp.properties?igsh=MWE4MmwwbWl5OG94eQ=="
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition text-xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              href={`https://wa.me/${COMPANY.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition text-xl"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="https://maps.google.com/?q=HBP%20Property%2C%20near%20Govt%20Girls%20School%2C%20Sector%2077%2C%20Sohana%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308"
              target="_blank"
              rel="noreferrer"
              className="locate-glow inline-flex items-center gap-2 px-3 py-2.5 rounded-full text-sm transition hover:bg-amber-200"
            >
              <FaMapMarkerAlt />
              Locate Us
            </Link>
          </div>
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
          </div>
        </div>
      ) : null}
    </header>
  );
}
