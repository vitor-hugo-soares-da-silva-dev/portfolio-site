import { useRef } from 'react'
import Tile from '../layout/Tile'
import { useCava } from '../../hooks/useCava'

const BARS = 22

type CavaTileProps = {
  isPlaying: boolean
}

export default function CavaTile({ isPlaying }: CavaTileProps) {
  const barsRef = useRef<(HTMLDivElement | null)[]>([])

  useCava(barsRef, isPlaying)

  return (
    <Tile
      icon="waveform"
      status="● ONLINE"
      statusClassName="text-[0.7rem] text-ctp-pink"
      title="cava // alsa_output.pci"
    >
      <div className="flex h-24 flex-col items-center justify-end rounded-lg bg-ctp-mantle p-2.5 sm:h-[110px]">
        <div className="flex h-16 w-full items-end justify-between gap-0.5 sm:h-20 sm:gap-1">
          {Array.from({ length: BARS }, (_, index) => (
            <div
              className="cava-bar"
              key={index}
              ref={(element) => {
                barsRef.current[index] = element
              }}
            />
          ))}
        </div>

        <div className="mt-1.5 flex w-full justify-between gap-2 text-[0.6rem] text-ctp-overlay0 sm:text-[0.68rem]">
          <span className="truncate">source: pipewire</span>
          <span
            className={`shrink-0 ${isPlaying ? 'text-ctp-pink' : 'text-ctp-red'}`}
          >
            {isPlaying ? 'syncing with synth_tux' : 'PAUSED'}
          </span>
        </div>
      </div>
    </Tile>
  )
}
