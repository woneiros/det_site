import type { SVGProps } from "react";

import { cn } from "@/lib/utils";
import type { PillarIcon } from "@/data/homepage";

/**
 * Custom node-and-connector line-art icons that reuse the hero's visual
 * language (see globals.css `.det-ink-*`). Not a stock icon set — each is a
 * little sketch of the thing it represents.
 */
function IconFrame({ className, children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
      className={cn("size-10 overflow-visible", className)}
      {...props}
    >
      {children}
    </svg>
  );
}

function NewsletterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconFrame {...props}>
      <circle className="det-ink-node" cx={12} cy={22} r={4} />
      <path className="det-ink-line" d="M17 18 Q24 10 30 13" />
      <path className="det-ink-line" d="M17 22 Q26 22 32 20" />
      <path className="det-ink-line" d="M16 27 Q23 32 29 27" />
      <circle className="det-ink-dot" cx={30} cy={13} r={1.4} />
      <circle className="det-ink-dot" cx={32} cy={20} r={1.4} />
      <circle className="det-ink-dot" cx={29} cy={27} r={1.4} />
    </IconFrame>
  );
}

function BlogIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconFrame {...props}>
      <path className="det-ink-line" d="M9 11 Q9 9 12 9 H27 Q30 9 30 12 V30" />
      <path className="det-ink-line-2" d="M12 16 H24" />
      <path className="det-ink-line-2" d="M12 21 H26" />
      <path className="det-ink-line-2" d="M12 26 H20" />
      <path className="det-ink-line" d="M30 30 Q30 32 27 32 H12 Q9 32 9 29" />
    </IconFrame>
  );
}

function MeetupsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconFrame {...props}>
      <circle className="det-ink-node" cx={13} cy={14} r={4.2} />
      <circle className="det-ink-node" cx={27} cy={15} r={3.4} />
      <circle className="det-ink-node" cx={19} cy={27} r={3.8} />
      <path className="det-ink-line-2" d="M16 17 Q18 21 17 23" />
      <path className="det-ink-line-2" d="M24 17 Q22 21 22 23" />
      <path className="det-ink-line-2" d="M17 14 Q20 13 24 15" />
    </IconFrame>
  );
}

function MentorshipIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconFrame {...props}>
      <circle className="det-ink-node" cx={9} cy={28} r={3.6} />
      <circle className="det-ink-node" cx={31} cy={11} r={5} />
      <path className="det-ink-line" d="M12.5 25.5 Q20 17 27 13" />
      <path
        className="det-ink-line-2"
        d="M21 19 l3 -2 l0.5 3.4Z"
        style={{ strokeLinejoin: "round" }}
      />
    </IconFrame>
  );
}

function ResourcesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconFrame {...props}>
      <circle className="det-ink-node" cx={20} cy={19} r={4.4} />
      <circle className="det-ink-node" cx={8} cy={10} r={2.8} />
      <circle className="det-ink-node" cx={32} cy={9} r={2.8} />
      <circle className="det-ink-node" cx={9} cy={31} r={2.8} />
      <circle className="det-ink-node" cx={33} cy={30} r={2.8} />
      <path className="det-ink-line-2" d="M17 16 Q12 13 10 11" />
      <path className="det-ink-line-2" d="M23 16 Q28 12 30 10" />
      <path className="det-ink-line-2" d="M17 22 Q13 27 10 29" />
      <path className="det-ink-line-2" d="M23 22 Q29 26 31 29" />
    </IconFrame>
  );
}

function SlackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconFrame {...props}>
      <path
        className="det-ink-line"
        d="M8 10 Q7 9 8 8 Q22 5 27 9 Q29 11 26 13 Q16 17 9 15 Q7 14 8 10Z"
        style={{ strokeLinejoin: "round" }}
      />
      <path
        className="det-ink-line-2"
        d="M14 24 Q13 22 15 21 Q26 18 31 22 Q33 24 30 26 Q22 30 16 27 Q13 26 14 24Z"
        style={{ strokeLinejoin: "round" }}
      />
    </IconFrame>
  );
}

const ICONS: Record<PillarIcon, (props: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  newsletter: NewsletterIcon,
  blog: BlogIcon,
  meetups: MeetupsIcon,
  mentorship: MentorshipIcon,
  resources: ResourcesIcon,
  slack: SlackIcon,
};

export function NodeIcon({
  name,
  className,
}: {
  name: PillarIcon;
  className?: string;
}) {
  const Icon = ICONS[name];
  return <Icon className={className} />;
}
