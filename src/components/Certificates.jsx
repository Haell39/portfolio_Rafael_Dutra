import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import PremiumImage from "./ui/PremiumImage";

// Imports
import imgEFSET from "../assets/certificates/EFSET.png";
import imgONE from "../assets/certificates/ONE.png";
import imgSQLK from "../assets/certificates/SQLK.png";
import imgADA from "../assets/certificates/trilhaADA.png";
import imgStats from "../assets/certificates/statistic.png";
import imgAnalise from "../assets/certificates/analisedados.png";

export const CERTIFICATES = [
  {
    title: "EF SET English Certificate (C2 Proficient)",
    issuer: "EF Standard English Test",
    date: "2025",
    link: "https://cert.efset.org/en/KEmJzs",
    image: imgEFSET,
  },
  {
    title: "ONE Tech Foundation G8 - Data Science + IA",
    issuer: "Alura / Oracle",
    date: "2025",
    link: "https://cursos.alura.com.br/user/rafaelsantoshome/program/14/certificate",
    image: imgONE,
  },
  {
    title: "Trilha Digital Coders 24 Data Science",
    issuer: "Ada Tech",
    date: "2024",
    link: "https://ada.tech/certificado?code=0d69f303-5f43-ab55-0f28-9e5e8678bb9e",
    image: imgADA,
  },
  {
    title: "SQL Advanced",
    issuer: "Kaggle",
    date: "2024",
    link: "https://www.kaggle.com/learn/certification/raeldata/advanced-sql",
    image: imgSQLK,
  },
  {
    title: "Estatística",
    issuer: "Escola Virtual Gov",
    date: "2024",
    link: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/WPoM13770255Q1qz#",
    image: imgStats,
  },
  {
    title: "Análise de dados para tomada de decisão",
    issuer: "Escola Virtual Gov",
    date: "2024",
    link: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/KAmM13988122oUfK#",
    image: imgAnalise,
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      style={{
        padding: "var(--space-24) var(--space-4)",
        background: "var(--bg-primary)", // Alternating background
      }}
    >
      <div style={{ maxWidth: "var(--container-width)", margin: "0 auto" }}>
        <FadeIn>
          <h2
            style={{
              fontSize: "var(--text-2xl)",
              marginBottom: "var(--space-12)",
              color: "var(--text-primary)",
            }}
          >
            Certificações & Reconhecimento
          </h2>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "var(--space-6)",
          }}
        >
          {CERTIFICATES.map((cert, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.a
                className="metallic-hover"
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -5,
                  scale: 1.01,
                  borderColor: "var(--accent-hover)",
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  textDecoration: "none",
                  height: "100%",
                  cursor: "pointer",
                  transition: "border-color 0.3s ease",
                }}
              >
                {/* Image Container */}
                <div
                  style={{
                    height: "180px",
                    width: "100%",
                    background: "var(--bg-card-hover)",
                    position: "relative",
                  }}
                >
                  <PremiumImage
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "var(--space-2)",
                      right: "var(--space-2)",
                      background: "rgba(0,0,0,0.6)",
                      borderRadius: "50%",
                      padding: "6px",
                      backdropFilter: "blur(4px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ExternalLink size={14} color="white" />
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "var(--space-4)",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "4px",
                      lineHeight: 1.4,
                    }}
                  >
                    {cert.title}
                  </h3>

                  <div
                    style={{ marginTop: "auto", paddingTop: "var(--space-4)" }}
                  >
                    <p
                      style={{
                        fontSize: "var(--text-xs)",
                        color: "var(--text-primary)",
                        fontWeight: 500,
                      }}
                    >
                      {cert.issuer}
                    </p>
                    <p
                      style={{
                        fontSize: "var(--text-xs)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Emitido em: {cert.date}
                    </p>
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
