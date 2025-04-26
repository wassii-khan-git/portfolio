// components/ScrollContext.jsx
import { useContext, useRef } from "react";
import { ScrollContext } from "./context";

export const ScrollProvider = ({ children }) => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    const navbarHeight = 64; // Match your navbar height
    if (ref?.current) {
      const top = ref.current.offsetTop - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider
      value={{
        scrollToSection,
        heroRef,
        featuresRef,
        portfolioRef,
        skillsRef,
        contactRef,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
