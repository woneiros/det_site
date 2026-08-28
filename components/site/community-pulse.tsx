import { SectionHeading } from "@/components/site/section-heading";
import { pulse } from "@/data/homepage";

export function CommunityPulse() {
  return (
    <section id="pulse" className="scroll-mt-20 py-[70px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="community_pulse"
          title="What's happening right now"
        />

        <ol className="border-t border-border">
          {pulse.map((item) => (
            <li
              key={item.title}
              className="grid gap-4 border-b border-border py-5 sm:grid-cols-[90px_1fr]"
            >
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.05em] text-accent">
                {item.date}
              </span>
              <div>
                <h3 className="mb-1 font-sans text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-[0.88rem] leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 font-mono text-xs text-accent-2">
          [placeholder feed — hand-authored for v0]
        </p>
      </div>
    </section>
  );
}
