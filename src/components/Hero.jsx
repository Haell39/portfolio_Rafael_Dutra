import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
} from "lucide-react";
import FadeIn from "./ui/FadeIn";
import ParticleNetwork from "./ui/ParticleNetwork";
import { VARIANTS_CONTAINER, HOVER_SCALE } from "../config/motion";

import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section
      className="hero-section"
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-8) var(--space-4)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Canvas particle network background */}
      <ParticleNetwork />

      <motion.div
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: "var(--container-width)",
          width: "100%",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <FadeIn>
          <h2
            style={{
              color: "var(--accent-primary)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              letterSpacing: "0.1em",
              marginBottom: "var(--space-6)",
              textTransform: "uppercase",
            }}
          >
            {t("hero.kicker")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "var(--space-4)",
              color: "var(--text-primary)",
            }}
          >
            {t("hero.title")}
          </h1>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "var(--space-6)",
              color: "var(--text-primary)",
            }}
          >
            {(() => {
              const full = t("hero.subtitle_highlight");
              const words = [
                t("hero.highlight_word"),
                t("hero.highlight_word2"),
              ].filter(Boolean);
              const marks = [];
              for (const w of words) {
                const idx = full.toLowerCase().indexOf(w.toLowerCase());
                if (idx !== -1) marks.push({ start: idx, end: idx + w.length });
              }
              marks.sort((a, b) => a.start - b.start);
              const result = [];
              let cursor = 0;
              for (const { start, end } of marks) {
                if (cursor < start) result.push(full.slice(cursor, start));
                result.push(
                  <span key={start} className="hero-highlight">
                    {full.slice(start, end)}
                  </span>,
                );
                cursor = end;
              }
              if (cursor < full.length) result.push(full.slice(cursor));
              return result.length ? result : full;
            })()}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto var(--space-8)",
              lineHeight: 1.6,
            }}
          >
            {t("hero.subtitle")}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div
            style={{
              display: "flex",
              gap: "var(--space-4)",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <motion.a
              href="https://wa.me/5581999654790"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                background: "#10b981",
                color: "#ffffff",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius-full)",
                fontWeight: 600,
                fontSize: "var(--text-sm)",
                transition: "all 0.3s ease",
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
              }}
              whileHover={{
                scale: HOVER_SCALE,
                boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)",
              }}
            >
              {t("hero.cta_contact")}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </motion.a>

            <motion.a
              href="#projects"
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                background: "var(--text-primary)",
                color: "var(--bg-primary)",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius-full)",
                fontWeight: 600,
                fontSize: "var(--text-sm)",
                transition: "background 0.3s ease",
              }}
              whileHover={{
                scale: HOVER_SCALE,
                background: "var(--accent-hover)",
              }}
            >
              {t("hero.cta_projects")} <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href={t("hero.cv_path")}
              download={t("hero.cv_filename")}
              className="metallic-hover"
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius-full)",
                fontWeight: 600,
                fontSize: "var(--text-sm)",
                transition: "all 0.3s ease",
              }}
              whileHover={{
                scale: HOVER_SCALE,
                borderColor: "var(--accent-hover)",
                color: "var(--accent-hover)",
              }}
            >
              {t("hero.cta_cv")} <Download size={16} />
            </motion.a>

            <div style={{ display: "flex", gap: "var(--space-2)" }}>
              {[
                { Icon: Github, href: "https://github.com/Haell39" },
                {
                  Icon: Linkedin,
                  href: "https://linkedin.com/in/rafaelsantoshome",
                },
                { Icon: Phone, href: "https://wa.me/5581999654790" },
                { Icon: Mail, href: "mailto:rafaeldutrapro@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    color: "var(--accent-hover)",
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    padding: "0.75rem",
                    color: "var(--text-secondary)",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(255,255,255,0.03)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
}
