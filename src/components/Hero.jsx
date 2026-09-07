import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/magic/spotlight";
import { Meteors } from "@/components/magic/meteors";
import { TextRevealEffect } from "@/components/magic/text-reveal";

function CountUp({ value, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState("0");
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const start = performance.now();

            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(eased * value);
              setDisplay(String(current).padStart(2, "0"));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <strong ref={ref}>
      {prefix}
      {display}
      {suffix}
    </strong>
  );
}

function Hero() {
  const heroRef = useRef(null);

  const handleMove = (event) => {
    const frame = event.currentTarget;
    const rect = frame.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    frame.style.setProperty("--tiltX", `${x * 7}deg`);
    frame.style.setProperty("--tiltY", `${y * 7}deg`);
  };

  const handleLeave = (event) => {
    event.currentTarget.style.setProperty("--tiltX", "0deg");
    event.currentTarget.style.setProperty("--tiltY", "0deg");
  };

  const handleMouseParallax = (event) => {
    const el = heroRef.current;
    if (!el) return;
    const bg = el.querySelector(".hero-bg-inner");
    if (!bg) return;
    const { innerWidth, innerHeight } = window;
    const x = event.clientX / innerWidth - 0.5;
    const y = event.clientY / innerHeight - 0.5;
    bg.style.setProperty("--par-x", `${x * 26}px`);
    bg.style.setProperty("--par-y", `${y * 26}px`);
  };

  const handleMagneticStart = (event) => {
    const btn = event.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const handleMagneticEnd = (event) => {
    event.currentTarget.style.transform = "";
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseParallax}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20 lg:pt-32"
    >
      {/* Background */}
      <div
        className="hero-bg-inner pointer-events-none absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: "translate(var(--par-x,0), var(--par-y,0))" }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(244,205,217,0.55),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(232,160,184,0.4),transparent_60%)]" />
        <div className="absolute left-[8%] top-[18%] size-72 rounded-full bg-rose-soft/50 blur-[90px] animate-float" />
        <div className="absolute right-[12%] bottom-[16%] size-80 rounded-full bg-rose/40 blur-[100px] animate-float-slow" />
        <div className="absolute left-1/2 top-1/3 size-64 rounded-full bg-berry-soft/25 blur-[90px]" />
      </div>

      <Spotlight className="left-0 top-0 hidden lg:block" fill="#e8a0b8" />
      {/* subtle meteors */}
      <Meteors number={8} />

      <div
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]"
        style={{ transform: "perspective(1200px) rotateX(var(--tiltX,0)) rotateY(var(--tiltY,0))" }}
      >
        {/* LEFT */}
        <div>
          <div className="reveal fade-up mb-6 inline-flex items-center gap-2.5 rounded-full border border-line-soft bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <span className="pulse-dot"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-plum-700">
              Available for creative projects
            </span>
          </div>

          <p className="reveal fade-up delay-1 mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-muted">
            Web Developer · Designer · Marketing
          </p>

          <h1 className="mb-6 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            <span className="reveal fade-up delay-1 block">RANIA</span>
            <TextRevealEffect
              text="EL AZZAB"
              from="#8d3153"
              to="#561830"
              className="block"
              segmentClassName="pr-[0.18em]"
            />
            <span className="reveal fade-up delay-3 mt-2 block text-2xl font-normal tracking-wide text-plum-700 sm:text-3xl">
              I create <em className="font-serif italic text-berry not-italic">digital experiences</em>
            </span>
          </h1>

          <p className="reveal fade-up delay-3 mb-9 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Combining technology, creativity and business thinking to build
            modern digital experiences that are functional, elegant and
            meaningful.
          </p>

          <div className="reveal fade-up delay-4 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              onMouseMove={handleMagneticStart}
              onMouseLeave={handleMagneticEnd}
            >
              <a href="#projects" className="inline-flex items-center gap-2">
                View my work <span aria-hidden>↗</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              onMouseMove={handleMagneticStart}
              onMouseLeave={handleMagneticEnd}
            >
              <a href="#contact">Contact me</a>
            </Button>
          </div>

          <div className="reveal fade-up delay-4 mt-12 flex gap-12 sm:gap-16">
            <div>
              <strong className="font-serif text-3xl text-berry">
                <CountUp value={3} suffix="+" />
              </strong>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                Projects
              </span>
            </div>
            <div>
              <strong className="font-serif text-3xl text-berry">
                <CountUp value={7} />
              </strong>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                Skills
              </span>
            </div>
            <div>
              <strong className="font-serif text-3xl text-berry">B2</strong>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                English
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — photo */}
        <div className="reveal fade-right relative mx-auto w-full max-w-md">
          <div className="pointer-events-none absolute -inset-6 rounded-full border border-dashed border-rose-soft/70" aria-hidden></div>
          <div className="pointer-events-none absolute -inset-12 rounded-full border border-dashed border-rose-soft/40" aria-hidden></div>

          <div
            className="animate-float-slow relative"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ transform: "perspective(900px) rotateX(var(--tiltX,0)) rotateY(var(--tiltY,0))", transformStyle: "preserve-3d" }}
          >
            <div className="overflow-hidden rounded-[2rem] border border-line-soft bg-white shadow-[0_30px_80px_rgba(86,24,48,0.28)]">
              <div className="flex items-center justify-between border-b border-line-soft px-5 py-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                  Portfolio · Nº 2026
                </span>
                <span className="flex gap-1.5" aria-hidden>
                  <i className="size-2.5 rounded-full bg-rose-soft"></i>
                  <i className="size-2.5 rounded-full bg-berry-soft"></i>
                  <i className="size-2.5 rounded-full bg-berry"></i>
                </span>
              </div>
              <img src="hero.jpg" alt="Rania El Azzab" className="aspect-[4/5] w-full object-cover" />
              <div className="flex items-center justify-between px-5 py-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink">
                  Rania El Azzab
                </span>
                <span className="text-berry" aria-hidden>↗</span>
              </div>
            </div>
          </div>

          <div className="animate-float absolute -left-6 top-8 rounded-2xl border border-line-soft bg-white/90 px-4 py-3 shadow-lg backdrop-blur sm:-left-10">
            <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted">Based in</span>
            <strong className="text-sm text-ink">MOROCCO 🇲🇦</strong>
          </div>

          <div className="animate-float-slow absolute -right-4 bottom-16 rounded-2xl border border-line-soft bg-white/90 px-4 py-3 shadow-lg backdrop-blur sm:-right-8">
            <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted">Focus</span>
            <strong className="text-sm text-ink">FRONT-END</strong>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex" aria-hidden>
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-berry to-transparent"></span>
      </div>
    </section>
  );
}

export default Hero;
