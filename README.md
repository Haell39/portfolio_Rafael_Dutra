# Rafael Dutra Portfolio

Portfólio em React + Vite com foco em IA aplicada, machine learning, NLP/LLMs, visão computacional, automação e dados.

## Stack

- React 18
- Vite
- Framer Motion
- Lucide React

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

## Estrutura importante

- `src/i18n/translations.js`
  Conteúdo textual da landing em PT, EN e ES.

- `src/content/portfolioData.js`
  Dados centralizados de projetos e certificados, incluindo imagens e links.

- `src/App.jsx`
  Ordem das seções e estratégia de preload das imagens.

- `src/components/`
  Componentes visuais da landing.

- `docs/instrucoes.txt`
  Material de referência para projetos e certificados.

- `docs/walkthrough.md.md`
  Visão geral da arquitetura atual e decisões recentes.

## Seções atuais

- Hero
- About
- Network
- Experience
- Projects
- Solutions
- Process
- Certificates
- Diagnosis CTA
- FAQ
- Footer

## Observações

- O item `Contato` da navegação redireciona para a `Hero`, onde está o CTA principal.
- O conteúdo de projetos e certificados foi separado dos componentes para facilitar manutenção e preservar o lazy loading.
