import Link from "next/link";

import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { Eyebrow } from "@/components/site/eyebrow";
import { Button } from "@/components/ui/button";

/**
 * Placeholder for a secondary page that isn't built yet. The full
 * Blog / Mentorship / Resource Hub / etc. buildout is a later phase
 * (see docs/redesign-brief.md §8).
 */
export function ComingSoon({
  title,
  blurb,
}: {
  title: string;
  blurb: string;
}) {
  return (
    <>
      <SiteNav />
      <main className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col items-start px-6 py-24">
        <Eyebrow>coming_soon</Eyebrow>
        <h1 className="mt-4 text-[clamp(2rem,5vw,3rem)]">{title}</h1>
        <p className="mt-4 max-w-[52ch] leading-relaxed text-muted-foreground">
          {blurb}
        </p>
        <p className="mt-2 font-mono text-xs text-accent-2">
          [placeholder page — being rebuilt]
        </p>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/">← Back to home</Link>
        </Button>
      </main>
      <SiteFooter />
    </>
  );
}
