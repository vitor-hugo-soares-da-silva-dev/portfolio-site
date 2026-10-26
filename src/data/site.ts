import type { IconName } from '../components/ui/Icon'
import eu from '../assets/images/eu.webp'
import gorda from '../assets/images/gorda.webp'
import odin from '../assets/images/odin.webp'
import pacoca from '../assets/images/pacoca.webp'
import tedi from '../assets/images/tedi.webp'

export type Segment = { text: string; href?: string }

export type InfoCard = {
  id: string
  title: string
  icon: IconName
  body: Segment[]
}

export type Quote = {
  id: string
  text: string
  source: string
  href: string
}

export type Pet = {
  id: string
  name: string
  photo: string
  body: Segment[]
}

export type EducationEntry = {
  id: string
  title: string
  period: string
  description: Segment[]
  tags: string[]
}

export type Project = {
  id: string
  name: string
  description: string
  tags: string[]
  links: { label: string; href: string }[]
}

export const projects: Project[] = []

export const projectFilters: { id: 'all'; label: string }[] = [
  { id: 'all', label: 'todos.nix' },
]

export type ContactLink = {
  id: string
  label: string
  value: string
  href: string
  icon: IconName
}

export const contacts: ContactLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    value: 'vitor-hugo-soares-da-silva-dev',
    href: 'https://github.com/vitor-hugo-soares-da-silva-dev',
    icon: 'github',
  },
  {
    id: 'email',
    label: 'E-mail',
    value: 'vitor-hugo-soares-da-silva-dev@gmail.com',
    href: 'mailto:vitor-hugo-soares-da-silva-dev@gmail.com',
    icon: 'mail',
  },
  {
    id: 'site',
    label: 'Site',
    value: 'vitor-hugo-soares-da-silva-dev.github.io',
    href: 'https://vitor-hugo-soares-da-silva-dev.github.io/portfolio-site/',
    icon: 'sparkle',
  },
]

export const track = {
  title: 'Modular Focus - C418',
  duration: '03:43',
}

export const infoCards: InfoCard[] = [
  {
    id: 'geral',
    title: 'Geral',
    icon: 'terminal',
    body: [
      { text: 'Meu nome é Vitor Hugo Soares da Silva,tenho 19 anos,sou estudante de programação cursando análise e desenvolvimento de sistemas formalmente há 2 anos no ' },
      { text: 'SESI/SENAI', href: 'https://cursos.sesisenai.org.br/' },
      { text: ' e informalmente há 5 quando via videoaulas de python na internet, tenho muito interesse em ' },
      { text: 'GNU/Linux', href: 'https://www.gnu.org/home.pt-br.html' },
      { text: ' e instalei minha primeira distro(Linux mint) há 4 anos atrás,hoje uso nixOS por motivos pragmáticos relacionados a estabilidade e previsibilidade.' },
      { text: ' eu sou diagnosticado oficialmente com Transtorno do espectro autista com nível de suporte 1, oq influencia minha forma de aprender,organizar informações,visão de mundo e lidar com desafios' },
    ],
  },
  {
    id: 'filosofia',
    title: 'Filosofia',
    icon: 'sparkle',
    body: [
      { text: 'eu tenho muito interesse em filosofia, recentemente eu sigo a filosofia ' },
      { text: 'Taoista', href: 'https://pt.wikipedia.org/wiki/Taoismo' },
      { text: ' na home deste site, há uma frase de lao tsé, o aspecto que mais me levou a acreditar no wu-wei(não ação) foi quando muitas vezes sofremos muito por problemas, invés de se concentrar em resolve-los, assim como na sociedade moderna dependemos de controle de tudo invés de adaptação ao novo e aceitação de novos desafios' },
    ],
  },
  {
    id: 'hobbies',
    title: 'Hobbies',
    icon: 'sparkle',
    body: [
      { text: 'eu tenho muitos hobbies, gosto de ouvir música,recentemente estou gostando da banda ' },
      { text: 'Alcest', href: 'https://www.letras.mus.br/alcest/1022941/traducao.html' },
      { text: ' jogar videogame em maioria jogos indies ou antigos como TES 2 Daggerfall, esporadicamente eu vejo filmes em especial dos gêneros terror e comédia e também me interesso por customizar meu desktop em estilos e temáticas diferentes' },
    ],
  },
  {
    id: 'computacao',
    title: 'Computação',
    icon: 'code',
    body: [
      { text: 'como já dito eu me interesso fortemente por GNU/Linux e mais recentemente, nixOS, atualmente tenho nele alguns arquivos .nix que ditam ao sistema operacional oq instalar e como configurar tudo, eu o organizei de tal forma a ser portátil para uso tanto em meu desktop quanto no meu notebook com suas devidas similaridades e diferenças, a paleta de cores que uso tanto em minha interface gráfica atual quanto neste site é ' },
      { text: 'Catppuccin', href: 'https://catppuccin.com/' },
      { text: ' em especial a tonalidade mocha.' },
    ],
  },
  {
    id: 'metas',
    title: 'Metas',
    icon: 'book',
    body: [
      { text: ' minha maior meta é atingir independência total,tanto financeira quanto em questões de autonomia, assim como todo dia buscar mais conhecimento e obter mais sabedoria para me possibilitar a conquista da minha meta pessoal, a estratégia que uso atualmente é usar todas as oportunidades que me são dadas a meu favor, também treinar cada vez mais minha adaptação a qualquer desafio e problema em meu caminho' },
    ],
  },
]

