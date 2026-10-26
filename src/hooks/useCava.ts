import { useEffect } from 'react'
import type { RefObject } from 'react'

export function useCava(
  barsRef: RefObject<(HTMLDivElement | null)[]>,
  isPlaying: boolean,
) {
  useEffect(() => {
    let frame = 0

    const render = () => {
      const time = Date.now() * 0.005

      barsRef.current.forEach((bar, index) => {
        if (!bar) return

        if (!isPlaying) {
          bar.style.height = '6%'
          return
        }

        const wave = Math.sin(time + index * 0.4) * 0.35 + 0.5
        const noise = Math.random() * 0.4
        const height = Math.min(100, Math.max(8, (wave + noise) * 100))

        bar.style.height = `${height}%`
      })

      frame = window.requestAnimationFrame(render)
    }

    frame = window.requestAnimationFrame(render)

    return () => window.cancelAnimationFrame(frame)
  }, [barsRef, isPlaying])
}
