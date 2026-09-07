import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-plum-950 text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-berry/30 blur-[130px]" aria-hidden />
      <div className="pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-rose/20 blur-[130px]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="border-b border-white/10 py-14 text-center">
          <a
            href="#home"
            className="group inline-flex flex-col items-center gap-3"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-rose-soft">
              Have a project?
            </span>
            <span className="group inline-flex items-center gap-3 font-serif text-4xl font-bold text-white transition-colors hover:text-rose-soft sm:text-5xl">
              Let's work together
              <ArrowUpRight className="size-8 text-rose-soft transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-10 py-12 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose to-berry font-serif text-xl font-bold text-white shadow-lg">
              R
            </span>
            <div>
              <div className="font-serif text-2xl font-bold">
                RANIA<span className="text-rose-soft">.</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-soft/70">
                Web Developer · Designer · Marketing
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:flex sm:gap-20">
            <nav aria-label="Footer">
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.25em] text-rose-soft/60">Navigate</span>
              <div className="flex flex-col gap-3">
                <a href="#about" className="w-fit text-sm text-rose-soft/90 transition-colors hover:text-white">About</a>
                <a href="#skills" className="w-fit text-sm text-rose-soft/90 transition-colors hover:text-white">Skills</a>
                <a href="#projects" className="w-fit text-sm text-rose-soft/90 transition-colors hover:text-white">Projects</a>
                <a href="#contact" className="w-fit text-sm text-rose-soft/90 transition-colors hover:text-white">Contact</a>
              </div>
            </nav>

            <div>
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.25em] text-rose-soft/60">Social</span>
              <div className="flex flex-col gap-3">
                <a href="https://github.com/rania-elazzab" target="_blank" rel="noreferrer" className="w-fit text-sm text-rose-soft/90 transition-colors hover:text-white">GitHub</a>
                <a href="https://www.linkedin.com/in/rania-el-azzab-29200742b" target="_blank" rel="noreferrer" className="w-fit text-sm text-rose-soft/90 transition-colors hover:text-white">LinkedIn</a>
                <a href="mailto:raniaelazzab31@gmail.com" className="w-fit text-sm text-rose-soft/90 transition-colors hover:text-white">Email</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-[10px] font-bold uppercase tracking-[0.16em] text-rose-soft/60 sm:flex-row">
          <span>© 2026 Rania El Azzab</span>
          <span>Built with React &amp; Creativity</span>
          <a href="#home" className="transition-colors hover:text-rose-soft">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
