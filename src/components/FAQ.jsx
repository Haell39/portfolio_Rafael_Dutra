import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import { useLanguage } from "../context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);
  const items = t("faq.items");

  return (
    <section id="faq" className="section faq-section">
      <div className="container faq-grid">
        <FadeIn>
          <div className="faq-heading">
            <span className="eyebrow">{t("faq.kicker")}</span>
            <h2 className="section-title">{t("faq.title")}</h2>
            <p className="section-copy">{t("faq.subtitle")}</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="faq-list">
            {Array.isArray(items) && items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <article className="faq-item" key={item.q}>
                  <button onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen}>
                    <span>{item.q}</span>
                    <motion.i animate={{ rotate: isOpen ? 45 : 0 }}><Plus size={19} /></motion.i>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                        <p>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
