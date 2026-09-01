import { ArrowUpRight } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const stack = t("about.stack");

  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <FadeIn>
          <div>
            <span className="eyebrow">{t("about.kicker")}</span>
            <h2 className="section-title">{t("about.title")}</h2>
            <p className="about-lead">{t("about.subtitle")}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="about-copy">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
            <a href="#experience">{t("navbar.experience")} <ArrowUpRight size={16} /></a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="about-stack-wrap">
          <div className="about-stack surface">
            <div className="about-stack__header">
              <span className="mono-label">{t("about.stack_title")}</span>
              <span>09 capabilities</span>
            </div>
            <div className="about-stack__grid">
              {Array.isArray(stack) && stack.map((tech, index) => (
                <div key={tech}><span>{String(index + 1).padStart(2, "0")}</span><strong>{tech}</strong></div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
