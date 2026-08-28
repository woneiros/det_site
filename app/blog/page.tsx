import type { Metadata } from "next";

import { ComingSoon } from "@/components/site/coming-soon";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <ComingSoon
      title="The blog"
      blurb="Technical deep dives and career stories, written by members of the community. The full archive is being migrated here."
    />
  );
}
