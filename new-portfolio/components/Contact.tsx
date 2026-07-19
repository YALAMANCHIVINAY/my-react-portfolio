"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-top">
        <div>
          <p className="contact-index">05</p>
          <p className="contact-label">Contact</p>
        </div>

        <p className="contact-side-text">
          OPEN TO AI, MACHINE LEARNING
          <br />
          AND SOFTWARE OPPORTUNITIES
        </p>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        Have an opportunity
        <br />
        or an idea?
        <br />
        <span>Let&apos;s talk.</span>
      </motion.h2>

      <div className="contact-bottom">
        <div className="contact-links">
          <a href="mailto:vyalamanchi@rivier.edu">
            <Mail size={19} />
            Email me
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn
            <ArrowUpRight size={18} />
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            GitHub
            <ArrowUpRight size={18} />
          </a>
        </div>

        <a href="#home" className="back-to-top">
          Back to top
          <span>↑</span>
        </a>
      </div>
    </section>
  );
}
