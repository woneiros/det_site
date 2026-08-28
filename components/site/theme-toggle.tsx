"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Both icons are always in the DOM; the active one is chosen with the `light:`
 * CSS variant. next-themes sets the `<html>` class before hydration, so the
 * server and client markup match and there is no hydration flicker.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle light and dark theme"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className,
      )}
    >
      <Sun className="size-[17px] light:hidden" />
      <Moon className="hidden size-[17px] light:block" />
    </button>
  );
}
