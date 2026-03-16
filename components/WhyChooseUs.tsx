import { BadgePercent, FileCheck2, Gem, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

const points = [
  {
    icon: BadgePercent,
    title: "Best Rates Guaranteed",
    description: "Market se better deals and strong negotiation.",
    border: "border-t-[#30B29A]",
  },
  {
    icon: FileCheck2,
    title: "Zero Paperwork Tension",
    description: "Our legal team handles all documentation.",
    border: "border-t-[#4C6FFF]",
  },
  {
    icon: Gem,
    title: "Exclusive Properties",
    description: "Access listings not available publicly.",
    border: "border-t-[#E08D32]",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Local Experts",
    description: "12+ years of real estate experience.",
    border: "border-t-[#D4AF37]",
  },
] as const;

export default function WhyChooseUs() {
  return (
    <section className="section-padding pt-16">
      <Reveal>
        <SectionTitle
          eyebrow="Why Choose Us"
          title="Why Choose HBP Properties"
          subtitle="We blend local expertise, transparent advisory, and full-service support to help you close with confidence."
          center
        />
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {points.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.07}>
            <article
              className={`rounded-2xl border border-slate-200 ${item.border} border-t-4 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.15)] transition-all`}
            >
              <item.icon className="text-dark mb-4" size={30} />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
