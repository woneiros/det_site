import Link from "next/link";

import { SectionHeading } from "@/components/site/section-heading";
import { NodeIcon } from "@/components/illustrations/node-icons";
import { participation, pillars } from "@/data/homepage";

export function Pillars() {
  return (
    <section id="pillars" className="scroll-mt-20 py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading eyebrow={participation.eyebrow} title={participation.title}>
          {participation.body}
        </SectionHeading>

        <ul className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <li
              key={pillar.title}
              className="group rounded-[var(--radius)] border border-border bg-card p-[26px_22px] transition-all hover:-translate-y-[3px] hover:border-accent"
            >
              <NodeIcon name={pillar.icon} className="mb-4" />
              <h3 className="mb-1.5 font-sans text-[1.05rem] font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mb-3.5 text-[0.92rem] leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
              <Link
                href={pillar.link.href}
                className="text-sm font-semibold text-accent-strong hover:underline"
              >
                {pillar.link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
