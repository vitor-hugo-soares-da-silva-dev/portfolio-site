import { createContext, useContext, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type AudioContextType = {
  isPlaying: boolean
  toggle: () => void
  start: () => void
  booted: boolean
  currentTime: number
  duration: number
}

const AudioCtx = createContext<AudioContextType | null>(null)

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [booted, setBooted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(223)

  useEffect(() => {
const audio = new Audio(`${import.meta.env.BASE_URL}audio/musica.mp3`)
    audioRef.current = audio
    audio.preload = 'auto'
    audio.loop = true
    audio.volume = 0.4

    const onTime = () => setCurrentTime(audio.currentTime)
    const onMeta = () => {
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration)
      }
    }

    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('loadeddata', onMeta)
    audio.addEventListener('canplaythrough', onMeta)
    audio.load()

    return () => {
      audio.pause()
      audio.src = ''
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('loadeddata', onMeta)
      audio.removeEventListener('canplaythrough', onMeta)
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !booted) return
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false))
    } else {
      audio.pause()
    }
  }, [isPlaying, booted])

  const start = () => {
    const audio = audioRef.current
    setBooted(true)
    setIsPlaying(true)
    if (!audio) return
    audio.loop = true
    audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
  }

  const toggle = () => setIsPlaying((v) => !v)

  return (
    <AudioCtx.Provider value={{ isPlaying, toggle, start, booted, currentTime, duration }}>
      {children}
    </AudioCtx.Provider>
  )
}

export function useAudio() {
  const ctx = useContext(AudioCtx)
  if (!ctx) throw new Error('useAudio must be used within AudioProvider')
  return ctx
}
