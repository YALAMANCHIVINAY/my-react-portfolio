"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "AI & Machine Learning",
    skills: [
      "Generative AI",
      "Machine Learning",
      "NLP",
      "RAG",
      "Scikit-learn",
      "Model Evaluation",
    ],
  },
  {
    number: "02",
    title: "Development",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "SQL",
      "React",
      "Next.js",
    ],
  },
  {
    number: "03",
    title: "Data & Tools",
    skills: [
      "Pandas",
      "NumPy",
      "Git",
      "GitHub",
      "Docker",
      "Streamlit",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <div>
          <p className="section-index">04</p>
          <p className="section-label">Capabilities</p>
        </div>

        <h2>Tools behind the work.</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.article
            className="skill-group"
            key={group.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: index * 0.1,
            }}
            whileHover={{ y: -6 }}
          >
            <div className="skill-card-top">
              <span>{group.number}</span>
              <span>+</span>
            </div>

            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}