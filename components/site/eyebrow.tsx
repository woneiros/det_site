import { cn } from "@/lib/utils";

/** Editorial kicker shared by homepage sections. */
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
        "inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-accent-strong",
        className,
      )}
    >
      {children}
    </p>
  );
}
