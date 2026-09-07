import { Badge } from "@/components/ui/badge";

const ITEMS = [
  {
    number: "01",
    title: "CREATIVE",
    text: "I focus on creating interfaces that feel unique, memorable and visually strong."
  },
  {
    number: "02",
    title: "TECHNICAL",
    text: "I learn by building real projects and constantly improving my development skills."
  },
  {
    number: "03",
    title: "BUSINESS MINDED",
    text: "My Commerce & Marketing studies help me understand the business purpose behind digital experiences."
  }
];

function WhyMe() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-plum-950 via-plum-900 to-plum-700 px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-24 top-0 size-96 rounded-full bg-berry/30 blur-[130px]" aria-hidden></div>
      <div className="pointer-events-none absolute -bottom-24 right-0 size-96 rounded-full bg-rose/25 blur-[130px]" aria-hidden></div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden>
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="reveal fade-up mb-12">
          <Badge variant="plum" size="sm" className="bg-white/10 text-rose-soft">
            04 / Why me · My difference
          </Badge>
        </div>

        <div className="reveal fade-up mb-16 max-w-4xl">
          <h2 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            I don't just build websites<span className="text-rose">.</span>
            <br />
            <em className="font-serif italic text-rose-soft">I build</em> experiences with intent.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {ITEMS.map((item) => (
            <article
              key={item.number}
              className="reveal fade-up group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm transition-all hover:-translate-y-1.5 hover:bg-white/[0.1]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden />
              <span className="font-serif text-2xl font-bold text-rose-soft/70">{item.number}</span>
              <h3 className="mt-3 font-serif text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-rose-soft/80">{item.text}</p>
              <span className="mt-6 block h-0.5 w-10 bg-gradient-to-r from-rose to-berry transition-all duration-500 group-hover:w-full" aria-hidden />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyMe;
