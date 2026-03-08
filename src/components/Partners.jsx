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
} from "lucide-react";

const TECH_STACK = [
  { name: "Python", icon: Terminal },
  { name: "SQL", icon: Database },
  { name: "PyTorch", icon: Brain },
  { name: "TensorFlow", icon: Network },
  { name: "FastAPI", icon: Server },
  { name: "Docker", icon: Cloud },
  { name: "Power BI", icon: BarChart },
  { name: "Git", icon: Code2 },
];

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section
      id="partners"
      style={{
        padding: "var(--space-16) 0",
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        overflow: "hidden" /* For marquees */,
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-width)",
          margin: "0 auto",
          padding: "0 var(--space-4)",
        }}
      >
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            <span
              style={{
                color: "var(--accent-primary)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              🚀 Stacks & Ferramentas
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "var(--space-8)",
              rowGap: "var(--space-12)",
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
                    background: "var(--bg-primary)",
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
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={24} />
                  <span
                    style={{ fontWeight: 600, fontSize: "var(--text-base)" }}
                  >
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
