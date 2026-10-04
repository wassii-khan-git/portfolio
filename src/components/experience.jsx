import { motion } from "framer-motion";
import { education, experience, languages } from "../data/profile";
import { Reveal, RevealGroup, SectionHeading, Shell } from "./primitives";
import { revealChild } from "../lib/motion";

const Experience = () => (
  <section id="experience" className="relative py-14 sm:py-16">
    <Shell>
      <SectionHeading
        eyebrow="Background"
        title="Where the experience comes from."
        lead="Four years of shipping, currently with a team that builds medical software, and available to remote teams anywhere."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        {/* ------------------------------------------------------ roles */}
        <RevealGroup className="relative" stagger={0.12}>
          {/* Spine the roles hang from. */}
          <div className="absolute bottom-2 left-[5px] top-2 w-px bg-line" />

          {experience.map((role) => (
            <motion.article
              key={role.company}
              variants={revealChild}
              className="relative pb-12 pl-8 last:pb-0"
            >
              <span
                className={`absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border-2 ${
                  role.current
                    ? "border-accent bg-accent"
                    : "border-line-strong bg-bg"
                }`}
              >
                {role.current && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-50" />
                )}
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                  {role.company}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
                  {role.period}
                </span>
              </div>

              <p className="mt-1.5 font-mono text-[11px] text-muted">
                {role.title} · {role.place}
              </p>

              <ul className="mt-5 space-y-2.5">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </RevealGroup>

        {/* -------------------------------------------- education + langs */}
        <div className="space-y-6">
          <Reveal className="rounded-2xl border border-line bg-surface p-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Education
            </div>
            <h3 className="font-display mt-5 text-lg font-semibold tracking-tight text-ink">
              {education.degree}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {education.school}
              <br />
              {education.place}
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
              {education.period}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-line bg-surface p-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Languages
            </div>
            <ul className="mt-5 space-y-3">
              {languages.map((language) => (
                <li
                  key={language.name}
                  className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-ink">{language.name}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
                    {language.level}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Shell>
  </section>
);

export default Experience;
