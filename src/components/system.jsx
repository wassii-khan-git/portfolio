import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { buildLayers } from "../data/profile";
import { Eyebrow, Shell } from "./primitives";
import { EASE } from "../lib/motion";
import { useMediaQuery } from "../hook";

/* Scroll choreography, in fractions of the pinned section's progress.
   ASSEMBLE  the slab turns from face-on into an isometric view
   EXPLODE   the layers pull apart along the stack axis
   WALK      each layer takes focus in turn                              */
const ASSEMBLE = [0.02, 0.18];
const EXPLODE = [0.18, 0.34];
const WALK_START = 0.36;

/* Kept shallow enough that the labels stay readable at this angle. */
const TILT_X = 52;
const TILT_Z = -12;

const LayerPlate = ({
  layer,
  index,
  count,
  progress,
  gap,
  plateHeight,
  isActive,
  isPast,
}) => {
  // The stack explodes symmetrically around its own middle, so it stays
  // centred in the stage instead of climbing out of frame. Layer 01 ends up
  // on top, because that is the order the stack is read in.
  const offset = (count - 1) / 2 - index;
  const z = useTransform(progress, EXPLODE, [offset * 4, offset * gap]);
  const transform = useMotionTemplate`translate3d(-50%, -50%, ${z}px)`;

  return (
    <motion.div
      className="layer-3d absolute left-1/2 top-1/2"
      style={{ transform, zIndex: count - index }}
    >
      <div
        className={`relative flex w-[min(74vw,340px)] items-center justify-between gap-3 overflow-hidden rounded-lg border px-4 transition-all duration-500 sm:px-5 ${
          plateHeight
        } ${
          isActive
            ? "border-accent-line bg-surface-2 shadow-[0_0_0_1px_var(--accent-line),0_26px_70px_-18px_var(--glow)]"
            : isPast
              ? "border-line-strong bg-surface-2"
              : "border-line bg-surface"
        }`}
      >
        <div className="tech-grid absolute inset-0 opacity-25" />

        {/* Accent rail that fills when the layer takes focus. */}
        <div
          className={`absolute inset-y-0 left-0 w-[3px] origin-top bg-accent transition-transform duration-500 ${
            isActive ? "scale-y-100" : "scale-y-0"
          }`}
        />

        <div className="relative flex items-baseline gap-2.5">
          <span
            className={`font-mono text-[10px] transition-colors duration-500 ${
              isActive ? "text-accent" : "text-dim"
            }`}
          >
            {layer.index}
          </span>
          <span
            className={`font-display text-base font-semibold tracking-tight transition-colors duration-500 sm:text-lg ${
              isActive ? "text-ink" : "text-muted"
            }`}
          >
            {layer.label}
          </span>
        </div>

        {/* Too cramped to read on a phone at this angle; the detail panel
            carries it there instead. */}
        <span className="relative hidden max-w-[52%] text-right font-mono text-[9px] leading-tight text-dim sm:block">
          {layer.tech}
        </span>
      </div>
    </motion.div>
  );
};

/** Reduced-motion rendering: the same content, no pinning, no 3D. */
const StaticBreakdown = () => (
  <Shell className="py-28">
    <Eyebrow>{buildLayers.eyebrow}</Eyebrow>
    <h2 className="font-display mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
      {buildLayers.title}
    </h2>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
      {buildLayers.subtitle}
    </p>
    <ol className="mt-14 space-y-px overflow-hidden rounded-xl border border-line">
      {buildLayers.layers.map((layer) => (
        <li key={layer.id} className="bg-surface p-6">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[11px] text-accent">{layer.index}</span>
            <h3 className="font-display text-lg font-semibold text-ink">
              {layer.title}
            </h3>
          </div>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">{layer.text}</p>
          <p className="mt-3 font-mono text-[11px] text-dim">{layer.tech}</p>
        </li>
      ))}
    </ol>
  </Shell>
);

