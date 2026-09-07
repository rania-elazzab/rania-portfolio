import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function Loader() {
  const [loading, setLoading] = useState(true);
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [loaderProgress, setLoaderProgress] = useState(0);

  useEffect(() => {
    let progress = 0;

    const progressInterval = setInterval(() => {
      progress += 1;

      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);
      }

      setLoaderProgress(progress);
    }, 23);

    const startExit = setTimeout(() => {
      setLoading(false);
    }, 2500);

    const removeLoader = setTimeout(() => {
      setLoaderVisible(false);
    }, 3400);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(startExit);
      clearTimeout(removeLoader);
    };
  }, []);

  if (!loaderVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-plum-900 transition-all duration-700",
        !loading && "pointer-events-none -translate-y-full opacity-0"
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden>
        <svg className="h-full w-full" aria-hidden>
          <defs>
            <pattern id="loader-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" stroke="white" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#loader-grid)" />
        </svg>
      </div>

      <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-berry/40 blur-[120px]" aria-hidden></div>
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-rose/30 blur-[120px]" aria-hidden></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-2 flex items-baseline font-serif text-6xl font-bold text-white sm:text-7xl">
          <span>{String(loaderProgress).padStart(2, "0")}</span>
          <small className="text-2xl text-rose">%</small>
        </div>

        <div className="mb-3 font-serif text-3xl font-bold tracking-widest text-white">
          RANIA<span className="text-rose">.</span>
        </div>

        <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.3em] text-rose-soft">
          Web Developer · Designer · Marketing
        </p>

        <div className="h-1 w-56 overflow-hidden rounded-full bg-white/15">
          <div
            className="h-full rounded-full bg-gradient-to-r from-rose to-berry transition-[width] duration-100"
            style={{ width: `${loaderProgress}%` }}
          ></div>
        </div>

        <div className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
          Portfolio / 2026
        </div>
      </div>
    </div>
  );
}

export default Loader;
