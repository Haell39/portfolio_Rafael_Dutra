import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import { HOVER_SCALE } from "../config/motion";
import { useLanguage } from "../context/LanguageContext";

// TikTok official logo SVG
const TikTokIcon = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.88a8.18 8.18 0 0 0 4.78 1.52V7.0a4.85 4.85 0 0 1-1.01-.31z" />
  </svg>
);

export default function DataStudent() {
  const { t } = useLanguage();
  return (
    <section
      id="datastudent"
      style={{
        padding: "var(--space-24) var(--space-4)",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decor */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(232, 121, 249, 0.05) 0%, rgba(0,0,0,0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <FadeIn>
          <div
            style={{
              background: "var(--bg-card)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-subtle)",
              padding: "var(--space-8)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
            className="metallic-hover"
          >
            <div
              style={{
                display: "inline-flex",
                padding: "1rem",
                borderRadius: "50%",
                background: "rgba(254, 44, 85, 0.12)",
                color: "#fe2c55",
                marginBottom: "var(--space-6)",
              }}
            >
              <TikTokIcon size={32} />
            </div>

            <h2
              style={{
                fontSize: "var(--text-2xl)",
                marginBottom: "var(--space-4)",
                color: "var(--text-primary)",
              }}
            >
              {t("datastudent.title")}
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "var(--text-lg)",
                marginBottom: "var(--space-8)",
                maxWidth: "500px",
                margin: "0 auto var(--space-8)",
              }}
            >
              {t("datastudent.subtitle")}
            </p>

            <motion.a
              href="https://www.tiktok.com/@datastudent"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: HOVER_SCALE, background: "#fe2c55" }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                background: "#c4233f",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius-full)",
                fontWeight: 600,
                fontSize: "var(--text-sm)",
                transition: "background 0.3s ease",
              }}
            >
              {t("datastudent.cta")} <ExternalLink size={16} />
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
