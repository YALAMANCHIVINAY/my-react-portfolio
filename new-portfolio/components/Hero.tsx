import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <p className="eyebrow">Hello, I&apos;m Vinay</p>

      <h1 className="hero-title">
        I build intelligent
        <br />
        digital experiences
        <br />
        using AI.
      </h1>

      <div className="hero-bottom">
        <p className="hero-description">
          AI/ML Engineer focused on Generative AI, machine learning, Python,
          cloud applications, and practical products that solve real problems.
        </p>

        <a className="circle-link" href="#projects" aria-label="View projects">
          <ArrowDownRight size={30} />
        </a>
      </div>
    </section>
  );
}