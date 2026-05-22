import FadeIn from "./ui/FadeIn";
import { useLanguage } from "../context/LanguageContext";
import {
  BrainCircuit,
  Database,
  BarChart4,
  Cpu,
  TrendingUp,
  ServerCog,
} from "lucide-react";

const ICON_MAP = [
  BrainCircuit, // Machine Learning
  Database, // Data Engineering
  BarChart4, // Dashboards & BI
  Cpu, // Process Automation
  TrendingUp, // Statistical Analysis
  ServerCog, // Model Deployment
];

export default function Solutions() {
  const { t, language } = useLanguage();

  const items = [0, 1, 2, 3];

  return (
    <section
      id="solutions"
      style={{
        padding: "var(--space-24) var(--space-4)",
        background: "var(--bg-secondary)",
      }}
    >
      <div style={{ maxWidth: "var(--container-width)", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
            <span
              style={{
                color: "var(--accent-primary)",
                fontSize: "var(--text-sm)",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "var(--space-4)",
              }}
            >
              {t("solutions.kicker")}
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--text-primary)",
                marginBottom: "var(--space-4)",
              }}
            >
              {t("solutions.title")}
            </h2>
            <p
              style={{
                fontSize: "var(--text-lg)",
                color: "var(--text-secondary)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              {t("solutions.subtitle")}
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {items.map((index) => {
            const Icon = ICON_MAP[index];
            return (
              <FadeIn
                key={index}
                delay={index * 0.1}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div
                  style={{
                    background: "var(--bg-card)",
                    padding: "2rem",
                    borderRadius: "16px",
                    border: "1px solid var(--border-subtle)",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-4)",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "default",
                    position: "relative",
                    zIndex: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.borderColor = "var(--accent-primary)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px -12px rgba(16, 185, 129, 0.15)";
                    e.currentTarget.style.zIndex = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.zIndex = "0";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      <Icon size={20} color="var(--accent-primary)" />
                      {t(`solutions.items.${index}.title`)}
                    </h3>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                      }}
                    >
                      {t(`solutions.items.${index}.desc`)}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
