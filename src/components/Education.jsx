const ITEMS = [
  {
    icon: "🎓",
    tag: "UNIVERSITY",
    title: "Hassan II University — FSJES Ain Chock",
    strong: "Commerce & Marketing",
    text: "Developing knowledge in commerce, business, marketing and commercial strategy.",
    date: "CURRENT"
  },
  {
    icon: "</>",
    tag: "TECHNICAL STUDIES",
    title: "Web Development",
    strong: "Currently Studying Web Development",
    text: "Developing practical skills in HTML, CSS, JavaScript, React and GitHub through real projects.",
    date: "NOW",
    codeIcon: true
  },
  {
    icon: "A",
    tag: "LANGUAGE",
    title: "English Castle",
    strong: "English — B2 Level",
    text: "B1 Certificate and continuing English studies with a focus on communication and fluency.",
    date: "B2",
    grad: true
  },
  {
    icon: "+",
    tag: "TRAINING",
    title: "Red Crescent",
    strong: "Training Diploma",
    text: "Completed professional training through the Red Crescent.",
    date: "CERT.",
    done: true
  }
];

function Education() {
  return (
    <section className="section education" id="education">
      <div className="section-heading reveal fade-up">
        <span className="eyebrow">06 / EDUCATION · LEARNING JOURNEY</span>
        <h2>
          Building my
          <br />
          <em>foundation.</em>
        </h2>
      </div>

      <div className="timeline">
        {ITEMS.map((item, index) => (
          <div className="timeline-item reveal fade-up" key={item.title}>
            <div
              className={`timeline-dot ${item.codeIcon ? "code" : ""} ${
                item.grad ? "grad" : ""
              } ${item.done ? "done" : ""}`}
            >
              <span>{item.icon}</span>
            </div>

            <div className="timeline-marker" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="timeline-content">
              <span className="timeline-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <strong>{item.strong}</strong>
              <p>{item.text}</p>
            </div>

            <div className="timeline-date">{item.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
