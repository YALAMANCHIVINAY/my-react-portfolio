"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026 — Present",
    role: "Software Engineer",
    company: "UL Solutions",
    description:
      " Worked on software application development using Python, backend technologies, REST APIs, databases, debugging, testing, and data-driven problem solving.",
  },
  {
    year: "2021-2023",
    role: "AI Engineer",
    company: "Clarosoft PVT LTD",
    description:
      "Worked on AI-focused application development using Python, machine learning concepts, Generative AI workflows, and data-driven problem solving.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-heading">
        <p className="section-label">Experience</p>
        <h2>Learning, building, and contributing.</h2>
      </div>

      <div className="timeline">
        {experiences.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
          >
            <span className="timeline-dot" />

            <div className="timeline-year">{item.year}</div>

            <div className="timeline-content">
              <h3>{item.role}</h3>
              <p className="company-name">{item.company}</p>
              <p>{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}