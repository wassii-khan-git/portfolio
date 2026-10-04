import { createContext } from "react";

export const DarkModeContext = createContext({
  isDarkMode: true,
  toggleDarkMode: () => {},
});

export const SmoothScrollContext = createContext({
  scrollTo: () => {},
  stop: () => {},
  start: () => {},
});
