import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { profile } from "../data/profile";
import { Shell } from "./primitives";
import { EASE } from "../lib/motion";

const line = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1.1, delay: 0.25 + i * 0.09, ease: EASE },
  }),
};

/** Stack entries arrive one after another, after the headline has landed. */
const railItem = {
  hidden: { opacity: 0, x: 14 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 1.05 + i * 0.07, ease: EASE },
  }),
};


const Hero = () => {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  // The hero recedes as the breakdown takes over, rather than simply
  // scrolling away.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* Backdrop: technical grid, faded at the edges, with a single warm bloom. */}
      <div className="pointer-events-none absolute inset-0">
        <div className="tech-grid edge-fade absolute inset-0 opacity-70" />
        <div
          className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={{ background: "var(--glow)" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <motion.div
        style={reduced ? undefined : { y, opacity, scale }}
        className="relative w-full"
      >
        <Shell>
          <div className="flex flex-col items-start">
            {/* Availability, built from the site's own language: a squared
                outline, a monospaced micro-caps label and a static accent
                rule — not a pill with a pulsing dot. */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="mb-9 inline-flex items-center gap-2.5 rounded-[5px] border border-line bg-surface/50 py-1.5 pl-2.5 pr-4 backdrop-blur"
            >
              <span className="h-[11px] w-[2px] shrink-0 bg-accent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                {profile.availability}
              </span>
            </motion.div>

            <h1 className="font-display text-[clamp(2.6rem,8.2vw,6.2rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-ink">
              {profile.headline.map((text, i) => (
                <span key={text} className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    className="block"
                    custom={i}
                    variants={line}
                    initial={reduced ? "visible" : "hidden"}
                    animate="visible"
                  >
                    {i === 1 ? (
                      <>
                        that holds up{" "}
                        <span className="relative whitespace-nowrap text-accent">
                          in production
                          <motion.span
                            className="absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-accent/40"
                            initial={reduced ? false : { scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 1.1, ease: EASE }}
                          />
                        </span>
                        .
                      </>
                    ) : (
                      text
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* The stack moves out of the vertical flow and into a side rail
                on wide screens, which is what keeps the hero inside a short
                laptop viewport. */}
            <div className="mt-8 grid w-full gap-10 lg:grid-cols-[minmax(0,40rem)_1fr] lg:items-start lg:gap-16">
              <motion.p
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
                className="text-pretty text-lg leading-relaxed text-muted sm:text-xl"
              >
                {profile.intro}
              </motion.p>

              <div className="hidden lg:flex lg:justify-end lg:pt-1.5">
                <div className="flex items-stretch gap-5">
                  <motion.span
                    initial={reduced ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
                    className="font-mono text-[10px] uppercase tracking-[0.3em] text-dim [writing-mode:vertical-rl]"
                  >
                    Core stack
                  </motion.span>

                  <motion.span
                    aria-hidden="true"
                    initial={reduced ? false : { scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
                    className="w-px origin-top bg-line"
                  />

                  <ul className="space-y-2.5">
                    {profile.coreStack.map((item, i) => (
                      <motion.li
                        key={item}
                        custom={i}
                        variants={railItem}
                        initial={reduced ? "visible" : "hidden"}
                        animate="visible"
                        className="font-mono text-xs leading-none text-muted"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Narrow screens keep it in the flow, where there is no side room. */}
            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.95 }}
              className="mt-10 flex w-full max-w-3xl flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-line pt-6 lg:hidden"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
                Core stack
              </span>
              <span className="text-sm leading-relaxed text-muted">
                {profile.coreStack.join("  ·  ")}
              </span>
            </motion.div>
          </div>
        </Shell>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        style={reduced ? undefined : { opacity }}
        className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-line">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-accent"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
