/**
 * Site-wide content: brand, primary nav, footer links, key CTAs.
 * Edit here rather than in components — see AGENTS.md.
 */

export const site = {
  name: "data_engineer_things",
  tagline: "by data engineers, for data engineers",
  /** External community endpoints — placeholders until real URLs are confirmed. */
  urls: {
    slack: "#",
    newsletter: "#",
    youtube: "#",
  },
} as const;

export type NavLink = { label: string; href: string };

/**
 * Primary nav. Internal routes render a "coming soon" stub for now; the full
 * secondary-page buildout is a later phase (see docs/redesign-brief.md).
 */
export const primaryNav: NavLink[] = [
  { label: "Newsletter", href: "/newsletter" },
  { label: "Blog", href: "/blog" },
  { label: "Meetups", href: "/meetups" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Resource hub", href: "/resources" },
];

export const footerNav: NavLink[] = [
  { label: "Newsletter", href: "/newsletter" },
  { label: "Blog", href: "/blog" },
  { label: "Meetups", href: "/meetups" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Resource hub", href: "/resources" },
  { label: "Code of conduct", href: "#" },
  { label: "Team", href: "#" },
];
