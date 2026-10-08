import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { hero } from "@/data/homepage";

export function Hero() {
  return (
    <header className="overflow-hidden">
      <div className="mx-auto grid max-w-[1200px] items-center gap-9 px-6 py-10 md:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-[13ch] text-[clamp(2.5rem,4.8vw,4.1rem)] leading-[1.04]">
            {hero.headline.before}<em className="text-accent-strong">{hero.headline.emphasis}</em>{hero.headline.after}
          </h1>
          <p className="mt-5 max-w-[43ch] text-lg leading-relaxed text-muted-foreground">{hero.lead}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild><a href={hero.primaryCta.href}>{hero.primaryCta.label}</a></Button>
            <Button asChild variant="outline"><a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a></Button>
          </div>
          <p className="mt-4 max-w-[39ch] text-sm leading-relaxed text-muted-foreground">{hero.welcome}</p>
          <a className="mt-6 inline-block text-sm font-medium text-accent-strong underline underline-offset-4" href={hero.newsletter.href}>{hero.newsletter.label}</a>
        </div>
        <div className="grid grid-cols-2 items-start gap-3 sm:gap-4">
          <figure className="col-span-2 rounded-2xl border border-border bg-card p-2 shadow-lg lg:rotate-1">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image src={hero.photo.src} alt={hero.photo.alt} fill sizes="(min-width: 1024px) 560px, 100vw" preload className="object-cover" />
            </div>
            <figcaption className="flex flex-wrap justify-between gap-1 px-2 py-3 text-xs text-muted-foreground"><span>{hero.photo.caption}</span><span>{hero.photo.credit}</span></figcaption>
          </figure>
          <figure className="rounded-xl border border-border bg-card p-2 lg:-rotate-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg"><Image src={hero.supportingPhoto.src} alt={hero.supportingPhoto.alt} fill sizes="(min-width: 1024px) 260px, 45vw" className="object-cover" /></div>
            <figcaption className="px-1 pt-2 pb-1 text-xs leading-relaxed text-muted-foreground">{hero.supportingPhoto.caption}<span className="block">{hero.photo.credit}</span></figcaption>
          </figure>
          <aside className="rounded-xl border border-border bg-participation p-4 text-participation-foreground sm:p-5">
            <p className="text-xs font-semibold">{hero.event.eyebrow}</p>
            <h2 className="mt-2 text-xl text-participation-foreground sm:text-2xl">{hero.event.title}</h2>
            <p className="mt-3 text-xs leading-relaxed">{hero.event.body}</p>
            <a href={hero.event.href} className="mt-4 inline-block text-sm font-semibold underline underline-offset-4">{hero.event.label}</a>
          </aside>
        </div>
      </div>
    </header>
  );
}
