import Image from "next/image";
import { SectionHeading } from "@/components/site/section-heading";
import { stories, testimonials } from "@/data/homepage";

export function Testimonials() {
  return (
    <section id="stories" className="scroll-mt-20 border-y border-border bg-background-alt py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading eyebrow={stories.eyebrow} title={stories.title} />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <blockquote className="text-base leading-relaxed">&ldquo;{item.quote}&rdquo;</blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-6">
                <Image src={item.portrait} alt={item.name} width={52} height={52} sizes="52px" className="size-13 rounded-full object-cover" />
                <div><a href={item.href} className="text-sm font-semibold underline decoration-border underline-offset-4">{item.name}</a><p className="mt-1 text-xs text-muted-foreground">{item.role}</p></div>
              </figcaption>
            </figure>
          ))}
        </div>
        <a href={stories.sourceHref} className="mt-6 inline-block text-xs text-muted-foreground underline underline-offset-4">{stories.sourceLabel}</a>
      </div>
    </section>
  );
}
