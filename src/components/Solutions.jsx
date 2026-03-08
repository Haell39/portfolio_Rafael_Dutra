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

  // We need to access the array of items. Since our translation system
  // might return the array directly if we have a smart getter, or we
  // might need to fall back. Assuming t() just gets the string normally,
  // we'll fetch the items from the raw object if needed, or by index.
  // Actually, a robust way is to just use indices 0-5.
  const items = [0, 1, 2, 3, 4, 5];

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
            gap: "var(--space-8)",
          }}
        >
          {items.map((index) => {
            const Icon = ICON_MAP[index];
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div
                  style={{
                    background: "var(--bg-card)",
                    padding: "2.5rem 2rem",
                    borderRadius: "24px",
                    border: "1px solid var(--border-subtle)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-6)",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "default",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.borderColor = "var(--accent-primary)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px -12px rgba(16, 185, 129, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "var(--bg-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid var(--border-highlight)",
                    }}
                  >
                    <Icon size={24} color="var(--accent-primary)" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "var(--text-xl)",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "var(--space-2)",
                        letterSpacing: "-0.01em",
                      }}
                    >
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
