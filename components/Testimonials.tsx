"use client";

import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {TESTIMONIALS.map((item) => (
        <article
          key={item.name}
          className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200"
        >
          <p className="text-yellow-500 text-2xl">“</p>
          <p className="text-slate-600 mt-2 leading-relaxed">{item.quote}</p>
          <div className="mt-5">
            <h4 className="font-semibold text-dark">{item.name}</h4>
            <p className="text-sm text-slate-500">{item.role}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
