import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ArrowRight } from "lucide-react";
import FadeIn from "./ui/FadeIn";

export default function DiagnosisCTA() {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open("https://wa.me/5581999654790", "_blank");
  };

  return (
    <section 
      id="diagnosis" 
      style={{ 
        padding: "var(--space-32) 0",
        background: "var(--bg-primary)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
        <FadeIn style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Kicker Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: "100px",
              border: "1px solid var(--border-highlight)",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "var(--text-secondary)",
              marginBottom: "var(--space-8)",
              textTransform: "uppercase"
            }}
          >
            {t("diagnosis.kicker")}
          </motion.div>

          {/* Title */}
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: "var(--space-8)",
              letterSpacing: "-0.03em"
            }}
          >
            {t("diagnosis.title")}
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              color: "var(--text-secondary)",
              maxWidth: "800px",
              margin: "0 auto var(--space-6)",
              lineHeight: 1.6
            }}
          >
            {t("diagnosis.subtitle")}
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
              color: "var(--text-tertiary)",
              maxWidth: "760px",
              margin: "0 auto var(--space-12)",
              lineHeight: 1.6
            }}
          >
            {t("diagnosis.desc")}
          </p>

          {/* Bullet Points */}
          <div style={{ textAlign: "left", maxWidth: "680px", margin: "0 auto var(--space-12)", width: "100%" }}>
            <h3 style={{ fontSize: "1rem", color: "var(--text-primary)", marginBottom: "var(--space-6)", fontWeight: 600 }}>
              {t("diagnosis.list_title")}
            </h3>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {Array.isArray(t("diagnosis.items")) && t("diagnosis.items").map((item, index) => (
                <li key={index} style={{ color: "var(--text-secondary)", fontSize: "0.95rem", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: "var(--accent-primary)", marginTop: "2px" }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "var(--accent-hover)", // Vibrant Emerald
              color: "#ffffff",
              padding: "16px 40px",
              borderRadius: "100px",
              fontSize: "1.125rem",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "var(--space-8)",
              alignSelf: "center"
            }}
          >
            {t("diagnosis.cta")}
            <ArrowRight size={20} />
          </motion.button>

          {/* Footer Items */}
          <div
            style={{
              fontSize: "0.875rem",
              color: "var(--text-tertiary)",
              fontWeight: 500
            }}
          >
            {t("diagnosis.footer")}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
