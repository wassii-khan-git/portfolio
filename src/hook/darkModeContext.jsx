import { useCallback, useEffect, useMemo, useState } from "react";
import { DarkModeContext } from "./context";

const STORAGE_KEY = "wk-theme";

const readInitialTheme = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light") return false;
    if (saved === "dark") return true;
  } catch {
    // Private browsing or blocked storage: fall through to the default.
  }
  // The site is designed dark-first, so dark is the default rather than a
  // mirror of the OS setting.
  return true;
};

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(readInitialTheme);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDarkMode);
    root.style.colorScheme = isDarkMode ? "dark" : "light";
    try {
      localStorage.setItem(STORAGE_KEY, isDarkMode ? "dark" : "light");
    } catch {
      // Not being able to remember the choice is not worth breaking render.
    }
  }, [isDarkMode]);

  const value = useMemo(
    () => ({ isDarkMode, toggleDarkMode }),
    [isDarkMode, toggleDarkMode],
  );

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
