import { useEffect, useRef, useState } from "react";
import { skills } from "../data";
import { Badge } from "@/components/ui/badge";

const RADIUS = 34;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function SkillRing({ level, active }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1600;
    const start = performance.now();

    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(eased * level);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, level]);

  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <div className="relative size-20 shrink-0">
      <svg viewBox="0 0 80 80" className="size-20 -rotate-90" aria-hidden="true">
        <circle cx="40" cy="40" r={RADIUS} fill="none" className="stroke-rose-soft/50" strokeWidth="5" />
        <circle
          cx="40"
          cy="40"
          r={RADIUS}
          fill="none"
          className="stroke-berry"
          strokeWidth="5"
          strokeLinecap="round"
          style={{ strokeDasharray: CIRCUMFERENCE, strokeDashoffset: offset }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-serif text-base font-bold text-plum-800">
        {Math.round(progress)}%
      </div>
    </div>
  );
}

function SkillCard({ skill, index, active }) {
  return (
    <article
      key={skill.name}
      className={`reveal fade-up ${active ? "show" : ""} group relative flex flex-col rounded-2xl border border-line-soft bg-white p-6 shadow-[0_6px_18px_rgba(61,16,36,0.06)] transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(86,24,48,0.18)]`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-rose-soft/0 blur-2xl transition-all duration-500 group-hover:bg-rose-soft/70" aria-hidden />

      <div className="mb-4 flex items-center justify-between">
        <div className="flex size-12 items-center justify-center rounded-xl bg-berry/8 p-2 transition-transform group-hover:-translate-y-1">
          <img src={skill.icon} alt={`${skill.name} logo`} className="size-8 object-contain" />
        </div>
        <span className="text-[10px] font-bold text-muted-2">
          0{String(index + 1).padStart(1, "0")}
        </span>
      </div>

      <div className="mb-5 flex items-center gap-4">
        <SkillRing level={skill.level} active={active} />
        <div>
          <h3 className="font-serif text-lg font-bold text-ink">{skill.name}</h3>
          <span className="text-xs leading-relaxed text-muted">{skill.description}</span>
        </div>
      </div>

      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-rose-soft/50">
        <div
          className="h-full rounded-full bg-gradient-to-r from-rose to-berry"
          style={{ width: active ? `${skill.level}%` : "0%", transition: `width 1.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s` }}
        ></div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted">Proficiency</span>
        <span className="text-berry transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden>↗</span>
      </div>
    </article>
  );
}

function Skills() {
  const gridRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section relative bg-cream-2/60 px-6 py-24 sm:py-32" id="skills">
      <div className="mx-auto max-w-6xl">
        <div className="reveal fade-up mb-14 flex flex-col items-center text-center">
          <Badge variant="rose" size="sm" className="mb-4">02 / Skills · My toolkit</Badge>
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
            Capabilities that
            <br />
            <em className="font-serif italic text-berry">bring ideas to life.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" ref={gridRef}>
          {skills.map((skill, index) => (
            <SkillCard skill={skill} index={index} active={inView} key={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
