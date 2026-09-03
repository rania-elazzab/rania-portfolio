import { projects } from "../data";

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-heading split-head reveal fade-up">
        <div>
          <span className="eyebrow">05 / PROJECTS · SELECTED WORK</span>
          <h2>
            Things I've
            <br />
            <em>been building.</em>
          </h2>
        </div>
        <p className="section-lede">
          A selection of personal and academic projects that show how I turn
          ideas into functional, considered interfaces.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <article
            className={`project reveal ${index % 2 ? "alternate" : ""} ${
              project.className
            }`}
            key={project.number}
          >
            <div className="project-visual">
              <div className="project-visual-top">
                <span className="project-num">/{project.number}</span>
                <span className="project-cat">{project.category}</span>
              </div>

              <div className="project-mock">
                <div className="mock-glare" aria-hidden="true"></div>
                <div className="mock-circles" aria-hidden="true">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <span className="mock-brand">RANIA</span>
                <strong className="mock-title">{project.title}</strong>
                <div className="mock-bars" aria-hidden="true">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>

              <div className="project-visual-foot">
                <span>RANIA EL AZZAB</span>
                <span>© 2026</span>
              </div>

              <div className="project-arrow" aria-hidden="true">
                ↗
              </div>
            </div>

            <div className="project-info">
              <div className="project-status">
                <i aria-hidden="true"></i>
                {project.status}
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.live ? (
                  <a href={project.live} className="btn btn-primary btn-sm">
                    LIVE DEMO <i aria-hidden="true">↗</i>
                  </a>
                ) : (
                  <span className="btn btn-disabled">COMING SOON</span>
                )}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost btn-sm"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="GitHub"
                    />
                    GITHUB
                  </a>
                ) : (
                  <span className="btn btn-ghost btn-disabled">GITHUB</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
