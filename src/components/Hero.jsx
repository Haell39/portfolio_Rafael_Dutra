import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import { VARIANTS_CONTAINER, HOVER_SCALE } from "../config/motion";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-8) var(--space-4)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Gradient Spot */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <motion.div
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: "var(--container-width)",
          width: "100%",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <FadeIn>
          <h2
            style={{
              color: "var(--accent-primary)",
              fontSize: "var(--text-sm)",
              fontWeight: 500,
              letterSpacing: "0.05em",
              marginBottom: "var(--space-6)",
              textTransform: "uppercase",
            }}
          >
            Rafael Dutra
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "var(--space-6)",
              background: "linear-gradient(to bottom right, #fff, #a1a1aa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Criando inteligência
            <br />a partir de dados.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto var(--space-8)",
              lineHeight: 1.6,
            }}
          >
            Sou um especialista em Machine Learning & Analytics focado em
            transformar dados complexos em soluções inteligentes e pipelines
            automatizados.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div
            style={{
              display: "flex",
              gap: "var(--space-4)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.a
              href="#projects"
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                background: "var(--text-primary)",
                color: "var(--bg-primary)",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius-full)",
                fontWeight: 500,
                fontSize: "var(--text-sm)",
                transition: "background 0.3s ease",
              }}
              whileHover={{
                scale: HOVER_SCALE,
                background: "var(--accent-hover)",
              }}
            >
              Ver Projetos <ArrowRight size={16} />
            </motion.a>

            <div style={{ display: "flex", gap: "var(--space-2)" }}>
              {[
                { Icon: Github, href: "https://github.com/Haell39" },
                {
                  Icon: Linkedin,
                  href: "https://linkedin.com/in/rafaelsantoshome",
                },
                { Icon: Mail, href: "mailto:rafaeldutrapro@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    color: "var(--accent-hover)",
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    padding: "0.75rem",
                    color: "var(--text-secondary)",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(255,255,255,0.03)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
}
