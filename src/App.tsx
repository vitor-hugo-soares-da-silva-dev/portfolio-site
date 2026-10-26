import { useState } from 'react'
import Waybar from './components/layout/Waybar'
import Tile from './components/layout/Tile'
import MatrixTile from './components/tiles/MatrixTile'
import CavaTile from './components/tiles/CavaTile'
import FastfetchTile from './components/tiles/FastfetchTile'
import BrowserMonitorTile from './components/tiles/BrowserMonitorTile'
import WeatherTile from './components/tiles/WeatherTile'
import CbonsaiTile from './components/tiles/CbonsaiTile'
import ProjectsSection from './components/sections/ProjectsSection'
import AboutSection from './components/sections/AboutSection'
import PetsSection from './components/sections/PetsSection'
import EducationSection from './components/sections/EducationSection'
import ContactSection from './components/sections/ContactSection'
import Terminal from './components/Terminal'
import BootScreen from './components/BootScreen'
import Icon from './components/ui/Icon'
import { useAge } from './hooks/useAge'
import { useClock } from './hooks/useClock'
import { windows } from './components/layout/windows'
import type { WindowKey } from './components/layout/windows'
import { birthDate, profile } from './data/site'

import { useAudio } from './context/AudioContext'
function App() {
  const [active, setActive] = useState<WindowKey>('projetos')

  const age = useAge(birthDate)
  const clock = useClock()
  const { isPlaying, toggle, start, booted } = useAudio()

  const activeWindow = windows.find((window) => window.key === active) ?? windows[0]

  const views = {
    projetos: <ProjectsSection onNavigate={setActive} />,
    sobre: <AboutSection />,
    pets: <PetsSection />,
    educacao: <EducationSection />,
    contato: <ContactSection />,
  }

  if (!booted) {
    return <BootScreen onBoot={start} />
  }

  return (
    <div className="flex min-h-screen flex-col pb-8">
      <Waybar
        age={age}
        clock={clock}
        isPlaying={isPlaying}
        onSelect={setActive}
        onTogglePlay={toggle}
        active={active}
      />

      <main className="mx-auto grid w-full max-w-[1560px] grid-cols-1 gap-3 px-3 sm:px-5 xl:grid-cols-[minmax(0,380px)_minmax(0,1fr)_minmax(0,380px)]">
        <div className="order-2 flex min-w-0 flex-col gap-3 xl:order-1">
          <MatrixTile />
          <CavaTile isPlaying={isPlaying} />
          <BrowserMonitorTile />
        </div>

        <Tile
          active
          className="order-1 min-h-[520px] min-w-0 sm:min-h-[600px] xl:order-2"
          icon={activeWindow.icon}
          status="nix-store*"
          statusClassName="text-[0.75rem] text-ctp-pink"
          title={activeWindow.title}
        >
          {active !== 'projetos' ? (
            <div className="mb-3 flex justify-start">
              <button
                className="flex items-center gap-1.5 rounded-md border border-ctp-surface0 bg-ctp-mantle px-2.5 py-1 text-[0.72rem] text-ctp-subtext1 transition-all duration-200 hover:-translate-y-0.5 hover:border-ctp-pink hover:text-ctp-pink"
                onClick={() => setActive('projetos')}
                type="button"
              >
                <Icon name="home" size={14} />
                voltar ao menu
              </button>
            </div>
          ) : null}
          {views[active]}
          <Terminal />
        </Tile>

        <div className="order-3 flex min-w-0 flex-col gap-3 xl:order-3">
          <WeatherTile />
          <CbonsaiTile />
          <FastfetchTile age={age} />
        </div>
      </main>

      <footer className="mx-auto mt-6 w-full max-w-[1560px] px-3 text-center text-[0.72rem] text-ctp-overlay0 sm:px-5">
        Feito com React, TailwindCSS e NixOS · {profile.fullName} ·{' '}
        <a
          className="text-ctp-pink underline decoration-dotted underline-offset-2 hover:text-ctp-mauve"
          href="https://github.com/vitor-hugo-soares-da-silva-dev/portfolio-site"
          rel="noopener noreferrer"
          target="_blank"
        >
          source no GitHub
        </a>
      </footer>
    </div>
  )
}

export default App
