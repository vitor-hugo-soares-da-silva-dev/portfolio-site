import { useEffect, useState } from 'react'
import Icon from './ui/Icon'
import { profile } from '../data/site'

type BootScreenProps = {
  onBoot: () => void
}

export default function BootScreen({ onBoot }: BootScreenProps) {
  const [isBooting, setIsBooting] = useState(false)
  const [time, setTime] = useState('')
  const [dateStr, setDateStr] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      )
      setDateStr(
        now.toLocaleDateString('pt-BR', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
        }),
      )
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleLaunch = () => {
    if (isBooting) return
    setIsBooting(true)

    setTimeout(() => {
      onBoot()
    }, 450)
  }

  return (
    <div
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-between overflow-y-auto bg-ctp-crust p-4 sm:p-8 font-nerd-mono select-none transition-all duration-500 ease-out ${
        isBooting ? 'opacity-0 scale-[1.02] blur-sm' : 'opacity-100 scale-100'
      }`}
    >
      {/* Topo: Barra do sistema (mais legível) */}
      <header className="flex w-full max-w-4xl items-center justify-between border-b border-ctp-surface0/60 pb-3 sm:pb-4 text-xs sm:text-sm text-ctp-overlay0">
        <div className="flex items-center gap-2">
          <Icon className="text-ctp-mauve" name="snowflake" size={16} />
          <span className="text-ctp-subtext0 font-medium">nixos</span>
          <span className="text-ctp-surface1">/</span>
          <span className="text-ctp-overlay1">hyprland</span>
        </div>

        <div className="flex items-center gap-3 text-xs sm:text-sm">
          <span className="flex items-center gap-1.5">
            <span className="size-2 animate-pulse rounded-full bg-ctp-green" />
            systemd: active
          </span>
          <span className="text-ctp-surface1 hidden sm:inline">·</span>
          <span className="hidden sm:inline">pipewire-pulse</span>
        </div>
      </header>

      {/* Centro: Relógio Grande + Card de Sessão */}
      <main className="my-auto flex w-full max-w-md flex-col items-center gap-8 py-6 sm:gap-10 sm:py-8">
        {/* Relógio do Hyprlock em destaque */}
        <div className="flex flex-col items-center text-center">
          <div className="text-7xl font-extrabold tracking-tight text-ctp-text sm:text-8xl md:text-9xl font-sans drop-shadow-sm">
            {time || '12:00'}
          </div>
          <div className="mt-2 text-sm sm:text-base tracking-widest text-ctp-subtext0 capitalize">
            {dateStr || 'carregando...'}
          </div>
        </div>

        {/* Card do Usuário (tamanho confortável para toque no celular) */}
        <div className="flex w-full flex-col items-center gap-5 sm:gap-6 rounded-2xl border border-ctp-surface0 bg-ctp-base/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          {/* Usuário e Host */}
          <div className="flex items-center gap-4 w-full justify-start sm:justify-center">
            <div className="flex size-14 sm:size-16 shrink-0 items-center justify-center rounded-2xl border border-ctp-mauve/40 bg-ctp-mantle text-ctp-mauve shadow-inner">
              <Icon name="snowflake" size={30} />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-ctp-text">
                {profile.user}
                <span className="text-ctp-mauve">@{profile.host}</span>
              </span>
              <span className="text-xs sm:text-sm text-ctp-overlay1">
                sessão wayland pronta
              </span>
            </div>
          </div>

          {/* Botão de Boot com altura de toque ergonômica */}
          <button
            className={`group flex w-full items-center justify-between rounded-xl border px-5 py-3.5 sm:py-4 text-sm sm:text-base transition-all duration-200 focus:outline-none ${
              isBooting
                ? 'border-ctp-green bg-ctp-green/15 text-ctp-green'
                : 'border-ctp-surface1 bg-ctp-mantle text-ctp-text hover:border-ctp-mauve hover:bg-ctp-surface0/70 active:scale-[0.98] shadow-sm'
            }`}
            onClick={handleLaunch}
            type="button"
          >
            <div className="flex items-center gap-3">
              <span className={`text-base sm:text-lg ${isBooting ? 'text-ctp-green' : 'text-ctp-mauve'}`}>
                {isBooting ? '✓' : '❯'}
              </span>
              <span className="font-semibold tracking-wide">
                {isBooting ? 'starting session...' : 'exec Hyprland'}
              </span>
            </div>

            <span className="rounded-md border border-ctp-surface1/70 bg-ctp-crust px-2 py-1 text-xs text-ctp-overlay0 group-hover:border-ctp-mauve/40 group-hover:text-ctp-mauve font-sans font-medium">
              {isBooting ? 'load' : '↵ enter'}
            </span>
          </button>

          {/* Colorblocks Catppuccin maiores */}
          <div className="flex items-center gap-2 pt-1">
            <span className="size-3 sm:size-3.5 rounded-full bg-ctp-red" />
            <span className="size-3 sm:size-3.5 rounded-full bg-ctp-peach" />
            <span className="size-3 sm:size-3.5 rounded-full bg-ctp-yellow" />
            <span className="size-3 sm:size-3.5 rounded-full bg-ctp-green" />
            <span className="size-3 sm:size-3.5 rounded-full bg-ctp-sapphire" />
            <span className="size-3 sm:size-3.5 rounded-full bg-ctp-blue" />
            <span className="size-3 sm:size-3.5 rounded-full bg-ctp-mauve" />
          </div>
        </div>
      </main>

      {/* Rodapé legível */}
      <footer className="pt-4 text-center text-xs sm:text-sm text-ctp-overlay0">
        clique em <span className="text-ctp-subtext0 font-medium">exec Hyprland</span> para inicializar o áudio e a interface
      </footer>
    </div>
  )
}
