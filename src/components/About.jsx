import { Badge } from "@/components/ui/badge";

const CARDS = [
  ["01", "CREATIVE", "Visual thinking & unique ideas"],
  ["02", "TECHNICAL", "Modern web development skills"],
  ["03", "BUSINESS", "Commerce & marketing mindset"]
];

const TRAITS = [
  "Clean, thoughtful interfaces",
  "Design meets business logic",
  "Always learning by building"
];

function About() {
  return (
    <section className="section relative px-6 py-24 sm:py-32" id="about" data-index="01/about">
      <div className="mx-auto max-w-6xl">
        <div className="reveal fade-up mb-14 flex flex-col items-start">
          <Badge variant="rose" size="sm" className="mb-4">01 / About · Who I am</Badge>
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
            More than
            <br />
            <em className="font-serif italic text-berry">a developer.</em>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal fade-right">
            <div className="relative mb-10 border-l-2 border-rose-soft pl-6">
              <span className="absolute -left-3.5 -top-5 font-serif text-6xl leading-none text-rose-soft" aria-hidden>“</span>
              <p className="font-serif text-2xl leading-snug text-plum-800 sm:text-[1.7rem]">
                I'm Rania El Azzab, a creative learner exploring the
                intersection of technology, design and business.
              </p>
            </div>

            <div className="mb-10 divide-y divide-line-soft rounded-2xl border border-line-soft bg-white px-6 shadow-[0_6px_18px_rgba(61,16,36,0.05)]">
              <div className="flex items-center justify-between py-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Role</span>
                <strong className="text-sm text-ink">Web Developer &amp; Designer</strong>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Base</span>
                <strong className="text-sm text-ink">Morocco</strong>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Focus</span>
                <strong className="text-sm text-ink">Front-End · UI · Marketing</strong>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Status</span>
                <strong className="flex items-center gap-2 text-sm text-ink">
                  <i className="pulse-dot"></i> Available
                </strong>
              </div>
            </div>

            <ul className="space-y-3">
              {TRAITS.map((trait) => (
                <li key={trait} className="flex items-center gap-3 text-sm text-ink-soft">
                  <span className="flex size-7 items-center justify-center rounded-full bg-rose-soft/60 text-berry" aria-hidden>✦</span>
                  {trait}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal fade-left">
            <h3 className="mb-5 font-serif text-2xl font-bold text-ink">
              Technology meets creativity<span className="text-berry">.</span>
            </h3>
            <p className="mb-4 text-base leading-relaxed text-muted">
              I study Commerce &amp; Marketing while developing my skills in Web
              Development. This combination helps me understand both how a
              digital product works and why it matters to people.
            </p>
            <p className="mb-8 text-base leading-relaxed text-muted">
              I enjoy transforming ideas into modern interfaces with clear
              communication, strong visuals and meaningful interactions.
            </p>

            <a
              href="#skills"
              className="group inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-berry transition-colors hover:text-plum-700"
            >
              Explore my skills
              <span className="transition-transform group-hover:translate-x-1.5" aria-hidden>→</span>
            </a>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {CARDS.map(([number, title, text]) => (
                <div
                  key={number}
                  className="group relative overflow-hidden rounded-2xl border border-line-soft bg-white p-5 shadow-[0_6px_18px_rgba(61,16,36,0.06)] transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(86,24,48,0.18)]"
                >
                  <div className="pointer-events-none absolute -right-6 -top-6 size-16 rounded-full bg-rose-soft/0 blur-2xl transition-all group-hover:bg-rose-soft/70" aria-hidden />
                  <span className="text-[10px] font-bold text-muted">{number}</span>
                  <strong className="mt-2 block text-sm font-bold uppercase tracking-wide text-plum-700">
                    {title}
                  </strong>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{text}</p>
                  <span className="absolute right-4 top-4 text-berry opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
