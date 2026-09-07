import { projects } from "../data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function ProjectCard({ project, index }) {
  const alternate = index % 2 === 1;

  return (
    <article
      key={project.number}
      className={`reveal fade-up grid items-center gap-10 lg:grid-cols-2 ${
        alternate ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Visual / browser mockup */}
      <div className="relative group/card">
        <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-br from-rose-soft/40 to-berry-soft/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover/card:opacity-100" aria-hidden />

        <div className="relative overflow-hidden rounded-2xl border border-line-soft bg-white shadow-[0_16px_44px_rgba(86,24,48,0.14)]">
          <div className="flex items-center justify-between border-b border-line-soft bg-cream-2/60 px-5 py-2.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
              /{project.number}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-berry">
              {project.category}
            </span>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-plum-800 via-plum-700 to-berry p-6">
            <div className="pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden>
              <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:32px_32px]" />
            </div>

            {/* fake window */}
            <div className="relative mx-auto flex h-full max-w-sm flex-col overflow-hidden rounded-xl bg-white p-4 shadow-2xl">
              <span className="flex gap-1.5 pb-3" aria-hidden>
                <i className="size-2.5 rounded-full bg-rose-soft"></i>
                <i className="size-2.5 rounded-full bg-berry-soft"></i>
                <i className="size-2.5 rounded-full bg-berry"></i>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-berry">Rania</span>
              <strong className="mt-1 font-serif text-xl font-bold text-plum-900">{project.title}</strong>
              <div className="mt-4 space-y-2">
                <i className="block h-2.5 w-11/12 rounded-full bg-rose-soft/70"></i>
                <i className="block h-2.5 w-4/5 rounded-full bg-rose-soft/50"></i>
                <i className="block h-2.5 w-3/4 rounded-full bg-rose-soft/30"></i>
              </div>
              <span className="mt-auto block h-8 w-1/2 rounded-full bg-gradient-to-r from-berry to-plum-700" aria-hidden />
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-line-soft px-5 py-2.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">Rania El Azzab</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">© 2026</span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div>
        <Badge variant={project.status === "PUBLISHED" ? "default" : "soft"} size="sm" className="mb-4">
          <i className={`${project.status === "PUBLISHED" ? "bg-emerald-400" : "bg-rose-400"} size-1.5 rounded-full`} aria-hidden />
          {project.status}
        </Badge>

        <h3 className="mb-3 font-serif text-3xl font-bold text-ink sm:text-4xl">{project.title}</h3>
        <p className="mb-6 max-w-lg text-base leading-relaxed text-muted">{project.description}</p>

        <div className="mb-7 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-cream-2 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-plum-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.live ? (
            <Button asChild>
              <a href={project.live} className="inline-flex items-center gap-2">
                Live demo <span aria-hidden>↗</span>
              </a>
            </Button>
          ) : (
            <span className="inline-flex h-11 items-center rounded-full border border-line bg-cream-2 px-5 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
              Coming soon
            </span>
          )}

          {project.github ? (
            <Button asChild variant="outline">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="size-4"
                />
                GitHub
              </a>
            </Button>
          ) : (
            <span className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-transparent px-5 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-2">
              GitHub
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="section relative px-6 py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-6xl">
        <div className="reveal fade-up mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Badge variant="rose" size="sm" className="mb-4">05 / Projects · Selected work</Badge>
            <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
              Things I've
              <br />
              <em className="font-serif italic text-berry">been building.</em>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted">
            A selection of personal and academic projects that show how I turn
            ideas into functional, considered interfaces.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.number} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
