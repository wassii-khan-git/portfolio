import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { earlierWork, projects } from "../data/profile";
import { Reveal, SectionHeading, Shell } from "./primitives";
import { EASE } from "../lib/motion";

const LockIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="4" y="10" width="16" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 118 0v3" />
  </svg>
);

const ProjectRow = ({ project, index, isOpen, onToggle }) => {
  const panelId = `project-panel-${project.id}`;

  return (
    <div
      className={`group border-b border-line transition-colors ${
        isOpen ? "bg-surface/40" : "hover:bg-surface/25"
      }`}
    >
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-start gap-4 px-1 py-7 text-left sm:gap-6 sm:py-8"
        >
          <span
            className={`mt-1 font-mono text-[11px] transition-colors ${
              isOpen ? "text-accent" : "text-dim"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="min-w-0 flex-1">
            <span className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span className="font-display text-xl font-semibold leading-tight tracking-tight text-ink sm:text-2xl">
                {project.title}
              </span>
              {project.confidential && (
                <span className="inline-flex items-center gap-1 rounded-full border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-dim">
                  <LockIcon className="h-2.5 w-2.5" />
                  Private
                </span>
              )}
            </span>
            <span className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px] text-dim">
              <span className="text-muted">{project.role}</span>
              <span className="text-line-strong">/</span>
              <span>{project.org}</span>
              <span className="text-line-strong">/</span>
              <span>{project.year}</span>
            </span>
          </span>

          <span className="hidden shrink-0 self-center font-mono text-[10px] uppercase tracking-[0.16em] text-dim md:block">
            {project.category}
          </span>

          <span
            className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ${
              isOpen
                ? "rotate-45 border-accent-line text-accent"
                : "border-line text-muted group-hover:border-line-strong"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 pb-10 pl-0 sm:pl-[2.6rem] lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
              <div>
                <p className="max-w-2xl text-pretty leading-relaxed text-muted">
                  {project.summary}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-line px-2 py-1 font-mono text-[10px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links && (
                  <div className="mt-7 flex flex-col gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex w-fit items-center gap-2 font-mono text-[11px] text-muted transition-colors hover:text-accent"
                      >
                        <span className="border-b border-line pb-px transition-colors group-hover/link:border-accent-line">
                          {link.label}
                        </span>
                        <svg viewBox="0 0 24 24" className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {project.image ? (
                  <figure className="overflow-hidden rounded-xl border border-line bg-surface">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </figure>
                ) : (
                  <div className="relative flex h-full min-h-[180px] items-center justify-center overflow-hidden rounded-xl border border-line bg-surface p-6">
                    <div className="tech-grid absolute inset-0 opacity-30" />
                    <div className="relative text-center">
                      <LockIcon className="mx-auto h-5 w-5 text-dim" />
                      <p className="mt-3 max-w-[22ch] font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-dim">
                        {project.confidential
                          ? "Private product — architecture discussed on request"
                          : "Walkthrough available on request"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Work = () => {
  const [openId, setOpenId] = useState(projects[0].id);

  return (
    <section id="work" className="relative py-14 sm:py-16">
      <Shell>
        <SectionHeading
          eyebrow="Selected work"
          title="Six builds, two of them running inside a clinic."
          lead="Healthcare systems under compliance constraints, commercial Next.js platforms, and the infrastructure work that keeps them online."
        />

        <div className="mt-12 border-t border-line">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              isOpen={openId === project.id}
              onToggle={() =>
                setOpenId((prev) => (prev === project.id ? null : project.id))
              }
            />
          ))}
        </div>

        {/* One line, deliberately. These predate the work above. */}
        <Reveal delay={0.1}>
          <p className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm text-dim">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
              {earlierWork.label}
            </span>
            <span className="text-muted">{earlierWork.items.join(" · ")}</span>
            <span>{earlierWork.context}</span>
          </p>
        </Reveal>
      </Shell>
    </section>
  );
};

export default Work;
