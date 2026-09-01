import FadeIn from "./ui/FadeIn";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const items = t("experience.items");

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <FadeIn>
          <div className="section-header section-header--stacked">
            <span className="eyebrow">{t("experience.kicker")}</span>
            <h2 className="section-title">{t("experience.title")}</h2>
          </div>
        </FadeIn>

        <div className="experience-list">
          {Array.isArray(items) && items.map((item, index) => (
            <FadeIn key={`${item.company}-${item.role}`} delay={index * 0.08}>
              <article className="experience-item">
                <div className="experience-item__index">{String(index + 1).padStart(2, "0")}</div>
                <div className="experience-item__meta">
                  <strong>{item.company}</strong>
                  <span>{item.date}</span>
                </div>
                <div className="experience-item__content">
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                  {Array.isArray(item.details) && (
                    <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
