import FadeIn from "./ui/FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { Instagram, Linkedin, Github, Mail, Phone } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "var(--space-16) var(--space-4) var(--space-8)",
        color: "var(--text-secondary)",
      }}
    >
      <div style={{ maxWidth: "var(--container-width)", margin: "0 auto" }}>
        <FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--space-12)",
              marginBottom: "var(--space-16)",
            }}
          >
            {/* Brand Column */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-6)",
              }}
            >
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.05em",
                }}
              >
                RD.
              </div>
              <p
                style={{
                  lineHeight: 1.6,
                  fontSize: "0.95rem",
                  maxWidth: "300px",
                }}
              >
                Transformando dados complexos em soluções inteligentes e
                pipelines automatizados preditivos para elevar seu negócio ao
                próximo nível.
              </p>
              <div style={{ display: "flex", gap: "var(--space-4)" }}>
                <a
                  href="https://github.com/Haell39"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/rafaelsantoshome"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:rafaeldutrapro@gmail.com"
                  className="social-icon"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4
                style={{
                  color: "var(--accent-primary)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "var(--space-6)",
                }}
              >
                Navegação
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-3)",
                }}
              >
                {[
                  { label: "Projetos", href: "#projects" },
                  { label: "Experiência", href: "#experience" },
                  { label: "Soluções", href: "#solutions" },
                  { label: "Sobre", href: "#about" },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      style={{
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--text-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-secondary)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Action Column */}
            <div>
              <h4
                style={{
                  color: "var(--accent-primary)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "var(--space-6)",
                }}
              >
                Vamos Conversar?
              </h4>
              <p
                style={{
                  lineHeight: 1.6,
                  fontSize: "0.95rem",
                  marginBottom: "var(--space-6)",
                }}
              >
                Tem um desafio de dados em mente? Entre em contato e veja como
                modelos preditivos e inteligência artificial podem ajudar.
              </p>
              <a
                href="mailto:rafaeldutrapro@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  padding: "var(--space-3) var(--space-6)",
                  background: "transparent",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-highlight)",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontSize: "var(--text-sm)",
                  fontWeight: 600,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-primary)";
                  e.currentTarget.style.color = "var(--accent-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-highlight)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
              >
                rafaeldutrapro@gmail.com{" "}
                <span style={{ marginLeft: 4 }}>↗</span>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Bottom Bar */}
        <FadeIn delay={0.2}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "var(--space-4)",
              paddingTop: "var(--space-8)",
              borderTop: "1px solid var(--border-subtle)",
              fontSize: "0.85rem",
            }}
          >
            <div>
              &copy; {currentYear} Rafael Dutra. {t("contact.footer")}
            </div>
            <div
              style={{
                fontFamily: "monospace",
                color: "var(--border-highlight)",
              }}
            >
              DATA / ML / ENGINNERING
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          alignItems: center;
          justifyContent: center;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          color: var(--text-secondary);
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .social-icon:hover {
          background: var(--accent-primary);
          color: var(--bg-primary);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
