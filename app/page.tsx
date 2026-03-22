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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="max-w-xl order-2 lg:order-1 text-left">
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
                <div className="bg-yellow-50 border border-yellow-200 px-6 py-5 rounded-xl w-full mt-6">
                  <p className="text-xs text-red-500 tracking-wider mb-1">RERA REGISTERED</p>
                  <p className="text-red-600 font-semibold">{COMPANY.rera}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col items-center gap-6 order-1 lg:order-2">
                <div className="w-[280px] md:w-[340px]">
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-[1.02]">
                    <Image src="/assets/hbpowner.jpeg" alt="HBP Owner" fill className="object-cover object-top" />
                  </div>
                </div>
                <div className="w-[280px] md:w-[340px] bg-gray-100 p-6 rounded-2xl shadow-md text-center">
                  <p className="text-xs tracking-widest text-gray-500 mb-2">FOUNDER</p>
                  <h3 className="text-xl md:text-2xl font-semibold">Sunder Ram Vinaik</h3>
                  <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
                    Founder of HBP Properties with over 50 years of experience in the Tri-City real estate market.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
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
          <SectionTitle eyebrow="Track Record" title="Numbers That Build Trust" center />
        </Reveal>
        <div className="mt-10">
          <AnimatedStats stats={[...STATS]} />
        </div>
      </section>

      <WhyChooseUs />

      <section className="section-padding pt-0" id="certifications">
        <Reveal>
          <SectionTitle
            eyebrow="Certifications"
            title="Our Certifications"
            subtitle="Certificate of Incorporation documents presented transparently for business credibility."
            center
          />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-12">
          <Reveal>
            <article className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="mb-4 font-semibold text-gray-900">Certificate of Incorporation 1</h3>
              <Image
                src="/assets/certificate1.jpeg"
                alt="Certificate of Incorporation 1"
                width={700}
                height={900}
                className="max-h-[350px] object-contain mx-auto"
              />
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="mb-4 font-semibold text-gray-900">Certificate of Incorporation 2</h3>
              <Image
                src="/assets/certificate.jpg"
                alt="Certificate of Incorporation 2"
                width={700}
                height={900}
                className="max-h-[350px] object-contain mx-auto"
              />
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
            src="https://maps.google.com/maps?q=HBP%20Property%2C%20near%20Govt%20Girls%20School%2C%20Sector%2077%2C%20Sohana%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[360px] rounded-xl border-0"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
