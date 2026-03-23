import Image from "next/image";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import AnimatedStats from "@/components/AnimatedStats";
import Testimonials from "@/components/Testimonials";
import InquiryForm from "@/components/InquiryForm";
import HeroContent from "@/components/HeroContent";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactInfo from "@/components/ContactInfo";
import { COMPANY, SERVICE_CARDS, STATS } from "@/lib/constants";

const PROPERTY_TYPES = ["Houses", "Floors", "Land", "Commercial", "Agricultural"];

export default function HomePage() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <Container className="relative z-10 py-24 md:py-28">
          <HeroContent />
        </Container>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Reveal>
              <div className="max-w-xl order-2 md:order-1 text-left space-y-6">
                <p className="text-xs tracking-widest text-yellow-600 mb-4">ABOUT HBP</p>
                <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900 mb-6">
                  Trusted Advisors for Tri-City Real Estate
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  HBP Properties is a trusted real estate firm specializing in Tri-City properties including Mohali, Chandigarh, and Panchkula.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We combine on-ground market intelligence, verified listings, and client-first guidance to help families and investors make confident decisions.
                </p>
                <div className="flex flex-wrap items-start gap-6 mb-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3 w-fit shadow-sm">
                    <p className="text-xs text-red-500 font-medium">RERA REGISTERED</p>
                    <p className="text-red-600 font-semibold whitespace-nowrap">{COMPANY.rera}</p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3 shadow-sm max-w-xs">
                    <p className="text-xs text-gray-500 mb-1">FOUNDER</p>
                    <h3 className="text-base font-semibold text-black">Sunder Ram Vinaik</h3>
                    <p className="text-gray-700 text-sm mt-1">
                      Founder of HBP Properties with over 50 years of experience in the Tri-City real estate market.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <div className="w-[280px] md:w-[320px]">
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                    <Image src="/assets/hbpowner.jpeg" alt="HBP Owner" fill className="object-cover object-top" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0" id="certifications">
        <Reveal>
          <SectionTitle
            title="Our Certifications"
            subtitle="Certificate of Incorporation documents presented transparently for business credibility."
            center
          />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-8">
          <Reveal>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Certificate of Incorporation</h3>
              <Image
                src="/assets/certificate1.jpeg"
                alt="Certificate of Incorporation"
                width={700}
                height={900}
                className="w-full max-w-[420px] mx-auto object-contain"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">RERA Certificate</h3>
              <Image
                src="/assets/certificate.jpg"
                alt="RERA Certificate"
                width={700}
                height={900}
                className="w-full max-w-[420px] mx-auto object-contain"
              />
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
        <Reveal>
          <SectionTitle
            eyebrow="We Deal In"
            title="Homes, Floors, Land & More"
            subtitle="We specialize in houses, floors, land, commercial, and agricultural properties across Tri-City."
            center
          />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
          {PROPERTY_TYPES.map((type, index) => (
            <Reveal key={type} delay={index * 0.06}>
              <div className="bg-white border border-slate-200 rounded-2xl px-5 py-6 text-center shadow-sm">
                <p className="text-lg font-semibold text-slate-900">{type}</p>
                <p className="text-sm text-slate-600 mt-2">Verified listings and trusted guidance.</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WhyChooseUs />

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
            src="https://maps.google.com/maps?q=HBP%20Property%2C%20near%20Govt%20Girls%20School%2C%20Sector%2077%2C%20Sohana%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[360px] rounded-xl border-0"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
