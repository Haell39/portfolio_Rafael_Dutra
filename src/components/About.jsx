import FadeIn from "./ui/FadeIn";

const SKILLS = [
  "Python",
  "SQL",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow / PyTorch",
  "Computer Vision",
  "Data Science",
  "NLP",
  "FastAPI",
  "Docker",
  "Power BI",
  "Git & GitHub",
];

export default function About() {
  return (
    <section id="about" style={{ padding: "var(--space-24) var(--space-4)" }}>
      <div style={{ maxWidth: "var(--container-width)", margin: "0 auto" }}>
        <FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "var(--space-12)",
              alignItems: "start",
            }}
          >
            {/* Bio Column */}
            <div>
              <h2
                style={{
                  fontSize: "var(--text-2xl)",
                  marginBottom: "var(--space-8)",
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-4)",
                }}
              >
                Sobre Mim
              </h2>
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
                <p>
                  Sou estudante de Análise e Desenvolvimento de Sistemas com
                  experiência prática em Ciência de Dados aplicada a problemas
                  reais. Minha paixão está em extrair valor de dados através de
                  análise exploratória, Machine Learning e automação de
                  pipelines.
                </p>
                <p>
                  Atualmente, participo de projetos desafiadores que envolvem
                  desde a coleta e tratamento de dados até a visualização e
                  implementação de modelos preditivos em produção.
                </p>
                <p>
                  Tenho forte base em Python, SQL e frameworks de IA, além de
                  valorizar o pensamento analítico, o trabalho em equipe e o
                  aprendizado contínuo.
                </p>
              </div>
            </div>

            {/* Skills Column */}
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
                Minha Stack
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "var(--space-x-4) var(--space-y-4)",
                  columnGap: "var(--space-4)",
                  rowGap: "var(--space-3)",
                }}
              >
                {SKILLS.map((skill, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-4)",
                      fontSize: "var(--text-base)",
                      color: "var(--text-secondary)",
                      padding: "var(--space-2) 0",
                      borderBottom: "1px solid var(--border-subtle)",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent-hover)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "var(--accent-hover)",
                        display: "inline-block",
                      }}
                    />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
