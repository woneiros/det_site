import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { primaryNav, site } from "@/data/site";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background-alt/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-[0.95rem] font-semibold text-foreground"
        >
          <span className="size-2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
          {site.name}
        </Link>

        <ul className="hidden gap-7 text-sm md:flex">
          {primaryNav.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Button asChild size="sm">
            <a href={site.urls.slack}>Join Slack</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
