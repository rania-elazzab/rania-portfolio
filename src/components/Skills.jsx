import { skills } from "../data";

function SkillRing({ level }) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="skill-ring" style={{ "--ring-level": level }}>
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <circle className="ring-track" cx="40" cy="40" r={radius} />
        <circle
          className="ring-progress"
          cx="40"
          cy="40"
          r={radius}
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
      </svg>
      <div className="ring-value">{level}%</div>
    </div>
  );
}

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-heading centered reveal fade-up">
        <span className="eyebrow">02 / SKILLS · MY TOOLKIT</span>
        <h2>
          Capabilities that
          <br />
          <em>bring ideas to life.</em>
        </h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <article
            className="skill-card reveal fade-up"
            key={skill.name}
            style={{ "--card-delay": `${index * 0.07}s`, "--level": `${skill.level}%` }}
          >
            <div className="skill-card-top">
              <div className="skill-icon">
                <img src={skill.icon} alt={`${skill.name} logo`} />
              </div>
              <span className="skill-index">
                0{String(index + 1).padStart(1, "0")}
              </span>
            </div>

            <div className="skill-gauge">
              <SkillRing level={skill.level} />
              <div className="skill-gauge-name">
                <h3>{skill.name}</h3>
                <span>{skill.description}</span>
              </div>
            </div>

            <div className="skill-bar">
              <div className="skill-fill"></div>
            </div>

            <div className="skill-foot">
              <span>PROFICIENCY</span>
              <span className="skill-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
