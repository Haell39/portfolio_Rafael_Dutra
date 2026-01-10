import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PremiumImage({ src, alt, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if image is already cached/loaded
    const img = new Image();
    img.src = src;
    if (img.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        backgroundColor: "var(--bg-card-hover)", // Fallback/Skeleton color
      }}
    >
      {/* Skeleton Shimmer Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite linear",
            }}
          />
        )}
      </AnimatePresence>

      {/* Actual Image */}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0, scale: 1.1 }} // Start slightly zoomed out
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.1,
        }}
        transition={{
          opacity: { duration: 0.5, ease: "easeOut" },
          scale: { duration: 0.7, ease: "easeOut" },
        }}
        {...props}
        // Force eager loading inside this component since we manually handle display
        // But we rely on parent preloader for the actual network request timing
      />

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
