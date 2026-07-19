"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className="site-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="navbar">
          <a className="logo" href="#home">
            Vinay Yalamanchi
          </a>

          <div className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}

            <a
              className="nav-resume"
              href="/Vinay_Yalamanchi_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={26} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu-top">
              <span>Vinay Yalamanchi</span>

              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={28} />
              </button>
            </div>

            <div className="mobile-menu-links">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index }}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>0{index + 1}</span>
                  {link.name}
                </motion.a>
              ))}

              <a
                href="/Vinay_Yalamanchi_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                <span>06</span>
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
