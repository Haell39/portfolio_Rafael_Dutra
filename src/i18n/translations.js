export const translations = {
  pt: {
    navbar: {
      cases: "Cases",
      about: "Perfil",
      expertise: "Competências",
      experience: "Experiência",
      projects: "Projetos",
      certificates: "Formação",
      contact: "Contato",
      toggle_theme: "Alternar tema",
      open_menu: "Abrir menu",
      close_menu: "Fechar menu",
    },
    hero: {
      kicker: "Analista de Dados | Analytics Engineer",
      title: "Dados confiáveis para decisões que movem o negócio.",
      title_highlight: "Da estrutura ao insight.",
      subtitle:
        "Transformo dados dispersos em bases consistentes, análises claras e indicadores úteis, conectando SQL, Power BI, Python e Excel à realidade da operação.",
      cta_cases: "Ver cases profissionais",
      cta_cv: "Baixar currículo",
      cta_contact: "Falar comigo",
      cv_path: "/curriculo_Rafael_Dutra.pdf",
      cv_filename: "curriculo_Rafael_Dutra.pdf",
      availability: "Recife, Brasil · Remoto",
      panel_eyebrow: "Em números",
      panel_verified: "experiência comprovada",
      panel_title: "Experiência prática com o ciclo completo do dado.",
      panel_metrics: [
        { value: "2.400+", label: "cadastros faciais em produção" },
        { value: "100+", label: "usuários ativos por dia" },
        { value: "PRODUÇÃO", label: "solução integrada à operação real" },
        { value: "END-TO-END", label: "dados → validação → integração → entrega" },
      ],
    },
    cases: {
      kicker: "Experiência comprovada",
      title: "Cases profissionais que saíram do desenho e chegaram à operação.",
      subtitle:
        "Soluções desenvolvidas na FourDevs, com responsabilidade direta sobre implementação, testes, homologação e entrega técnica.",
      confidentiality: "Escopo técnico apresentado sem expor dados sensíveis do cliente.",
      status_label: "Status",
      stack_label: "Stack principal",
      delivery_label: "O que desenvolvi",
      result_label: "Evidências",
      items: [
        {
          number: "01",
          type: "Computer Vision · Dados em produção",
          title: "Reconhecimento facial integrado ao fluxo real de acesso",
          status: "Produção",
          summary:
            "Desenvolvi e evoluí um microserviço de reconhecimento facial conectado aos sistemas de uma instituição educacional e ao fluxo de identificação por catracas.",
          delivery: [
            "Embeddings ArcFace de 512 dimensões e busca vetorial com pgvector",
            "APIs de cadastro, atualização, verificação e remoção",
            "Reconhecimento adaptativo, validação de imagens e mecanismos de fallback",
            "Homologação, deploy, troubleshooting e suíte automatizada de testes",
          ],
          metrics: [
            { value: "2.400+", label: "faces cadastradas" },
            { value: "100+", label: "usuários diários" },
            { value: "58", label: "testes com Pytest" },
          ],
          stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Docker", "Pytest"],
        },
        {
          number: "02",
          type: "Data Integration · Batch ingestion",
          title: "Ingestão e roteamento de dados educacionais",
          status: "Homologado",
          summary:
            "Desenvolvi e homologuei um serviço batch que recebe arquivos CSV, valida e normaliza registros e direciona a persistência para bancos PostgreSQL distintos conforme o domínio de negócio.",
          delivery: [
            "Contrato de entrada, validação de qualidade e normalização da carga",
            "Mapeamento CSV para schemas PostgreSQL e roteamento multi-banco",
            "Idempotência por matrícula, transações em lote e reprocessamento seguro",
            "Logs estruturados, API Key, testes e validação direta dos resultados em SQL",
          ],
          metrics: [
            { value: "3", label: "bancos validados" },
            { value: "2", label: "domínios de negócio" },
            { value: "0", label: "erros internos no ciclo homologado" },
          ],
          stack: ["Python", "FastAPI", "SQL", "PostgreSQL", "postgres_fdw", "Docker"],
        },
      ],
    },
    about: {
      kicker: "Perfil",
      title: "Análise com contexto. Engenharia com propósito.",
      subtitle:
        "Atuo entre a pergunta de negócio e a camada técnica necessária para respondê-la com confiança.",
      p1: "Meu foco é tornar dados utilizáveis: entender a operação, organizar fontes, validar qualidade e construir análises ou indicadores que apoiem decisões reais.",
      p2: "Na prática, combino análise de dados e fundamentos de analytics engineering. Trabalho com SQL, PostgreSQL, Power BI, Excel, Python e pipelines de ingestão sem transformar cada problema em uma arquitetura maior do que precisa ser.",
      p3: "Também trago experiência em IA aplicada e APIs em produção, repertório que amplia minha capacidade de lidar com dados não estruturados, integrações e soluções analíticas mais avançadas quando o contexto justifica.",
      stack_title: "Core toolkit",
      stack: ["SQL", "Power BI", "Excel", "Python", "Cloud", "Power Query", "ETL", "Data Quality", "Git"],
    },
    solutions: {
      kicker: "Competências",
      title: "Uma base analítica conectada ao que o negócio precisa enxergar.",
      subtitle:
        "Competências construídas em projetos, formação e entregas profissionais, sempre com escopo proporcional ao problema.",
      items: [
        {
          title: "SQL & Modelagem Analítica",
          desc: "Consultas, joins, CTEs, subqueries e window functions para organizar regras, investigar dados e preparar camadas confiáveis de análise em PostgreSQL.",
        },
        {
          title: "BI & Visualização",
          desc: "Dashboards e análises com Power BI, Power Query e Excel, priorizando KPIs, comparação de períodos, clareza visual e narrativa para decisão.",
        },
        {
          title: "Pipelines & Qualidade de Dados",
          desc: "Ingestão batch, validação, normalização, tipagem, idempotência e integração entre fontes para reduzir ruído antes da análise.",
        },
        {
          title: "Python & Analytics Avançado",
          desc: "Pandas, exploração, automação e modelagem quando a pergunta exige mais profundidade do que SQL, planilhas ou BI entregam sozinhos.",
        },
      ],
    },
    process: {
      kicker: "Forma de trabalho",
      title: "Da pergunta ao dado confiável. Do dado à decisão.",
      subtitle:
        "Um processo objetivo para evitar dashboards sem contexto e pipelines sem finalidade.",
      items: [
        { step: "01", title: "Contexto", desc: "Entendo a operação, a decisão esperada e os KPIs que realmente representam o problema." },
        { step: "02", title: "Fundação", desc: "Mapeio fontes, regras, qualidade e granularidade antes de estruturar consultas e transformações." },
        { step: "03", title: "Análise", desc: "Investigo padrões, comparo cenários e construo uma leitura visual coerente com a pergunta." },
        { step: "04", title: "Entrega", desc: "Documento premissas, apresento conclusões e deixo próximos passos claros para evolução." },
      ],
    },
    experience: {
      kicker: "Trajetória",
      title: "Experiência, formação e construção prática.",
      items: [
        {
          company: "FourDevs",
          role: "Desenvolvedor de IA Aplicada & Dados · Estágio",
          date: "04/2026 — Atualmente",
          description:
            "Desenvolvimento de serviços profissionais envolvendo ingestão, validação, integração e persistência de dados, além de soluções de Computer Vision em produção. Atuação direta em APIs, PostgreSQL, testes, Docker, homologação e troubleshooting.",
        },
        {
          company: "Porto Digital",
          role: "Residência Tecnológica",
          date: "02/2024 — Atualmente",
          description:
            "Residência orientada a problemas reais de empresas e instituições, conectando análise, software e entrega colaborativa.",
          details: [
            "Globo · Horus AI: sistema de monitoramento de transmissões ao vivo, com pipeline de vídeo e áudio e até 97,6% de acurácia no melhor modelo.",
            "Prefeitura de Igarassu: plataforma para mapeamento e acompanhamento de beneficiários em situação de vulnerabilidade social.",
          ],
        },
        {
          company: "FICR",
          role: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
          date: "02/2024 — 06/2026",
          description:
            "Graduação concluída com formação em dados, bancos de dados, algoritmos, engenharia de software e projetos aplicados.",
        },
      ],
    },
    projects: {
      kicker: "Portfólio técnico",
      title: "Projetos que ampliam minha leitura de dados e negócio.",
      subtitle: "Estudos e produtos autorais usados para explorar analytics, visualização, modelagem e comunicação de resultados.",
      cta_code: "Repositório",
      cta_live: "Projeto online",
      cta_soon: "Em breve",
    },
    certificates: {
      kicker: "Formação contínua",
      title: "Certificações selecionadas.",
      subtitle: "Uma amostra da formação complementar em SQL, análise, estatística, Python e inglês.",
      issued_label: "Emitido em",
    },
    diagnosis: {
      kicker: "Próxima conversa",
      title: "Procurando alguém que conecte dados, contexto e execução?",
      subtitle:
        "Estou aberto a oportunidades em análise de dados, analytics engineering e projetos que precisem transformar bases dispersas em informação confiável.",
      cta_primary: "Conversar no LinkedIn",
      cta_secondary: "Enviar e-mail",
      note: "Recife, Brasil · Disponível para trabalho remoto",
    },
    faq: {
      kicker: "Perguntas frequentes",
      title: "Escopo e forma de atuação.",
      subtitle: "Respostas diretas para recrutadores, times e potenciais parceiros.",
      items: [
        { q: "Que tipo de problema de dados você pode ajudar a resolver?", a: "Posso apoiar desde a organização e validação de fontes até análises, KPIs e dashboards para decisão. Quando o problema exige uma base mais confiável, também atuo na integração e preparação dos dados que sustentam essas entregas." },
        { q: "Você trabalha com Power BI e DAX?", a: "Trabalho com Power BI, Power Query, modelagem e construção de dashboards. Em DAX, utilizo medidas compatíveis com o escopo dos projetos e sigo aprofundando a prática, sem me posicionar como especialista avançado." },
        { q: "A experiência com IA ainda faz parte do perfil?", a: "Sim, como repertório complementar. Tenho experiência profissional com Computer Vision e APIs, mas o posicionamento atual prioriza dados, SQL, BI, qualidade e integração." },
        { q: "Os cases apresentados são projetos profissionais?", a: "Sim. Os dois cases em destaque foram desenvolvidos na FourDevs e passaram por etapas reais de implementação, testes e homologação; o reconhecimento facial também opera em produção." },
      ],
    },
    footer: {
      blurb: "Dados bem estruturados, análises claras e decisões com contexto.",
      navigation: "Navegação",
      contact: "Contato",
      copyright: "Todos os direitos reservados.",
      signature: "DATA / ANALYTICS / BUSINESS",
    },
  },

  en: {
    navbar: {
      cases: "Cases", about: "Profile", expertise: "Expertise", experience: "Experience", projects: "Projects", certificates: "Learning", contact: "Contact", toggle_theme: "Toggle theme", open_menu: "Open menu", close_menu: "Close menu",
    },
    hero: {
      kicker: "Data Analyst | Analytics Engineer",
      title: "Reliable data for decisions that move the business.",
      title_highlight: "From structure to insight.",
      subtitle: "I turn scattered data into consistent foundations, clear analysis, and useful metrics by connecting SQL, Power BI, Python, and Excel to real operations.",
      cta_cases: "View professional cases", cta_cv: "Download resume", cta_contact: "Contact me", cv_path: "/curriculo_Rafael_Dutra.pdf", cv_filename: "curriculo_Rafael_Dutra.pdf", availability: "Recife, Brazil · Remote",
      panel_eyebrow: "Professional overview", panel_verified: "verified experience", panel_title: "Hands-on experience across the full data lifecycle.",
      panel_metrics: [
        { value: "2,400+", label: "facial registrations in production" }, { value: "100+", label: "daily active users" }, { value: "PRODUCTION", label: "solution integrated into real operations" }, { value: "END-TO-END", label: "data → validation → integration → delivery" },
      ],
    },
    cases: {
      kicker: "Proven experience", title: "Professional cases that moved from design to real operations.", subtitle: "Solutions built at FourDevs, with direct responsibility for implementation, testing, validation, and technical delivery.", confidentiality: "Technical scope presented without exposing sensitive client data.", status_label: "Status", stack_label: "Core stack", delivery_label: "What I built", result_label: "Evidence",
      items: [
        { number: "01", type: "Computer Vision · Production data", title: "Facial recognition integrated into a real access workflow", status: "Production", summary: "I built and evolved a facial recognition microservice connected to an educational institution's systems and turnstile identification workflow.", delivery: ["512-dimensional ArcFace embeddings and vector search with pgvector", "Registration, update, verification, and removal APIs", "Adaptive recognition, image validation, and fallback mechanisms", "Validation, deployment, troubleshooting, and automated test suite"], metrics: [{ value: "2,400+", label: "registered faces" }, { value: "100+", label: "daily users" }, { value: "58", label: "Pytest tests" }], stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Docker", "Pytest"] },
        { number: "02", type: "Data Integration · Batch ingestion", title: "Educational data ingestion and routing", status: "Validated", summary: "I built and validated a batch service that receives CSV files, validates and normalizes records, and routes persistence to separate PostgreSQL databases according to the business domain.", delivery: ["Input contract, data quality validation, and load normalization", "CSV-to-PostgreSQL mapping and multi-database routing", "Student-ID idempotency, batch transactions, and safe reprocessing", "Structured logs, API key, tests, and direct SQL result validation"], metrics: [{ value: "3", label: "validated databases" }, { value: "2", label: "business domains" }, { value: "0", label: "internal errors in the validation run" }], stack: ["Python", "FastAPI", "SQL", "PostgreSQL", "postgres_fdw", "Docker"] },
      ],
    },
    about: {
      kicker: "Profile", title: "Analysis with context. Engineering with purpose.", subtitle: "I work between the business question and the technical layer required to answer it with confidence.",
      p1: "My focus is making data usable: understanding operations, organizing sources, validating quality, and building analyses or metrics that support real decisions.",
      p2: "In practice, I combine data analysis and analytics engineering foundations. I work with SQL, PostgreSQL, Power BI, Excel, Python, and ingestion pipelines without making the architecture larger than the problem requires.",
      p3: "I also bring experience with applied AI and production APIs, expanding my ability to handle unstructured data, integrations, and advanced analytical solutions when the context calls for them.",
      stack_title: "Core toolkit", stack: ["SQL", "Power BI", "Excel", "Python", "Cloud", "Power Query", "ETL", "Data Quality", "Git"],
    },
    solutions: {
      kicker: "Expertise", title: "An analytical foundation connected to what the business needs to see.", subtitle: "Skills built across projects, education, and professional delivery, always keeping scope proportional to the problem.",
      items: [
        { title: "SQL & Analytical Modeling", desc: "Queries, joins, CTEs, subqueries, and window functions to organize rules, investigate data, and prepare reliable analytical layers in PostgreSQL." },
        { title: "BI & Visualization", desc: "Dashboards and analyses with Power BI, Power Query, and Excel, prioritizing KPIs, period comparison, visual clarity, and decision-oriented storytelling." },
        { title: "Pipelines & Data Quality", desc: "Batch ingestion, validation, normalization, typing, idempotency, and source integration to reduce noise before analysis." },
        { title: "Python & Advanced Analytics", desc: "Pandas, exploration, automation, and modeling when the question requires more depth than SQL, spreadsheets, or BI can deliver alone." },
      ],
    },
    process: {
      kicker: "How I work", title: "From question to reliable data. From data to decision.", subtitle: "A practical process that avoids dashboards without context and pipelines without purpose.",
      items: [
        { step: "01", title: "Context", desc: "Understand the operation, expected decision, and KPIs that truly represent the problem." },
        { step: "02", title: "Foundation", desc: "Map sources, rules, quality, and granularity before structuring queries and transformations." },
        { step: "03", title: "Analysis", desc: "Investigate patterns, compare scenarios, and build a visual narrative aligned with the question." },
        { step: "04", title: "Delivery", desc: "Document assumptions, present conclusions, and leave clear next steps for evolution." },
      ],
    },
    experience: {
      kicker: "Journey", title: "Experience, education, and hands-on work.",
      items: [
        { company: "FourDevs", role: "Applied AI & Data Developer · Internship", date: "04/2026 — Present", description: "Building professional services involving data ingestion, validation, integration, and persistence, alongside production Computer Vision solutions. Direct work with APIs, PostgreSQL, testing, Docker, validation, and troubleshooting." },
        { company: "Porto Digital", role: "Technology Residency", date: "02/2024 — Present", description: "Residency focused on real company and public-sector challenges, connecting analysis, software, and collaborative delivery.", details: ["Globo · Horus AI: live broadcast monitoring with video and audio pipelines, reaching up to 97.6% accuracy in the best model.", "Igarassu City Hall: platform for mapping and supporting social assistance beneficiaries."] },
        { company: "FICR", role: "Technology Degree in Systems Analysis and Development", date: "02/2024 — 06/2026", description: "Completed degree covering data, databases, algorithms, software engineering, and applied projects." },
      ],
    },
    projects: { kicker: "Technical portfolio", title: "Projects that expand my understanding of data and business.", subtitle: "Independent studies and products used to explore analytics, visualization, modeling, and communication.", cta_code: "Repository", cta_live: "Live project", cta_soon: "Coming soon" },
    certificates: { kicker: "Continuous learning", title: "Selected certifications.", subtitle: "A sample of continued learning in SQL, analysis, statistics, Python, and English.", issued_label: "Issued" },
    diagnosis: { kicker: "Next conversation", title: "Looking for someone who connects data, context, and execution?", subtitle: "I am open to data analysis, analytics engineering, and projects that need to turn scattered sources into reliable information.", cta_primary: "Connect on LinkedIn", cta_secondary: "Send an email", note: "Recife, Brazil · Available for remote work" },
    faq: {
      kicker: "FAQ", title: "Scope and working style.", subtitle: "Direct answers for recruiters, teams, and potential partners.",
      items: [
        { q: "What kind of data problems can you help solve?", a: "I can support projects from source organization and validation through analysis, KPIs, and decision-ready dashboards. When the problem requires a more reliable foundation, I also work on the integration and preparation that support those deliverables." },
        { q: "Do you work with Power BI and DAX?", a: "I work with Power BI, Power Query, modeling, and dashboard development. With DAX, I use measures aligned with project scope and continue building deeper practice without positioning myself as an advanced specialist." },
        { q: "Is AI still part of your profile?", a: "Yes, as complementary experience. I have professional experience with Computer Vision and APIs, while my current positioning prioritizes data, SQL, BI, quality, and integration." },
        { q: "Are the highlighted cases professional work?", a: "Yes. Both cases were built at FourDevs and went through real implementation, testing, and validation stages; the facial recognition service also runs in production." },
      ],
    },
    footer: { blurb: "Well-structured data, clear analysis, and decisions with context.", navigation: "Navigation", contact: "Contact", copyright: "All rights reserved.", signature: "DATA / ANALYTICS / BUSINESS" },
  },

  es: {
    navbar: {
      cases: "Casos", about: "Perfil", expertise: "Competencias", experience: "Experiencia", projects: "Proyectos", certificates: "Formación", contact: "Contacto", toggle_theme: "Cambiar tema", open_menu: "Abrir menú", close_menu: "Cerrar menú",
    },
    hero: {
      kicker: "Analista de Datos | Analytics Engineer", title: "Datos confiables para decisiones que mueven el negocio.", title_highlight: "De la estructura al insight.", subtitle: "Transformo datos dispersos en bases consistentes, análisis claros e indicadores útiles, conectando SQL, Power BI, Python y Excel con la realidad de la operación.", cta_cases: "Ver casos profesionales", cta_cv: "Descargar CV", cta_contact: "Contactarme", cv_path: "/curriculo_Rafael_Dutra.pdf", cv_filename: "curriculo_Rafael_Dutra.pdf", availability: "Recife, Brasil · Remoto", panel_eyebrow: "En números", panel_verified: "experiencia comprobada", panel_title: "Experiencia práctica en el ciclo completo del dato.",
      panel_metrics: [{ value: "2.400+", label: "registros faciales en producción" }, { value: "100+", label: "usuarios activos por día" }, { value: "PRODUCCIÓN", label: "solución integrada a la operación real" }, { value: "END-TO-END", label: "datos → validación → integración → entrega" }],
    },
    cases: {
      kicker: "Experiencia comprobada", title: "Casos profesionales que pasaron del diseño a la operación real.", subtitle: "Soluciones desarrolladas en FourDevs, con responsabilidad directa en implementación, pruebas, homologación y entrega técnica.", confidentiality: "Alcance técnico presentado sin exponer datos sensibles del cliente.", status_label: "Estado", stack_label: "Stack principal", delivery_label: "Lo que desarrollé", result_label: "Evidencias",
      items: [
        { number: "01", type: "Computer Vision · Datos en producción", title: "Reconocimiento facial integrado al flujo real de acceso", status: "Producción", summary: "Desarrollé y evolucioné un microservicio de reconocimiento facial conectado a los sistemas de una institución educativa y al flujo de identificación por torniquetes.", delivery: ["Embeddings ArcFace de 512 dimensiones y búsqueda vectorial con pgvector", "APIs de registro, actualización, verificación y eliminación", "Reconocimiento adaptativo, validación de imágenes y mecanismos de fallback", "Homologación, deploy, troubleshooting y suite automatizada de pruebas"], metrics: [{ value: "2.400+", label: "rostros registrados" }, { value: "100+", label: "usuarios diarios" }, { value: "58", label: "pruebas con Pytest" }], stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Docker", "Pytest"] },
        { number: "02", type: "Data Integration · Batch ingestion", title: "Ingestión y enrutamiento de datos educativos", status: "Homologado", summary: "Desarrollé y homologué un servicio batch que recibe archivos CSV, valida y normaliza registros y dirige la persistencia a bases PostgreSQL distintas según el dominio de negocio.", delivery: ["Contrato de entrada, validación de calidad y normalización de la carga", "Mapeo CSV a PostgreSQL y enrutamiento multi-base", "Idempotencia por matrícula, transacciones por lotes y reproceso seguro", "Logs estructurados, API Key, pruebas y validación directa en SQL"], metrics: [{ value: "3", label: "bases validadas" }, { value: "2", label: "dominios de negocio" }, { value: "0", label: "errores internos en el ciclo homologado" }], stack: ["Python", "FastAPI", "SQL", "PostgreSQL", "postgres_fdw", "Docker"] },
      ],
    },
    about: {
      kicker: "Perfil", title: "Análisis con contexto. Ingeniería con propósito.", subtitle: "Trabajo entre la pregunta de negocio y la capa técnica necesaria para responderla con confianza.", p1: "Mi foco es hacer que los datos sean utilizables: entender la operación, organizar fuentes, validar calidad y construir análisis o indicadores que apoyen decisiones reales.", p2: "En la práctica, combino análisis de datos y fundamentos de analytics engineering. Trabajo con SQL, PostgreSQL, Power BI, Excel, Python y pipelines de ingestión sin hacer la arquitectura más grande que el problema.", p3: "También aporto experiencia en IA aplicada y APIs en producción, ampliando mi capacidad para trabajar con datos no estructurados, integraciones y soluciones analíticas avanzadas cuando el contexto lo requiere.", stack_title: "Core toolkit", stack: ["SQL", "Power BI", "Excel", "Python", "Cloud", "Power Query", "ETL", "Data Quality", "Git"],
    },
    solutions: {
      kicker: "Competencias", title: "Una base analítica conectada con lo que el negocio necesita ver.", subtitle: "Competencias construidas en proyectos, formación y entregas profesionales, manteniendo el alcance proporcional al problema.",
      items: [
        { title: "SQL y Modelado Analítico", desc: "Consultas, joins, CTEs, subqueries y window functions para organizar reglas, investigar datos y preparar capas confiables en PostgreSQL." },
        { title: "BI y Visualización", desc: "Dashboards y análisis con Power BI, Power Query y Excel, priorizando KPIs, comparación temporal, claridad visual y narrativa para decisiones." },
        { title: "Pipelines y Calidad de Datos", desc: "Ingestión batch, validación, normalización, tipado, idempotencia e integración de fuentes para reducir ruido antes del análisis." },
        { title: "Python y Analytics Avanzado", desc: "Pandas, exploración, automatización y modelado cuando la pregunta requiere más profundidad que SQL, hojas de cálculo o BI." },
      ],
    },
    process: {
      kicker: "Forma de trabajo", title: "De la pregunta al dato confiable. Del dato a la decisión.", subtitle: "Un proceso objetivo para evitar dashboards sin contexto y pipelines sin finalidad.", items: [{ step: "01", title: "Contexto", desc: "Entiendo la operación, la decisión esperada y los KPIs que representan el problema." }, { step: "02", title: "Base", desc: "Mapeo fuentes, reglas, calidad y granularidad antes de estructurar consultas y transformaciones." }, { step: "03", title: "Análisis", desc: "Investigo patrones, comparo escenarios y construyo una narrativa visual coherente con la pregunta." }, { step: "04", title: "Entrega", desc: "Documento supuestos, presento conclusiones y dejo próximos pasos claros." }],
    },
    experience: {
      kicker: "Trayectoria", title: "Experiencia, formación y construcción práctica.", items: [
        { company: "FourDevs", role: "Desarrollador de IA Aplicada y Datos · Prácticas", date: "04/2026 — Actualidad", description: "Desarrollo de servicios profesionales de ingestión, validación, integración y persistencia de datos, además de soluciones de Computer Vision en producción. Trabajo directo con APIs, PostgreSQL, pruebas, Docker, homologación y troubleshooting." },
        { company: "Porto Digital", role: "Residencia Tecnológica", date: "02/2024 — Actualidad", description: "Residencia orientada a problemas reales de empresas e instituciones, conectando análisis, software y entrega colaborativa.", details: ["Globo · Horus AI: monitoreo de transmisiones en vivo con pipelines de video y audio y hasta 97,6% de precisión en el mejor modelo.", "Municipalidad de Igarassu: plataforma para mapear y acompañar beneficiarios en situación de vulnerabilidad social."] },
        { company: "FICR", role: "Tecnólogo en Análisis y Desarrollo de Sistemas", date: "02/2024 — 06/2026", description: "Grado concluido con formación en datos, bases de datos, algoritmos, ingeniería de software y proyectos aplicados." },
      ],
    },
    projects: { kicker: "Portafolio técnico", title: "Proyectos que amplían mi lectura de datos y negocio.", subtitle: "Estudios y productos propios para explorar analytics, visualización, modelado y comunicación.", cta_code: "Repositorio", cta_live: "Proyecto online", cta_soon: "Próximamente" },
    certificates: { kicker: "Formación continua", title: "Certificaciones seleccionadas.", subtitle: "Una muestra de formación complementaria en SQL, análisis, estadística, Python e inglés.", issued_label: "Emitido" },
    diagnosis: { kicker: "Próxima conversación", title: "¿Buscas a alguien que conecte datos, contexto y ejecución?", subtitle: "Estoy abierto a oportunidades en análisis de datos, analytics engineering y proyectos que necesiten transformar fuentes dispersas en información confiable.", cta_primary: "Conectar en LinkedIn", cta_secondary: "Enviar un correo", note: "Recife, Brasil · Disponible para trabajo remoto" },
    faq: {
      kicker: "Preguntas frecuentes", title: "Alcance y forma de trabajo.", subtitle: "Respuestas directas para reclutadores, equipos y potenciales socios.", items: [
        { q: "¿Qué tipo de problemas de datos puedes ayudar a resolver?", a: "Puedo apoyar desde la organización y validación de fuentes hasta análisis, KPIs y dashboards para la toma de decisiones. Cuando el problema exige una base más confiable, también trabajo en la integración y preparación de los datos que sustentan esas entregas." },
        { q: "¿Trabajas con Power BI y DAX?", a: "Trabajo con Power BI, Power Query, modelado y dashboards. En DAX utilizo medidas compatibles con el alcance y sigo profundizando la práctica, sin posicionarme como especialista avanzado." },
        { q: "¿La IA sigue siendo parte de tu perfil?", a: "Sí, como experiencia complementaria. Tengo experiencia profesional en Computer Vision y APIs, mientras el posicionamiento actual prioriza datos, SQL, BI, calidad e integración." },
        { q: "¿Los casos destacados son trabajos profesionales?", a: "Sí. Ambos fueron desarrollados en FourDevs y pasaron por implementación, pruebas y homologación; el reconocimiento facial también opera en producción." },
      ],
    },
    footer: { blurb: "Datos bien estructurados, análisis claros y decisiones con contexto.", navigation: "Navegación", contact: "Contacto", copyright: "Todos los derechos reservados.", signature: "DATA / ANALYTICS / BUSINESS" },
  },
};
