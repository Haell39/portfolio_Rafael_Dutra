import { Check, Database, LockKeyhole } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import { useLanguage } from "../context/LanguageContext";

export default function ProfessionalCases() {
  const { t } = useLanguage();
  const cases = t("cases.items");

  return (
    <section id="cases" className="section cases-section section--tinted">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <div>
              <span className="eyebrow">{t("cases.kicker")}</span>
              <h2 className="section-title">{t("cases.title")}</h2>
            </div>
            <div>
              <p className="section-copy">{t("cases.subtitle")}</p>
              <p className="cases-confidentiality"><LockKeyhole size={14} /> {t("cases.confidentiality")}</p>
            </div>
          </div>
        </FadeIn>

        <div className="case-list">
          {Array.isArray(cases) && cases.map((item, caseIndex) => (
            <FadeIn key={item.number} delay={caseIndex * 0.1}>
              <article className="case-card surface">
                <header className="case-card__header">
                  <div className="case-number">{item.number}</div>
                  <div className="case-heading">
                    <span className="mono-label">{item.type}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <div className="case-status"><i /> {item.status}</div>
                </header>

                <div className="case-card__body">
                  <div className="case-narrative">
                    <p className="case-summary">{item.summary}</p>
                    <div className="case-delivery">
                      <span className="mono-label">{t("cases.delivery_label")}</span>
                      <ul>
                        {item.delivery.map((entry) => <li key={entry}><Check size={15} /> <span>{entry}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <aside className="case-evidence">
                    <span className="mono-label">{t("cases.result_label")}</span>
                    <div className="case-metrics">
                      {item.metrics.map((metric) => (
                        <div key={metric.label}>
                          <strong className="metric-value">{metric.value}</strong>
                          <span className="metric-label">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="case-stack">
                      <span className="mono-label"><Database size={13} /> {t("cases.stack_label")}</span>
                      <div>{item.stack.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
                    </div>
                  </aside>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
