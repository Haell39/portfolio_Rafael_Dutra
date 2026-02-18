import { motion } from "framer-motion";
import FadeIn from "./ui/FadeIn";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      style={{ padding: "var(--space-24) var(--space-4)", textAlign: "center" }}
    >
      <FadeIn>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              marginBottom: "var(--space-6)",
              fontWeight: 700,
            }}
          >
            {t("contact.title")}
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "var(--text-lg)",
              marginBottom: "var(--space-8)",
            }}
          >
            {t("contact.subtitle")}
          </p>

          <motion.a
            href="https://linkedin.com/in/rafaelsantoshome"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, background: "var(--accent-hover)" }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-block",
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
              padding: "1rem 2rem",
              borderRadius: "var(--radius-full)",
              fontSize: "var(--text-base)",
              fontWeight: 600,
              transition: "background 0.3s ease",
            }}
          >
            {t("contact.cta")}
          </motion.a>
        </div>
      </FadeIn>

      <div
        style={{
          marginTop: "var(--space-24)",
          color: "var(--text-tertiary)",
          fontSize: "var(--text-sm)",
        }}
      >
        © {new Date().getFullYear()} Rafael Dutra. {t("contact.footer")}
      </div>
    </section>
  );
}
