import { useState } from "react";
import {
  CloseOutlined,
  MailOutlined,
  MenuOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { useDarkMode, useScroll } from "../hook";
import { profile } from "../data/profile";

const Navbar = () => {
  const { scrollToSection, ...refs } = useScroll();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Profile", ref: refs.heroRef },
    { name: "Experience", ref: refs.featuresRef },
    { name: "Projects", ref: refs.portfolioRef },
    { name: "Skills", ref: refs.skillsRef },
    { name: "Contact", ref: refs.contactRef },
  ];

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-40 w-full border-b border-[#d8dee9]/90 bg-white/95 shadow-sm backdrop-blur dark:border-[#273449] dark:bg-[#0b1120]/95">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => handleNavClick(refs.heroRef)}
            className="flex items-center gap-3"
            aria-label="Go to profile"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f172a] text-sm font-bold text-white dark:bg-white dark:text-[#0f172a]">
              {profile.initials}
            </span>
            <span className="hidden text-left sm:block">
              <span className="block font-bold text-[#0f172a] dark:text-white">
                {profile.name}
              </span>
              <span className="block text-xs font-semibold text-[#64748b] dark:text-[#94a3b8]">
                Full-Stack Developer
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.ref)}
                className="rounded-md px-3 py-2 text-sm font-semibold text-[#475569] transition hover:bg-[#f1f5f9] hover:text-[#be123c] dark:text-[#cbd5e1] dark:hover:bg-[#111827] dark:hover:text-[#fb7185]"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-[#be123c] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#9f1239]"
            >
              <MailOutlined />
              Email
            </a>
            <button
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#cbd5e1] text-[#475569] transition hover:border-[#be123c] hover:text-[#be123c] dark:border-[#334155] dark:text-[#cbd5e1] dark:hover:text-[#fb7185]"
            >
              {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#cbd5e1] text-[#475569] dark:border-[#334155] dark:text-[#cbd5e1]"
            >
              {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
            </button>
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation"
              className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0f172a] text-white dark:bg-white dark:text-[#0f172a]"
            >
              <MenuOutlined />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-slate-950/60 transition md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-72 transform border-l border-[#d8dee9] bg-white p-5 shadow-2xl transition-transform duration-300 dark:border-[#273449] dark:bg-[#111827] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-[#0f172a] dark:text-white">
              {profile.name}
            </p>
            <p className="text-sm text-[#64748b] dark:text-[#94a3b8]">
              {profile.role}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#cbd5e1] text-[#475569] dark:border-[#334155] dark:text-[#cbd5e1]"
          >
            <CloseOutlined />
          </button>
        </div>

        <div className="mt-8 grid gap-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.ref)}
              className="rounded-md px-3 py-3 text-left font-semibold text-[#475569] transition hover:bg-[#f1f5f9] hover:text-[#be123c] dark:text-[#cbd5e1] dark:hover:bg-[#0b1120] dark:hover:text-[#fb7185]"
            >
              {link.name}
            </button>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#be123c] px-4 py-3 font-semibold text-white transition hover:bg-[#9f1239]"
        >
          <MailOutlined />
          Email Me
        </a>
      </aside>
    </>
  );
};

export default Navbar;
