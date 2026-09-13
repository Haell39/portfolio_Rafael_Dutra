import { ArrowUpRight, Github } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import PremiumImage from "./ui/PremiumImage";
import { useLanguage } from "../context/LanguageContext";
import { PROJECTS } from "../content/portfolioData";

export default function Projects() {
  const { language, t } = useLanguage();

  const localized = (project, field) => {
    if (language === "en") return project[`${field}En`] || project[field];
    if (language === "es") return project[`${field}Es`] || project[field];
    return project[field];
  };

  return (
    <section id="projects" className="section projects-section section--tinted">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <div>
              <span className="eyebrow">{t("projects.kicker")}</span>
              <h2 className="section-title">{t("projects.title")}</h2>
            </div>
            <p className="section-copy">{t("projects.subtitle")}</p>
          </div>
        </FadeIn>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.07} className="project-card-wrap">
              <article className={`project-card surface${index % 2 ? " project-card--reverse" : ""}`}>
                <div className="project-card__visual">
                  <PremiumImage
                    src={project.image}
                    alt={localized(project, "title")}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: project.objectPosition || "center" }}
                  />
                  <span className="project-card__index">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="project-card__content">
                  <div className="project-card__meta">
                    <span className="mono-label">{localized(project, "category")}</span>
                    <span className="project-card__selected">{t("projects.featured_label")}</span>
                  </div>
                  <h3>{localized(project, "title")}</h3>
                  <p>{localized(project, "description")}</p>
                  <div className="project-card__path" aria-label={t("projects.flow_label")}>
                    <span>{t("projects.flow_label")}</span>
                    <strong>{localized(project, "path")}</strong>
                  </div>
                  <div className="project-tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noreferrer"><Github size={16} /> {t("projects.cta_code")}</a>
                    {project.linkLive && <a href={project.linkLive} target="_blank" rel="noreferrer">{t("projects.cta_live")} <ArrowUpRight size={16} /></a>}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
