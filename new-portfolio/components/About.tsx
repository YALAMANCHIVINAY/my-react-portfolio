"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <p className="section-label">About me</p>

      <div className="about-grid">
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Turning technical ideas into practical AI solutions.
        </motion.h2>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p>
            I&apos;m a Computer Science graduate focused on artificial
            intelligence, machine learning, backend development, and
            data-driven applications.
          </p>

          <p>
            I enjoy taking complex technical problems and turning them into
            reliable applications that are useful, understandable, and
            designed around real-world needs.
          </p>

          <p>
            My work spans Generative AI, intelligent interview systems,
            healthcare prediction, REST APIs, data analysis, and technical
            testing environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}