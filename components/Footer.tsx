import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-2">{COMPANY.name}</h3>
          <p className="text-gray-300 mb-4">{COMPANY.tagline}</p>
          <p className="text-sm text-gold">RERA: {COMPANY.rera}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-gray-300 whitespace-pre-line">{COMPANY.addressLines.join("\n")}</p>
          <p className="text-gray-300 mt-4">{COMPANY.email}</p>
          <div className="text-gray-300 mt-3 space-y-1">
            {COMPANY.contacts.map((person) => (
              <p key={person.phone}>
                {person.name}: {person.phone}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} HBP Properties. All rights reserved.
      </div>
    </footer>
  );
}
