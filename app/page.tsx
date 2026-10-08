import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { Hero } from "@/components/site/hero";
import { Pillars } from "@/components/site/pillars";
import { CommunityPulse } from "@/components/site/community-pulse";
import { Testimonials } from "@/components/site/testimonials";
import { CtaBanner } from "@/components/site/cta-banner";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <CommunityPulse />
        <Pillars />
        <Testimonials />
        <CtaBanner />
      </main>
      <SiteFooter />
    </>
  );
}
