import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const links = [
    { label: t("navbar.cases"), href: "#cases" },
    { label: t("navbar.about"), href: "#about" },
    { label: t("navbar.experience"), href: "#experience" },
    { label: t("navbar.projects"), href: "#projects" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="nav-brand__mark">RD</span>
            <h2>Rafael Dutra</h2>
            <p>{t("footer.blurb")}</p>
          </div>
          <div className="footer-column">
            <span className="mono-label">{t("footer.navigation")}</span>
            {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
          </div>
          <div className="footer-column">
            <span className="mono-label">{t("footer.contact")}</span>
            <a href="mailto:rafaelsantoshome@outlook.com"><Mail size={15} /> Email</a>
            <a href="https://linkedin.com/in/rafaelsantoshome" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
            <a href="https://github.com/Haell39" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
          </div>
          <a className="footer-top" href="#hero" aria-label="Back to top"><ArrowUp size={20} /></a>
        </div>
        <div className="footer-bottom">
          <span>© {year} Rafael Dutra. {t("footer.copyright")}</span>
          <span>{t("footer.signature")}</span>
        </div>
      </div>
    </footer>
  );
}
