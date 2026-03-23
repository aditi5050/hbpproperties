import Image from "next/image";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { COMPANY } from "@/lib/constants";

export default function AboutPage() {
  return (
    <section className="section-padding">
      <Container className="px-0">
        <Reveal>
          <SectionTitle
            eyebrow="About Us"
            title="Built on Trust, Driven by Results"
            subtitle="HBP Properties helps clients navigate Tri-city real estate with confidence, transparency, and local market expertise."
          />
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl border border-gold/20">
              <Image src="/assets/hbpowner.jpeg" alt="Owner of HBP Properties" fill className="object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 pt-2">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To simplify real estate decisions through trustworthy advice, verified opportunities, and client-centric service across Mohali, Chandigarh, and Panchkula.
                </p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-3">Trust & Credibility</h3>
                <p className="text-gray-700 leading-relaxed">
                  We prioritize legal clarity, transparent communication, and long-term relationships. Our guidance is backed by practical market knowledge and ethical practices.
                </p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-3">RERA Registered</h3>
                <p className="text-gray-700">RERA Number: {COMPANY.rera}</p>
                <p className="text-gray-700 mt-2">Tri-city expertise with deep roots in local neighborhoods and growth corridors.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
