import { ArrowUpRight } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { CERTIFICATES } from "../content/portfolioData";

export default function Certificates() {
  const { language, t } = useLanguage();

  const title = (cert) => language === "en" ? cert.titleEn : language === "es" ? cert.titleEs : cert.title;

  return (
    <section id="certificates" className="section certificates-section section--tinted">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <div>
              <span className="eyebrow">{t("certificates.kicker")}</span>
              <h2 className="section-title">{t("certificates.title")}</h2>
            </div>
            <p className="section-copy">{t("certificates.subtitle")}</p>
          </div>
        </FadeIn>
        <div className="certificate-list surface">
          {CERTIFICATES.map((cert, index) => (
            <FadeIn key={cert.link} delay={index * 0.04}>
              <a className="certificate-row" href={cert.link} target="_blank" rel="noreferrer">
                <span className="certificate-row__index">{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{title(cert)}</strong><span>{cert.issuer}</span></div>
                <span className="certificate-row__date">{cert.date}</span>
                <ArrowUpRight size={17} />
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
