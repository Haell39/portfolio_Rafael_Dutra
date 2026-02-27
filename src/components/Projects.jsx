import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import PremiumImage from "./ui/PremiumImage";
import { useLanguage } from "../context/LanguageContext";

import imgHorus from "../assets/projects/horus.webp";
import imgDiagnostic from "../assets/projects/Diagnostic.webp";
import imgAnalytics from "../assets/projects/Analytics.webp";
import imgOpenFinance from "../assets/projects/openfinance.webp";

export const PROJECTS = [
  {
    title: "Horus AI",
    titleEn: "Horus AI",
    description:
      "Sistema automatizado que detecta falhas em transmissões ao vivo. Três modelos de ML analisam vídeo, áudio e lipsync simultaneamente para gerar alertas em tempo real.",
    descriptionEn:
      "Automated system that detects failures in live broadcasts. Three ML models analyze video, audio, and lipsync simultaneously to generate real-time alerts.",
    tags: ["Computer Vision", "Real-time AI", "Python", "Audio Processing"],
    image: imgHorus,
    link: "https://github.com/Haell39/horus_ai/tree/main",
  },
  {
    title: "ML Diagnóstico Médico",
    titleEn: "Medical Diagnostic ML",
    description:
      "Estudo abrangente aplicado a datasets médicos. Construção e otimização de modelos de classificação para prever diagnósticos e agrupamento de padrões latentes.",
    descriptionEn:
      "Comprehensive study applied to medical datasets. Construction and optimization of classification models to predict diagnoses and clustering of latent patterns.",
    tags: ["Machine Learning", "Data Science", "Classification", "Clustering"],
    image: imgDiagnostic,
    link: "https://github.com/Haell39/ML-Aplicada-Diagnostico-Clinico",
  },
  {
    title: "HR Analytics",
    titleEn: "HR Analytics",
    description:
      "Modelo preditivo para identificar rotatividade de funcionários. Análise de dados para redução de turnover e retenção estratégica em corporações multinacionais.",
    descriptionEn:
      "Predictive model to identify employee turnover. Data analysis for turnover reduction and strategic retention in multinational corporations.",
    tags: ["Data Analytics", "Predictive Modeling", "Business Intelligence"],
    image: imgAnalytics,
    link: "https://github.com/Haell39/HR-Analytics",
  },
  {
    title: "OpenFinance Intel",
    titleEn: "OpenFinance Intel",
    description:
      "Plataforma de Inteligência de Investimentos: IA, NLP e Análise de Sentimento para transformar o caos do mercado em Sinais Acionáveis.",
    descriptionEn:
      "Investment Intelligence Platform: AI, NLP, and Sentiment Analysis to transform market chaos into Actionable Signals.",
    tags: ["AI & NLP", "Market Intelligence", "React", "FastAPI", "Docker"],
    image: imgOpenFinance,
    link: "https://github.com/Haell39/OpenFinance_Intel",
  },
];

const CARD_RATIO = 0.264;
const GAP = 20;

