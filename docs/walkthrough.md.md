# Portfolio Walkthrough

## Narrativa atual

O portfólio comunica Rafael Dutra como Analista de Dados e Analytics Engineer. A narrativa segue esta ordem:

1. Posicionamento e proposta de valor.
2. Cases profissionais e resultados comprovados.
3. Perfil e stack principal.
4. Competências em SQL, BI, pipelines e Python.
5. Experiência e formação.
6. Projetos autorais como extensão do repertório.
7. Processo de trabalho, certificações e contato.

## Cases profissionais

O componente `ProfessionalCases.jsx` é a principal prova de experiência. Os textos vêm de `translations.js`; a referência detalhada e os limites de comunicação ficam em `docs/cases_profissionais.md`.

Não publicar o arquivo de referência dentro de `public/`, pois o Netlify disponibiliza todo conteúdo dessa pasta diretamente por URL.

## Identidade visual

A direção visual combina:

- estética editorial de relatórios executivos
- azul-petróleo como cor principal
- verde-lima apenas como sinal de status
- grids discretos e superfícies translúcidas
- Manrope e IBM Plex Mono
- tema claro como padrão e tema escuro opcional

## Manutenção

- Textos: `src/i18n/translations.js`
- Cases: `src/components/ProfessionalCases.jsx`
- Projetos e certificados: `src/content/portfolioData.js`
- Tokens globais: `src/styles/variables.css`
- Layout responsivo: `src/styles/components.css`
- SEO: `index.html`, `public/robots.txt` e `public/sitemap.xml`

## Cuidados de copy

- Não usar “junior”, “iniciante” ou equivalentes como autodesqualificação.
- Não afirmar senioridade ou domínio avançado de DAX.
- Não transformar o limite configurável de 40.000 registros em métrica processada.
- Não associar Spark, Kafka, Airflow, streaming ou Data Warehouse aos cases profissionais.
- Diferenciar claramente trabalhos profissionais de projetos pessoais.
