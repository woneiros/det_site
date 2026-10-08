import { Eyebrow } from "@/components/site/eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-7 max-w-[640px]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-[clamp(1.6rem,3.4vw,2.3rem)]">{title}</h2>
      {children ? (
        <p className="mt-3 leading-relaxed text-muted-foreground">{children}</p>
      ) : null}
    </div>
  );
}
