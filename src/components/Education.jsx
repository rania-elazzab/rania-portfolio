import { Badge } from "@/components/ui/badge";

const ITEMS = [
  {
    icon: "🎓",
    tag: "UNIVERSITY",
    title: "Hassan II University — FSJES Ain Chock",
    strong: "Commerce & Marketing",
    text: "Developing knowledge in commerce, business, marketing and commercial strategy.",
    date: "CURRENT"
  },
  {
    icon: "</>",
    tag: "TECHNICAL STUDIES",
    title: "Web Development",
    strong: "Currently Studying Web Development",
    text: "Developing practical skills in HTML, CSS, JavaScript, React and GitHub through real projects.",
    date: "NOW",
    codeIcon: true
  },
  {
    icon: "A",
    tag: "LANGUAGE",
    title: "English Castle",
    strong: "English — B2 Level",
    text: "B1 Certificate and continuing English studies with a focus on communication and fluency.",
    date: "B2",
    grad: true
  },
  {
    icon: "+",
    tag: "TRAINING",
    title: "Red Crescent",
    strong: "Training Diploma",
    text: "Completed professional training through the Red Crescent.",
    date: "CERT.",
    done: true
  }
];

function Education() {
  return (
    <section className="section relative bg-cream-2/60 px-6 py-24 sm:py-32" id="education">
      <div className="mx-auto max-w-4xl">
        <div className="reveal fade-up mb-16 flex flex-col items-center text-center">
          <Badge variant="rose" size="sm" className="mb-4">06 / Education · Learning journey</Badge>
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
            Building my
            <br />
            <em className="font-serif italic text-berry">foundation.</em>
          </h2>
        </div>

        <div className="relative">
          <span className="pointer-events-none absolute left-6 top-0 bottom-0 hidden w-px bg-gradient-to-b from-rose-soft via-berry-soft to-berry sm:block" aria-hidden />

          <div className="space-y-10">
            {ITEMS.map((item, index) => (
              <div
                key={item.title}
                className="reveal fade-up relative flex items-start gap-6"
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div
                  className={`relative z-10 flex size-12 shrink-0 items-center justify-center rounded-xl font-serif text-lg text-white shadow-lg ${
                    item.done
                      ? "bg-gradient-to-br from-emerald-400 to-teal-500"
                      : item.codeIcon
                      ? "bg-gradient-to-br from-berry to-plum-700"
                      : item.grad
                      ? "bg-gradient-to-br from-rose to-berry"
                      : "bg-gradient-to-br from-rose-soft to-berry-soft"
                  }`}
                >
                  {item.icon}
                </div>

                <div className="min-w-0 flex-1 rounded-2xl border border-line-soft bg-white p-6 shadow-[0_6px_18px_rgba(61,16,36,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(86,24,48,0.14)]">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-berry/8 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-berry">
                      {item.tag}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold leading-snug text-ink">{item.title}</h3>
                  <strong className="mt-1 block text-sm font-bold text-berry">{item.strong}</strong>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>

                <span className="hidden shrink-0 rounded-full border border-berry/25 bg-berry/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-berry sm:block">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
