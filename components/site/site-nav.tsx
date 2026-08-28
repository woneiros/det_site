"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { cn } from "@/lib/utils";
import { primaryNav, site } from "@/data/site";

function BrandMark() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-mono text-[0.95rem] font-semibold text-foreground"
    >
      <span className="size-2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
      {site.name}
    </Link>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background-alt/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4">
        <BrandMark />

        <ul className="hidden gap-7 text-sm lg:flex">
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
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={site.urls.slack}>Join Slack</a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-accent hover:text-accent lg:hidden"
          >
            {open ? <X className="size-[17px]" /> : <Menu className="size-[17px]" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border transition-[max-height] duration-200 lg:hidden",
          open ? "max-h-96" : "max-h-0 border-t-transparent",
        )}
      >
        <ul className="mx-auto flex max-w-[1120px] flex-col gap-1 px-6 py-3 text-sm">
          {primaryNav.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-muted-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Button asChild size="sm">
              <a href={site.urls.slack}>Join Slack</a>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
