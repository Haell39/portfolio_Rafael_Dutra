// Motion Design System

// Easing - Cubic Bezier for snappy, responsive feel
const EASE_CUSTOM = [0.16, 1, 0.3, 1];

export const DURATIONS = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.3,
};

// Physics-based Spring for "Magical/Natural" feel
export const TRANSITION_SPRING = {
  type: "spring",
  stiffness: 50, // Low stiffness = gentle handling
  damping: 10, // Critical damping to prevent oscillation
  mass: 1,
};

export const TRANSITION = TRANSITION_SPRING;

// Reusable Variants
export const VARIANTS_FADE_UP = {
  hidden: {
    opacity: 0,
    y: 40, // Increased movement for "grand" entrance
    willChange: "transform, opacity", // Hardware acceleration hint
  },
  visible: {
    opacity: 1,
    y: 0,
    willChange: "auto",
  },
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
