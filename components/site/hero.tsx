import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { Pipeline } from "@/components/illustrations/pipeline";
import { hero } from "@/data/homepage";

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1120px] items-center gap-10 px-6 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Eyebrow>
            {hero.eyebrow}
            <span className="det-cursor" aria-hidden />
          </Eyebrow>

          <h1 className="mt-4 text-[clamp(2.1rem,5vw,3.4rem)]">
            {hero.headline.before}
            <em className="not-italic text-accent">{hero.headline.emphasis}</em>
            {hero.headline.after}
          </h1>

          <p className="mt-5 max-w-[46ch] text-[1.05rem] leading-relaxed text-muted-foreground">
            {hero.lead}
          </p>
          <p className="mt-1 font-mono text-xs text-accent-2">
            [placeholder copy &amp; stats]
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild>
              <a href={hero.primaryCta.href}>{hero.primaryCta.label}</a>
            </Button>
            <Button asChild variant="outline">
              <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
            </Button>
          </div>

          <dl className="mt-9 flex flex-wrap gap-x-[18px] gap-y-2 border-t border-dashed border-border pt-3.5 font-mono text-[0.8rem] text-muted-foreground">
            <div className="text-muted-foreground">$ community --stats</div>
            {hero.stats.map((stat) => (
              <div key={stat.label} className="flex gap-1.5">
                <dt>{stat.label}:</dt>
                <dd className="font-semibold text-accent-strong">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Pipeline />
      </div>
    </header>
  );
}
