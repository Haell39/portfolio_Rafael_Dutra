import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import FadeIn from "./ui/FadeIn";

export default function Hero() {
  const { t } = useLanguage();
  const metrics = t("hero.panel_metrics");

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <FadeIn>
            <div className="hero-kicker"><span />{t("hero.kicker")}</div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1>{t("hero.title")} <em>{t("hero.title_highlight")}</em></h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="hero-subtitle">{t("hero.subtitle")}</p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <div className="hero-actions">
              <a className="button button--primary" href="#cases">
                {t("hero.cta_cases")} <ArrowDownRight size={17} />
              </a>
              <a className="button button--secondary" href={t("hero.cv_path")} download={t("hero.cv_filename")}>
                {t("hero.cta_cv")} <Download size={16} />
              </a>
              <a className="hero-text-link" href="https://linkedin.com/in/rafaelsantoshome" target="_blank" rel="noreferrer">
                {t("hero.cta_contact")} <ArrowUpRight size={16} />
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.32}>
            <div className="hero-meta">
              <span><MapPin size={15} /> {t("hero.availability")}</span>
              <div>
                <a href="https://github.com/Haell39" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
                <a href="https://linkedin.com/in/rafaelsantoshome" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="mailto:rafaelsantoshome@outlook.com" aria-label="Email"><Mail size={18} /></a>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="hero-panel-wrap">
          <motion.aside className="hero-panel surface" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
            <div className="hero-panel__top">
              <span className="mono-label">{t("hero.panel_eyebrow")}</span>
              <span className="live-indicator"><i /> verified work</span>
            </div>
            <h2>{t("hero.panel_title")}</h2>
            <div className="hero-chart" aria-hidden="true">
              {[42, 68, 53, 82, 71, 94, 86].map((height, index) => (
                <span key={index} style={{ height: `${height}%` }} />
              ))}
              <div className="hero-chart__scan" />
            </div>
            <div className="hero-metrics">
              {Array.isArray(metrics) && metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-panel__footer">
              <span>SQL</span><span>POWER BI</span><span>PYTHON</span><span>EXCEL</span>
            </div>
          </motion.aside>
        </FadeIn>
      </div>
    </section>
  );
}
