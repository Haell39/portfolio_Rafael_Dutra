import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ChevronDown } from "lucide-react";
import FadeIn from "./ui/FadeIn";

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--border-highlight)",
        overflow: "hidden"
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "var(--space-3)",
          padding: "var(--space-6) 0",
          background: "transparent",
          border: "none",
          color: "var(--text-primary)",
          fontSize: "clamp(1rem, 1.2vw, 1.125rem)",
          fontWeight: 500,
          cursor: "pointer",
          textAlign: "left"
        }}
      >
        <span style={{ flex: 1, minWidth: 0 }}>{item.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ flexShrink: 0, marginTop: "2px" }}
        >
          <ChevronDown size={20} color="var(--text-tertiary)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p
              style={{
                paddingBottom: "var(--space-6)",
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                margin: 0
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = t("faq.items") || [];

  return (
    <section 
      id="faq" 
      style={{ 
        padding: "var(--space-16) var(--space-4) var(--space-32)",
        background: "var(--bg-primary)",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div className="container" style={{ maxWidth: "800px", width: "100%" }}>
        <FadeIn style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "var(--space-12)" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: "var(--space-4)",
              letterSpacing: "-0.03em"
            }}
          >
            {t("faq.title")}
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              color: "var(--text-secondary)"
            }}
          >
            {t("faq.subtitle")}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            style={{
              background: "var(--bg-primary)",
              border: "1px solid var(--border-highlight)",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(1rem, 3vw, 2rem)",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            }}
          >
            {Array.isArray(faqItems) && faqItems.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
