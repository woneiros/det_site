import type { Metadata } from "next";

import { ComingSoon } from "@/components/site/coming-soon";

export const metadata: Metadata = { title: "Newsletter" };

export default function NewsletterPage() {
  return (
    <ComingSoon
      title="The newsletter"
      blurb="Trends, events, and expert interviews for data engineers — no fluff. The signup and archive are moving here as part of the site rebuild."
    />
  );
}
