import { useCallback, useEffect, useMemo, useRef } from "react";
import Lenis from "lenis";
import { SmoothScrollContext } from "./context";

const NAV_OFFSET = -76;

/**
 * Drives the page with Lenis so scroll-linked animation reads as one
 * continuous motion rather than per-wheel-tick jumps. Falls back to native
 * scrolling when the visitor has asked for reduced motion.
 *
 * Only callbacks are published on the context — the instance itself stays in
 * a ref and is read at call time, never during render.
 */
export const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Touch devices already have momentum scrolling; doubling it feels wrong.
      syncTouch: false,
      touchMultiplier: 1.6,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback((target, options = {}) => {
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(target, { offset: NAV_OFFSET, duration: 1.3, ...options });
      return;
    }
    // Reduced-motion path: let the browser do it, with no animation.
    const el =
      typeof target === "string" ? document.querySelector(target) : target;
    if (el) {
      const offset = options.offset ?? NAV_OFFSET;
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "auto" });
    }
  }, []);

  const stop = useCallback(() => lenisRef.current?.stop(), []);
  const start = useCallback(() => lenisRef.current?.start(), []);

  const value = useMemo(
    () => ({ scrollTo, stop, start }),
    [scrollTo, stop, start],
  );

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
