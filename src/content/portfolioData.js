import imgVarejo from "../assets/projects/Varejo.webp";
import imgPulsoEconomico from "../assets/projects/pulso-economico.png";

import imgEFSET from "../assets/certificates/EFSET.webp";
import imgONE from "../assets/certificates/ONE.webp";
import imgSQLK from "../assets/certificates/SQLK.webp";
import imgADA from "../assets/certificates/trilhaADA.webp";
import imgStats from "../assets/certificates/statistic.webp";
import imgAnalise from "../assets/certificates/analisedados.webp";
import imgPython from "../assets/certificates/Python Course.jpg";

export const PROJECTS = [
  {
    title: "Pulso Econômico Brasil",
    titleEn: "Brazil Economic Pulse",
    titleEs: "Pulso Económico de Brasil",
    category: "Engenharia de Dados · Analytics Engineering",
    categoryEn: "Data Engineering · Analytics Engineering",
    categoryEs: "Ingeniería de Datos · Analytics Engineering",
    description:
      "Plataforma que transforma séries públicas do Banco Central em métricas econômicas documentadas, testadas e prontas para consumo, da ingestão incremental ao dashboard público.",
    descriptionEn:
      "A platform that transforms public Central Bank time series into documented, tested, consumption-ready economic metrics, from incremental ingestion to a public dashboard.",
    descriptionEs:
      "Plataforma que transforma series públicas del Banco Central en métricas económicas documentadas, probadas y listas para consumo, desde la ingesta incremental hasta el dashboard público.",
    path: "API BCB → Airflow → Snowflake → dbt → Streamlit",
    pathEn: "BCB API → Airflow → Snowflake → dbt → Streamlit",
    pathEs: "API BCB → Airflow → Snowflake → dbt → Streamlit",
    tags: ["dbt", "Snowflake", "Airflow", "SQL", "Streamlit"],
    image: imgPulsoEconomico,
    link: "https://github.com/Haell39/data_pipeline",
    linkLive: "https://pulso-economico-brasil.streamlit.app/",
  },
  {
    title: "Inteligência de Varejo",
    titleEn: "Retail Intelligence",
    titleEs: "Inteligencia de Retail",
    category: "Analytics · E-commerce",
    categoryEn: "Analytics · E-commerce",
    categoryEs: "Analytics · E-commerce",
    description:
      "Case analítico do e-commerce brasileiro que combina dados da Olist e IPCA/IBGE para investigar vendas, satisfação do cliente e eficiência logística.",
    descriptionEn:
      "Brazilian e-commerce analytics case combining Olist and IPCA/IBGE data to investigate sales, customer satisfaction, and logistics efficiency.",
    descriptionEs:
      "Caso analítico del comercio electrónico brasileño que combina datos de Olist e IPCA/IBGE para investigar ventas, satisfacción y eficiencia logística.",
    path: "Olist + IBGE → tratamento → análise → visualização",
    pathEn: "Olist + IBGE → preparation → analysis → visualization",
    pathEs: "Olist + IBGE → preparación → análisis → visualización",
    tags: ["Python", "Data Analysis", "Business KPIs", "Storytelling"],
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
    title: "Data Science e Inteligência Artificial",
    titleEn: "Data Science and Artificial Intelligence",
    titleEs: "Ciencia de Datos e Inteligencia Artificial",
    issuer: "Oracle",
    date: "2025",
    link: "https://cursos.alura.com.br/user/rafaelsantoshome/program/14/certificate",
    image: imgONE,
  },
];