export const quote: Quote = {
  id: 'quote-educacao',
  text: 'Para ganhar conhecimento, adicione coisas todos os dias. Para ganhar sabedoria, elimine coisas todos os dias.',
  source: 'Laozi',
  href: 'https://www.pensador.com/frase/MTM5NTM/',
}

export const quotes: Record<string, Quote> = {
  sobre: {
    id: 'quote-sobre',
    text: 'Quem conhece os outros é sábio. Quem conhece a si mesmo é iluminado.',
    source: 'Laozi',
    href: 'https://www.pensador.com/frase/NzQ0OA/',
  },
  educacao: {
    id: 'quote-educacao',
    text: 'Para ganhar conhecimento, adicione coisas todos os dias. Para ganhar sabedoria, elimine coisas todos os dias.',
    source: 'Laozi',
    href: 'https://www.pensador.com/frase/MTM5NTM/',
  },
  pets: {
    id: 'quote-pets',
    text: 'O ser da natureza é simples e fácil; os homens, porém, preferem o intricado e o artificial.',
    source: 'Laozi',
    href: 'https://www.pensador.com/frase/NTUyMjAz/',
  },
}

export const aboutText: Segment[] = [
  { text: 'Meu nome é Vitor Hugo Soares da Silva, tenho 19 anos, sou estudante de programação pretendendo trabalhar na área após conclusão dos estudos. Neste site, você encontra diversas informações sobre mim.' },
]

export const pets: Pet[] = [
  {
    id: 'pacoca',
    name: 'Paçoca',
    photo: pacoca,
    body: [
      { text: 'o Paçoca é o meu pet mais novo,é um spitz alemão, ele passa mais tempo pulando que andando e fazendo bagunça com o Odin, ele herdou o título de bagunceiro do Odin' },
    ],
  },
  {
    id: 'odin',
    name: 'Odin',
    photo: odin,
    body: [
      { text: 'o Odin é o do meio,ele é um labrador, passou de um filhote que fazia bagunça sozinho, para um adulto que faz bagunça com o Paçoca, ele adora água e é bem calmo sem influência do Paçoca' },
    ],
  },
  {
    id: 'tedi',
    name: 'Tedi',
    photo: tedi,
    body: [
      { text: 'o Tedi é velho, velho, muito velho, eu acredito que ele já era um velho rabugento desde o começo dos tempos, ele gosta de paz e sossego (o que é inatingível perto do Paçoca e do Odin) porém, quando ele relembra a infância gosta de brincar com o Paçoca.' },
    ],
  },
  {
    id: 'gorda',
    name: 'Gorda (R.I.P)',
    photo: gorda,
    body: [
      { text: 'o que dizer dela..., a Gorda foi meu primeiro animal de estimação, desde que eu me entendo por gente, a gente praticamente cresceu juntos, você faz falta pra mim 🥹.' },
    ],
  },
]

