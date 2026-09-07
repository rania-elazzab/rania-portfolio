import { cn } from "@/lib/utils"

// Aceternity-style CardHoverEffect — a grid where the displayed icon
// and color react to which card is currently hovered/focused.
export function CardHoverEffect({ items, className }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", className)}>
      {items.map((item, idx) => (
        <div
          key={item.title}
          data-aos="zoom-y-out"
          data-aos-delay={idx * 100}
          className="relative group flex h-full w-full cursor-pointer overflow-hidden rounded-2xl border border-line-soft bg-white p-6 shadow-[0_6px_18px_rgba(61,16,36,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(86,24,48,0.18)]"
        >
          {/* hover gradient wash */}
          <div className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-rose-soft/0 blur-2xl transition-all duration-500 group-hover:bg-rose-soft/60" />

          {item.icon ? (
            <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-berry/12 to-rose/20 text-berry transition-transform duration-300 group-hover:-translate-y-1">
              {item.icon}
            </div>
          ) : null}

          <div>
            <h4 className="mb-2 font-serif text-lg font-semibold text-ink">
              {item.title}
            </h4>
            <p className="text-sm leading-relaxed text-muted">{item.description}</p>
          </div>

          {item.link ? (
            <a
              href={item.link}
              className="absolute inset-0 z-10"
              aria-label={item.title}
            />
          ) : null}
        </div>
      ))}
    </div>
  )
}
