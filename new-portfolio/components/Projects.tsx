"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "AI / NLP",
    title: "AI-Assisted Interview Simulator",
    description:
      "An intelligent interview preparation platform that evaluates candidate responses and provides structured feedback on relevance, communication, and delivery.",
    technologies: ["Python", "Generative AI", "NLP", "Streamlit"],
    link: "#",
    className: "project-one",
  },
  {
    number: "02",
    category: "MACHINE LEARNING",
    title: "Healthcare Prediction System",
    description:
      "A machine-learning application designed to generate data-driven healthcare predictions through a simple and accessible user experience.",
    technologies: ["Python", "Machine Learning", "FastAPI", "React"],
    link: "#",
    className: "project-two",
  },
  {
    number: "03",
    category: "AI / RECRUITMENT",
    title: "AI Resume Ranker",
    description:
      "An AI-powered recruitment application that compares resumes with job requirements and ranks candidates based on relevance and skills alignment.",
    technologies: ["Python", "NLP", "FastAPI", "AI"],
    link: "#",
    className: "project-three",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <div>
          <p className="section-index">01</p>
          <p className="section-label">Selected Work</p>
        </div>

        <h2>
          Projects built
          <br />
          with purpose.
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className={`project-card ${project.className}`}
            key={project.number}
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="project-top">
              <div>
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <motion.a
                href={project.link}
                className="project-arrow"
                aria-label={`Open ${project.title}`}
                whileHover={{ rotate: 45 }}
              >
                <ArrowUpRight size={24} />
              </motion.a>
            </div>

            <div className="project-visual">
              <div className="project-visual-circle" />
              <span>{project.number}</span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}