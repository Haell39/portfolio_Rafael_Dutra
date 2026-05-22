import FadeIn from "./ui/FadeIn";
import { useLanguage } from "../context/LanguageContext";
import {
  Database,
  Brain,
  Code2,
  Server,
  Cloud,
  Terminal,
  BarChart,
  Network,
  Atom,
  GitBranch,
  HardDrive,
} from "lucide-react";

const TECH_STACK = [
  { name: "Python", icon: Terminal },
  { name: "SQL", icon: Database },
  { name: "React", icon: Atom },
  { name: "PyTorch", icon: Brain },
  { name: "TensorFlow", icon: Network },
  { name: "FastAPI", icon: Server },
  { name: "Docker", icon: Cloud },
  { name: "VPS (Linux)", icon: HardDrive },
  { name: "Power BI", icon: BarChart },
  { name: "Git & GitHub", icon: GitBranch },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" style={{ padding: "var(--space-24) var(--space-4)" }}>
      <div style={{ maxWidth: "var(--container-width)", margin: "0 auto" }}>
        <FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--space-12)",
              alignItems: "start",
            }}
          >
            {/* Bio Column */}
            <div>
              <div style={{ marginBottom: "var(--space-8)" }}>
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
                  {t("about.kicker")}
                </span>
                <h2
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    color: "var(--text-primary)",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  {t("about.title")}
                </h2>
                <h3
                  style={{
                    fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    background:
                      "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t("about.subtitle_highlight")}
                </h3>
              </div>
              <div
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "var(--text-lg)",
                  lineHeight: 1.8,
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-4)",
                }}
              >
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p>{t("about.p3")}</p>
              </div>
            </div>

            {/* Stack Column – badge-style tech items */}
            <div>
              <h3
                style={{
                  fontSize: "var(--text-xl)",
                  marginBottom: "var(--space-8)",
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-4)",
                }}
              >
                {t("about.stack_title")}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-3)",
                }}
              >
                {TECH_STACK.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--space-3)",
                        padding: "var(--space-3) var(--space-6)",
                        background: "var(--bg-card)",
                        borderRadius: "12px",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-secondary)",
                        transition: "all 0.3s ease",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--text-primary)";
                        e.currentTarget.style.borderColor =
                          "var(--border-highlight)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-secondary)";
                        e.currentTarget.style.borderColor =
                          "var(--border-subtle)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <Icon size={20} />
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "var(--text-sm)",
                        }}
                      >
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
