import Link from "next/link";

import { SectionHeading } from "@/components/site/section-heading";
import { NodeIcon } from "@/components/illustrations/node-icons";
import { pillars } from "@/data/homepage";

export function Pillars() {
  return (
    <section id="pillars" className="scroll-mt-20 py-[70px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading eyebrow="six ways in" title="Plug in wherever you are.">
          Whether you&apos;ve got five minutes or five hours a week, there&apos;s
          a way to learn from and give back to the community.
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
                className="font-mono text-[0.78rem] text-accent hover:underline"
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
