function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-glow" aria-hidden="true"></div>
      <div className="contact-grid-bg" aria-hidden="true"></div>

      <div className="section-heading contact-heading reveal fade-up">
        <span className="eyebrow eyebrow-light">08 / CONTACT · LET'S WORK TOGETHER</span>
        <h2>
          HAVE AN IDEA?
          <br />
          <em>LET'S BUILD IT.</em>
        </h2>
      </div>

      <div className="contact-shell">
        <div className="contact-info reveal fade-right">
          <p className="contact-intro">
            Have an idea, project or collaboration in mind? Send me a message
            and let's start a conversation.
          </p>

          <a href="mailto:raniaelazzab31@gmail.com" className="contact-email">
            <span className="email-icon" aria-hidden="true">
              ✉
            </span>
            <span className="email-text">
              <small>EMAIL</small>
              <strong>raniaelazzab31@gmail.com</strong>
            </span>
            <span className="email-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <div className="social-links">
            <a
              href="https://github.com/rania-elazzab"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
              />
              <span>GITHUB</span>
              <b aria-hidden="true">↗</b>
            </a>

            <a
              href="https://www.linkedin.com/in/rania-el-azzab-29200742b"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
              />
              <span>LINKEDIN</span>
              <b aria-hidden="true">↗</b>
            </a>
          </div>
        </div>

        <form
          className="contact-form reveal fade-left"
          action="https://formsubmit.co/raniaelazzab31@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Portfolio Message" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="field">
            <label htmlFor="name">YOUR NAME</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="email">YOUR EMAIL</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="message">YOUR MESSAGE</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-submit">
            <span>SEND MESSAGE</span>
            <i aria-hidden="true">↗</i>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
