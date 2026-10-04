import { motion, useReducedMotion } from "framer-motion";

import { EASE } from "../lib/motion";

/** Fade-and-rise on entry. The default building block for every section. */
export const Reveal = ({
  children,
  delay = 0,
  y = 28,
  className = "",
  as = "div",
  once = true,
}) => {
  const reduced = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
};

/** Staggers direct children that use `revealChild`. */
export const RevealGroup = ({ children, className = "", stagger = 0.08 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: stagger } },
    }}
  >
    {children}
  </motion.div>
);


/** Small monospaced section label with a leading rule. */
export const Eyebrow = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent ${className}`}
  >
    <span className="h-px w-8 bg-accent-line" />
    {children}
  </span>
);

export const SectionHeading = ({ eyebrow, title, lead, align = "left" }) => (
  <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    <Reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
        {title}
      </h2>
    </Reveal>
    {lead && (
      <Reveal delay={0.14}>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted">
          {lead}
        </p>
      </Reveal>
    )}
  </div>
);

/** Shared horizontal rhythm for every section on the page. */
export const Shell = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>
    {children}
  </div>
);

export const Tag = ({ children }) => (
  <span className="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-[11px] tracking-wide text-muted">
    {children}
  </span>
);
