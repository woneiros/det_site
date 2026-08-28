import { cn } from "@/lib/utils";

/** Monospace `// label` kicker used above section headings and in the hero. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[0.82rem] lowercase tracking-[0.02em] text-accent",
        className,
      )}
    >
      <span aria-hidden className="opacity-70">
        {"//"}
      </span>
      {children}
    </p>
  );
}
