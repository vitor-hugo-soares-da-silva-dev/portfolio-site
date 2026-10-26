import { useRef } from 'react'
import Tile from '../layout/Tile'
import { useMatrix } from '../../hooks/useMatrix'

export default function MatrixTile() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useMatrix(canvasRef)

  return (
    <Tile
      bodyClassName="p-0"
      icon="matrix"
      status="tty2"
      statusClassName="text-[0.7rem] text-ctp-overlay0"
      title="cmatrix -C pink"
    >
      <div className="h-40 bg-ctp-crust sm:h-[220px]">
        <canvas className="block size-full" ref={canvasRef} />
      </div>
    </Tile>
  )
}
