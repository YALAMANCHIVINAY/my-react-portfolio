"use client";

import { motion } from "framer-motion";

type RevealTextProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function RevealText({
  children,
  className = "",
  delay = 0,
}: RevealTextProps) {
  return (
    <span className={`reveal-wrap ${className}`}>
      <motion.span
        className="reveal-inner"
        initial={{ y: "110%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

