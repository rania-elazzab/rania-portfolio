import { Badge } from "@/components/ui/badge";

const SERVICES = [
  {
    icon: "</>",
    number: "01",
    title: "Web Development",
    description:
      "Responsive and interactive websites using modern web technologies and clean development practices.",
    tags: ["HTML", "CSS", "JAVASCRIPT", "REACT"]
  },
  {
    icon: "◈",
    number: "02",
    title: "Web Design",
    description:
      "Elegant interfaces focused on typography, hierarchy, usability and visual identity.",
    tags: ["UI", "UX", "RESPONSIVE", "VISUAL"]
  },
  {
    icon: "↗",
    number: "03",
    title: "Marketing & Strategy",
    description:
      "Creative digital thinking supported by knowledge in commerce, communication and marketing.",
    tags: ["BRAND", "STRATEGY", "COMMERCE"]
  }
];

function Services() {
  return (
    <section className="section relative px-6 py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-6xl">
        <div className="reveal fade-up mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Badge variant="rose" size="sm" className="mb-4">03 / Services · What I offer</Badge>
            <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
              From idea
              <br />
              <em className="font-serif italic text-berry">to execution.</em>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted">
            I combine development, design and business knowledge to create
            digital experiences with a purpose.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.number}
              className="reveal fade-up group relative overflow-hidden rounded-2xl border border-line-soft bg-white p-7 shadow-[0_6px_18px_rgba(61,16,36,0.06)] transition-all hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(86,24,48,0.18)]"
            >
              <span className="pointer-events-none absolute -right-2 top-2 font-serif text-7xl font-bold text-rose-soft/40 transition-transform duration-300 group-hover:scale-110" aria-hidden>
                {service.number}
              </span>

              <div className="relative mb-6 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-berry/12 to-rose/25 font-serif text-xl text-berry transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                {service.icon}
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                Service / {service.number}
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-berry/20 bg-berry/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-berry"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
