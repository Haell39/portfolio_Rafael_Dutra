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
            }}
          >
            {/* Bio Column */}
            <div>
              <h2
                style={{
                  fontSize: "var(--text-2xl)",
                  marginBottom: "var(--space-8)",
                }}
              >
                Sobre Mim
              </h2>
              <div
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "var(--text-lg)",
                  lineHeight: 1.7,
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
                  marginBottom: "var(--space-6)",
                  color: "var(--text-primary)",
                }}
              >
                Stack
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "var(--space-4)",
                }}
              >
                {SKILLS.map((skill, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-2)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        background: "var(--text-tertiary)",
                        borderRadius: "50%",
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