export const education: EducationEntry[] = [
  {
    id: 'senai-ads',
    title: 'Técnico em Desenvolvimento de Sistemas — SENAI',
    period: '2025 — 2026',
    description: [
      { text: 'Desenvolvimento e programação de sistemas computacionais com foco em usabilidade, integridade e segurança da informação.' },
      { text: '1160h • EAD - Polo Joinville (SC)' },
    ],
    tags: ['sistemas', 'senai', 'ead'],
  },
]

export type NavItem = {
  key: string
  label: string
  icon: IconName
  href: string
}

export const navItems: NavItem[] = [
  { key: 'home', label: 'início', icon: 'home', href: '#home' },
  { key: 'sobre', label: 'sobre', icon: 'user', href: '#sobre' },
  { key: 'formacao', label: 'formação', icon: 'book', href: '#formacao' },
  { key: 'projetos', label: 'projetos', icon: 'folder', href: '#projetos' },
  { key: 'pets', label: 'pets', icon: 'heartbeat', href: '#pets' },
  { key: 'contato', label: 'contato', icon: 'mail', href: '#contato' },
]

export const timeline = [
  {
    id: 't1',
    period: '2023',
    title: 'Primeiros passos com Linux',
    description: 'Instalação de distros, configuração básica e descoberta do mundo open source.',
  },
  {
    id: 't2',
    period: '2024',
    title: 'Mergulhando em NixOS',
    description: 'Comecei a aprender Nix, flakes e a buscar um sistema totalmente declarativo.',
  },
  {
    id: 't3',
    period: '2025',
    title: 'Hyprland & ricing',
    description: 'Desenvolvimento do meu ambiente Hyprland com Waybar, animações e tema unificado.',
  },
]

export const terminalCommands = [
  {
    command: 'ajuda',
    description: 'mostra esta lista de comandos',
  },
  {
    command: 'nixos',
    description: 'informações sobre meu setup NixOS',
  },
  {
    command: 'idade',
    description: 'idade atual calculada',
  },
  {
    command: 'pets',
    description: 'lista os meus pets',
  },
  {
    command: 'neofetch',
    description: 'exibe informações do sistema',
  },
  {
    command: 'clear',
    description: 'limpa o terminal',
  },
]

export const weatherLocation = {
  city: 'local',
  name: 'Auto (navegador)',
  latitude: -26.3045,
  longitude: -48.8487,
}

export const profile = {
  fullName: 'Vitor Hugo Soares da Silva',
  user: 'vitor',
  host: 'nixos-box',
  birthDate: '2006-11-15',
  tagline: 'Linux • NixOS • Hyprland • Rust',
  photo: eu,
  intro: 'Estudante de Ciência da Computação focado em Linux, NixOS, Hyprland e sistemas declarativos.',
  stack: ['Linux', 'NixOS', 'Hyprland', 'Rust', 'TypeScript', 'React'],
}

export const birthDate = new Date(`${profile.birthDate}T00:00:00`)
export const birthDateLabel = '15/11/2006'

export const fastfetchRows = [
  { label: 'OS', value: 'NixOS' },
  { label: 'Kernel', value: 'Linux' },
  { label: 'WM', value: 'Hyprland' },
  { label: 'Shell', value: 'zsh' },
  { label: 'Terminal', value: 'kitty' },
]

export const palette = [
  '#f5c2e7',
  '#cba6f7',
  '#89b4fa',
  '#94e2d5',
  '#a6e3a1',
  '#f9e2af',
  '#fab387',
  '#f38ba8',
]


