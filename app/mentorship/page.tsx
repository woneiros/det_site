import type { Metadata } from "next";

import { ComingSoon } from "@/components/site/coming-soon";

export const metadata: Metadata = { title: "Mentorship" };

export default function MentorshipPage() {
  return (
    <ComingSoon
      title="Mentorship"
      blurb="Personalized guidance from seasoned engineers who've been where you are. Cohort signups and mentor matching are moving here."
    />
  );
}
