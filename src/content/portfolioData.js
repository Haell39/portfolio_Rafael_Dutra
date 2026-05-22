import imgHorus from "../assets/projects/horus.webp";
import imgDiagnostic from "../assets/projects/Diagnostic.webp";
import imgAnalytics from "../assets/projects/Analytics.webp";
import imgOpenFinance from "../assets/projects/openfinance.webp";
import imgVarejo from "../assets/projects/Varejo.webp";

import imgEFSET from "../assets/certificates/EFSET.webp";
import imgONE from "../assets/certificates/ONE.webp";
import imgSQLK from "../assets/certificates/SQLK.webp";
import imgADA from "../assets/certificates/trilhaADA.webp";
import imgStats from "../assets/certificates/statistic.webp";
import imgAnalise from "../assets/certificates/analisedados.webp";
import imgPython from "../assets/certificates/Python Course.jpg";

export const PROJECTS = [
  {
    title: "Horus AI",
    titleEn: "Horus AI",
    titleEs: "Horus AI",
    description:
      "Sistema automatizado que detecta falhas em transmissões ao vivo. Três modelos de ML analisam vídeo, áudio e lipsync simultaneamente para gerar alertas em tempo real.",
    descriptionEn:
      "Automated system that detects failures in live broadcasts. Three ML models analyze video, audio, and lipsync simultaneously to generate real-time alerts.",
    descriptionEs:
      "Sistema automatizado que detecta fallos en transmisiones en vivo. Tres modelos de ML analizan video, audio y lipsync simultáneamente para generar alertas en tiempo real.",
    tags: ["Computer Vision", "Real-time AI", "Python", "Audio Processing"],
    image: imgHorus,
    link: "https://github.com/Haell39/horus_ai/tree/main",
    linkLive: null,
  },
  {
    title: "ML Diagnóstico Médico",
    titleEn: "Medical Diagnostic ML",
    titleEs: "ML Diagnóstico Médico",
    description:
      "Estudo abrangente aplicado a datasets médicos. Construção e otimização de modelos de classificação para prever diagnósticos e agrupamento de padrões latentes.",
    descriptionEn:
      "Comprehensive study applied to medical datasets. Construction and optimization of classification models to predict diagnoses and clustering of latent patterns.",
    descriptionEs:
      "Estudio integral aplicado a conjuntos de datos médicos. Construcción y optimización de modelos de clasificación para predecir diagnósticos y agrupar patrones latentes.",
    tags: ["Machine Learning", "Data Science", "Classification", "Clustering"],
    image: imgDiagnostic,
    link: "https://github.com/Haell39/ML-Aplicada-Diagnostico-Clinico",
    linkLive: null,
  },
  {
    title: "HR Analytics",
    titleEn: "HR Analytics",
    titleEs: "HR Analytics",
    description:
      "Análise e predição da rotatividade de funcionários: O turnover é um dos maiores desafios corporativos. Através de Machine Learning, este projeto identifica colaboradores com alto risco de saída e revela os principais motores da perda de talentos.",
    descriptionEn:
      "Employee turnover analysis and prediction: Turnover is a major corporate challenge. Using Machine Learning, this project identifies high-risk employees and reveals the main drivers of talent loss.",
    descriptionEs:
      "Análisis y predicción de la rotación de empleados: El turnover es un gran desafío corporativo. A través de Machine Learning, este proyecto identifica empleados de alto riesgo y revela los principales motores de la pérdida de talento.",
    tags: ["Data Analytics", "Predictive Modeling", "Business Intelligence"],
    image: imgAnalytics,
    link: "https://github.com/Haell39/HR-Analytics",
    linkLive: "https://rafaeldutra-hr-analytics.netlify.app/",
  },
  {
    title: "OpenFinance Intel",
    titleEn: "OpenFinance Intel",
    titleEs: "OpenFinance Intel",
    description:
      "Plataforma de Inteligência de Investimentos: IA, NLP e Análise de Sentimento para transformar o caos do mercado em Sinais Acionáveis.",
    descriptionEn:
      "Investment Intelligence Platform: AI, NLP, and Sentiment Analysis to transform market chaos into Actionable Signals.",
    descriptionEs:
      "Plataforma de Inteligencia de Inversiones: IA, PLN y Análisis de Sentimientos para transformar el caos del mercado en señales accionables.",
    tags: ["AI & NLP", "Market Intelligence", "React", "FastAPI", "Docker"],
    image: imgOpenFinance,
    link: "https://github.com/Haell39/OpenFinance_Intel",
    linkLive: null,
  },
  {
    title: "Inteligência de Varejo",
    titleEn: "Retail Intelligence",
    titleEs: "Inteligencia de Retail",
    description:
      "Análise do e-commerce brasileiro (Olist + IPCA/IBGE) para identificar os principais drivers de vendas, satisfação e eficiência logística.",
    descriptionEn:
      "Analysis of Brazilian e-commerce (Olist + IPCA/IBGE) to identify key drivers of sales, satisfaction, and logistical efficiency.",
    descriptionEs:
      "Análisis del comercio electrónico brasileño (Olist + IPCA/IBGE) para identificar factores clave de ventas, satisfacción y eficiencia logística.",
    tags: ["Data Analysis", "Machine Learning", "Logistics", "Retail"],
    image: imgVarejo,
    link: "https://github.com/Haell39/inteligencia-varejo-dinamica-consumo",
    linkLive: "https://inteligenciavarejodeploy.netlify.app/",
  },
];

