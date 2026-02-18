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
      <style>
        {`
          .glass-nav {
            background-color: transparent;
            backdrop-filter: none;
            border: 1px solid transparent;
            padding: 0.75rem 1.5rem;
            display: flex;
            align-items: center;
            gap: 2rem;
            border-radius: var(--radius-full);
            transition: all 0.3s ease;
          }
          
          .glass-nav.scrolled {
            background-color: var(--nav-bg-scrolled);
            backdrop-filter: blur(12px);
            border-color: var(--border-subtle);
          }

          .nav-logo {
            font-weight: 700;
            color: var(--text-primary);
            text-decoration: none;
            transition: color 0.2s;
          }
          .nav-logo:hover {
            color: var(--accent-hover);
          }

          .nav-link {
            font-size: var(--text-sm);
            color: var(--text-secondary);
            font-weight: 500;
            transition: color 0.2s;
            text-decoration: none;
          }
          .nav-link:hover {
            color: var(--accent-hover);
          }

          .nav-btn {
            padding: 0.25rem;
            border-radius: 4px;
            color: var(--text-secondary);
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            background: transparent;
            border: 1px solid transparent;
            cursor: pointer;
            outline: none;
          }
          
          .nav-btn:hover {
            color: var(--text-primary);
            border-color: var(--border-subtle);
          }

          .nav-btn:focus, .nav-btn:focus-visible {
            outline: none !important;
            border-color: transparent !important; /* Force no border on click */
            box-shadow: none !important;
          }

          /* Specific fix for images inside button to not capture events */
          .nav-btn img {
            pointer-events: none;
          }
        `}
      </style>
      <div className={`glass-nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#" className="nav-logo">
          RD.
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <button
            onClick={toggleLanguage}
            className="nav-btn"
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
            className="nav-btn"
            style={{ borderRadius: "50%" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            {LINKS.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
