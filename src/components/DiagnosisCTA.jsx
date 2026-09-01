import { ArrowUpRight, Mail } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import { useLanguage } from "../context/LanguageContext";

export default function DiagnosisCTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <FadeIn>
          <div className="contact-panel">
            <span className="eyebrow">{t("diagnosis.kicker")}</span>
            <h2>{t("diagnosis.title")}</h2>
            <p>{t("diagnosis.subtitle")}</p>
            <div className="contact-actions">
              <a className="button button--signal" href="https://linkedin.com/in/rafaelsantoshome" target="_blank" rel="noreferrer">
                {t("diagnosis.cta_primary")} <ArrowUpRight size={17} />
              </a>
              <a className="button contact-email" href="mailto:rafaelsantoshome@outlook.com">
                {t("diagnosis.cta_secondary")} <Mail size={17} />
              </a>
            </div>
            <span className="contact-note">{t("diagnosis.note")}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
