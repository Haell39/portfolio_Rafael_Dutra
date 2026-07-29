import FadeIn from "./ui/FadeIn";
import { useLanguage } from "../context/LanguageContext";



export default function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      style={{ padding: "var(--space-24) var(--space-4)" }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <FadeIn>
          <h2
            style={{
              fontSize: "var(--text-2xl)",
              marginBottom: "var(--space-12)",
              color: "var(--text-primary)",
            }}
          >
            {t("experience.title")}
          </h2>
        </FadeIn>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-12)",
          }}
        >
          {Array.isArray(t("experience.items")) && t("experience.items").map((exp, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "var(--space-2)",
                  borderLeft: "1px solid var(--border-subtle)",
                  paddingLeft: "var(--space-6)",
                  position: "relative",
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-5px",
                    top: "8px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "var(--bg-primary)",
                    border: "2px solid var(--text-tertiary)",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "var(--space-2)",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 600 }}>
                    {exp.role}
                  </h3>
                  <span
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--text-secondary)",
                      fontFamily: "monospace",
                    }}
                  >
                    {exp.date}
                  </span>
                </div>

                <div
                  style={{
                    color: "var(--text-tertiary)",
                    fontWeight: 500,
                    fontSize: "var(--text-sm)",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  {exp.company}
                </div>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--text-base)",
                    maxWidth: "600px",
                  }}
                >
                  {exp.description}
                </p>

                {Array.isArray(exp.details) && exp.details.length > 0 && (
                  <ul
                    style={{
                      margin: "var(--space-2) 0 0",
                      paddingLeft: "var(--space-5)",
                      color: "var(--text-secondary)",
                      fontSize: "var(--text-sm)",
                      display: "grid",
                      gap: "var(--space-2)",
                      maxWidth: "640px",
                    }}
                  >
                    {exp.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
