# Página Especial: Yan & Fernanda

Este projeto é uma página dedicada à namorada do Yan, feita com carinho e atenção aos detalhes. O foco é criar uma experiência visual e emocionalmente significativa, usando uma stack moderna e eficiente.

Tecnologias principais:
- React + TypeScript para uma interface interativa e tipada
- Tailwind CSS para estilização rápida e moderna
- Vite para desenvolvimento e build rápidos
- Node.js (ambiente) para executar o projeto e futuras integrações de backend


## Recursos

A aplicação já inclui uma série de seções e interações especiais:

- Efeitos de partículas interativas (corações/estrelas) como fundo dinâmico
- Hero cinematográfico com animações sutis e interações com o mouse
- Linha do tempo interativa para marcos do relacionamento
- Galeria dinâmica de memórias com filtros e lightbox
- Cartas de amor interativas com cartões 3D (flip) e animações
- Contador de tempo juntos (desde 25/06/2024) com surpresa de margaridas
- Rodapé interativo com mini player temático

Todas as seções foram otimizadas para responsividade e possuem animações suaves que mantêm uma estética romântica (lavanda, roxo, rosa e margaridas).


## Pré-requisitos

- Node.js 18+ (recomendado)
- npm (ou pnpm/yarn, se preferir)


## Instalação

1. Instale as dependências:
   - npm install

2. Rode em modo desenvolvimento:
   - npm run dev

3. Acesse no navegador o endereço mostrado no terminal (geralmente http://localhost:5173).

4. Para gerar build de produção:
   - npm run build

5. Para pré-visualizar a build:
   - npm run preview


## Scripts disponíveis

- dev: inicia o servidor de desenvolvimento (Vite)
- build: gera build de produção
- preview: serve a build gerada para pré-visualização
- lint: executa o ESLint


## Estrutura básica

- index.html: HTML base do app
- src/main.tsx: bootstrap do React
- src/App.tsx: composição principal das seções
- src/index.css: Tailwind + utilitários/animações customizadas (tema lavanda/margaridas)
- src/components/*: componentes principais (Hero, Timeline, Galeria, Cartas, Partículas, Contador, Footer etc.)
- tailwind.config.js: configuração do Tailwind (inclui a paleta “lavender”)
- vite.config.ts: configuração do Vite


## Personalização rápida

- Título, nomes e datas: ajustáveis nos componentes CinematicHero, InteractiveTimeline, InteractiveCountdown e InteractiveFooter.
- Cores: a paleta “lavanda” está em tailwind.config.js; utilitários adicionais estão em src/index.css.
- Galeria: edite os itens em src/components/DynamicGallery.tsx (links de imagens, legendas e categorias).
- Cartas: edite a lista em src/components/InteractiveLoveLetters.tsx (conteúdo, autor, datas e animações).
- Música: o modal do player está em InteractiveFooter.tsx; a reprodução é simulada (sem arquivo de áudio embutido). Você pode apontar para um arquivo ou stream caso desejado.


## Acessibilidade e performance

- Layout responsivo com foco em toque (mobile): áreas clicáveis maiores e animações calibradas
- Preferência por redução de movimento respeitada (prefers-reduced-motion)
- Uso de cores com contraste suficiente e tipografia legível (Inter + Dancing Script)


## Deploy

- Qualquer serviço de estáticos (Vercel, Netlify, GitHub Pages, Cloudflare Pages)
- Rode npm run build e publique a pasta dist


## Licença

Projeto pessoal com fins demonstrativos/afetivos. Ajuste e reutilize conforme necessário para seu contexto.


—
Feito para Yan & Fernanda.
