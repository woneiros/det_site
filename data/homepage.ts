import { site } from "@/data/site";

/** Curated content; provenance and refresh guidance in docs/community-content.md. */
export const hero = {
  eyebrow: "By data engineers, for data engineers",
  headline: { before: "The community that's ", emphasis: "always", after: " in session." },
  lead: "Find your people in data engineering. Share what you're learning, work through a tricky problem, and make connections that go beyond the next job title.",
  primaryCta: { label: "Join the Slack →", href: site.urls.slack },
  secondaryCta: { label: "Explore meetups", href: site.urls.meetups },
  welcome: "Start with a hello. Ask a technical question. Find a gathering near you.",
  newsletter: { label: "A little community in your inbox →", href: site.urls.newsletter },
  photo: { src: "/community/audience-engagements-2025.jpg", alt: "Data engineers raising their hands during a session at Data Engineering Open Forum 2025", caption: "Hands up, ideas shared. Open Forum 2025.", credit: "Photo: Luis Medina" },
  supportingPhoto: { src: "/community/panel-discussion-2025.jpg", alt: "Inna Giguere, Ryan Blue, and Jerry Wang on the Open Forum 2025 panel", caption: "Inna Giguere, Ryan Blue & Jerry Wang · Open Forum 2025" },
  event: { eyebrow: "Make room for a meetup", title: "Meet your local data people.", body: "In person or online · hosted by DET", label: "Find your next gathering →", href: site.urls.meetups },
} as const;

export type PillarIcon = "newsletter" | "blog" | "meetups" | "mentorship" | "resources" | "slack";
export type Pillar = { icon: PillarIcon; title: string; body: string; link: { label: string; href: string } };
export const participation = { eyebrow: "There’s a place for you", title: "Come curious. Get involved.", body: "Five minutes or a whole evening: choose the way you’d like to connect, learn, or give back." };
export const pillars: Pillar[] = [
  { icon: "slack", title: "Slack community", body: "Introduce yourself, talk through a technical question, or share something you've learned.", link: { label: "Join Slack →", href: site.urls.slack } },
  { icon: "meetups", title: "Meetups & webinars", body: "Meet the people behind the pipelines, in your city or on a community call.", link: { label: "Find a gathering →", href: site.urls.meetups } },
  { icon: "mentorship", title: "Mentorship", body: "Explore guidance from experienced data professionals, or put your experience to work for someone else.", link: { label: "Explore mentorship →", href: site.urls.mentorship } },
  { icon: "blog", title: "Blog", body: "Read technical deep dives and career stories from community writers. Share your own experience, too.", link: { label: "Read member articles →", href: site.urls.blog } },
  { icon: "newsletter", title: "Newsletter", body: "Make time for fresh ideas, community events, and a little inspiration in your inbox.", link: { label: "Subscribe →", href: site.urls.newsletter } },
  { icon: "resources", title: "Resource hub", body: "Find reading, courses, and tools for the next thing you want to learn.", link: { label: "Explore resources →", href: site.urls.resources } },
];

export const activity = {
  eyebrow: "The community noticeboard",
  title: "Latest from the community",
  body: "A few places to join in, and moments worth revisiting.",
  invitation: { eyebrow: "Your next conversation", title: "Bring your questions. Pull up a chair.", body: "Browse DET’s meetup calendar for local gatherings and online sessions. Follow the event listings for dates, hosts, and registration.", label: "Explore the meetup calendar →", href: site.urls.meetups },
  gathering: { eyebrow: "From the archive · 2025", title: "The questions don’t stop when the slides end.", body: "At Data Engineering Open Forum 2025, attendees lined up at the mic to keep the conversation going.", src: "/community/audience-qna-2025.jpg", alt: "Attendees lining up at the microphone for questions at Open Forum 2025", credit: "Photo: Luis Medina", label: "Revisit Open Forum →", href: "https://www.dataengineeringopenforum.com/past/2025" },
  reading: { eyebrow: "Community reading · November 5, 2025", title: "Lessons across data decades", body: "From Reddit questions to LinkedIn’s AI stack, in Data Engineer Things Newsletter #25.", author: "Data Engineer Things editorial team", label: "Read the newsletter →", href: "https://dataengineerthings.substack.com/p/data-engineer-things-newsletter-25" },
  mentorship: { eyebrow: "Learn together", title: "A little guidance can go a long way.", body: "Looking for a mentor, or interested in becoming one? Explore the DET program for application details and availability.", label: "Explore the mentorship program →", href: site.urls.mentorship },
} as const;

export const stories = { eyebrow: "People make the community", title: "Hear it from members", sourceLabel: "Member stories from the DET community", sourceHref: "https://www.dataengineerthings.org/#testimonialsGrid" };
export const testimonials = [
  { name: "Shachar Meir", role: "Data Advisor", portrait: "/community/shachar-meir.png", href: "https://linkedin.com/in/shachar-meir", quote: "DET is the community I wish I had when I started my career 20+ years ago! It helped me connect with awesome Data Engineers in my area and beyond, and with really awesome learning experiences." },
  { name: "Aminat Lawal", role: "Data Engineer", portrait: "/community/aminat-lawal.png", href: "https://linkedin.com/in/aminat-lawal", quote: "The community has helped me connect with people who have become not just peers but friends, and has given me access to incredible individuals across every corner of data engineering. DET has attracted some of the brightest minds in the field, and being able to tap into their knowledge, experience, and network has been invaluable." },
  { name: "Yaakov Bressler", role: "Lead Data Engineer", portrait: "/community/yaakov-bressler.png", href: "https://linkedin.com/in/yaakov-bressler", quote: "DET makes me a better version of myself (and a better engineer). It provides an opportunity to give back to the tech community by building the exact resources I wish I had when I first started my career. Now, I can support the next generation of data engineers while also elevating the very writers who helped kickstart my own journey." },
] as const;
export const ctaBanner = { eyebrow: "You don’t need a conference badge", headline: "Your next data engineering conversation starts here.", body: "Say hello, share what you're working on, and get to know the people building alongside you.", cta: { label: "Join the Slack →", href: site.urls.slack } } as const;
