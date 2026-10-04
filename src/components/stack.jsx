import { motion } from "framer-motion";
import { stack } from "../data/profile";
import { RevealGroup, SectionHeading, Shell } from "./primitives";
import { revealChild } from "../lib/motion";

const Stack = () => (
  <section id="stack" className="relative border-y border-line bg-bg-elev py-14 sm:py-16">
    <Shell>
      <SectionHeading
        eyebrow="Stack"
        title="What I reach for."
        lead="Grouped the way I actually use them, not ranked by how impressive they sound."
      />

      <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group, i) => (
          <motion.div
            key={group.title}
            variants={revealChild}
            className="bg-bg-elev p-7 transition-colors hover:bg-surface"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[10px] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-base font-semibold tracking-tight text-ink">
                {group.title}
              </h3>
            </div>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded border border-line px-2 py-1 font-mono text-[10px] leading-relaxed text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Keeps the final grid row visually closed on three-column layouts. */}
        <motion.div
          variants={revealChild}
          className="relative hidden overflow-hidden bg-bg-elev p-7 lg:block"
        >
          <div className="tech-grid absolute inset-0 opacity-30" />
          <p className="relative max-w-[26ch] font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-dim">
            Comfortable owning a feature from requirements through staging to a
            production deploy.
          </p>
        </motion.div>
      </RevealGroup>
    </Shell>
  </section>
);

export default Stack;
