import { useState } from 'react'
import Icon from '../ui/Icon'
import { projectFilters, projects } from '../../data/site'
import { windows } from '../layout/windows'
import type { WindowKey } from '../layout/windows'

type ProjectsSectionProps = {
  onNavigate: (key: WindowKey) => void
}

const pageDescriptions: Record<WindowKey, string> = {
  projetos: 'Projetos e experimentos',
  sobre: 'Quem sou, filosofia, hobbies e metas',
  pets: 'Paçoca, Odin, Tedi e Gorda',
  educacao: 'Formação acadêmica e estudos autodidatas',
  contato: 'GitHub, e-mail e site',
}

export default function ProjectsSection({ onNavigate }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<'all'>('all')

  const visibleProjects = filter === 'all' ? projects : []

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2">
        {projectFilters.map((tab) => (
          <button
            className={`rounded-md border px-3 py-1 text-[0.78rem] transition-all duration-200 ${
              filter === tab.id
                ? 'border-ctp-pink bg-[rgb(245_194_231/0.12)] text-ctp-pink'
                : 'border-ctp-surface0 bg-ctp-mantle text-ctp-subtext0 hover:border-ctp-pink hover:text-ctp-pink'
            }`}
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {filter === 'all' && projects.length === 0 ? (
        <nav aria-label="Índice de páginas" className="flex flex-col gap-3">
          <p className="flex items-center gap-1.5 text-[0.72rem] uppercase tracking-wider text-ctp-overlay0">
            <Icon name="folder" size={13} />
            índice · todos.nix
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {windows.map((window, index) => (
              <button
                className="group flex items-center gap-3 rounded-xl border border-ctp-surface0 bg-ctp-mantle p-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-ctp-pink hover:shadow-[0_4px_14px_rgb(0_0_0/0.4)] sm:p-4"
                key={window.key}
                onClick={() => onNavigate(window.key)}
                type="button"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-ctp-surface0 text-ctp-pink">
                  <Icon name={window.icon} size={18} />
                </span>

                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="flex items-center gap-2 text-[0.88rem] font-bold text-ctp-pink sm:text-[0.9rem]">
                    <span className="text-[0.7rem] font-normal text-ctp-overlay0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {window.label}
                  </span>
                  <span className="truncate text-[0.72rem] text-ctp-subtext0 sm:text-[0.75rem]">
                    {pageDescriptions[window.key]}
                  </span>
                </span>

                <Icon
                  className="shrink-0 text-ctp-overlay0 transition-colors group-hover:text-ctp-pink"
                  name="arrowUpRight"
                  size={15}
                />
              </button>
            ))}
          </div>
        </nav>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              className="flex flex-col justify-between rounded-xl border border-ctp-surface0 bg-ctp-mantle p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-ctp-pink hover:shadow-[0_4px_14px_rgb(0_0_0/0.4)] sm:p-5"
              key={project.id}
            >
              <div>
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-ctp-pink">{project.name}</h3>

                  <div className="flex gap-2">
                    {project.links.map((link) => (
                      <a
                        aria-label={`${link.label} de ${project.name}`}
                        className="flex items-center gap-1.5 rounded-md border border-ctp-surface0 bg-ctp-surface0 px-2.5 py-1 text-[0.72rem] font-semibold text-ctp-subtext1 transition-all duration-200 hover:border-ctp-pink hover:text-ctp-pink"
                        href={link.href}
                        key={link.label}
                        rel="noopener noreferrer"
                        target="_blank"
                        title={link.label}
                      >
                        <Icon name="github" size={13} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <p className="text-[0.82rem] leading-relaxed text-ctp-subtext0">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    className="rounded border border-[rgb(245_194_231/0.15)] bg-ctp-surface0 px-2 py-0.5 text-[0.7rem] text-ctp-pink"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
