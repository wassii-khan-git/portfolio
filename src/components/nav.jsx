import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useActiveSection, useDarkMode, useSmoothScroll } from "../hook";
import { profile } from "../data/profile";
import { EASE } from "../lib/motion";
import { SECTIONS, SECTION_IDS } from "../data/sections";

const SunIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" stroke="currentColor" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path
      strokeLinecap="round"
      d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"
    />
  </svg>
);

const MoonIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 14.2A8.2 8.2 0 019.8 4a8.2 8.2 0 1010.2 10.2z"
    />
  </svg>
);

const Nav = () => {
  const { scrollTo } = useSmoothScroll();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The drawer sits above a scrolling page; locking the body avoids the
  // background sliding underneath it on touch devices.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    scrollTo(`#${id}`);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          lifted
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => scrollTo("#hero", { offset: 0 })}
            className="group flex items-center gap-3"
            aria-label="Back to top"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface font-display text-[13px] font-semibold tracking-tight text-ink transition-colors group-hover:border-accent-line group-hover:text-accent">
              {profile.initials}
            </span>
            {/* Name only. The hero states the title within a second of
                landing, so repeating it here is just noise. */}
            <span className="hidden font-display text-[15px] font-semibold tracking-tight text-ink sm:block">
              {profile.name}
            </span>
          </button>

          {/* Hover gets a rule; the active item is carried by text colour
              alone, since the progress bar under the header already shows
              where the reader is. */}
          <div className="hidden items-center gap-x-8 md:flex lg:gap-x-10">
            {SECTIONS.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className="group relative py-2 text-sm tracking-[-0.01em]"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive ? "text-ink" : "text-muted group-hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Hover rule, wiping in from the left. */}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-line-strong transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
              className="group flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors duration-300 hover:border-accent-line hover:bg-surface hover:text-accent"
            >
              {isDarkMode ? (
                <SunIcon className="h-[18px] w-[18px] transition-transform duration-500 ease-out group-hover:rotate-45" />
              ) : (
                <MoonIcon className="h-[18px] w-[18px] transition-transform duration-500 ease-out group-hover:-rotate-12" />
              )}
            </button>

            <button
              onClick={() => go("contact")}
              className="btn-accent group hidden h-10 items-center gap-2 rounded-lg pl-5 pr-4 text-sm font-medium sm:inline-flex"
            >
              Get in touch
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="group flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink transition-colors duration-300 hover:border-accent-line hover:bg-surface md:hidden"
            >
              <span className="flex w-[18px] flex-col items-end gap-[4px]">
                <span className="h-px w-full bg-current transition-all duration-300 ease-out group-hover:w-[12px]" />
                <span className="h-px w-[12px] bg-current transition-all duration-300 ease-out group-hover:w-full" />
                <span className="h-px w-full bg-current transition-all duration-300 ease-out group-hover:w-[12px]" />
              </span>
            </button>
          </div>
        </nav>

        {/* Reading progress, doubling as the header's bottom edge. */}
        <motion.div
          className="h-px origin-left bg-accent"
          style={{ scaleX: progress }}
        />
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              key="scrim"
              aria-label="Close menu"
              className="fixed inset-0 z-[60] bg-bg/80 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="drawer"
              className="fixed inset-y-0 right-0 z-[61] flex w-[min(20rem,85vw)] flex-col border-l border-line bg-bg-elev p-6 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-display text-base font-semibold text-ink">
                    {profile.name}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
                    {profile.discipline}
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted"
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-1">
                {SECTIONS.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => go(item.id)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, ease: EASE }}
                    className="flex items-baseline gap-3 rounded-lg px-3 py-3 text-left text-lg text-ink transition-colors hover:bg-surface"
                  >
                    <span className="font-mono text-[10px] text-dim">
                      0{i + 1}
                    </span>
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="btn-accent mt-auto inline-flex h-11 items-center justify-center rounded-lg px-4 font-medium"
              >
                Email me
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
