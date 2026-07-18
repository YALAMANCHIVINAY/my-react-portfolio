"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI-Assisted Interview Simulator",
    description:
      "An intelligent interview preparation platform that evaluates responses and provides structured feedback on relevance, delivery, and communication quality.",
    technologies: ["Python", "AI", "NLP", "Streamlit"],
    link: "#",
  },
  {
    number: "02",
    title: "Healthcare Prediction System",
    description:
      "A machine-learning application designed to generate data-driven healthcare predictions through a simple and accessible interface.",
    technologies: ["Python", "Machine Learning", "FastAPI", "React"],
    link: "#",
  },
  {
    number: "03",
    title: "AI Resume Ranker",
    description:
      "An AI-powered recruitment application that compares resumes with job requirements and ranks candidates based on relevance.",
    technologies: ["Python", "NLP", "FastAPI", "AI"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="projects-heading">
        <p className="section-label">Selected work</p>

        <h2>
          Projects built
          <br />
          with purpose.
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="project-top">
              <span className="project-number">{project.number}</span>

              <a
                href={project.link}
                className="project-arrow"
                aria-label={`Open ${project.title}`}
              >
                <ArrowUpRight size={24} />
              </a>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
