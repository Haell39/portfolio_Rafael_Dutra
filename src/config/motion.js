// Motion Design System

// Easing - Cubic Bezier for snappy, responsive feel
const EASE_CUSTOM = [0.16, 1, 0.3, 1];

export const DURATIONS = {
  fast: 0.15,
  normal: 0.4,
  slow: 0.3,
};

export const TRANSITION = {
  duration: DURATIONS.normal,
  ease: EASE_CUSTOM,
};

// Reusable Variants
export const VARIANTS_FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const HOVER_SCALE = 1.02; // keeping it subtle (max 1.03 allowed)
