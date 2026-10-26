import { useEffect, useState } from 'react'

export type Age = {
  years: number
  days: number
  time: string
  ms: string
  decimal: string
}

const MS_PER_YEAR = 365.2425 * 24 * 60 * 60 * 1000

const pad = (value: number, size = 2) => String(value).padStart(size, '0')

function calculate(birthDate: Date): Age {
  const diff = Date.now() - birthDate.getTime()

  if (diff < 0) {
    return { years: 0, days: 0, time: '00:00:00', ms: '000', decimal: '0.00000000' }
  }

  const totalSeconds = Math.floor(diff / 1000)
  const totalMinutes = Math.floor(totalSeconds / 60)
  const totalHours = Math.floor(totalMinutes / 60)
  const totalDays = Math.floor(totalHours / 24)

  return {
    years: Math.floor(totalDays / 365.2425),
    days: Math.floor(totalDays % 365.2425),
    time: `${pad(totalHours % 24)}:${pad(totalMinutes % 60)}:${pad(totalSeconds % 60)}`,
    ms: pad(diff % 1000, 3),
    decimal: (diff / MS_PER_YEAR).toFixed(8),
  }
}

export function useAge(birthDate: Date): Age {
  const [age, setAge] = useState<Age>(() => calculate(birthDate))

  useEffect(() => {
    const interval = window.setInterval(() => setAge(calculate(birthDate)), 100)
    return () => window.clearInterval(interval)
  }, [birthDate])

  return age
}
