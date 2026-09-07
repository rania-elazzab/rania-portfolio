import { Badge } from "@/components/ui/badge";

function Approach() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,205,217,0.45),transparent_60%)]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <div className="reveal fade-up mb-12 flex justify-center">
          <Badge variant="rose" size="sm">07 / My approach</Badge>
        </div>

        <h2 className="font-serif font-bold leading-[0.95]">
          <span className="reveal fade-up block text-5xl text-muted sm:text-7xl md:text-8xl">
            Think<span className="text-rose-soft">.</span>
          </span>
          <span className="reveal fade-up delay-1 block text-5xl text-transparent sm:text-7xl md:text-8xl [-webkit-text-stroke:2px_var(--color-berry)]">
            Design<span className="text-berry">.</span>
          </span>
          <span className="reveal fade-up delay-2 block bg-gradient-to-r from-berry to-plum-700 bg-clip-text text-5xl text-transparent sm:text-7xl md:text-8xl">
            Build<span className="text-rose-soft">.</span>
          </span>
        </h2>

        <p className="reveal fade-up delay-3 mx-auto mt-12 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          I start with the idea, understand the purpose, shape the visual
          direction and transform it into a functional digital experience.
        </p>
      </div>
    </section>
  );
}

export default Approach;
