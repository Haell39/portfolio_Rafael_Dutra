import FadeIn from "./ui/FadeIn";
import { useLanguage } from "../context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const items = t("process.items");

  return (
    <section id="process" className="section process-section">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <div>
              <span className="eyebrow">{t("process.kicker")}</span>
              <h2 className="section-title">{t("process.title")}</h2>
            </div>
            <p className="section-copy">{t("process.subtitle")}</p>
          </div>
        </FadeIn>
        <div className="process-grid">
          {Array.isArray(items) && items.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.08}>
              <article className="process-card">
                <span>{item.step}</span>
                <div><h3>{item.title}</h3><p>{item.desc}</p></div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
