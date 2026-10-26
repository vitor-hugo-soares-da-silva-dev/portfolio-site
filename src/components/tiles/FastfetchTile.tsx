import Tile from '../layout/Tile'
import Icon from '../ui/Icon'
import { birthDateLabel, fastfetchRows, palette, profile } from '../../data/site'
import type { Age } from '../../hooks/useAge'

type FastfetchTileProps = {
  age: Age
}

export default function FastfetchTile({ age }: FastfetchTileProps) {
  return (
    <Tile icon="snowflake" status="nix-shell" statusClassName="text-[0.7rem] text-ctp-mauve" title="fastfetch --dev-info">
      <div className="grid grid-cols-[56px_1fr] items-center gap-3 sm:grid-cols-[80px_1fr] sm:gap-4">
        <img
          alt={`Foto de ${profile.fullName}`}
          className="size-14 rounded-2xl border-2 border-ctp-pink object-cover glow-soft sm:size-20"
          src={profile.photo}
        />

        <div className="flex min-w-0 flex-col">
          <div className="truncate text-[0.85rem] font-bold sm:text-[0.95rem]">
            <span className="text-ctp-pink">{profile.user}</span>
            <span className="text-ctp-subtext0">@</span>
            <span className="text-ctp-blue">{profile.host}</span>
          </div>
          <div className="my-1 overflow-hidden tracking-[-1px] text-ctp-surface2">----------------------------</div>
          <div className="text-[0.7rem] text-ctp-subtext0 sm:text-[0.72rem]">{profile.tagline}</div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        {fastfetchRows.map((row: any) => (
          <div className="flex items-baseline gap-2 text-[0.75rem] leading-snug sm:text-[0.8rem]" key={row.label || row.key}>
            <span className="flex w-20 shrink-0 items-center gap-1.5 font-semibold text-ctp-pink sm:w-[110px]">
              <Icon name={row.icon || 'terminal'} size={13} />
              {(row.label || row.key)}:
            </span>
            <span className="min-w-0 break-words text-ctp-text">{row.value || row.key}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-lg border border-[rgb(245_194_231/0.25)] bg-ctp-crust p-2.5">
        <div className="mb-1 text-[0.7rem] text-ctp-subtext0">
          <Icon className="mr-1 inline-block align-[-2px] text-ctp-pink" name="timer" size={12} />
          <strong>Uptime (Idade desde {birthDateLabel}):</strong>
        </div>

        <div className="text-[0.88rem] font-bold text-ctp-pink">
          {age.years}y {age.days}d {age.time}
          <span className="ml-1 rounded bg-ctp-pink px-1.5 py-px text-[0.72rem] font-extrabold text-ctp-crust">
            {age.ms}ms
          </span>
        </div>

        <div className="mt-1 text-[0.68rem] text-ctp-overlay0">
          tempo contínuo: {age.decimal} anos
        </div>
      </div>

      <div className="mt-3 flex gap-1.5">
        {palette.map((color) => (
          <span className="h-3 min-w-0 flex-1 rounded-[3px]" key={color} style={{ background: color }} />
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {(profile.stack || []).map((tech: string) => (
          <span
            className="rounded-md border border-ctp-surface1 bg-ctp-surface0 px-2 py-0.5 text-[0.72rem] text-ctp-text"
            key={tech}
          >
            {tech}
          </span>
        ))}
      </div>
    </Tile>
  )
}
