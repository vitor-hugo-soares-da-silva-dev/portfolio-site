import { useEffect, useState } from 'react'

export type GeoCoords = {
  latitude: number
  longitude: number
}

export type GeolocationState =
  | { status: 'loading' }
  | { status: 'denied' }
  | { status: 'error' }
  | { status: 'ready'; coords: GeoCoords }

export function useGeolocation(): GeolocationState {
  const [state, setState] = useState<GeolocationState>(() =>
    typeof navigator !== 'undefined' && navigator.geolocation ? { status: 'loading' } : { status: 'error' },
  )

  useEffect(() => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) return

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          status: 'ready',
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        })
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          setState({ status: 'denied' })
          return
        }
        setState({ status: 'error' })
      },
      {
        enableHighAccuracy: false,
        timeout: 8000,
        maximumAge: 10 * 60 * 1000,
      },
    )
  }, [])

  return state
}
