import Container from "@/components/Container";

type PageBannerProps = {
  title: string;
  subtitle: string;
};

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-dark text-white py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.25),transparent_40%)]" />
      <Container className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">{title}</h1>
        <p className="max-w-2xl text-gray-200">{subtitle}</p>
      </Container>
    </section>
  );
}
