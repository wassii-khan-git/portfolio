# Design and content rules

Written for whoever works on this repo next, human or agent. The bar the owner
set is that this site must read as the work of a senior frontend engineer, and
never as AI-generated output. Most of what follows exists because a specific
shortcut was caught and corrected. Read it before changing anything visual.

---

## 1. Hard technical rules

### Custom CSS MUST live inside a cascade layer

`src/index.css` imports Tailwind, which places its utilities in
`@layer utilities`. **Unlayered CSS beats every layered rule regardless of
specificity.** A bare element reset therefore silently kills Tailwind
utilities across the whole app.

This actually happened here. A plain `button { padding: 0; background: none }`
meant that `px-*`, `bg-*`, `border-*` and `text-*` did nothing on any
`<button>` in the project. Project rows specified `py-7 sm:py-8` and rendered
with zero vertical padding for weeks. A bare `.font-display { letter-spacing }`
was overriding every `tracking-*` utility on every heading.

So:

- Element resets go in `@layer base`.
- Component classes (`.btn-accent`, `.font-display`, `.tech-grid`, …) go in
  `@layer components`, so utilities can still override them.
- Only genuinely global, conflict-free selectors (scrollbar, Lenis, keyframes)
  may stay unlayered.

If a utility class appears to do nothing, check this first.

### `will-change: opacity` breaks `transform-style: preserve-3d`

The System section's exploded stack is real CSS 3D. Declaring
`will-change: opacity` on an ancestor makes the browser group that element,
which forces `transform-style` back to `flat` and collapses the whole stack
into one plate. `.layer-3d` therefore hints `transform` only. The comment in
`index.css` says so; leave it.

### Lenis owns scrolling

`html { scroll-behavior: auto }` is deliberate — native smooth scrolling fights
Lenis. Navigate with `scrollTo()` from `useSmoothScroll()`, never
`element.scrollIntoView()`. Reduced-motion visitors get native scrolling and a
non-pinned, non-3D version of the System section.

---

## 2. Design system

Tokens are CSS custom properties on `:root`, redefined under `html:not(.dark)`.
**Dark is the default**; the toggle removes `.dark` to reveal the light theme.
Never hardcode a hex value in a component — add or reuse a token.

| Role | Token |
| --- | --- |
| Page / elevated / surface | `--bg`, `--bg-elev`, `--surface`, `--surface-2` |
| Hairlines | `--line`, `--line-strong` |
| Text | `--text`, `--text-muted`, `--text-dim` |
| Accent | `--accent`, `--accent-hover`, `--accent-line`, `--accent-soft` |

**One accent colour, used sparingly.** The restraint is doing most of the work.
Introducing a second hue — brand-coloured technology logos being the usual
temptation — is what makes a portfolio look generated. If icons are ever added
they must be monochrome and inherit `currentColor`.

### Type

- `--font-display` (Inter Tight) for headings, `--font-sans` (Inter) for prose,
  `--font-mono` (JetBrains Mono) for labels and technical text.
- Micro-caps labels are the signature: `font-mono`, 10–11px, uppercase,
  `tracking-[0.16em]` to `tracking-[0.3em]`, in `text-dim` or `text-accent`.
- Hierarchy comes from **contrast, not decoration**. A 28px claim above 14px
  support reads as authored; three equal 16px columns read as a template.

### Spacing

The owner's taste runs **denser than default**. He has flagged loose spacing
twice unprompted. Current rhythm:

- Content sections: `py-14 sm:py-16`. Contact, as the closer: `py-16 sm:py-20`.
- Section heading to content: `mt-12`.
- Last item in a repeated list: `last:pb-0`, so its padding does not stack on
  top of the section's.

**Adjacent section paddings add together.** A 144px bottom next to a 144px top
is a 288px void — roughly 39% of a laptop viewport. Measure the gap between the
last element of one section and the first of the next at 1366×768; target
roughly 130–150px.

---

## 3. Banned patterns

These were each built, flagged by the owner as looking AI-generated, and
removed. Do not reintroduce them.

