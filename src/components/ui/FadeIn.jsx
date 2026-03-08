import { motion, useReducedMotion } from "framer-motion";
import { TRANSITION, VARIANTS_FADE_UP } from "../../config/motion";

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  style = {},
}) {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, render static content
  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }} // Trigger a bit earlier
      transition={{ ...TRANSITION, delay }}
      variants={VARIANTS_FADE_UP}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
