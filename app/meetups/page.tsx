import type { Metadata } from "next";

import { ComingSoon } from "@/components/site/coming-soon";

export const metadata: Metadata = { title: "Meetups & webinars" };

export default function MeetupsPage() {
  return (
    <ComingSoon
      title="Meetups & webinars"
      blurb="In-person and virtual sessions with the people building this field right now. The events calendar is coming to this page."
    />
  );
}
