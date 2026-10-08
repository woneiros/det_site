import Link from "next/link";

import { footerNav, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-[0.95rem] font-semibold text-foreground"
          >
            <span className="size-2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
            {site.name}
          </Link>
          <ul className="flex flex-wrap gap-5 text-sm">
            {footerNav.map((link) => (
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
        </div>
        <p className="text-xs text-muted-foreground">{site.footerNote}</p>
      </div>
    </footer>
  );
}
