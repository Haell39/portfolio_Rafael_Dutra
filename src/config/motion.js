export const TRANSITION = {
  type: "spring",
  stiffness: 50,
  damping: 10,
  mass: 1,
};
export const VARIANTS_FADE_UP = {
  hidden: {
    opacity: 0,
    y: 32,
    willChange: "transform, opacity",
  },
  visible: {
    opacity: 1,
    y: 0,
    willChange: "auto",
  },
};
