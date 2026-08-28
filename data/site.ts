/**
 * Site-wide content: brand, primary nav, footer links, key CTAs.
 * Edit here rather than in components — see AGENTS.md.
 */

export const site = {
  name: "data_engineer_things",
  tagline: "by data engineers, for data engineers",
  /** Placeholder until real URLs are confirmed. */
  urls: {
    slack: "#",
    newsletter: "#",
    blog: "#",
    youtube: "#",
  },
} as const;

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Community", href: "#pillars" },
  { label: "Latest", href: "#pulse" },
  { label: "Events", href: "#pillars" },
  { label: "Stories", href: "#stories" },
];

export const footerNav: NavLink[] = [
  { label: "Newsletter", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Mentorship", href: "#" },
  { label: "Resource hub", href: "#" },
  { label: "Code of conduct", href: "#" },
  { label: "Team", href: "#" },
];
