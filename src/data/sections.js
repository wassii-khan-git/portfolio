/** Page sections, shared by the nav, the footer and the active-section
 *  observer. The ids match the `id` on each `<section>`. */

export const SECTIONS = [
  { id: "system", label: "System" },
  { id: "work", label: "Work" },
  { id: "approach", label: "Approach" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const SECTION_IDS = ["hero", ...SECTIONS.map((section) => section.id)];
