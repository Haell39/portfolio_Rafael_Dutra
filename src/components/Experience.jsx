import FadeIn from "./ui/FadeIn";

const EXPERIENCES = [
  {
    company: "Porto Digital / Globo",
    role: "Residência Tecnológica",
    date: "02/2024 — Atualmente",
    description:
      "Desenvolvimento de um sistema de IA para análise e reporte de ocorrências em transmissões diárias. Atuação com Machine Learning, coleta de dados, Visão Computacional e pipelines de automação.",
  },
  {
    company: "FICR - Faculdade Imaculada Conceição do Recife",
    role: "Análise e Desenvolvimento de Sistemas",
    date: "2024 — 2026 (Previsão)",
    description:
      "Disciplinas relevantes: Estrutura de Dados, Banco de Dados Aplicados, Inteligência Artificial, Ciência de Dados, Residência tecnológica, Projetos de extensão, Lógica Matemática e Algoritmo.",
  },
  {
    company: "Projetos & Freelance",
    role: "Data Scientist & ML",
    date: "2024 — Atualmente",
    description:
      "Desenvolvimento de modelos de Machine Learning e análises avançadas para resolução de problemas reais. Criação de pipelines de dados, APIs e aplicações data-driven com Python, SQL e FastAPI. Entrega de soluções escaláveis focadas em automação, eficiência e tomada de decisão.",
  },
];

export default function Experience() {
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
            Experiência
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
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
