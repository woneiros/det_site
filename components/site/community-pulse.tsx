import Image from "next/image";
import { SectionHeading } from "@/components/site/section-heading";
import { activity } from "@/data/homepage";

export function CommunityPulse() {
  return (
    <section id="pulse" className="scroll-mt-20 border-y border-border bg-background-alt py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading eyebrow={activity.eyebrow} title={activity.title}>{activity.body}</SectionHeading>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr]">
          <article className="flex flex-col rounded-2xl bg-participation p-7 text-participation-foreground lg:row-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider">{activity.invitation.eyebrow}</p>
            <h3 className="mt-5 max-w-[12ch] text-4xl text-participation-foreground">{activity.invitation.title}</h3>
            <p className="mt-5 leading-relaxed">{activity.invitation.body}</p>
            <a className="mt-8 font-semibold underline underline-offset-4 lg:mt-auto lg:pt-8" href={activity.invitation.href}>{activity.invitation.label}</a>
          </article>
          <article className="overflow-hidden rounded-2xl border border-border bg-card lg:row-span-2">
            <div className="relative aspect-[16/10]"><Image src={activity.gathering.src} alt={activity.gathering.alt} fill sizes="(min-width: 1024px) 340px, 100vw" className="object-cover" /></div>
            <div className="p-5">
              <p className="text-xs font-medium text-accent-strong">{activity.gathering.eyebrow}</p>
              <h3 className="mt-3 text-2xl">{activity.gathering.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{activity.gathering.body}</p>
              <a href={activity.gathering.href} className="mt-4 inline-block text-sm font-semibold text-accent-strong underline underline-offset-4">{activity.gathering.label}</a>
              <p className="mt-3 text-xs text-muted-foreground">{activity.gathering.credit}</p>
            </div>
          </article>
          <article className="rounded-2xl border border-border bg-card p-5">
            <p className="text-xs font-medium text-accent-strong">{activity.reading.eyebrow}</p>
            <h3 className="mt-3 text-2xl">{activity.reading.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{activity.reading.body}</p>
            <p className="mt-3 text-xs text-muted-foreground">{activity.reading.author}</p>
            <a href={activity.reading.href} className="mt-4 inline-block text-sm font-semibold text-accent-strong underline underline-offset-4">{activity.reading.label}</a>
          </article>
          <article className="rounded-2xl border border-border bg-background p-5">
            <p className="text-xs font-medium text-accent-strong">{activity.mentorship.eyebrow}</p>
            <h3 className="mt-3 text-2xl">{activity.mentorship.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{activity.mentorship.body}</p>
            <a href={activity.mentorship.href} className="mt-4 inline-block text-sm font-semibold text-accent-strong underline underline-offset-4">{activity.mentorship.label}</a>
          </article>
        </div>
      </div>
    </section>
  );
}
