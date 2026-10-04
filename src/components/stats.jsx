import { profile } from "../data/profile";
import { RevealGroup, Shell } from "./primitives";
import { revealChild } from "../lib/motion";
import { motion } from "framer-motion";

const Stats = () => (
  <section className="relative border-y border-line bg-bg-elev">
    <Shell>
      <RevealGroup className="grid grid-cols-2 lg:grid-cols-4">
        {profile.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={revealChild}
            className={`px-1 py-10 sm:px-6 sm:py-12 ${
              i % 2 === 1 ? "border-l border-line" : ""
            } ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${
              i === 2 ? "lg:border-l" : ""
            } lg:border-l lg:first:border-l-0`}
          >
            <div className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {stat.value}
            </div>
            <div className="mt-3 max-w-[22ch] font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-dim">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </RevealGroup>
    </Shell>
  </section>
);

export default Stats;
