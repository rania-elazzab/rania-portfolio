import { useMemo } from "react";
import { cn } from "@/lib/utils";

// Aceternity-style Meteors — elegant light streaks drifting down.
export function Meteors({ number = 12, className }) {
  const meteors = useMemo(
    () =>
      Array.from({ length: number }, (_, idx) => ({
        key: idx,
        top: `${Math.floor(Math.random() * 40)}%`,
        left: `${idx * 8 + Math.floor(Math.random() * 16)}%`,
        delay: `${Math.random() * (0.8 + idx * 0.08)}s`,
        duration: `${3 + idx * 0.6}s`
      })),
    [number]
  );

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {meteors.map((meteor) => (
        <span
          key={meteor.key}
          className="animate-meteor-effect pointer-events-none absolute h-0.5 w-0.5 rotate-[215deg] rounded-full bg-berry/70 shadow-[0_0_0_1px_rgba(141,49,83,0.1),0_0_8px_2px_rgba(141,49,83,0.25)]"
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration
          }}
        />
      ))}
    </div>
  );
}