| Banned | Use instead |
| --- | --- |
| Pill badge with a pulsing coloured dot | Squared outline, mono micro-caps, static 2px accent rule (see the hero badge) |
| A pair of CTA buttons under the hero paragraph | Let the type lead; put the information in a meta row or side rail |
| A row of three equal labelled columns | Asymmetric entry: narrow numeral rail, large claim, small support |
| `hover:opacity-90` or any opacity-fade hover | Real colour shift plus a `:active` press state (`.btn-accent`) |
| Brand-coloured technology logos | Words, or monochrome icons inheriting `currentColor` |
| Pill-shaped nav items | Word-level links with a hover rule |

Also avoid: uniform bordered cards with identical radii everywhere, symmetrical
centred layouts with no tension, and decoration that carries no meaning.

### Interaction is the tell

Every interactive element needs a considered hover, `:focus-visible` and
`:active` state, with deliberate easing and duration. Lazy states are the
clearest signal of generated work. Use `.btn-accent` / `.btn-ghost` rather than
restyling buttons ad hoc, and use `EASE` from `src/lib/motion.js`
(`[0.16, 1, 0.3, 1]`) so motion feels like one system.

The nav deliberately has **no active underline** — the scroll progress bar under
the header already indicates position. Active state is text colour only.

---

## 4. Responsive logic

Breakpoints branch on **height as well as width**. A landscape phone has plenty
of width and almost none of height, and width-only breakpoints put the 3D stack
underneath the fixed 72px nav.

`src/components/system.jsx` reads three queries:

- `sideBySide` — `(min-width: 1024px), (min-width: 680px) and (max-height: 700px)`
- `compact` — `(max-height: 700px)`
- `veryShort` — `(max-height: 470px)`

…and scales the layer gap and plate height per tier. When changing anything in
that section, re-check 741×430 and 844×390.

The hero's technology rail is a space-saving device, not an ornament: moving the
stack out of the vertical flow is what keeps the hero inside a 768px laptop
viewport. Below `lg` the rail is hidden and a horizontal row returns.

---

## 5. Content rules

`src/data/profile.js` is the single source of content. Components render it;
they do not hardcode copy.

1. **Never invent.** Every claim traces to the owner's CV or something he has
   stated directly. No plausible-sounding projects, no invented metrics, no
   padded skill lists. This is a hiring document, and fabrications fail in
   interviews.
2. **Employer internal products are confidential.** The clinical documentation
   platform is his employer's private product. Describe his role and the
   outcome; never the architecture, never screenshots. A previous version had a
   scroll-driven diagram of its real pipeline — it was removed, and must not
   come back. The System section's exploded stack is now a generic
   representation of his own layers.
3. **Delivered work only.** No "in progress", "coming soon", or partial
   platform coverage. If something shipped on Android and not iOS, describe
   Android and say nothing about iOS.
4. **Do not position him as healthcare-only.** His strongest work is clinical,
   but he takes work across domains. Hero headline, tagline, page title and meta
   description stay about craft; healthcare appears as evidence inside the work.
5. **Write for the reader, not for him.** A heading like "Three decisions worth
   defending in an interview" addresses the owner, not the recruiter. Caught and
   fixed once already.

---

## 6. Verifying changes

`pnpm lint` and `pnpm build` must both pass. Lint is configured to fail on React
Compiler rules — refs read during render and `setState` in effects are errors,
not warnings.

Beyond that: **drive the real page and measure.** Several bugs in this project
were invisible in code review and obvious in a browser — the collapsed 3D stack,
the dead padding, the clipped landscape layout. Start the dev server, drive it
with Playwright against a real Chrome binary, read computed styles and bounding
boxes, and look at the screenshots.

Check at minimum: 1366×768 (the owner's screen class), 390×844, 741×430,
844×390, 820×1180, and light mode. Confirm no console errors and
`document.documentElement.scrollWidth === window.innerWidth`.

Do not claim something is verified that was only reasoned about.
