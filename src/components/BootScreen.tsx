import Icon from './ui/Icon'
import { profile } from '../data/site'

type BootScreenProps = {
  onBoot: () => void
}

export default function BootScreen({ onBoot }: BootScreenProps) {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden bg-ctp-crust px-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgb(203_166_247/0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(245_194_231/0.03)_1px,transparent_1px)] bg-[size:100%_3px] opacity-60" />

      <div className="relative flex w-full max-w-md flex-col items-center gap-7">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex size-16 items-center justify-center rounded-2xl border border-ctp-surface0 bg-ctp-base shadow-[0_0_30px_rgb(203_166_247/0.15)]">
            <Icon className="text-ctp-mauve" name="snowflake" size={34} />
          </div>
          <div className="font-nerd-mono text-[0.7rem] uppercase tracking-[0.28em] text-ctp-overlay0">
            nixos · hyprland
          </div>
          <h1 className="font-nerd-mono text-xl font-bold text-ctp-text sm:text-2xl">
            {profile.user}@{profile.host}
          </h1>
          <p className="max-w-xs font-nerd-mono text-[0.78rem] leading-relaxed text-ctp-subtext0">
            sistema pronto. aperte boot para iniciar a sessão e a música.
          </p>
        </div>

        <button
          className="group flex w-full items-center justify-center gap-3 rounded-xl border border-ctp-mauve/40 bg-ctp-mauve/10 px-8 py-4 font-nerd-mono text-lg font-bold uppercase tracking-[0.2em] text-ctp-mauve transition-all duration-200 hover:-translate-y-0.5 hover:border-ctp-pink hover:bg-ctp-pink/15 hover:text-ctp-pink hover:shadow-[0_0_30px_rgb(245_194_231/0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ctp-pink"
          onClick={onBoot}
          type="button"
        >
          <Icon name="play" size={20} />
          boot
        </button>

        <div className="flex items-center gap-2 font-nerd-mono text-[0.68rem] text-ctp-overlay0">
          <span className="size-1.5 animate-pulse rounded-full bg-ctp-green" />
          música em loop · clique para começar
        </div>
      </div>

      <div className="absolute bottom-6 font-nerd-mono text-[0.65rem] text-ctp-overlay0">
        pressione boot para liberar o áudio
      </div>
    </div>
  )
}
