"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BedDouble, MapPin, Search } from "lucide-react";
import { PROPERTY_LISTINGS } from "@/lib/constants";

function getTagStyle(type: string) {
  if (type.toLowerCase() === "buy") return "bg-emerald-500";
  if (type.toLowerCase() === "rent") return "bg-blue-500";
  if (type.toLowerCase() === "sell") return "bg-amber-500";
  return "bg-purple-500";
}

export default function PropertySearchAndList() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    if (!normalized) return PROPERTY_LISTINGS;
    return PROPERTY_LISTINGS.filter((item) =>
      [item.title, item.location, item.type].join(" ").toLowerCase().includes(normalized)
    );
  }, [query]);

  return (
    <div>
      <div className="relative max-w-2xl mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          placeholder="Search by location, property type, or keyword"
          className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/40"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((property) => (
          <motion.article
            key={property.id}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-[0_10px_32px_rgba(15,23,42,0.09)]"
          >
            <div className="relative h-48">
              <img src={property.image} alt={property.title} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <span
                className={`absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider text-white px-2.5 py-1 rounded-full ${getTagStyle(property.type)}`}
              >
                {property.type}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mt-1 leading-snug">{property.title}</h3>
              <p className="text-sm text-slate-600 mt-2 inline-flex items-center gap-1.5">
                <MapPin size={15} className="text-gold-700" />
                {property.location}
              </p>
              <p className="text-sm text-slate-600 mt-2 inline-flex items-center gap-1.5">
                <BedDouble size={15} className="text-gold-700" />
                {property.bedrooms > 0 ? `${property.bedrooms} Bedrooms` : "Plot / Land"}
              </p>
              <p className="text-gold-700 text-xl font-bold mt-4">{property.price}</p>
              <button className="mt-4 w-full rounded-xl border border-slate-200 py-2.5 font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                View Details
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
