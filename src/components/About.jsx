const CARDS = [
  ["01", "CREATIVE", "Visual thinking & unique ideas"],
  ["02", "TECHNICAL", "Modern web development skills"],
  ["03", "BUSINESS", "Commerce & marketing mindset"]
];

const TRAITS = [
  "Clean, thoughtful interfaces",
  "Design meets business logic",
  "Always learning by building"
];

function About() {
  return (
    <section className="section about" id="about" data-index="01/about">
      <div className="section-heading reveal fade-up">
        <span className="eyebrow">01 / ABOUT · WHO I AM</span>
        <h2>
          More than
          <br />
          <em>a developer.</em>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-column reveal fade-right">
          <div className="about-quote">
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <p>
              I'm Rania El Azzab, a creative learner exploring the
              intersection of technology, design and business.
            </p>
          </div>

          <div className="about-ledger">
            <div className="ledger-row">
              <span>ROLE</span>
              <strong>Web Developer & Designer</strong>
            </div>
            <div className="ledger-row">
              <span>BASE</span>
              <strong>Morocco</strong>
            </div>
            <div className="ledger-row">
              <span>FOCUS</span>
              <strong>Front-End · UI · Marketing</strong>
            </div>
            <div className="ledger-row">
              <span>STATUS</span>
              <strong>
                <i className="pulse-dot"></i> Available
              </strong>
            </div>
          </div>

          <ul className="about-traits">
            {TRAITS.map((trait) => (
              <li key={trait}>
                <i aria-hidden="true">✦</i>
                {trait}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-copy reveal fade-left">
          <h3>
            Technology meets creativity<span>.</span>
          </h3>
          <p>
            I study Commerce &amp; Marketing while developing my skills in Web
            Development. This combination helps me understand both how a
            digital product works and why it matters to people.
          </p>
          <p>
            I enjoy transforming ideas into modern interfaces with clear
            communication, strong visuals and meaningful interactions.
          </p>

          <a href="#skills" className="arrow-link">
            EXPLORE MY SKILLS
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="about-cards reveal fade-up">
        {CARDS.map(([number, title, text]) => (
          <div className="about-card" key={number}>
            <span>{number}</span>
            <strong>{title}</strong>
            <p>{text}</p>
            <i className="card-arrow" aria-hidden="true">
              ↗
            </i>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
