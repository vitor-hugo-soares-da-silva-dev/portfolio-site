import { useEffect, useState } from 'react'

export type BrowserMonitor = {
  cores: number | null
  memory: number | null
  screenWidth: number
  screenHeight: number
  viewportWidth: number
  viewportHeight: number
  dpr: number
  fps: number
  session: number
}

function readStatic(): Omit<BrowserMonitor, 'fps' | 'session'> {
  const navigatorWithMemory = navigator as Navigator & { deviceMemory?: number }

  return {
    cores: navigator.hardwareConcurrency || null,
    memory: navigatorWithMemory.deviceMemory ?? null,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    dpr: window.devicePixelRatio,
  }
}

export function useBrowserMonitor(): BrowserMonitor {
  const [monitor, setMonitor] = useState<BrowserMonitor>(() => ({
    ...readStatic(),
    fps: 0,
    session: 0,
  }))

  useEffect(() => {
    const startedAt = Date.now()
    let frames = 0
    let lastFrame = performance.now()
    let animationFrame = 0

    const measure = (now: number) => {
      frames++

      if (now - lastFrame >= 1000) {
        const fps = Math.round((frames * 1000) / (now - lastFrame))
        const session = Math.floor((Date.now() - startedAt) / 1000)

        setMonitor((current) => ({ ...current, fps, session }))
        frames = 0
        lastFrame = now
      }

      animationFrame = window.requestAnimationFrame(measure)
    }

    animationFrame = window.requestAnimationFrame(measure)

    const onResize = () => {
      setMonitor((current) => ({ ...current, ...readStatic() }))
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return monitor
}
