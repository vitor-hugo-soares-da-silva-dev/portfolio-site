import type { ReactNode } from 'react'
import Icon from '../ui/Icon'
import type { IconName } from '../ui/Icon'

type TileProps = {
  title: string
  icon: IconName
  status?: string
  statusClassName?: string
  active?: boolean
  onFocus?: () => void
  className?: string
  bodyClassName?: string
  children: ReactNode
}

export default function Tile({
  title,
  icon,
  status,
  statusClassName = 'text-ctp-overlay0',
  active = false,
  onFocus,
  className = '',
  bodyClassName = '',
  children,
}: TileProps) {
  return (
    <section
      className={`flex flex-col overflow-hidden rounded-xl border-2 border-ctp-surface0 bg-ctp-base shadow-[0_8px_24px_rgb(0_0_0/0.4)] transition-colors duration-200 hover:border-ctp-pink ${
        active ? 'border-ctp-pink glow-pink' : ''
      } ${className}`}
      data-active={active}
      onClick={onFocus}
    >
      <header className="flex min-h-9 shrink-0 items-center justify-between gap-2 border-b border-ctp-surface0 bg-ctp-mantle px-3 select-none">
        <div className="flex min-w-0 items-center gap-3">
          <div className="hidden shrink-0 items-center gap-1.5 sm:flex">
            <span className="size-2.5 rounded-full bg-ctp-red" />
            <span className="size-2.5 rounded-full bg-ctp-yellow" />
            <span className="size-2.5 rounded-full bg-ctp-green" />
          </div>

          <div className="flex min-w-0 items-center gap-1.5 text-xs text-ctp-subtext0">
            <Icon className="shrink-0 text-ctp-pink" name={icon} size={14} />
            <span className="truncate">{title}</span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {status ? <span className={`hidden text-xs sm:inline ${statusClassName}`}>{status}</span> : null}
        </div>
      </header>

      <div className={`min-w-0 flex-1 overflow-y-auto p-3 sm:p-5 ${bodyClassName}`}>{children}</div>
    </section>
  )
}
