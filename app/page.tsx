import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

/**
 * Homepage — SCAFFOLD PLACEHOLDER.
 * The full build matches det-homepage-draft.html (hero pipeline illustration,
 * 6-card "ways to plug in" grid, community pulse feed, testimonials, CTA banner).
 * Tracked in docs/architecture.md.
 */
export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto w-full max-w-[1120px] flex-1 px-6 py-24">
        <p className="mb-4 inline-flex items-center gap-2 font-mono text-[0.82rem] text-accent">
          <span aria-hidden>{"//"}</span>
          {site.tagline}
        </p>
        <h1 className="max-w-[16ch] text-[clamp(2.1rem,5vw,3.4rem)]">
          The community that&apos;s{" "}
          <em className="not-italic text-accent">always</em> in session.
        </h1>
        <p className="mt-4 max-w-[46ch] text-muted-foreground">
          43,000+ data engineers trading war stories, mentoring each other, and
          building the field together — no conference badge required.{" "}
          <span className="font-mono text-xs text-accent-2">
            [placeholder copy]
          </span>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <a href={site.urls.slack}>Join the Slack →</a>
          </Button>
          <Button asChild variant="outline">
            <a href={site.urls.newsletter}>Subscribe to the newsletter</a>
          </Button>
        </div>
        <p className="mt-12 border-t border-dashed border-border pt-3.5 font-mono text-xs text-muted-foreground">
          {"$ community --stats   "}
          members: <b className="text-accent-strong">43.2k</b>
          {"   "}slack: <b className="text-accent-strong">7.5k</b>
          {"   "}newsletter: <b className="text-accent-strong">15.4k</b>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
