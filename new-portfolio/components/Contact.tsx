"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <p className="section-label">Contact</p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Have an opportunity
        <br />
        or an idea?
        <br />
        Let&apos;s talk.
      </motion.h2>

      <div className="contact-links">
        <a href="mailto:vyalamanchi@rivier.edu">
          <Mail size={20} />
          Email me
        </a>

        <a
          href="https://github.com/YALAMANCHIVINAY"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <ArrowUpRight size={19} />
        </a>

        <a href="#home">
          Back to top
          <ArrowUpRight size={19} />
        </a>
      </div>
    </section>
  );
}