import { Building2, Handshake, Home, LineChart } from "lucide-react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";

const services = [
  {
    icon: Home,
    title: "Buying Property",
    description:
      "Find residential and commercial properties with verified documents, area insights, and value-focused recommendations.",
  },
  {
    icon: Handshake,
    title: "Selling Property",
    description:
      "Sell faster with strategic marketing, qualified leads, and end-to-end negotiation and documentation support.",
  },
  {
    icon: Building2,
    title: "Rental Management",
    description:
      "Get reliable tenants, rental valuation support, and smooth agreements for residential and commercial units.",
  },
  {
    icon: LineChart,
    title: "Real Estate Investment",
    description:
      "Build wealth through high-potential real estate opportunities in key growth zones of Tri-city.",
  },
] as const;

export default function ServicesPage() {
  return (
    <section className="section-padding">
      <Container className="px-0">
        <Reveal>
          <SectionTitle
            eyebrow="Services"
            title="Real Estate Services for Every Goal"
            subtitle="Whether you are a first-time buyer, seller, landlord, or investor, HBP Properties provides practical guidance and execution support."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <article className="glass-card rounded-xl p-7">
                <service.icon className="text-gold mb-4" size={34} />
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
