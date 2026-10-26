import Tile from '../layout/Tile'
import Icon from '../ui/Icon'
import type { IconName } from '../ui/Icon'
import { useBrowserMonitor } from '../../hooks/useBrowserMonitor'

function formatSession(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  if (hours > 0) {
    return `${hours}h ${String(minutes).padStart(2, '0')}m`
  }

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export default function BrowserMonitorTile() {
  const monitor = useBrowserMonitor()

  const rows: { icon: IconName; label: string; value: string }[] = [
    { icon: 'cpu', label: 'núcleos', value: monitor.cores ? `${monitor.cores} threads` : 'n/d' },
    { icon: 'package', label: 'memória', value: monitor.memory ? `${monitor.memory} GB` : 'n/d' },
    { icon: 'monitor', label: 'viewport', value: `${monitor.viewportWidth}×${monitor.viewportHeight}` },
    { icon: 'monitor', label: 'tela', value: `${monitor.screenWidth}×${monitor.screenHeight}` },
    { icon: 'sparkle', label: 'DPR', value: monitor.dpr.toFixed(2) },
    { icon: 'clock', label: 'sessão', value: formatSession(monitor.session) },
  ]

  const fpsWidth = `${Math.min(100, Math.max(0, (monitor.fps / 60) * 100))}%`

  return (
    <Tile
      icon="monitor"
      status="live"
      statusClassName="text-[0.7rem] text-ctp-green"
      title="browser-monitor"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-bold text-ctp-pink">{monitor.fps || '—'}</span>
          <span className="text-[0.72rem] text-ctp-subtext0">fps</span>
        </div>

        <span className="text-[0.68rem] text-ctp-overlay0">render em tempo real</span>
      </div>

      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-ctp-surface0">
        <div
          className="h-full rounded-full bg-gradient-to-r from-ctp-mauve to-ctp-pink transition-[width] duration-500"
          style={{ width: fpsWidth }}
        />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5">
        {rows.map((row) => (
          <div className="flex min-w-0 items-center gap-1.5 text-[0.7rem]" key={row.label}>
            <Icon className="shrink-0 text-ctp-pink" name={row.icon} size={12} />
            <span className="shrink-0 text-ctp-overlay0">{row.label}</span>
            <span className="ml-auto truncate text-ctp-subtext1">{row.value}</span>
          </div>
        ))}
      </div>

      <p className="mt-2 text-[0.64rem] text-ctp-overlay0">
        dados lidos localmente do seu navegador
      </p>
    </Tile>
  )
}
