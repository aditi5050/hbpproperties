import Image from "next/image";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import AnimatedStats from "@/components/AnimatedStats";
import Testimonials from "@/components/Testimonials";
import InquiryForm from "@/components/InquiryForm";
import PropertySearchAndList from "@/components/PropertySearchAndList";
import HeroContent from "@/components/HeroContent";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactInfo from "@/components/ContactInfo";
import { COMPANY, SERVICE_CARDS, STATS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(15,23,42,0.96)_0%,rgba(15,23,42,0.84)_42%,rgba(30,41,59,0.6)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_22%,rgba(212,175,55,0.2),transparent_33%)]" />
        <Container className="relative z-10 py-20">
          <HeroContent />
        </Container>
      </section>

      <WhyChooseUs />

      <section className="section-padding">
        <Reveal>
          <SectionTitle
            eyebrow="Our Services"
            title="Complete Real Estate Solutions"
            subtitle="From finding your first home to closing high-value investments, we deliver a smooth and transparent process."
            center
          />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {SERVICE_CARDS.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <ServiceCard title={card.title} description={card.description} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div>
              <SectionTitle
                eyebrow="About HBP"
                title="Trusted Advisors for Tri-City Real Estate"
                subtitle="HBP Properties is a trusted real estate firm specializing in Tri-City properties including Mohali, Chandigarh, and Panchkula."
              />
              <p className="text-gray-600 mt-4 leading-relaxed">
                We combine on-ground market intelligence, verified listings, and client-first guidance to help families and investors make confident decisions.
              </p>
              <p className="mt-5 inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold-800">
                RERA: {COMPANY.rera}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-gold/20">
              <Image src="/assets/hbpowner.jpeg" alt="HBP Owner" fill className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pt-0">
        <Reveal>
          <SectionTitle eyebrow="Track Record" title="Numbers That Build Trust" center />
        </Reveal>
        <div className="mt-10">
          <AnimatedStats stats={[...STATS]} />
        </div>
      </section>

      <section className="section-padding pt-0" id="properties">
        <Reveal>
          <SectionTitle
            eyebrow="Featured"
            title="Explore Properties"
            subtitle="Browse curated opportunities and quickly search by location or objective."
          />
        </Reveal>
        <div className="mt-8">
          <PropertySearchAndList />
        </div>
      </section>

      <section className="section-padding pt-0" id="certifications">
        <Reveal>
          <SectionTitle
            eyebrow="Certifications"
            title="Our Certifications"
            subtitle="Certificate of Incorporation documents presented transparently for business credibility."
            center
          />
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          <Reveal>
            <article className="rounded-2xl border-4 border-gold/25 bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.12)]">
              <h3 className="text-xl font-semibold mb-4">Certificate of Incorporation 1</h3>
              <div className="relative h-[420px] rounded-lg overflow-hidden bg-white">
                <Image src="/assets/certificate1.jpeg" alt="Certificate of Incorporation 1" fill className="object-contain" />
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="rounded-2xl border-4 border-gold/25 bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.12)]">
              <h3 className="text-xl font-semibold mb-4">Certificate of Incorporation 2</h3>
              <div className="h-[420px] rounded-lg overflow-hidden bg-white">
                <iframe src="/assets/Certificate2.pdf" title="Certificate of Incorporation 2" className="w-full h-full" />
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pt-0">
        <Reveal>
          <SectionTitle eyebrow="Testimonials" title="What Our Clients Say" center />
        </Reveal>
        <Testimonials />
      </section>

      <section className="section-padding pt-0" id="contact">
        <Reveal>
          <SectionTitle
            eyebrow="Quick Inquiry"
            title="Get In Touch"
            subtitle="Visit our office, call our team, or submit your inquiry and we will connect with verified options."
          />
        </Reveal>
        <div className="mt-8 grid lg:grid-cols-2 gap-8 items-start">
          <ContactInfo />
          <InquiryForm compact />
        </div>
        <div className="mt-8 glass-card rounded-2xl p-4">
          <iframe
            title="HBP Properties Mohali Map"
            src="https://maps.google.com/maps?q=Sohana%20Landran%20Road%20Sector-77%20Sohana%20Mohali&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[360px] rounded-xl border-0"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