export default function Projects() {
  const { language, t } = useLanguage();
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1100);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const total = PROJECTS.length;
  const cardWidth = containerWidth * CARD_RATIO;

  const prev = useCallback(
    () => setActive((a) => (a - 1 + total) % total),
    [total],
  );
  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);

  const getOffset = (index) => {
    let off = index - active;
    while (off > Math.floor(total / 2)) off -= total;
    while (off < -Math.floor(total / 2)) off += total;
    return off;
  };

  const prevActiveRef = useRef(active);
  const getPrevOffset = (index) => {
    let off = index - prevActiveRef.current;
    while (off > Math.floor(total / 2)) off -= total;
    while (off < -Math.floor(total / 2)) off += total;
    return off;
  };
  useEffect(() => {
    prevActiveRef.current = active;
  });

  const centerX = (containerWidth - cardWidth) / 2;

  return (
    <section
      id="projects"
      style={{
        padding: "var(--space-24) 0",
        background: "var(--bg-secondary)",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          .project-title {
            font-size: var(--text-lg);
            line-height: 1.3;
            margin: 0;
            font-weight: 600;
            background: linear-gradient(90deg, var(--text-primary) 0%, #10b981 40%, #34d399 50%, var(--text-primary) 60%, var(--text-primary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            background-size: 300% 100%;
            animation: title-shimmer 4s ease-in-out infinite;
          }

          @keyframes title-shimmer {
            0% { background-position: 100% 50%; }
            50% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }

          .carousel-arrow {
            position: absolute;
            top: 50%;
            z-index: 10;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
            color: white;
            border: 1px solid rgba(16, 185, 129, 0.3);
            background: rgba(16, 185, 129, 0.12);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow:
              0 0 20px rgba(16, 185, 129, 0.15),
              0 4px 12px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.08);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            outline: none;
          }

          .carousel-arrow:hover {
            background: rgba(16, 185, 129, 0.35);
            border-color: rgba(16, 185, 129, 0.6);
            box-shadow:
              0 0 32px rgba(16, 185, 129, 0.35),
              0 8px 24px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.15);
            transform: translateY(-50%) scale(1.12);
          }

          .carousel-arrow:active {
            transform: translateY(-50%) scale(0.95);
            background: rgba(16, 185, 129, 0.5);
          }

          .carousel-arrow:focus-visible {
            outline: none;
            box-shadow:
              0 0 0 3px rgba(16, 185, 129, 0.4),
              0 0 32px rgba(16, 185, 129, 0.35);
          }

          .carousel-arrow--left {
            left: clamp(12px, 4%, 48px);
            transform: translateY(-50%);
          }

          .carousel-arrow--right {
            right: clamp(12px, 4%, 48px);
            transform: translateY(-50%);
          }

          /* Subtle pulse animation to draw attention */
          @keyframes arrow-pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(16,185,129,0.15), 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08); }
            50% { box-shadow: 0 0 28px rgba(16,185,129,0.25), 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08); }
          }

          .carousel-arrow {
            animation: arrow-pulse 3s ease-in-out infinite;
          }

          .carousel-arrow:hover {
            animation: none;
          }
        `}
      </style>

      {/* Title */}
      <div
        style={{
          maxWidth: "var(--container-width)",
          margin: "0 auto",
          padding: "0 var(--space-4)",
        }}
      >
        <FadeIn>
          <h2
            style={{
              fontSize: "var(--text-2xl)",
              marginBottom: "var(--space-12)",
            }}
          >
            {t("projects.title")}
          </h2>
        </FadeIn>
      </div>

      {/* Carousel viewport — no drag handlers */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          height: cardWidth * (9 / 16) + 210,
        }}
      >
        {PROJECTS.map((project, index) => {
          const offset = getOffset(index);
          const prevOffset = getPrevOffset(index);
          const isActive = offset === 0;
          const isPeek = Math.abs(offset) === 1;
          const show = Math.abs(offset) <= 2;

          const isWrapping = Math.abs(offset - prevOffset) > 2;
          const targetX = centerX + offset * (cardWidth + GAP);

          const smoothTransition = {
            x: { type: "tween", duration: 0.5, ease: [0.32, 0.72, 0, 1] },
            opacity: { duration: 0.4, ease: "easeInOut" },
            scale: { duration: 0.4, ease: "easeInOut" },
          };
          const instantTransition = { duration: 0 };

          return (
            <motion.div
              key={index}
              animate={{
                x: targetX,
                opacity: isActive ? 1 : isPeek ? 0.5 : 0,
                scale: isActive ? 1 : 0.92,
              }}
              transition={isWrapping ? instantTransition : smoothTransition}
              onClick={() => {
                if (isActive) {
                  window.open(project.link, "_blank", "noopener,noreferrer");
                } else {
                  offset < 0 ? prev() : next();
                }
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: cardWidth,
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                cursor: "pointer",
                background: "var(--bg-card)",
                border: `1px solid ${
                  isActive ? "var(--border-highlight)" : "var(--border-subtle)"
                }`,
                display: show ? "flex" : "none",
                flexDirection: "column",
                pointerEvents: show ? "auto" : "none",
                userSelect: "none",
                filter: isActive
                  ? "brightness(1)"
                  : "brightness(0.6) saturate(0.7)",
                boxShadow: isActive
                  ? "0 20px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04)"
                  : "none",
                transition:
                  "box-shadow 0.4s ease, border-color 0.4s ease, filter 0.4s ease",
              }}
            >
              {/* ── IMAGE AREA ── */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  background: "var(--bg-card-hover)",
                  overflow: "hidden",
                }}
              >
                <PremiumImage
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, transparent 50%, var(--bg-card) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {isActive && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      position: "absolute",
                      top: "var(--space-3)",
                      right: "var(--space-3)",
                      background: "rgba(0,0,0,0.6)",
                      borderRadius: "50%",
                      padding: "6px",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 2,
                      color: "white",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                    whileHover={{
                      scale: 1.1,
                      background: "rgba(16,185,129,0.7)",
                    }}
                  >
                    <ArrowUpRight size={16} />
                  </motion.a>
                )}
              </div>

              {/* ── CONTENT AREA ── */}
              <div
                style={{
                  padding: "var(--space-4) var(--space-5) var(--space-5)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-2)",
                  flex: 1,
                }}
              >
                <h3 className="project-title">
                  {language === "pt" ? project.title : project.titleEn}
                </h3>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--text-sm)",
                    lineHeight: 1.6,
                    margin: 0,
                    flex: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {language === "pt"
                    ? project.description
                    : project.descriptionEn}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "var(--space-1)",
                    marginTop: "var(--space-1)",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="chromatic-tag"
                      style={{
                        fontSize: "0.65rem",
                        padding: "2px 8px",
                        borderRadius: "var(--radius-full)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* ── LEFT ARROW — Premium Emerald Glass ── */}
        <button
          onClick={prev}
          className="carousel-arrow carousel-arrow--left"
          aria-label="Projeto anterior"
        >
          <ChevronLeft size={24} strokeWidth={2.5} />
        </button>

        {/* ── RIGHT ARROW — Premium Emerald Glass ── */}
        <button
          onClick={next}
          className="carousel-arrow carousel-arrow--right"
          aria-label="Próximo projeto"
        >
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>
      </div>

      {/* ── DOT INDICATORS ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "var(--space-2)",
          marginTop: "var(--space-6)",
        }}
      >
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Ir para projeto ${i + 1}`}
            style={{
              width: i === active ? 28 : 8,
              height: 8,
              borderRadius: "var(--radius-full)",
              background:
                i === active
                  ? "var(--accent-hover)"
                  : "var(--border-highlight)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s ease, background 0.3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
