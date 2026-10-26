import Tile from '../layout/Tile'
import Icon from '../ui/Icon'
import type { IconName } from '../ui/Icon'
import { useWeather } from '../../hooks/useWeather'
import { useGeolocation } from '../../hooks/useGeolocation'
import { weatherLocation as fallbackLocation } from '../../data/site'

function weatherInfo(code: number, isDay: boolean): { label: string; icon: IconName } {
  if (code === 0) return { label: isDay ? 'céu limpo' : 'noite limpa', icon: isDay ? 'sun' : 'sparkle' }
  if (code === 1 || code === 2) return { label: 'parcialmente nublado', icon: 'cloud' }
  if (code === 3) return { label: 'nublado', icon: 'cloud' }
  if (code === 45 || code === 48) return { label: 'neblina', icon: 'cloud' }
  if (code >= 51 && code <= 57) return { label: 'garoa', icon: 'cloudRain' }
  if (code >= 61 && code <= 67) return { label: 'chuva', icon: 'cloudRain' }
  if (code >= 71 && code <= 77) return { label: 'neve', icon: 'snowflake' }
  if (code >= 80 && code <= 82) return { label: 'pancadas de chuva', icon: 'cloudRain' }
  if (code === 85 || code === 86) return { label: 'pancadas de neve', icon: 'snowflake' }
  if (code >= 95) return { label: 'tempestade', icon: 'cloudRain' }

  return { label: 'condição variável', icon: 'cloud' }
}

export default function WeatherTile() {
  const geo = useGeolocation()
  const location = geo.status === 'ready' ? { city: 'local', ...geo.coords } : { city: fallbackLocation.city, latitude: fallbackLocation.latitude, longitude: fallbackLocation.longitude }
  const weather = useWeather(location)

  return (
    <Tile
      icon="cloud"
      status="open-meteo"
      statusClassName="text-[0.7rem] text-ctp-blue"
      title="weather"
    >
      {geo.status === 'loading' || weather.status === 'loading' ? (
        <p className="text-[0.78rem] text-ctp-subtext0">obtendo localização...</p>
      ) : weather.status === 'error' ? (
        <div className="flex flex-col gap-1">
          <p className="text-[0.8rem] font-semibold text-ctp-red">clima indisponível</p>
          <p className="text-[0.7rem] text-ctp-overlay0">
            {geo.status === 'denied'
              ? 'localização negada; usando local padrão.'
              : 'a API não respondeu; vou tentar de novo em alguns minutos.'}
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-[0.72rem] text-ctp-overlay0">
                {geo.status === 'ready' ? 'sua localização' : 'local padrão'}
              </p>
              <p className="text-3xl font-bold leading-none text-ctp-pink">
                {Math.round(weather.data.temperature)}°
              </p>
              <p className="mt-1 truncate text-[0.75rem] text-ctp-subtext0">
                {weatherInfo(weather.data.code, weather.data.isDay).label}
              </p>
            </div>

            <Icon
              className="shrink-0 text-ctp-pink"
              name={weatherInfo(weather.data.code, weather.data.isDay).icon}
              size={38}
            />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-md bg-ctp-surface0/60 px-1 py-1.5">
              <p className="text-[0.62rem] uppercase tracking-wide text-ctp-overlay0">sensação</p>
              <p className="text-[0.78rem] text-ctp-text">{Math.round(weather.data.apparent)}°</p>
            </div>
            <div className="rounded-md bg-ctp-surface0/60 px-1 py-1.5">
              <p className="text-[0.62rem] uppercase tracking-wide text-ctp-overlay0">umidade</p>
              <p className="text-[0.78rem] text-ctp-text">{Math.round(weather.data.humidity)}%</p>
            </div>
            <div className="rounded-md bg-ctp-surface0/60 px-1 py-1.5">
              <p className="text-[0.62rem] uppercase tracking-wide text-ctp-overlay0">vento</p>
              <p className="text-[0.78rem] text-ctp-text">{Math.round(weather.data.wind)} km/h</p>
            </div>
          </div>

          <p className="mt-2 text-[0.64rem] text-ctp-overlay0">
            atualizado às {weather.data.time.slice(11, 16)} · open-meteo
          </p>
        </>
      )}
    </Tile>
  )
}