const System = () => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  // Side by side whenever there is width for it — including short landscape
  // phones, where stacking the stage above the copy does not fit vertically.
  const sideBySide = useMediaQuery(
    "(min-width: 1024px), (min-width: 680px) and (max-height: 700px)",
  );
  // Any viewport too short for the full-size stack, in either orientation.
  const compact = useMediaQuery("(max-height: 700px)");
  // Landscape phones. The stack has to clear a 72px fixed nav in ~390px.
  const veryShort = useMediaQuery("(max-height: 470px)");
  const [activeIndex, setActiveIndex] = useState(0);

  const layers = buildLayers.layers;
  const count = layers.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Smoothing the driver keeps the plates from twitching on trackpads.
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.0005,
  });

  const step = (1 - WALK_START) / count;

  useMotionValueEvent(progress, "change", (value) => {
    const raw = Math.floor((value - WALK_START) / step);
    const next = Math.min(count - 1, Math.max(0, raw));
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  const rotateX = useTransform(progress, ASSEMBLE, [0, TILT_X]);
  const rotateZ = useTransform(progress, ASSEMBLE, [0, TILT_Z]);
  const stageScale = useTransform(progress, ASSEMBLE, [1.08, 1]);
  const stageTransform = useMotionTemplate`rotateX(${rotateX}deg) rotateZ(${rotateZ}deg) scale(${stageScale})`;

  if (reduced) {
    return (
      <section id="system" className="relative">
        <StaticBreakdown />
      </section>
    );
  }

  // The stack has to shrink when the viewport is short, or it runs under the
  // nav and over the copy.
  const gap = veryShort ? 60 : sideBySide ? (compact ? 86 : 150) : compact ? 56 : 70;
  const plateHeight = veryShort
    ? "h-[44px]"
    : compact
      ? "h-[50px]"
      : "h-[58px] sm:h-[76px]";
  const active = layers[activeIndex];

  return (
    <section id="system" ref={ref} className="relative h-[320vh]">
      <div
        className={`sticky top-0 flex h-[100svh] items-center overflow-hidden ${
          sideBySide ? "" : "pt-12"
        }`}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="tech-grid edge-fade absolute inset-0 opacity-40" />
        </div>

        <Shell className="relative w-full">
          <div
            className={`grid items-center ${
              sideBySide
                ? "grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-10 xl:gap-16"
                : "gap-6"
            }`}
          >
            {/* ---------------------------------------------------- copy */}
            <div className={sideBySide ? "order-1" : "order-2"}>
              <Eyebrow>{buildLayers.eyebrow}</Eyebrow>

              <h2 className="font-display mt-5 text-[clamp(1.75rem,4.4vw,3.1rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink">
                {buildLayers.title}
              </h2>

              {/* No room for the standfirst on a short screen. */}
              {sideBySide && !compact && (
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                  {buildLayers.subtitle}
                </p>
              )}

              {/* Focused layer, crossfading as the stack is walked. */}
              <div
                className={`relative ${
                  compact ? "mt-4 min-h-[140px]" : "mt-6 min-h-[200px] lg:mt-8"
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-accent">
                        {active.index}
                      </span>
                      <span className="h-px flex-1 bg-line" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
                        {active.label}
                      </span>
                    </div>

                    <h3 className="font-display mt-4 text-xl font-semibold leading-snug text-ink sm:text-2xl">
                      {active.title}
                    </h3>

                    <p className="mt-2 font-mono text-[10px] text-dim sm:hidden">
                      {active.tech}
                    </p>

                    <p className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
                      {active.text}
                    </p>

                    {/* Readable here, rather than foreshortened on the plate. */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {active.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="rounded border border-accent-line px-2 py-0.5 font-mono text-[10px] text-accent"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Step rail. */}
              <div className="mt-6 flex items-center gap-1.5">
                {layers.map((layer, i) => (
                  <span
                    key={layer.id}
                    className={`h-[3px] flex-1 rounded-full transition-colors duration-500 ${
                      i <= activeIndex ? "bg-accent" : "bg-line"
                    }`}
                  />
                ))}
              </div>

            </div>

            {/* ------------------------------------------------- 3D stage */}
            <div className={sideBySide ? "order-2" : "order-1"}>
              <div
                className={`stage-3d relative w-full ${
                  sideBySide ? "h-[74svh]" : "h-[32svh] sm:h-[36svh]"
                }`}
              >
                <motion.div
                  className="layer-3d absolute inset-0"
                  style={{ transform: stageTransform }}
                >
                  {layers.map((layer, i) => (
                    <LayerPlate
                      key={layer.id}
                      layer={layer}
                      index={i}
                      count={count}
                      progress={progress}
                      gap={gap}
                      plateHeight={plateHeight}
                      isActive={i === activeIndex}
                      isPast={i < activeIndex}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </Shell>
      </div>
    </section>
  );
};

export default System;
