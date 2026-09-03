function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <a href="#home" className="footer-cta">
          <span className="footer-cta-label">Have a project?</span>
          <span className="footer-cta-main">
            Let's work together <i aria-hidden="true">↗</i>
          </span>
        </a>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <span className="brand-mark inverted" aria-hidden="true">
            R
          </span>
          <div>
            <div className="footer-logo">RANIA<span>.</span></div>
            <p>WEB DEVELOPER · DESIGNER · MARKETING</p>
          </div>
        </div>

        <div className="footer-columns">
          <nav aria-label="Footer">
            <span className="footer-heading">NAVIGATE</span>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <div>
            <span className="footer-heading">SOCIAL</span>
            <a
              href="https://github.com/rania-elazzab"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rania-el-azzab-29200742b"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:raniaelazzab31@gmail.com">Email</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 RANIA EL AZZAB</span>
        <span>BUILT WITH REACT &amp; CREATIVITY</span>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
