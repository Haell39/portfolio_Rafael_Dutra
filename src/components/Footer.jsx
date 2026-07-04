import FadeIn from "./ui/FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { Linkedin, Github, Mail, MessageCircle } from "lucide-react";

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
            className="footer-grid"
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
                className="animated-title"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  cursor: "default"
                }}
              >
                Rafael Dutra
              </div>
              <p
                style={{
                  lineHeight: 1.6,
                  fontSize: "0.95rem",
                  maxWidth: "300px",
                }}
              >
                {t("footer.brand_blurb")}
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
                  href="mailto:rafaelsantoshome@outlook.com"
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
                className="animated-title"
                style={{
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "var(--space-6)",
                  cursor: "default"
                }}
              >
                {t("footer.nav_title")}
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
                  { label: t("navbar.about"), href: "#about" },
                  { label: t("navbar.network"), href: "#network" },
                  { label: t("navbar.experience"), href: "#experience" },
                  { label: t("navbar.projects"), href: "#projects" },
                  { label: t("navbar.solutions"), href: "#solutions" },
                  { label: t("navbar.process"), href: "#process" },
                  { label: t("navbar.certificates"), href: "#certificates" },
                  { label: t("navbar.contact"), href: "#hero" },
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
                className="animated-title"
                style={{
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "var(--space-6)",
                  cursor: "default"
                }}
              >
                {t("footer.contact_title")}
              </h4>
              <p
                style={{
                  lineHeight: 1.6,
                  fontSize: "0.95rem",
                  marginBottom: "var(--space-6)",
                }}
              >
                {t("footer.contact_blurb")}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "var(--space-4)",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  className="footer-contact-link"
                  href="mailto:rafaelsantoshome@outlook.com"
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
                    maxWidth: "100%",
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
                  <span className="footer-contact-link__text">
                    rafaelsantoshome@outlook.com
                  </span>
                  <span style={{ marginLeft: 4, flexShrink: 0 }}>↗</span>
                </a>

                <a
                  href="https://wa.me/5581999654790"
                  target="_blank"
                  rel="noreferrer"
                  title="WhatsApp"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    background: "transparent",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border-highlight)",
                    borderRadius: "12px",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#25D366";
                    e.currentTarget.style.color = "#25D366";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-highlight)";
                    e.currentTarget.style.color = "var(--text-primary)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom Bar */}
        <div
          className="footer-bottom"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "var(--space-4)",
            paddingTop: "var(--space-8)",
            borderTop: "1px solid var(--border-highlight)",
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
          }}
        >
          <div>
            &copy; {currentYear} Rafael Dutra. {t("contact.footer")}
          </div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              color: "var(--text-tertiary)",
            }}
          >
            {t("footer.signature")}
          </div>
        </div>
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

        .animated-title {
          background: linear-gradient(
            90deg, 
            var(--text-primary) 0%, 
            var(--accent-hover) 50%, 
            var(--text-primary) 100%
          );
          background-size: 200% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShine 3s linear infinite;
        }

        @keyframes textShine {
          to {
            background-position: 200% center;
          }
        }

        .footer-contact-link__text {
          overflow-wrap: anywhere;
          word-break: break-word;
        }

        @media (max-width: 520px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-contact-link {
            width: 100%;
            justify-content: center;
            text-align: center;
            padding-inline: var(--space-4) !important;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}
