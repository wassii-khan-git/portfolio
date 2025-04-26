// React
import { useState } from "react";
// Icons
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useDarkMode, useScroll } from "../hook";

// Logo
export const logo = "./cv.png";

const Navbar = () => {
  const { scrollToSection, ...refs } = useScroll();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Hero", ref: refs.heroRef },
    { name: "Features", ref: refs.featuresRef },
    { name: "Portfolio", ref: refs.portfolioRef },
    { name: "Skills", ref: refs.skillsRef },
    { name: "Contact", ref: refs.contactRef },
  ];

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Main content wrapper */}
      <div
        className={`fixed w-full top-0 z-40 ${
          isOpen ? "opacity-30" : "opacity-100"
        } md:opacity-100 transition-opacity duration-300`}
      >
        <nav className="border-b shadow-md bg-white dark:bg-gray-900">
          <div className="max-w-[82rem] mx-auto px-4">
            <div className="relative flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <img src={logo} alt="logo" className="w-10 h-10" />
                <span className="font-semibold text-lg dark:text-white">
                  Portfolio
                </span>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Desktop navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks?.length > 0 &&
                  navLinks?.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link?.ref)}
                      className="text-gray-700 dark:text-gray-300 hover:text-redish dark:hover:text-redish transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  ))}
                <button
                  onClick={toggleDarkMode}
                  className="bg-halfwhite dark:bg-gray-800 ml-4 text-redish dark:text-redish px-4 py-3 rounded-lg text-sm font-medium uppercase outline-gray-400 transition-all ease-in-out duration-300 hover:bg-redish/10 dark:hover:bg-redish/20"
                >
                  {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile navigation */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 shadow-2xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="h-full flex flex-col">
          {/* Logo section in mobile menu */}
          <div className="px-6 py-4 border-b dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src={logo} alt="logo" className="w-8 h-8" />
                <span className="font-semibold text-lg dark:text-white">
                  Portfolio
                </span>
              </div>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.ref)}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-redish/10 dark:hover:bg-redish/20 hover:text-redish rounded-lg transition-all duration-200"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-center gap-2 mt-5 bg-redish px-5 py-2 rounded-lg text-white hover:translate-y-[-2px] transition-all ease-in-out duration-300"
            >
              {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
