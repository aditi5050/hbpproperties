import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import ContactInfo from "@/components/ContactInfo";

export default function ContactPage() {
  return (
    <section className="section-padding">
      <Container className="px-0">
        <Reveal>
          <SectionTitle
            eyebrow="Contact"
            title="Let Us Help You Find the Right Property"
            subtitle="Reach out to HBP Properties for buying, selling, renting, or investment support in Tri-city."
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          <Reveal>
            <ContactInfo />
          </Reveal>

          <Reveal delay={0.1}>
            <InquiryForm />
          </Reveal>
        </div>

        <Reveal>
          <div className="glass-card rounded-xl mt-10 p-4">
            <iframe
              title="HBP Properties Location"
              src="https://maps.google.com/maps?q=Sohana%20Landran%20Road%20Sector-77%20Sohana%20Mohali&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[380px] rounded-lg border-0"
              loading="lazy"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
