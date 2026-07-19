"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026 — Present",
    role: "Software Engineer",
    company: "UL Solutions",
    description:
      "Worked on software application development using Python, backend technologies, REST APIs, databases, debugging, testing, and data-driven problem solving.",
  },
  {
    year: "2021 — 2023",
    role: "AI Engineer",
    company: "Clarosoft Solutions",
    description:
      "Worked on AI-focused application development using Python, machine learning concepts, Generative AI workflows, and data-driven problem solving.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-header">
        <div>
          <p className="section-index">03</p>
          <p className="section-label">Experience</p>
        </div>

        <h2>
          Learning, building,
          <br />
          and contributing.
        </h2>
      </div>

      <div className="timeline">
        {experiences.map((experience, index) => (
          <motion.article
            className="timeline-item"
            key={`${experience.company}-${experience.role}`}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
            }}
          >
            <span className="timeline-dot" />

            <div className="timeline-year">{experience.year}</div>

            <div className="timeline-content">
              <h3>{experience.role}</h3>

              <p className="company-name">{experience.company}</p>

              <p className="experience-description">
                {experience.description}
              </p>
            </div>

            <span className="experience-number">0{index + 1}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}