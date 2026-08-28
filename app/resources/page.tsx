import type { Metadata } from "next";

import { ComingSoon } from "@/components/site/coming-soon";

export const metadata: Metadata = { title: "Resource hub" };

export default function ResourcesPage() {
  return (
    <ComingSoon
      title="Resource hub"
      blurb="Curated reading, courses, and tools to go deeper on whatever you're learning. The catalogue is being rebuilt here."
    />
  );
}
