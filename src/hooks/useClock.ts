import { useEffect, useState } from 'react'

export type ClockState = {
  time: string
  cpu: number
}

export function useClock(): ClockState {
  const [state, setState] = useState<ClockState>({ time: '--:--:--', cpu: 12 })

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const time = [now.getHours(), now.getMinutes(), now.getSeconds()]
        .map((value) => String(value).padStart(2, '0'))
        .join(':')

      setState((current) => ({
        time,
        cpu: Math.random() > 0.7 ? Math.floor(Math.random() * 14) + 8 : current.cpu,
      }))
    }

    update()
    const interval = window.setInterval(update, 1000)
    return () => window.clearInterval(interval)
  }, [])

  return state
}
