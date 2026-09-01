import imgHorus from "../assets/projects/horus.webp";
import imgAnalytics from "../assets/projects/Analytics.webp";
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
    title: "HR Analytics",
    titleEn: "HR Analytics",
    titleEs: "HR Analytics",
    category: "People Analytics · Retenção",
    categoryEn: "People Analytics · Retention",
    categoryEs: "People Analytics · Retención",
    description:
      "Análise de rotatividade com foco nos fatores associados à saída de colaboradores, combinando exploração, visualização e modelagem para apoiar discussões de retenção.",
    descriptionEn:
      "Employee turnover analysis focused on the factors associated with attrition, combining exploration, visualization, and modeling to support retention discussions.",
    descriptionEs:
      "Análisis de rotación centrado en los factores asociados a la salida de empleados, combinando exploración, visualización y modelado para apoyar decisiones de retención.",
    tags: ["Data Analytics", "Business Intelligence", "Python", "Storytelling"],
    image: imgAnalytics,
    link: "https://github.com/Haell39/HR-Analytics",
    linkLive: "https://rafaeldutra-hr-analytics.netlify.app/",
  },
  {
    title: "Inteligência de Varejo",
    titleEn: "Retail Intelligence",
    titleEs: "Inteligencia de Retail",
    category: "E-commerce · Performance",
    categoryEn: "E-commerce · Performance",
    categoryEs: "E-commerce · Desempeño",
    description:
      "Análise do e-commerce brasileiro com dados da Olist e IPCA/IBGE para investigar vendas, satisfação do cliente e eficiência logística.",
    descriptionEn:
      "Brazilian e-commerce analysis using Olist and IPCA/IBGE data to investigate sales, customer satisfaction, and logistics efficiency.",
    descriptionEs:
      "Análisis del comercio electrónico brasileño con datos de Olist e IPCA/IBGE para investigar ventas, satisfacción y eficiencia logística.",
    tags: ["Data Analysis", "Retail", "Logistics", "Business KPIs"],
    image: imgVarejo,
    link: "https://github.com/Haell39/inteligencia-varejo-dinamica-consumo",
    linkLive: "https://inteligenciavarejodeploy.netlify.app/",
  },
  {
    title: "Horus AI",
    titleEn: "Horus AI",
    titleEs: "Horus AI",
    category: "Monitoramento · Dados não estruturados",
    categoryEn: "Monitoring · Unstructured data",
    categoryEs: "Monitoreo · Datos no estructurados",
    description:
      "Sistema de monitoramento que analisa vídeo, áudio e sincronização labial para detectar anomalias em transmissões ao vivo e apoiar resposta operacional.",
    descriptionEn:
      "Monitoring system that analyzes video, audio, and lip synchronization to detect anomalies in live broadcasts and support operational response.",
    descriptionEs:
      "Sistema de monitoreo que analiza video, audio y sincronización labial para detectar anomalías en transmisiones en vivo y apoyar la respuesta operativa.",
    tags: ["Python", "Computer Vision", "Audio Processing", "Monitoring"],
    image: imgHorus,
    link: "https://github.com/Haell39/horus_ai/tree/main",
    linkLive: null,
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
    title: "SQL Advanced",
    titleEn: "SQL Advanced",
    titleEs: "SQL Advanced",
    issuer: "Kaggle",
    date: "2025",
    link: "https://www.kaggle.com/learn/certification/raeldata/advanced-sql",
    image: imgSQLK,
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
    title: "Estatística",
    titleEn: "Statistics",
    titleEs: "Estadística",
    issuer: "Escola Virtual Gov",
    date: "2024",
    link: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/WPoM13770255Q1qz#",
    image: imgStats,
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
  {
    title: "Trilha Digital Coders 24 Data Science",
    titleEn: "Digital Coders 24 Data Science Track",
    titleEs: "Ruta Digital Coders 24 Data Science",
    issuer: "Ada Tech",
    date: "2024",
    link: "https://ada.tech/certificado?code=0d69f303-5f43-ab55-0f28-9e5e8678bb9e",
    image: imgADA,
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
];
