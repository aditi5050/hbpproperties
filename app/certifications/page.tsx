import Image from "next/image";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";

export default function CertificationsPage() {
  return (
    <section className="section-padding">
      <Container className="px-0">
        <Reveal>
          <SectionTitle
            eyebrow="Certifications"
            title="Our Incorporation Certificates"
            subtitle="HBP Properties is committed to transparency and credibility."
            center
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          <Reveal>
            <article className="glass-card rounded-xl p-6 shadow-2xl border-4 border-gold/30">
              <h3 className="text-xl font-semibold mb-4">Certificate of Incorporation 1</h3>
              <div className="relative h-[460px] bg-white rounded-md overflow-hidden">
                <Image src="/assets/certificate1.jpeg" alt="Certificate of Incorporation 1" fill className="object-contain" />
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="glass-card rounded-xl p-6 shadow-2xl border-4 border-gold/30">
              <h3 className="text-xl font-semibold mb-4">Certificate of Incorporation 2</h3>
              <div className="h-[460px] rounded-md overflow-hidden bg-white">
                <iframe
                  src="/assets/Certificate2.pdf"
                  title="Certificate of Incorporation 2"
                  className="w-full h-full"
                />
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
