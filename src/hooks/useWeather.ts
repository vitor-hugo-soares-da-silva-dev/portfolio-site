import { useEffect, useState } from 'react'

export type WeatherLocation = {
  city: string
  latitude: number
  longitude: number
}

export type WeatherData = {
  temperature: number
  apparent: number
  humidity: number
  wind: number
  code: number
  isDay: boolean
  time: string
}

export type WeatherState =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'ready'; data: WeatherData }

type OpenMeteoResponse = {
  current?: {
    temperature_2m: number
    apparent_temperature: number
    relative_humidity_2m: number
    wind_speed_10m: number
    weather_code: number
    is_day: number
    time: string
  }
}

export function useWeather(location: WeatherLocation): WeatherState {
  const [state, setState] = useState<WeatherState>({ status: 'loading' })

  useEffect(() => {
    const controller = new AbortController()
    let mounted = true

    const url = new URL('https://api.open-meteo.com/v1/forecast')
    url.searchParams.set('latitude', String(location.latitude))
    url.searchParams.set('longitude', String(location.longitude))
    url.searchParams.set(
      'current',
      'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day',
    )
    url.searchParams.set('timezone', 'auto')
    url.searchParams.set('wind_speed_unit', 'kmh')

    const load = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal })

        if (!response.ok) throw new Error(`weather: ${response.status}`)

        const payload = (await response.json()) as OpenMeteoResponse
        const current = payload.current

        if (!current) throw new Error('weather: missing current data')
        if (!mounted) return

        setState({
          status: 'ready',
          data: {
            temperature: current.temperature_2m,
            apparent: current.apparent_temperature,
            humidity: current.relative_humidity_2m,
            wind: current.wind_speed_10m,
            code: current.weather_code,
            isDay: current.is_day === 1,
            time: current.time,
          },
        })
      } catch (error) {
        if (!mounted || (error instanceof DOMException && error.name === 'AbortError')) return
        setState({ status: 'error' })
      }
    }

    load()
    const interval = window.setInterval(load, 10 * 60 * 1000)

    return () => {
      mounted = false
      controller.abort()
      window.clearInterval(interval)
    }
  }, [location.latitude, location.longitude])

  return state
}
