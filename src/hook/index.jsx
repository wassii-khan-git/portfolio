import { useContext } from "react";
import { DarkModeContext, ScrollContext } from "./context";

// Custom hook to use the dark mode context
export const useDarkMode = () => useContext(DarkModeContext);

export const useScroll = () => useContext(ScrollContext);
