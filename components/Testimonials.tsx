"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {TESTIMONIALS.map((item) => (
        <motion.article
          key={item.name}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="rounded-2xl p-6 border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
        >
          <Quote className="text-gold mb-4" size={24} />
          <p className="text-slate-700 italic leading-relaxed">"{item.quote}"</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-semibold">
              {item.name
                .split(" ")
                .slice(0, 2)
                .map((segment) => segment[0])
                .join("")}
            </div>
            <div>
              <h4 className="font-semibold text-dark">{item.name}</h4>
              <p className="text-sm text-slate-500">{item.role}</p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
