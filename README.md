# portfolio-site

Portfólio pessoal em formato de desktop Hyprland/NixOS, com tema Catppuccin Mocha Pink.

Cada "janela" da waybar abre um espaço do site — a versão antiga em HTML puro (home, sobre, pets,
educação, projetos e contato) foi reorganizada em componentes React dentro do mesmo visual.

## Stack

- React 19 + TypeScript
- Vite 8
- TailwindCSS 4 (tokens Catppuccin em `src/index.css`)
- 3270 Nerd Font (local, em `src/assets/fonts`)

## Rodando localmente

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # typecheck + build de produção (dist/)
npm run preview  # serve o dist/ localmente
npm run lint     # oxlint
```

## Deploy no GitHub Pages

O deploy é feito pela action em `.github/workflows/deploy.yml`: basta dar push na `main`.

O `base` do Vite está configurado em `/portfolio-site/` (ver `vite.config.ts`), que é o caminho
usado pelo GitHub Pages para este repositório. Se o repositório for renomeado, ajuste o `base`
e a URL em `src/data/site.ts` (`contacts`).

Site no ar: https://vitor-hugo-soares-da-silva-dev.github.io/portfolio-site/

## Estrutura

```
src/
  components/
    layout/      Waybar, Tile (janela) e o catálogo de workspaces
    sections/    Sobre, Pets, Educação, Contato e Projetos
    tiles/       cmatrix, cava e fastfetch
    ui/          Icon (SVG inline) e Segments (texto com links)
    Terminal.tsx e Quote.tsx
  data/site.ts   todo o conteúdo do site (textos, projetos, pets, quotes)
  hooks/         useAge, useClock, useMatrix, useCava
```

A versão estática original do design (arquivo único com CSS e JS inline) ficou arquivada em
`public/legacy/portfolio-hyprland.html`.
