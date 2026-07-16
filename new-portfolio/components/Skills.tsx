const skillGroups = [
  {
    title: "AI & Machine Learning",
    skills: [
      "Generative AI",
      "Machine Learning",
      "Natural Language Processing",
      "RAG",
      "Scikit-learn",
      "Model Evaluation",
    ],
  },
  {
    title: "Programming & Data",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Streamlit",
      "Azure",
      "AWS",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <p className="section-label">Capabilities</p>
        <h2>Technologies I work with.</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}