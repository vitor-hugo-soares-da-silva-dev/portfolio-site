import Icon from './ui/Icon'
import { profile } from '../data/site'

type BootScreenProps = {
  onBoot: () => void
}

export default function BootScreen({ onBoot }: BootScreenProps) {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-between bg-ctp-crust p-6 select-none font-nerd-mono">
      {/* Topo: Bar com informações de hardware/sistema (estilo waybar mínima) */}
      <header className="flex w-full max-w-4xl items-center justify-between text-[0.72rem] text-ctp-overlay0 border-b border-ctp-surface0/40 pb-3">
        <div className="flex items-center gap-2">
          <Icon className="text-ctp-mauve" name="snowflake" size={14} />
          <span className="text-ctp-subtext0">nixos-unstable</span>
          <span className="text-ctp-surface1">/</span>
          <span className="text-ctp-overlay1">hyprland 0.45</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-ctp-green" />
            pipewire.service
          </span>
          <span className="text-ctp-surface1">·</span>
          <span>x86_64</span>
        </div>
      </header>

      {/* Centro: Card estilo Login Screen / Hyprlock */}
      <main className="relative flex w-full max-w-sm flex-col items-center gap-6 rounded-2xl border border-ctp-surface0 bg-ctp-base/80 p-6 shadow-2xl backdrop-blur-md">
        {/* Avatar / Host Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="relative flex size-20 items-center justify-center rounded-full border border-ctp-mauve/40 bg-ctp-mantle text-ctp-mauve shadow-inner">
            <Icon name="snowflake" size={38} />
            <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-ctp-base bg-ctp-green" />
          </div>

          <div className="mt-1 flex items-center gap-1.5 text-xs text-ctp-subtext0">
            <span className="text-ctp-mauve font-semibold">{profile.user}</span>
            <span className="text-ctp-overlay0">@</span>
            <span className="text-ctp-blue">{profile.host}</span>
          </div>

          <div className="text-[0.7rem] text-ctp-overlay0">
            Sessão pronta · áudio aguardando autorização
          </div>
        </div>

        {/* Botão de Launch estilo Prompt / Comando */}
        <button
          className="group relative flex w-full items-center justify-between rounded-lg border border-ctp-surface1 bg-ctp-mantle px-4 py-3 text-xs text-ctp-text transition-all duration-150 hover:border-ctp-mauve hover:bg-ctp-surface0/60 focus:outline-none focus:ring-1 focus:ring-ctp-mauve active:scale-[0.99]"
          onClick={onBoot}
          type="button"
        >
          <div className="flex items-center gap-2 text-ctp-subtext0 group-hover:text-ctp-mauve">
            <span className="text-ctp-mauve">❯</span>
            <span className="font-semibold text-ctp-text">exec Hyprland</span>
          </div>

          <span className="rounded border border-ctp-surface1 bg-ctp-crust px-1.5 py-0.5 text-[0.65rem] text-ctp-overlay1 group-hover:border-ctp-mauve/40 group-hover:text-ctp-mauve">
            boot ↵
          </span>
        </button>

        {/* Color Palette Catppuccin Clássica (estilo Fastfetch) */}
        <div className="flex items-center gap-1.5 pt-1">
          <span className="size-2.5 rounded-full bg-ctp-red" />
          <span className="size-2.5 rounded-full bg-ctp-peach" />
          <span className="size-2.5 rounded-full bg-ctp-yellow" />
          <span className="size-2.5 rounded-full bg-ctp-green" />
          <span className="size-2.5 rounded-full bg-ctp-sapphire" />
          <span className="size-2.5 rounded-full bg-ctp-blue" />
          <span className="size-2.5 rounded-full bg-ctp-mauve" />
          <span className="size-2.5 rounded-full bg-ctp-pink" />
        </div>
      </main>

      {/* Rodapé sutil com dica de ambiente */}
      <footer className="text-[0.68rem] text-ctp-overlay0">
        pressione <kbd className="rounded border border-ctp-surface1 bg-ctp-surface0/40 px-1 py-0.5 text-ctp-subtext0">boot</kbd> para inicializar drivers de áudio e a interface
      </footer>
    </div>
  )
}
