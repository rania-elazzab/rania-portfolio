const SERVICES = [
  {
    icon: "</>",
    number: "01",
    title: "Web Development",
    description:
      "Responsive and interactive websites using modern web technologies and clean development practices.",
    tags: ["HTML", "CSS", "JAVASCRIPT", "REACT"]
  },
  {
    icon: "◈",
    number: "02",
    title: "Web Design",
    description:
      "Elegant interfaces focused on typography, hierarchy, usability and visual identity.",
    tags: ["UI", "UX", "RESPONSIVE", "VISUAL"]
  },
  {
    icon: "↗",
    number: "03",
    title: "Marketing & Strategy",
    description:
      "Creative digital thinking supported by knowledge in commerce, communication and marketing.",
    tags: ["BRAND", "STRATEGY", "COMMERCE"]
  }
];

function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-heading split-head reveal fade-up">
        <div>
          <span className="eyebrow">03 / SERVICES · WHAT I OFFER</span>
          <h2>
            From idea
            <br />
            <em>to execution.</em>
          </h2>
        </div>
        <p className="section-lede">
          I combine development, design and business knowledge to create
          digital experiences with a purpose.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((service) => (
          <article className="service reveal fade-up" key={service.number}>
            <span className="service-ghost" aria-hidden="true">
              {service.number}
            </span>
            <div className="service-icon" aria-hidden="true">
              {service.icon}
            </div>
            <span className="service-index">SERVICE / {service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-tags">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
