import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

import brFlag from "../assets/icons/brasil.png";
import usFlag from "../assets/icons/usa.png";
import esFlag from "../assets/icons/espanha.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const LINKS = [
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.network"), href: "#network" },
    { name: t("navbar.experience"), href: "#experience" },
    { name: t("navbar.projects"), href: "#projects" },
    { name: t("navbar.solutions"), href: "#solutions" },
    { name: t("navbar.process"), href: "#process" },
    { name: t("navbar.certificates"), href: "#certificates" },
    { name: t("navbar.contact"), href: "#hero" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
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
              width: auto;
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
              border-color: transparent !important;
              box-shadow: none !important;
            }

            .nav-btn img {
              pointer-events: none;
            }

            /* Desktop links container */
            .nav-links-desktop {
              display: flex;
              gap: 1.5rem;
            }

            /* Hamburger button — hidden on desktop */
            .nav-hamburger {
              display: none;
              padding: 0.25rem;
              border-radius: 4px;
              color: var(--text-secondary);
              background: transparent;
              border: 1px solid transparent;
              cursor: pointer;
              align-items: center;
              justify-content: center;
              outline: none;
              transition: all 0.2s;
            }
            .nav-hamburger:hover {
              color: var(--text-primary);
              border-color: var(--border-subtle);
            }
            .nav-hamburger:focus, .nav-hamburger:focus-visible {
              outline: none !important;
              border-color: transparent !important;
              box-shadow: none !important;
            }

            /* Mobile overlay */
            .mobile-menu-overlay {
              position: fixed;
              inset: 0;
              z-index: 100;
              background: rgba(0, 0, 0, 0.6);
              backdrop-filter: blur(4px);
              -webkit-backdrop-filter: blur(4px);
            }

            /* Mobile drawer */
            .mobile-menu-drawer {
              position: fixed;
              top: 0;
              right: 0;
              bottom: 0;
              z-index: 101;
              width: min(300px, 80vw);
              background: var(--bg-card);
              border-left: 1px solid var(--border-subtle);
              padding: 1.5rem;
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
              overflow-y: auto;
            }

            .mobile-menu-drawer .mobile-close {
              align-self: flex-end;
              padding: 0.5rem;
              color: var(--text-secondary);
              background: transparent;
              border: none;
              cursor: pointer;
              border-radius: 4px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 1rem;
            }
            .mobile-menu-drawer .mobile-close:hover {
              color: var(--text-primary);
            }

            .mobile-menu-link {
              display: block;
              padding: 0.875rem 1rem;
              font-size: 1rem;
              font-weight: 500;
              color: var(--text-secondary);
              text-decoration: none;
              border-radius: var(--radius-md);
              transition: all 0.2s ease;
            }
            .mobile-menu-link:hover {
              color: var(--accent-hover);
              background: rgba(16, 185, 129, 0.08);
            }

            @media (max-width: 768px) {
              .glass-nav {
                padding: 0.5rem 1rem;
                gap: 0.75rem;
              }
              .nav-links-desktop {
                display: none;
              }
              .nav-hamburger {
                display: flex;
              }
            }
          `}
        </style>
        <div className={`glass-nav ${scrolled ? "scrolled" : ""}`}>
          <a href="#" className="nav-logo">
            RD.
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div style={{ display: "flex", gap: "0.25rem" }}>
              {[
                { lang: "pt", flag: brFlag, label: "Português" },
                { lang: "en", flag: usFlag, label: "English" },
                { lang: "es", flag: esFlag, label: "Español" },
              ].map(({ lang, flag, label }) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className="nav-btn"
                  style={{
                    opacity: language === lang ? 1 : 0.4,
                    transform: language === lang ? "scale(1.1)" : "scale(1)",
                  }}
                  aria-label={label}
                >
                  <img
                    src={flag}
                    alt={label}
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      display: "block",
                      boxShadow:
                        language === lang
                          ? "0 0 8px rgba(16, 185, 129, 0.4)"
                          : "none",
                    }}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="nav-btn"
              style={{ borderRadius: "50%" }}
              aria-label={t("navbar.toggle_theme")}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Desktop links */}
            <div className="nav-links-desktop">
              {LINKS.map((link) => (
                <a key={link.name} href={link.href} className="nav-link">
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label={t("navbar.open_menu")}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              <button
                className="mobile-close"
                onClick={() => setMenuOpen(false)}
                aria-label={t("navbar.close_menu")}
              >
                <X size={24} />
              </button>
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="mobile-menu-link"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
