import { useEffect } from 'react'
import type { RefObject } from 'react'

const GLYPHS = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ0123456789:・."=*+-<>¦|'
const FONT_SIZE = 13
const TICK_MS = 45

export function useMatrix(canvasRef: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    if (!canvas || !ctx) return

    let columns = 0
    let drops: number[] = []

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.max(Math.floor(rect.width || canvas.offsetWidth || 300), 50)
      canvas.height = Math.max(Math.floor(rect.height || canvas.offsetHeight || 180), 50)

      columns = Math.max(1, Math.floor(canvas.width / FONT_SIZE))
      drops = Array.from({ length: columns }, () => 1)
    }

    const render = () => {
      ctx.fillStyle = 'rgba(17, 17, 27, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${FONT_SIZE}px "3270 Nerd Font Mono", monospace`

      for (let index = 0; index < drops.length; index++) {
        const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        const roll = Math.random()

        ctx.fillStyle = roll > 0.85 ? '#ffffff' : roll > 0.5 ? '#f5c2e7' : '#cba6f7'
        ctx.fillText(glyph, index * FONT_SIZE, drops[index] * FONT_SIZE)

        if (drops[index] * FONT_SIZE > canvas.height && Math.random() > 0.975) {
          drops[index] = 0
        }

        drops[index]++
      }
    }

    resize()

    const onResize = () => resize()
    window.addEventListener('resize', onResize)

    const observer =
      typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(() => resize())

    if (observer && canvas.parentElement) {
      observer.observe(canvas.parentElement)
    }

    const interval = window.setInterval(render, TICK_MS)

    return () => {
      window.clearInterval(interval)
      window.removeEventListener('resize', onResize)
      observer?.disconnect()
    }
  }, [canvasRef])
}
