type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-gold-700 font-semibold tracking-[0.2em] uppercase text-xs mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{title}</h2>
      {subtitle ? <p className="text-gray-600 leading-relaxed">{subtitle}</p> : null}
    </div>
  );
}
