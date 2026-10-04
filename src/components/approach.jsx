import { motion } from "framer-motion";
import { decisions } from "../data/profile";
import { SectionHeading, Shell } from "./primitives";
import { revealChild } from "../lib/motion";

/**
 * Each decision is an editorial entry, not a card: a narrow rail carrying the
 * numeral, then the decision itself set large, with the before and after
 * underneath it at a much smaller size. The asymmetry and the type contrast
 * are what stop this reading as a feature grid.
 */
const Decision = ({ decision, index }) => (
  <motion.article
    variants={revealChild}
    className="group grid gap-6 border-t border-line py-10 last:pb-0 md:grid-cols-[150px_1fr] md:gap-14 md:py-12 md:last:pb-0 lg:grid-cols-[200px_1fr]"
  >
    <div className="flex items-baseline gap-5 md:flex-col md:gap-4">
      <span className="font-display text-[2.75rem] font-semibold leading-none tracking-tight text-line-strong transition-colors duration-500 group-hover:text-accent">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
        {decision.kicker}
      </span>
    </div>

    <div>
      <p className="font-display max-w-2xl text-balance text-[1.4rem] font-semibold leading-[1.3] tracking-[-0.02em] text-ink sm:text-[1.75rem]">
        {decision.choice}
      </p>

      <div className="mt-7 grid max-w-3xl gap-6 sm:grid-cols-2 sm:gap-10">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
            What was happening
          </div>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
            {decision.problem}
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            What changed
          </div>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
            {decision.result}
          </p>
        </div>
      </div>
    </div>
  </motion.article>
);

const Approach = () => (
  <section id="approach" className="relative py-14 sm:py-16">
    <Shell>
      <SectionHeading
        eyebrow="How I work"
        title="Three decisions I'd make again."
        lead="Features are easy to list. These are the trade-offs behind them — the parts that actually took judgement."
      />

      <motion.div
        className="mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {decisions.map((decision, index) => (
          <Decision key={decision.kicker} decision={decision} index={index} />
        ))}
      </motion.div>
    </Shell>
  </section>
);

export default Approach;
