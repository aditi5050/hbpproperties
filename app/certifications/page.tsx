import Image from "next/image";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";

export default function CertificationsPage() {
  return (
    <section className="section-padding bg-white">
      <Container className="px-0">
        <Reveal>
          <SectionTitle
            title="Our Incorporation Certificates"
            subtitle="HBP Properties is committed to transparency and credibility."
            center
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 mt-8">
          <Reveal>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Certificate of Incorporation</h3>
              <div className="relative w-full max-w-[420px] h-[460px] mx-auto">
                <Image src="/assets/certificate1.jpeg" alt="Certificate of Incorporation" fill className="object-contain" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">RERA Certificate</h3>
              <div className="relative w-full max-w-[420px] h-[460px] mx-auto">
                <Image src="/assets/certificate.jpg" alt="RERA Certificate" fill className="object-contain" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
