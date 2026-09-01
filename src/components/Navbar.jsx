import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const LANGUAGES = ["pt", "en", "es"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const { language, changeLanguage, t } = useLanguage();

  const links = [
    { label: t("navbar.cases"), href: "#cases" },
    { label: t("navbar.about"), href: "#about" },
    { label: t("navbar.expertise"), href: "#solutions" },
    { label: t("navbar.experience"), href: "#experience" },
    { label: t("navbar.projects"), href: "#projects" },
  ];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className={`nav-wrap ${scrolled ? "is-scrolled" : ""}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="nav-inner" aria-label="Primary navigation">
        <a className="nav-brand" href="#hero" aria-label="Rafael Dutra - Home">
          <span className="nav-brand__mark">RD</span>
          <span className="nav-brand__copy">
            <strong>Rafael Dutra</strong>
            <small>Data & Analytics</small>
          </span>
        </a>

        <div className="nav-links">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>

        <div className="nav-actions">
          <div className="language-switch" aria-label="Language selector">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                className={language === lang ? "is-active" : ""}
                onClick={() => changeLanguage(lang)}
                aria-pressed={language === lang}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="icon-button" onClick={toggleTheme} aria-label={t("navbar.toggle_theme")}>
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <a className="nav-contact" href="#contact">{t("navbar.contact")}</a>
          <button
            className="icon-button nav-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t("navbar.close_menu") : t("navbar.open_menu")}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
            <a href="#certificates" onClick={closeMenu}>{t("navbar.certificates")}</a>
            <a href="#contact" onClick={closeMenu}>{t("navbar.contact")}</a>
            <div className="mobile-menu__languages">
              {LANGUAGES.map((lang) => (
                <button key={lang} className={language === lang ? "is-active" : ""} onClick={() => { changeLanguage(lang); closeMenu(); }}>
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
