/** Public destinations verified against the existing DET site. */
export const site = {
  name: "Data Engineer Things",
  tagline: "By data engineers, for data engineers",
  footerNote: "Organized by data engineers. Powered by curiosity.",
  urls: {
    slack: "https://slack.dataengineerthings.org/",
    newsletter: "https://dataengineerthings.substack.com/",
    youtube: "https://www.youtube.com/@data-engineer-things",
    meetups: "https://www.dataengineerthings.org/event-landing-page/",
    mentorship: "https://www.dataengineerthings.org/mentorship/",
    blog: "https://medium.com/data-engineer-things",
    resources: "https://www.dataengineerthings.org/resource-hub/",
  },
} as const;
export type NavLink = { label: string; href: string };
export const primaryNav: NavLink[] = [
  { label: "Newsletter", href: site.urls.newsletter },
  { label: "Blog", href: site.urls.blog },
  { label: "Meetups", href: site.urls.meetups },
  { label: "Mentorship", href: site.urls.mentorship },
  { label: "Resource hub", href: site.urls.resources },
];
export const footerNav: NavLink[] = [
  ...primaryNav,
  { label: "Code of conduct", href: "https://www.dataengineerthings.org/coc/" },
  { label: "Team", href: "https://www.dataengineerthings.org/team/" },
];
