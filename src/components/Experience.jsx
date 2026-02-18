import FadeIn from "./ui/FadeIn";
import { useLanguage } from "../context/LanguageContext";

const EXPERIENCES = [
  {
    company: "Porto Digital / Globo",
    role: "Residência Tecnológica",
    roleEn: "Technological Residency",
    date: "02/2024 — Atualmente",
    dateEn: "02/2024 — Present",
    description:
      "Desenvolvimento de um sistema de IA para análise e reporte de ocorrências em transmissões diárias. Atuação com Machine Learning, coleta de dados, Visão Computacional e pipelines de automação.",
    descriptionEn:
      "Development of an AI system for analyzing and reporting incidents in daily broadcasts. Working with Machine Learning, data collection, Computer Vision, and automation pipelines.",
  },
  {
    company: "FICR - Faculdade Imaculada Conceição do Recife",
    role: "Análise e Desenvolvimento de Sistemas",
    roleEn: "Systems Analysis and Development",
    date: "02/2024 — 2026",
    dateEn: "02/2024 — 2026",
    description:
      "Disciplinas relevantes: Estrutura de Dados, Banco de Dados Aplicados, Inteligência Artificial, Ciência de Dados, Residência tecnológica, Projetos de extensão, Lógica Matemática e Algoritmo.",
    descriptionEn:
      "Relevant courses: Data Structures, Applied Databases, Artificial Intelligence, Data Science, Technological Residency, Extension Projects, Mathematical Logic, and Algorithms.",
  },
  {
    company: "Projetos & Freelance",
    role: "Data Scientist & ML",
    roleEn: "Data Scientist & ML",
    date: "2025 — Atualmente",
    dateEn: "2025 — Present",
    description:
      "Desenvolvimento de modelos de Machine Learning e análises avançadas para resolução de problemas reais. Criação de pipelines de dados, APIs e aplicações data-driven com Python, Docker, SQL e FastAPI. Entrega de soluções escaláveis focadas em automação, eficiência e tomada de decisão.",
    descriptionEn:
      "Development of Machine Learning models and advanced analyses to solve real-world problems. Creation of data pipelines, APIs, and data-driven applications with Python, Docker, SQL, and FastAPI. Delivering scalable solutions focused on automation, efficiency, and decision-making.",
  },
  {
    company: "HarvardX",
    role: "Data Science: Building Machine Learning Models",
    roleEn: "Data Science: Building Machine Learning Models",
    date: "01/2026 - Atualmente",
    dateEn: "01/2026 - Present",
    description:
      "Construção de sistemas de recomendação e aplicação de algoritmos de Machine Learning. Foco em validação cruzada, regularização e PCA para desenvolvimento de modelos preditivos eficientes.",
    descriptionEn:
      "Building recommendation systems and applying Machine Learning algorithms. Focus on cross-validation, regularization, and PCA for efficient predictive model development.",
  },
];

export default function Experience() {
  const { language, t } = useLanguage();

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
          {EXPERIENCES.map((exp, index) => (
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
                    {language === "pt" ? exp.role : exp.roleEn}
                  </h3>
                  <span
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--text-secondary)",
                      fontFamily: "monospace",
                    }}
                  >
                    {language === "pt" ? exp.date : exp.dateEn}
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
                  {language === "pt" ? exp.description : exp.descriptionEn}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
