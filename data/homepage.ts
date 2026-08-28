/**
 * Homepage content. All copy, stats, and quotes below are PLACEHOLDER for the
 * first draft — real content and testimonials land later. Keep the visible
 * "[placeholder]" markers until then. See AGENTS.md.
 */

export const hero = {
  eyebrow: "by data engineers, for data engineers",
  headline: {
    before: "The community that's ",
    emphasis: "always",
    after: " in session.",
  },
  lead: "43,000+ data engineers trading war stories, mentoring each other, and building the field together — no conference badge required.",
  primaryCta: { label: "Join the Slack →", href: "#" },
  secondaryCta: { label: "Subscribe to the newsletter", href: "#" },
  /** Rendered as a terminal command line. */
  stats: [
    { label: "members", value: "43.2k" },
    { label: "slack", value: "7.5k" },
    { label: "newsletter", value: "15.4k" },
  ],
} as const;

export type PillarIcon =
  | "newsletter"
  | "blog"
  | "meetups"
  | "mentorship"
  | "resources"
  | "slack";

export type Pillar = {
  icon: PillarIcon;
  title: string;
  body: string;
  link: { label: string; href: string };
};

export const pillars: Pillar[] = [
  {
    icon: "newsletter",
    title: "Newsletter",
    body: "Trends, events, and expert interviews, straight to your inbox — no fluff.",
    link: { label: "Subscribe →", href: "/newsletter" },
  },
  {
    icon: "blog",
    title: "Blog",
    body: "Technical deep dives and career stories, written by members like you.",
    link: { label: "Read articles →", href: "/blog" },
  },
  {
    icon: "meetups",
    title: "Meetups & webinars",
    body: "In-person and virtual sessions with the people building this field right now.",
    link: { label: "View events →", href: "/meetups" },
  },
  {
    icon: "mentorship",
    title: "Mentorship",
    body: "Personalized guidance from seasoned engineers who've been exactly where you are.",
    link: { label: "Find a mentor →", href: "/mentorship" },
  },
  {
    icon: "resources",
    title: "Resource hub",
    body: "Curated reading, courses, and tools to go deeper on whatever you're learning.",
    link: { label: "Browse resources →", href: "/resources" },
  },
  {
    icon: "slack",
    title: "Slack community",
    body: "7,500+ data professionals talking shop, sharing wins, and helping each other debug.",
    link: { label: "Join Slack →", href: "#" },
  },
];

export type PulseItem = { date: string; title: string; body: string };

export const pulse: PulseItem[] = [
  {
    date: "Aug 19",
    title: "Recap: streaming pipelines meetup in Austin",
    body: "40 members, 3 lightning talks, and a heated debate about exactly-once semantics.",
  },
  {
    date: "Aug 14",
    title: "New mentorship cohort is open",
    body: "18 mentors just joined — matching starts next week.",
  },
  {
    date: "Aug 08",
    title: 'Blog: "Why your orchestrator isn\'t the problem"',
    body: "A member's take on diagnosing pipeline failures upstream of the DAG.",
  },
  {
    date: "Aug 02",
    title: "Thread of the week",
    body: '127 replies on "the most overrated tool in the modern data stack."',
  },
];

export type Testimonial = { context: string; quote: string; attribution: string };

export const testimonials: Testimonial[] = [
  {
    context: "// on mentorship",
    quote:
      "My mentor talked me through my first on-call rotation. I don't think I'd have survived it otherwise.",
    attribution: "Placeholder Name · Data Engineer, placeholder co.",
  },
  {
    context: "// on the slack",
    quote:
      "It's the only Slack I actually check every day. People answer questions like they mean it.",
    attribution: "Placeholder Name · Senior DE, placeholder co.",
  },
  {
    context: "// on meetups",
    quote:
      "Went to one meetup out of curiosity. Two years later I'm running the local chapter.",
    attribution: "Placeholder Name · Community volunteer",
  },
];

export const ctaBanner = {
  eyebrow: "no badge required",
  headline: "Your next data engineering conversation starts here.",
  body: "Come for the newsletter, stay for the people who actually answer your Slack questions at 11pm.",
  cta: { label: "Join the Slack →", href: "#" },
} as const;
