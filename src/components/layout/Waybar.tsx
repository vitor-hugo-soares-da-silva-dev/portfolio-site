import Icon from '../ui/Icon'
import { birthDateLabel, profile, track } from '../../data/site'
import { windows } from './windows'
import type { WindowKey } from './windows'
import type { Age } from '../../hooks/useAge'
import type { ClockState } from '../../hooks/useClock'

import { useAudio } from '../../context/AudioContext'

type WaybarProps = {
  active: WindowKey
  onSelect: (key: WindowKey) => void
  isPlaying: boolean
  onTogglePlay: () => void
  age: Age
  clock: ClockState
}

function format(sec: number) {
  if (!Number.isFinite(sec)) return '00:00'
  const s = Math.max(0, Math.floor(sec))
  const m = Math.floor(s / 60)
  const r = s % 60
  return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`
}

export default function Waybar({
  active,
  onSelect,
  isPlaying,
  onTogglePlay,
  age,
  clock,
}: WaybarProps) {
  const { currentTime, duration } = useAudio()
  const activeWindow = windows.find((window) => window.key === active) ?? windows[0]

  return (
    <header className="sticky top-1 z-[100] mb-3 px-2 sm:top-2.5 sm:mb-4 sm:px-5">
      {/* Removido o flex-wrap para travar em linha única */}
      <div className="flex items-center justify-between gap-1.5 rounded-[14px] border border-ctp-surface0 bg-[rgb(24_24_37/0.92)] px-2 py-1.5 text-[0.85rem] shadow-[0_6px_20px_rgb(0_0_0/0.45)] backdrop-blur-[14px] sm:gap-3 sm:px-3.5">
        
        {/* ESQUERDA: Workspaces (não encolhe e não expande aleatoriamente) */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <div className="flex shrink-0 items-center gap-0.5 rounded-lg border border-ctp-surface0 bg-ctp-crust p-[2px] sm:gap-1 sm:p-[3px_5px]">
            {windows.map((window, index) => (
              <button
                aria-label={`Janela ${window.label}`}
                className={`flex size-6 items-center justify-center rounded-md text-[0.75rem] transition-all duration-200 sm:text-[0.85rem] ${
                  window.key === active
                    ? 'bg-ctp-mauve !text-ctp-crust'
                    : 'text-ctp-overlay0 hover:bg-ctp-surface0 hover:text-ctp-text'
                }`}
                key={window.key}
                onClick={() => onSelect(window.key)}
                title={window.label}
                type="button"
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* User/Host escondido no mobile */}
          <div className="hidden min-w-0 max-w-[190px] items-center gap-1.5 text-[0.8rem] text-ctp-subtext0 lg:flex">
            <Icon className="shrink-0 text-ctp-pink" name="snowflake" size={14} />
            <span className="truncate">
              {profile.user}@{profile.host}:{activeWindow.title}
            </span>
          </div>
        </div>

        {/* CENTRO: Player de áudio (flex-1 para preencher o miolo com segurança e truncar texto) */}
        <button
          className="flex min-w-0 max-w-[150px] flex-1 items-center gap-1.5 rounded-3xl border border-[rgb(245_194_231/0.25)] bg-ctp-surface0 px-2 py-1 text-ctp-text transition-[border-color,box-shadow] duration-200 hover:border-ctp-pink hover:glow-soft xs:max-w-[200px] sm:max-w-none sm:flex-none sm:gap-2.5 sm:px-3.5"
          onClick={onTogglePlay}
          title="Clique para pausar/tocar"
          type="button"
        >
          <span className="flex size-[20px] shrink-0 items-center justify-center rounded-full bg-ctp-pink text-ctp-crust transition-transform duration-150 hover:scale-110 sm:size-[22px]">
            <Icon name={isPlaying ? 'pause' : 'play'} size={12} />
          </span>

          <span className="flex min-w-0 items-center gap-1.5 sm:gap-2">
            <Icon className="hidden shrink-0 animate-spin-slow text-ctp-pink xs:inline sm:inline" name="vinyl" size={15} />
            <span className="truncate font-semibold text-[0.72rem] text-ctp-pink sm:text-[0.82rem]">
              {track.title}
            </span>
            <span className="hidden shrink-0 text-[0.75rem] text-ctp-overlay0 md:inline">
              {format(currentTime)} / {format(duration)}
            </span>
          </span>
        </button>

        {/* DIREITA: Widgets (prioriza Relógio no mobile, mostra CPU e Age em telas maiores) */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          {/* Idade: escondido em telas pequenas (é muito largo: "Xy Xd XX:XX:XX") */}
          <div
            className="hidden items-center gap-1.5 rounded-lg border border-[rgb(245_194_231/0.25)] bg-ctp-surface0 px-2 py-1 text-[0.72rem] md:flex sm:px-2.5 sm:text-[0.78rem]"
            title={`Tempo de vida desde ${birthDateLabel}`}
          >
            <Icon className="shrink-0 text-ctp-pink" name="heartbeat" size={14} />
            <span className="whitespace-nowrap text-ctp-subtext1">
              {age.years}y {age.days}d {age.time}
            </span>
            <span className="hidden min-w-[28px] text-[0.72rem] text-ctp-pink lg:inline">
              .{age.ms}
            </span>
          </div>

          {/* CPU: visível a partir de sm (tablets/telas médias) */}
          <div className="hidden items-center gap-1.5 rounded-lg bg-ctp-surface0 px-2 py-1 text-[0.72rem] text-ctp-subtext1 sm:flex sm:px-2.5 sm:text-[0.78rem]">
            <Icon className="shrink-0 text-ctp-pink" name="cpu" size={14} />
            <span>{clock.cpu}%</span>
          </div>

          {/* Relógio: sempre visível */}
          <div className="flex items-center gap-1 rounded-lg bg-ctp-surface0 px-1.5 py-1 text-[0.72rem] text-ctp-subtext1 sm:gap-1.5 sm:px-2.5 sm:text-[0.78rem]">
            <Icon className="shrink-0 text-ctp-pink" name="clock" size={13} />
            <span className="font-mono">{clock.time}</span>
          </div>
        </div>

      </div>
    </header>
  )
}
