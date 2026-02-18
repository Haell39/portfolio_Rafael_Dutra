import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

import brFlag from "../assets/icons/brasil.png";
import usFlag from "../assets/icons/usa.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark"); // Default dark
  const { language, toggleLanguage, t } = useLanguage();

  const LINKS = [
    { name: t("navbar.projects"), href: "#projects" },
    { name: t("navbar.experience"), href: "#experience" },
    { name: t("navbar.certificates"), href: "#certificates" },
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.channel"), href: "#datastudent" },
    { name: t("navbar.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: scrolled ? "rgba(24, 24, 27, 0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          border: scrolled
            ? "1px solid var(--border-subtle)"
            : "1px solid transparent",
          borderRadius: "var(--radius-full)",
          padding: "0.75rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          transition: "all 0.3s ease",
        }}
      >
        <a
          href="#"
          style={{
            fontWeight: 700,
            color: "var(--text-primary)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "var(--accent-hover)")}
          onMouseLeave={(e) => (e.target.style.color = "var(--text-primary)")}
        >
          RD.
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <button
            onClick={toggleLanguage}
            style={{
              padding: "0.25rem",
              borderRadius: "4px",
              color: "var(--text-secondary)",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              border: "1px solid transparent",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "var(--text-primary)";
              e.target.style.borderColor = "var(--border-subtle)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "var(--text-secondary)";
              e.target.style.borderColor = "transparent";
            }}
            aria-label="Toggle language"
          >
            <img
              src={language === "pt" ? usFlag : brFlag}
              alt={
                language === "pt" ? "Switch to English" : "Mudar para Português"
              }
              style={{ width: "24px", height: "auto", display: "block" }}
            />
          </button>

          <button
            onClick={toggleTheme}
            style={{
              padding: "0.25rem",
              borderRadius: "50%",
              color: "var(--text-secondary)",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--text-primary)")}
            onMouseLeave={(e) =>
              (e.target.style.color = "var(--text-secondary)")
            }
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            {LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--text-secondary)",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "var(--accent-hover)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--text-secondary)")
                }
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
