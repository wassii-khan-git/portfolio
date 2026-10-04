import { profile } from "../data/profile";
import { Shell } from "./primitives";
import { SECTIONS } from "../data/sections";
import { useSmoothScroll } from "../hook";

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

const Footer = () => {
  const { scrollTo } = useSmoothScroll();

  return (
    <footer className="border-t border-line bg-bg-elev">
      <Shell>
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface font-display text-[13px] font-semibold text-ink">
                {profile.initials}
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-ink">
                  {profile.name}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                  {profile.discipline}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-muted">
              Full Stack Engineer building web, mobile and desktop products
              that run in production. Currently open to remote roles.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
              Sections
            </p>
            <ul className="mt-5 space-y-2.5">
              {SECTIONS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(`#${item.id}`)}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
              Elsewhere
            </p>
            <ul className="mt-5 space-y-2.5">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                    <svg viewBox="0 0 24 24" className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line py-7 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <button
            onClick={() => scrollTo("#hero", { offset: 0 })}
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-dim transition-colors hover:text-accent"
          >
            Back to top
            <svg viewBox="0 0 24 24" className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M6 11l6-6 6 6" />
            </svg>
          </button>
        </div>
      </Shell>
    </footer>
  );
};

export default Footer;
