export type IconName =
  | 'arrowUpRight'
  | 'book'
  | 'clock'
  | 'cloud'
  | 'cloudRain'
  | 'code'
  | 'cpu'
  | 'folder'
  | 'github'
  | 'heartbeat'
  | 'home'
  | 'linux'
  | 'mail'
  | 'matrix'
  | 'monitor'
  | 'package'
  | 'pause'
  | 'paw'
  | 'play'
  | 'refresh'
  | 'snowflake'
  | 'sparkle'
  | 'sun'
  | 'terminal'
  | 'timer'
  | 'tree'
  | 'user'
  | 'vinyl'
  | 'waveform'

const paths: Record<IconName, string[]> = {
  arrowUpRight: ['M7 17 17 7', 'M9 7h8v8'],
  book: ['M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z', 'M19 19v2H6'],
  clock: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z', 'M12 7v5l3 2'],
  cloud: ['M7 18h10a4 4 0 0 0 .6-7.96A5.5 5.5 0 0 0 6.8 9.5 4.25 4.25 0 0 0 7 18Z'],
  cloudRain: [
    'M7 15h10a4 4 0 0 0 .6-7.96A5.5 5.5 0 0 0 6.8 6.5 4.25 4.25 0 0 0 7 15Z',
    'M8 18l-1 3',
    'M12 18l-1 3',
    'M16 18l-1 3',
  ],
  code: ['M9 7 4 12l5 5', 'M15 7l5 5-5 5'],
  cpu: [
    'M6 6h12v12H6z',
    'M4 4h16v16H4z',
    'M9 1v3',
    'M15 1v3',
    'M9 20v3',
    'M15 20v3',
    'M1 9h3',
    'M1 15h3',
    'M20 9h3',
    'M20 15h3',
  ],
  folder: ['M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z'],
  github: [
    'M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.5 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z',
  ],
  heartbeat: ['M2 12h4l2-5 4 10 2-5h8'],
  home: ['m3 11 9-8 9 8', 'M5 10v10h14V10', 'M10 20v-6h4v6'],
  linux: [
    'M12 3c2.5 0 4 2 4 5 0 2 1 3 1.5 5 .4 1.6-.2 3-1 3.6-.6.4-1.2.2-1.6-.3-.4-.4-1-.6-2.9-.6s-2.5.2-2.9.6c-.4.5-1 .7-1.6.3-.8-.6-1.4-2-1-3.6C6 11 7 10 7 8c0-3 1.5-5 4-5Z',
    'M9 8h.01',
    'M15 8h.01',
  ],
  mail: ['M3 5h18v14H3z', 'm3.5 7 8.5 6 8.5-6'],
  matrix: ['M4 4h16v16H4z', 'm7 9 3 3-3 3', 'M13 15h4'],
  monitor: ['M3 5h18v11H3z', 'M8 20h8', 'M12 16v4'],
  package: ['m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z', 'm4 7.5 8 4.5 8-4.5', 'M12 12v9'],
  pause: ['M8 5h3v14H8z', 'M13 5h3v14h-3z'],
  paw: ['M12 16a5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5Z', 'M6.5 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', 'M17.5 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', 'M10 8.3a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z', 'M14 8.3a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z'],
  play: ['M8 5l11 7-11 7V5Z'],
  refresh: ['M20 12a8 8 0 1 1-2.34-5.66', 'M20 4v6h-6'],
  snowflake: [
    'M12 2v20',
    'M3.3 7l17.4 10',
    'M20.7 7 3.3 17',
    'm9.5 4 2.5 2 2.5-2',
    'm9.5 20 2.5-2 2.5 2',
    'm4.4 11.4 3.3.4-.9-3.2',
    'm16.2 16 3.3.4-.9-3.2',
  ],
  sparkle: ['M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z', 'M18 15l.9 2.1 2.1.9-2.1.9L18 21l-.9-2.1-2.1-.9 2.1-.9L18 15Z'],
  sun: ['M12 4V2', 'M12 22v-2', 'M4 12H2', 'M22 12h-2', 'm6.3 6.3-1.4-1.4', 'm19.1 19.1-1.4-1.4', 'm17.7 6.3 1.4-1.4', 'M4.9 19.1l1.4-1.4', 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z'],
  terminal: ['M4 4h16v16H4z', 'm7 9 3 3-3 3', 'M13 15h4'],
  timer: ['M12 5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z', 'M12 9v4l2.5 1.5', 'M9 2h6', 'M12 2v3'],
  tree: ['M12 3 8 9h3l-4 6h10l-4-6h3l-4-6Z', 'M12 15v6', 'M9 21h6'],
  user: ['M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z', 'M4 21c0-4 3.6-6 8-6s8 2 8 6'],
  vinyl: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z', 'M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z', 'M12 11.2a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Z'],
  waveform: ['M4 10v4', 'M8 7v10', 'M12 4v16', 'M16 8v8', 'M20 11v2'],
}

const filled: Partial<Record<IconName, true>> = {
  github: true,
  paw: true,
  play: true,
  pause: true,
}

type IconProps = {
  name: IconName
  className?: string
  size?: number
}

function Icon({ name, className = '', size = 16 }: IconProps) {
  const isFilled = filled[name] === true

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill={isFilled ? 'currentColor' : 'none'}
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths[name].map((d) => (
        <path
          d={d}
          key={d}
          stroke={isFilled ? 'none' : 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
        />
      ))}
    </svg>
  )
}

export default Icon
