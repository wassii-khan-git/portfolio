/** Shared easing and variants, kept out of component files so fast refresh
 *  stays reliable. */

export const EASE = [0.16, 1, 0.3, 1];

export const revealChild = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