export const CERTIFICATES = [
  {
    title: "EF SET English Certificate (C2 Proficient)",
    titleEn: "EF SET English Certificate (C2 Proficient)",
    titleEs: "Certificado EF SET de Inglés (C2 Proficient)",
    issuer: "EF Standard English Test",
    date: "2025",
    link: "https://cert.efset.org/en/KEmJzs",
    image: imgEFSET,
  },
  {
    title: "ONE Tech Foundation G8 - Data Science + IA",
    titleEn: "ONE Tech Foundation G8 - Data Science + AI",
    titleEs: "ONE Tech Foundation G8 - Data Science + IA",
    issuer: "Alura / Oracle",
    date: "2025",
    link: "https://cursos.alura.com.br/user/rafaelsantoshome/program/14/certificate",
    image: imgONE,
  },
  {
    title: "Trilha Digital Coders 24 Data Science",
    titleEn: "Trilha Digital Coders 24 Data Science",
    titleEs: "Trilha Digital Coders 24 Data Science",
    issuer: "Ada Tech",
    date: "2024",
    link: "https://ada.tech/certificado?code=0d69f303-5f43-ab55-0f28-9e5e8678bb9e",
    image: imgADA,
  },
  {
    title: "SQL Advanced",
    titleEn: "SQL Advanced",
    titleEs: "SQL Advanced",
    issuer: "Kaggle",
    date: "2025",
    link: "https://www.kaggle.com/learn/certification/raeldata/advanced-sql",
    image: imgSQLK,
  },
  {
    title: "Estatística",
    titleEn: "Statistics",
    titleEs: "Estadística",
    issuer: "Escola Virtual Gov",
    date: "2024",
    link: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/WPoM13770255Q1qz#",
    image: imgStats,
  },
  {
    title: "Análise de dados para tomada de decisão",
    titleEn: "Data Analysis for Decision Making",
    titleEs: "Análisis de datos para la toma de decisiones",
    issuer: "Escola Virtual Gov",
    date: "2024",
    link: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/KAmM13988122oUfK#",
    image: imgAnalise,
  },
  {
    title: "Python",
    titleEn: "Python",
    titleEs: "Python",
    issuer: "Kaggle",
    date: "2025",
    link: "https://www.kaggle.com/learn/certification/raeldata/python",
    image: imgPython,
  },
];
