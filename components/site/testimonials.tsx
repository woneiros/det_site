import { SectionHeading } from "@/components/site/section-heading";
import { testimonials } from "@/data/homepage";

export function Testimonials() {
  return (
    <section id="stories" className="scroll-mt-20 py-[70px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading eyebrow="from the community" title="Hear it from members" />

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.quote}
              className="rounded-[var(--radius)] border border-border bg-background-alt p-[22px] text-[0.92rem]"
            >
              <figcaption className="mb-2.5 font-mono text-[0.72rem] text-accent">
                {item.context}
              </figcaption>
              <blockquote className="leading-relaxed text-foreground">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3.5 text-[0.8rem] text-muted-foreground">
                {item.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 font-mono text-xs text-accent-2">
          [placeholder testimonials]
        </p>
      </div>
    </section>
  );
}
