import { motion } from "framer-motion";
import { ArrowUpRight, Video } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import { HOVER_SCALE } from "../config/motion";

export default function DataStudent() {
  return (
    <section
      id="datastudent"
      style={{
        padding: "var(--space-24) var(--space-4)",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decor */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(232, 121, 249, 0.05) 0%, rgba(0,0,0,0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "var(--container-width)",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <FadeIn>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "var(--space-6)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                padding: "8px 16px",
                borderRadius: "var(--radius-full)",
                background: "rgba(255, 0, 80, 0.1)", // TikTok-ish color hint
                border: "1px solid rgba(255, 0, 80, 0.2)",
                color: "#ff0050",
                fontSize: "var(--text-sm)",
                fontWeight: 600,
              }}
            >
              <Video size={16} />
              <span>@datastudent</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Compartilhando conhecimento
              <br />
              <span style={{ color: "var(--text-secondary)" }}>
                um post de cada vez.
              </span>
            </h2>

            <p
              style={{
                fontSize: "var(--text-lg)",
                color: "var(--text-secondary)",
                maxWidth: "600px",
                lineHeight: 1.7,
              }}
            >
              No <strong>DataStudent</strong>, eu descomplico o mundo da
              programação e dados. Publicações, tutoriais, dicas de carreira e insights sobre
              computação para quem quer evoluir na área.
            </p>

            <motion.a
              href="https://tiktok.com/@datastudent" // Placeholder URL, user can update
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, background: "var(--accent-hover)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                background: "var(--text-primary)",
                color: "var(--bg-primary)",
                padding: "1rem 2rem",
                borderRadius: "var(--radius-full)",
                fontSize: "var(--text-base)",
                fontWeight: 600,
                marginTop: "var(--space-4)",
                transition: "background 0.3s ease",
              }}
            >
              Conhecer o Canal <ArrowUpRight size={18} />
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
