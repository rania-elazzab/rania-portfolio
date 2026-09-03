function Hero() {
  const handleMove = (event) => {
    const frame = event.currentTarget;
    const rect = frame.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    frame.style.setProperty("--tiltX", `${x * 7}deg`);
    frame.style.setProperty("--tiltY", `${y * 7}deg`);
  };

  const handleLeave = (event) => {
    event.currentTarget.style.setProperty("--tiltX", "0deg");
    event.currentTarget.style.setProperty("--tiltY", "0deg");
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-orb orb-one"></div>
        <div className="hero-orb orb-two"></div>
        <div className="hero-orb orb-three"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-left">
        <div className="availability reveal fade-up">
          <span className="pulse-dot"></span>
          AVAILABLE FOR CREATIVE PROJECTS
        </div>

        <p className="hero-eyebrow reveal fade-up delay-1">
          WEB DEVELOPER · DESIGNER · MARKETING
        </p>

        <h1 className="hero-title">
          <span className="hero-name-line reveal fade-up delay-1">
            RANIA
          </span>
          <span className="hero-name-accent reveal fade-up delay-2">
            EL AZZAB
          </span>
          <span className="hero-role reveal fade-up delay-3">
            I create <em>digital experiences</em>
          </span>
        </h1>

        <p className="hero-description reveal fade-up delay-3">
          Combining technology, creativity and business thinking to build
          modern digital experiences that are functional, elegant and
          meaningful.
        </p>

        <div className="hero-actions reveal fade-up delay-4">
          <a href="#projects" className="btn btn-primary">
            <span>VIEW MY WORK</span>
            <i aria-hidden="true">↗</i>
          </a>
          <a href="#contact" className="btn btn-ghost">
            CONTACT ME
          </a>
        </div>

        <div className="hero-stats reveal fade-up delay-4">
          <div className="stat">
            <strong>03+</strong>
            <span>PROJECTS</span>
          </div>
          <div className="stat">
            <strong>07</strong>
            <span>SKILLS</span>
          </div>
          <div className="stat">
            <strong>B2</strong>
            <span>ENGLISH</span>
          </div>
        </div>
      </div>

      <div className="hero-right reveal fade-right">
        <div className="photo-ring ring-outer" aria-hidden="true"></div>
        <div className="photo-ring ring-inner" aria-hidden="true"></div>

        <div
          className="photo-frame"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <div className="photo-index">PORTFOLIO · Nº 2026</div>
          <img src="hero.jpg" alt="Rania El Azzab" className="hero-photo" />

          <div className="photo-caption">
            <span className="caption-name">RANIA EL AZZAB</span>
            <span className="caption-role" aria-hidden="true">
              ↗
            </span>
          </div>
        </div>

        <div className="floating-chip" aria-hidden="true">
          <span className="chip-label">BASED IN</span>
          <strong>MOROCCO 🇲🇦</strong>
        </div>

        <div className="floating-chip chip-skill" aria-hidden="true">
          <span className="chip-label">FOCUS</span>
          <strong>FRONT-END</strong>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>SCROLL</span>
        <span className="scroll-mouse"></span>
      </div>
    </section>
  );
}

export default Hero;
