import { BarChart3, Braces, DatabaseZap, Workflow } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import { useLanguage } from "../context/LanguageContext";

const ICONS = [Braces, BarChart3, Workflow, DatabaseZap];

export default function Solutions() {
  const { t } = useLanguage();
  const items = t("solutions.items");

  return (
    <section id="solutions" className="section section--tinted expertise-section">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <div>
              <span className="eyebrow">{t("solutions.kicker")}</span>
              <h2 className="section-title">{t("solutions.title")}</h2>
            </div>
            <p className="section-copy">{t("solutions.subtitle")}</p>
          </div>
        </FadeIn>

        <div className="expertise-grid">
          {Array.isArray(items) && items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <article className="expertise-card">
                  <div className="expertise-card__top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Icon size={21} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
