import { motion } from "framer-motion";
import FadeIn from "./ui/FadeIn";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "var(--space-24) var(--space-4)", textAlign: "center" }}
    >
      <FadeIn>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              marginBottom: "var(--space-6)",
              fontWeight: 700,
            }}
          >
            Vamos construir o futuro.
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "var(--text-lg)",
              marginBottom: "var(--space-8)",
            }}
          >
            Estou disponível para projetos freelance e novas oportunidades. Se
            você tem um projeto em mente ou apenas quer dizer oi, sinta-se à
            vontade para entrar em contato.
          </p>

          <motion.a
            href="mailto:rafaeldutrapro@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-block",
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
              padding: "1rem 2rem",
              borderRadius: "var(--radius-full)",
              fontSize: "var(--text-base)",
              fontWeight: 600,
            }}
          >
            Entrar em Contato
          </motion.a>
        </div>
      </FadeIn>

      <div
        style={{
          marginTop: "var(--space-24)",
          color: "var(--text-tertiary)",
          fontSize: "var(--text-sm)",
        }}
      >
        © {new Date().getFullYear()} Rafael Dutra. Todos os direitos reservados.
      </div>
    </section>
  );
}
