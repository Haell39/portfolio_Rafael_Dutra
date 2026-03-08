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
              background:
                "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("hero.subtitle_highlight")}
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
              {t("hero.cta_contact")} <Mail size={16} />
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
              href={
                language === "pt" ? "/Rafael_Dutra.pdf" : "/Rafael_Dutra_EN.pdf"
              }
              download={
                language === "pt"
                  ? "Rafael_Dutra_Curriculum.pdf"
                  : "Rafael_Dutra_Curriculum_EN.pdf"
              }
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
