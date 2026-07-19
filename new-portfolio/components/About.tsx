"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-label">
        <p className="section-index">02</p>
        <p className="section-label">About Me</p>
      </div>

      <div className="about-grid">
        <motion.h2
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Turning technical ideas into{" "}
          <span className="accent-text">practical AI solutions.</span>
        </motion.h2>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <p className="about-lead">
            I&apos;m a Computer Science graduate focused on artificial
            intelligence, machine learning, backend development, and
            data-driven software.
          </p>

          <p>
            I enjoy taking complex technical problems and transforming them
            into reliable applications that are useful, understandable, and
            designed around real-world needs.
          </p>

          <p>
            My work spans Generative AI, intelligent interview systems,
            healthcare prediction, REST APIs, data analysis, and software
            development.
          </p>

          <div className="about-stat-grid">
            <div>
              <strong>AI</strong>
              <span>Machine Learning & Generative AI</span>
            </div>

            <div>
              <strong>DEV</strong>
              <span>Backend & Full-Stack Development</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
