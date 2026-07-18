"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <a href="#home" className="logo">
        Vinay Yalamanchi
      </a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a
          href="/Vinay_Yalamanchi_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  );
}