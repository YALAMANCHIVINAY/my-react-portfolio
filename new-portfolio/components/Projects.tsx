import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI-Assisted Interview Simulator",
    description:
      "An intelligent interview preparation platform that generates role-specific questions, evaluates responses, and provides actionable feedback.",
    technologies: ["Python", "Generative AI", "Streamlit", "NLP"],
    href: "#",
  },
  {
    number: "02",
    title: "Healthcare Prediction System",
    description:
      "A machine-learning application that analyzes healthcare information and produces data-driven predictions through an accessible interface.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    href: "#",
  },
  {
    number: "03",
    title: "College Management System",
    description:
      "A backend application for managing students, courses, faculty records, and academic operations through structured REST APIs.",
    technologies: ["FastAPI", "Python", "SQL", "REST API"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <p className="section-label">Selected work</p>
        <h2>Projects built with purpose.</h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">{project.number}</span>

              <a
                className="project-link"
                href={project.href}
                aria-label={`Open ${project.title}`}
              >
                <ArrowUpRight size={28} />
              </a>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="technology-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}