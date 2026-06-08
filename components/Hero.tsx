"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";
import PortraitComposition from "./PortraitComposition";

const HERO_WORDS = [
  { text: "BUILDING", color: "text-[var(--color-primary)]" },
  { text: "INTELLIGENT", color: "text-[var(--color-accent)]" },
  { text: "SYSTEMS", color: "text-[var(--color-primary)]" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-20 py-20"
    >
      {/* Left — Massive statement text */}
      <div className="flex-1 relative z-10">
        <div className="mb-6">
          {HERO_WORDS.map((word, i) => (
            <motion.div
              key={word.text}
              initial={{ x: -120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.3 + i * 0.15,
                ease: [0.77, 0, 0.175, 1],
              }}
            >
              <h1
                className={`font-heading font-bold text-[50px] sm:text-[80px] md:text-[90px] lg:text-[110px] xl:text-[130px] uppercase ${word.color}`}
              >
                {word.text}
              </h1>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-[var(--color-secondary)] text-[16px] md:text-[18px] max-w-[360px] leading-relaxed mt-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Machine Learning Engineer crafting intelligent systems
          that bridge research and production.
        </motion.p>
      </div>

      {/* Right — Portrait composition */}
      <div className="hidden lg:flex flex-1 justify-end items-center relative z-10 lg:pr-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="relative z-20 pointer-events-none"
        >
          <PortraitComposition variant="hero" />


        </motion.div>
      </div>


      {/* Mobile portrait — shown below text on small screens */}
      <div className="lg:hidden absolute bottom-10 right-6 opacity-40">
        <PortraitComposition variant="about" />
      </div>
    </section>
  );
}
