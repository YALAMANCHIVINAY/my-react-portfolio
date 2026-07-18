"use client";

import { motion } from "framer-motion";

const groups = [
  {
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
      <div className="section-heading">
        <p className="skills-label">Capabilities</p>
        <p className="skills-subtitle">Tools behind the work.</p>
      </div>

      <div className="skills-grid">
        {groups.map((group, index) => (
          <motion.div
            className="skill-group"
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}