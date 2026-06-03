"use client";

import { AboutHero } from "./components/AboutHero";
import { motion } from "framer-motion";
import { AboutMisionVision } from "./components/AboutMisionVision";

export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
    >
      <AboutHero />
      <AboutMisionVision />
    </motion.div>
  );
}
