import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { ctaBanner } from "@/data/homepage";

export function CtaBanner() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="relative overflow-hidden rounded-[20px] border border-border bg-gradient-to-br from-card to-background-alt px-8 py-[50px] text-center">
          <Eyebrow className="justify-center">{ctaBanner.eyebrow}</Eyebrow>
          <h2 className="mt-2 text-[clamp(1.6rem,4vw,2.2rem)]">
            {ctaBanner.headline}
          </h2>
          <p className="mx-auto mt-2 max-w-[48ch] leading-relaxed text-muted-foreground">
            {ctaBanner.body}
          </p>
          <Button asChild className="mt-6">
            <a href={ctaBanner.cta.href}>{ctaBanner.cta.label}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
