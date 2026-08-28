import { cn } from "@/lib/utils";

const PIPE_1 = "M20 250 C 90 260, 120 180, 190 190 S 300 260, 380 120";
const PIPE_2 = "M40 60 C 100 40, 150 110, 220 90 S 330 40, 400 90";

/**
 * Hero "data pipeline" illustration — hand-drawn nodes joined by curved dashed
 * lines, with packets flowing along the paths. The flow animation is pure CSS
 * (`offset-path` + the `det-flow` keyframes in globals.css) and is disabled
 * under `prefers-reduced-motion`, leaving a clean static diagram.
 */
export function Pipeline({ className }: { className?: string }) {
  return (
    <div className={cn("relative min-h-[280px]", className)}>
      <svg
        viewBox="0 0 420 320"
        fill="none"
        role="img"
        aria-label="An illustration of a data pipeline: nodes connected by flowing curved lines"
        className="h-auto w-full overflow-visible"
      >
        <path
          d={PIPE_1}
          stroke="var(--border)"
          strokeWidth={2}
          strokeDasharray="1 8"
          strokeLinecap="round"
        />
        <path
          d={PIPE_2}
          stroke="var(--border)"
          strokeWidth={2}
          strokeDasharray="1 8"
          strokeLinecap="round"
        />

        <g stroke="var(--accent)" fill="var(--background)" strokeWidth={2.4}>
          <circle cx={20} cy={250} r={7} />
          <circle cx={190} cy={190} r={9} />
          <circle cx={380} cy={120} r={7} />
          <circle cx={40} cy={60} r={6} />
          <circle cx={220} cy={90} r={8} />
          <circle cx={400} cy={90} r={6} />
        </g>

        <circle
          className="det-packet"
          r={4}
          fill="var(--accent-strong)"
          style={{ offsetPath: `path('${PIPE_1}')` }}
        />
        <circle
          className="det-packet"
          r={4}
          fill="var(--accent-strong)"
          style={{ offsetPath: `path('${PIPE_1}')`, animationDelay: "1.4s" }}
        />
        <circle
          className="det-packet"
          r={3.5}
          fill="var(--accent-strong)"
          style={{ offsetPath: `path('${PIPE_2}')`, animationDelay: "3s" }}
        />

        <path
          d="M300 250 q6 -10 12 0 q6 10 12 0"
          stroke="var(--accent-2)"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M70 150 q6 -10 12 0 q6 10 12 0"
          stroke="var(--accent-2)"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
