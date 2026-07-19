"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-decoration hero-decoration-one" />
      <div className="hero-decoration hero-decoration-two" />

      <motion.div
        className="hero-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <p className="hero-label">Hello, I&apos;m Vinay</p>

        <p className="hero-location">
          AI / SOFTWARE ENGINEER
          <br />
          UNITED STATES
        </p>
      </motion.div>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        I build intelligent
        <br />
        digital experiences
        <br />
        using <span>AI.</span>
      </motion.h1>

      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.4 }}
      >
        <div className="hero-copy">
          <p className="availability">
            <span className="status-dot" />
            Available for AI/ML opportunities
          </p>

          <p className="hero-description">
            AI/ML Engineer and Software Engineer focused on building practical
            products with Generative AI, machine learning, Python, APIs, and
            modern software technologies.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              Explore my work
            </a>

            <a
              className="secondary-button"
              href="/Vinay_Yalamanchi_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View resume
            </a>
          </div>
        </div>

        <motion.a
          href="#projects"
          className="circle-link"
          aria-label="Explore projects"
          whileHover={{ rotate: 45, scale: 1.05 }}
        >
          <ArrowDownRight size={31} />
        </motion.a>
      </motion.div>

      <div className="hero-scroll-text">
        <span>SCROLL TO EXPLORE</span>
        <span>↓</span>
      </div>
    </section>
  );
}
