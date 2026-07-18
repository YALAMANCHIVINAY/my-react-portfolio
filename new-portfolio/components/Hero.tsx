"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hello, I&apos;m Vinay
      </motion.p>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        I build intelligent
        <br />
        digital experiences
        <br />
        using AI.
      </motion.h1>

      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
      >
        <div className="hero-copy">
          <p className="availability">
            <span className="status-dot" />
            Available for AI/ML opportunities
          </p>

          <p className="hero-description">
            AI/ML Engineer focused on Generative AI, machine learning,
            Python, APIs, and practical products that solve real problems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore my work
            </a>

            <a
              href="/Vinay_Yalamanchi_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              View resume
            </a>
          </div>
        </div>

        <a href="#projects" className="circle-link" aria-label="View projects">
          <ArrowDownRight size={30} />
        </a>
      </motion.div>
    </section>
  );
}