const experiences = [
  {
    role: "Wireless Testing Intern",
    company: "UL Solutions",
    period: "2026 — Present",
    description:
      "Execute wireless and RF testing procedures, record technical results, analyze test data, and support repeatable lab testing processes.",
  },
  {
    role: "AI Engineer",
    company: "BotAgents LLC",
    period: "2026",
    description:
      "Worked on AI applications using Python, machine learning, and Generative AI workflows.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <p className="section-label">Experience</p>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-item" key={experience.company}>
            <div>
              <h3>{experience.role}</h3>
              <p>{experience.company}</p>
            </div>

            <p className="experience-period">{experience.period}</p>

            <p className="experience-description">
              {experience.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}