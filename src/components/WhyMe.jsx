const ITEMS = [
  {
    number: "01",
    title: "CREATIVE",
    text: "I focus on creating interfaces that feel unique, memorable and visually strong."
  },
  {
    number: "02",
    title: "TECHNICAL",
    text: "I learn by building real projects and constantly improving my development skills."
  },
  {
    number: "03",
    title: "BUSINESS MINDED",
    text: "My Commerce & Marketing studies help me understand the business purpose behind digital experiences."
  }
];

function WhyMe() {
  return (
    <section className="why-section">
      <div className="why-glow" aria-hidden="true"></div>

      <span className="eyebrow eyebrow-light reveal fade-up">
        04 / WHY ME · MY DIFFERENCE
      </span>

      <div className="why-statement reveal fade-up">
        <h2>
          I don't just build websites<span className="period">.</span>
          <br />
          <em>I build</em> experiences with intent.
        </h2>
      </div>

      <div className="why-grid">
        {ITEMS.map((item) => (
          <article className="why-item reveal fade-up" key={item.number}>
            <span className="why-num">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <span className="why-hover-line" aria-hidden="true"></span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyMe;
