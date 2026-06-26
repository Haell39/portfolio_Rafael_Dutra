# Portfolio Walkthrough

Documento atualizado em 21/05/2026 para refletir o estado atual do portfólio.

## Posicionamento atual

O site está orientado para:

- análise de dados
- KPIs de negócio e análise orientada a decisão
- dashboards, Power BI e visualização
- SQL, Excel, Python e estruturação de dados
- IA aplicada como extensão pontual da análise

O tom da copy foi ajustado para parecer forte e profissional, mas sem exagerar senioridade ou prometer mais do que o perfil entrega hoje.

## Estrutura da landing

Ordem das seções renderizadas em `src/App.jsx`:

1. `Hero`
2. `About`
3. `Network`
4. `Experience`
5. `Projects`
6. `Solutions`
7. `Process`
8. `Certificates`
9. `DiagnosisCTA`
10. `FAQ`
11. `Footer`

Observação:
O item `Contato` da navbar e do footer aponta para `#hero`, onde está o CTA principal.

## Onde editar cada coisa

### Textos da interface

Arquivo:
`src/i18n/translations.js`

Ali ficam:

- Hero
- About
- Solutions
- Process
- Experience
- Network
- Diagnosis CTA
- FAQ
- Footer
- Labels auxiliares da navbar, projetos e certificados

### Projetos e certificados

Arquivo:
`src/content/portfolioData.js`

Esse arquivo centraliza:

- títulos
- descrições
- links
- imagens
- tags
- dados de certificados

Motivo da mudança:
Antes os arrays ficavam dentro de `Projects.jsx` e `Certificates.jsx`, o que forçava import estático desses componentes no `App.jsx` e enfraquecia o lazy loading. Agora os dados estão separados e o build volta a fazer chunking corretamente para esses componentes.

## Decisões recentes

### 1. Reposicionamento da copy

O conteúdo foi reescrito para enfatizar:

- competência em análise de dados
- capacidade prática de organizar dados e gerar clareza
- BI, estruturação de dados e IA como extensões naturais
- atratividade para recrutadores e potenciais clientes

Também foi removida qualquer autodesqualificação explícita na hero.

### 2. Timeline de experiência

A experiência da `FourDevs` foi colocada no topo da seção `Experience`, com foco em:

- educação e segurança
- computer vision
- classificação
- reconhecimento de padrões
- pipelines de IA
- exposição via API em produção

A entrada `Projetos & Freelance / Data Scientist & ML` foi removida conforme solicitado.

### 3. Internacionalização complementar

Além da copy principal, foram alinhados:

- labels do footer
- botões de projeto
- label de emissão dos certificados
- labels de acessibilidade da navbar e do carrossel de projetos

## SEO básico atual

Arquivo:
`index.html`

Estado atual:

- `lang="pt-BR"`
- `title` alinhado ao posicionamento de análise de dados
- `meta description` atualizada

## Comandos úteis

Desenvolvimento:

```bash
npm run dev
```

Build:

```bash
npm run build
```

## Fonte de referência de conteúdo

Arquivo:
`docs/instrucoes.txt`

Uso:
serve como base manual para projetos e certificados, mas a fonte operacional da interface agora é `src/content/portfolioData.js`.
