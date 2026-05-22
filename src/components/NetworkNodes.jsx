import { motion } from "framer-motion";
import { ExternalLink, Terminal, Code2, GraduationCap, Github, PlaySquare } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { HOVER_SCALE } from "../config/motion";

export default function NetworkNodes() {
  const { t } = useLanguage();

  const nodes = [
    {
      id: "kodika",
      icon: Terminal,
      color: "#10b981", // Emerald
      bg: "rgba(16, 185, 129, 0.1)",
      href: "https://kodika.com.br",
      keyPrefix: "kodika",
    },
    {
      id: "residencia",
      icon: GraduationCap,
      color: "#3b82f6", // Blue
      bg: "rgba(59, 130, 246, 0.1)",
      href: "https://www.portodigital.org/paginas-institucionais/pessoas/residencia-tecnologica",
      keyPrefix: "residencia",
    },
    {
      id: "datastudent",
      icon: PlaySquare,
      color: "#fe2c55", // TikTok Pink/Red
      bg: "rgba(254, 44, 85, 0.1)",
      href: "https://www.tiktok.com/@datastudent",
      keyPrefix: "datastudent",
    },
    {
      id: "github",
      icon: Github,
      color: "#f4f4f5", // White/Gray
      bg: "rgba(244, 244, 245, 0.1)",
      href: "https://github.com/Haell39",
      keyPrefix: "github",
    },
  ];

  return (
    <section
      id="network"
      style={{
        padding: "var(--space-24) var(--space-4)",
        background: "var(--bg-primary)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "var(--container-width)", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: "var(--space-16)" }}>
            <span
              style={{
                color: "var(--text-secondary)",
                fontFamily: "monospace",
                fontSize: "var(--text-sm)",
                display: "block",
                marginBottom: "var(--space-4)",
                letterSpacing: "0.05em",
              }}
            >
              $ {t("network.kicker")} _
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "var(--space-4)",
              }}
            >
              {t("network.title")}
            </h2>
            <p
              style={{
                fontSize: "var(--text-lg)",
                color: "var(--text-secondary)",
                maxWidth: "700px",
                lineHeight: 1.6,
              }}
            >
              {t("network.subtitle")}
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-6)",
          }}
        >
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <FadeIn key={node.id} delay={i * 0.1}>
                <motion.a
                  href={node.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="metallic-hover"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "var(--space-8)",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "16px",
                    textDecoration: "none",
                    height: "100%",
                    position: "relative",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = node.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "var(--space-6)",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: node.bg,
                        color: node.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <ExternalLink size={20} color="var(--text-tertiary)" />
                  </div>

                  <h3
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      marginBottom: "var(--space-2)",
                    }}
                  >
                    {t(`network.${node.keyPrefix}.name`)}
                  </h3>

                  <div
                    style={{
                      color: node.color,
                      fontFamily: "monospace",
                      fontSize: "0.85rem",
                      marginBottom: "var(--space-4)",
                    }}
                  >
                    {t(`network.${node.keyPrefix}.type`)}
                  </div>

                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      marginTop: "auto",
                    }}
                  >
                    {t(`network.${node.keyPrefix}.desc`)}
                  </p>
                </motion.a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
