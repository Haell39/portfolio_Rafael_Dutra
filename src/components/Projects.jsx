import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import { HOVER_SCALE } from "../config/motion";

import imgHorus from "../assets/projects/horus.png";
import imgDiagnostic from "../assets/projects/Diagnostic.png";
import imgAnalytics from "../assets/projects/Analytics.png";
import imgOpenFinance from "../assets/projects/openfinance.png";

const PROJECTS = [
  {
    title: "Horus AI (Monitoramento)",
    description:
      "Sistema automatizado que detecta falhas em transmissões ao vivo. Três modelos de ML analisam vídeo, áudio e lipsync simultaneamente para gerar alertas em tempo real.",
    tags: ["Computer Vision", "Real-time AI", "Python", "Audio Processing"],
    image: imgHorus,
    link: "https://github.com/Haell39/horus_ai/tree/main",
  },
  {
    title: "ML Diagnóstico Médico",
    description:
      "Estudo abrangente aplicado a datasets médicos. Construção e otimização de modelos de classificação para prever diagnósticos e agrupamento de padrões latentes.",
    tags: ["Machine Learning", "Data Science", "Classification", "Clustering"],
    image: imgDiagnostic,
    link: "https://github.com/Haell39/ML-Aplicada-Diagnostico-Clinico",
  },
  {
    title: "HR Analytics",
    description:
      "Modelo preditivo para identificar rotatividade de funcionários. Análise de dados para redução de turnover e retenção estratégica em corporações multinacionais.",
    tags: ["Data Analytics", "Predictive Modeling", "Business Intelligence"],
    image: imgAnalytics,
    link: "https://github.com/Haell39/HR-Analytics",
  },
  {
    title: "OpenFinance Intelligence",
    description:
      "Uma plataforma moderna de inteligência em tempo real para visualização de eventos financeiros, políticos e geopolíticos no Brasil. Full-stack e orientada a dados.",
    tags: ["Full Stack", "Real-time Intelligence", "Finance API", "Dashboard"],
    image: imgOpenFinance,
    link: "https://github.com/Haell39/openFinance",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "var(--space-24) var(--space-4)",
        background: "var(--bg-secondary)",
      }}
    >
      <div style={{ maxWidth: "var(--container-width)", margin: "0 auto" }}>
        <FadeIn>
          <h2
            style={{
              fontSize: "var(--text-2xl)",
              marginBottom: "var(--space-12)",
            }}
          >
            Alguns trabalhos meus:
          </h2>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-6)",
          }}
        >
          {PROJECTS.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.a
                className="metallic-hover"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -5,
                  scale: 1.01,
                  borderColor: "var(--accent-hover)",
                }}
                style={{
                  borderRadius: "var(--radius-lg)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  overflow: "hidden",
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  transition: "border-color 0.3s ease",
                }}
              >
                {/* Project Thumbnail */}
                <div
                  style={{
                    height: "160px",
                    width: "100%",
                    background: "var(--bg-card-hover)",
                    position: "relative",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "var(--space-4)",
                      right: "var(--space-4)",
                      background: "rgba(0,0,0,0.5)",
                      borderRadius: "50%",
                      padding: "var(--space-2)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <ArrowUpRight color="white" size={20} />
                  </div>
                </div>

                <div
                  style={{
                    padding: "var(--space-5)", // Creating a custom spacing just for this or reuse space-4? Let's use space-4 if likely exists or stick to safe ones.
                    // Actually variables.css didn't have space-5. Let's use custom 1.25rem or just var(--space-4).
                    // User said "just a little", maybe 160px image is enough.
                    // Let's go with var(--space-4) for padding to be tighter.
                    padding: "var(--space-4)",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "var(--text-xl)",
                      marginBottom: "var(--space-2)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "var(--text-base)",
                      marginBottom: "var(--space-4)",
                      flex: 1,
                    }}
                  >
                    {project.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "var(--space-2)",
                    }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="chromatic-tag"
                        style={{
                          fontSize: "var(--text-xs)",
                          padding: "4px 12px",
                          borderRadius: "var(--radius-full)",
                          // background and border handled by CSS class
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
