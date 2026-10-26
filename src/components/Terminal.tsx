import { useState } from 'react'
import type { FormEvent, KeyboardEvent } from 'react'
import { birthDate, birthDateLabel, profile, pets } from '../data/site'

const HELP = [
  'Comandos disponíveis:',
  '- nixos: detalhes da config declarativa',
  `- idade: calcula o tempo exato desde ${birthDateLabel}`,
  '- quem: resumo do dev',
  '- sobre: o que tem neste site',
  '- pets: lista os pets',
  '- pacoca / odin / tedi / gorda: detalhes de um pet',
  '- frase: citação do site',
  '- clear: limpar tela',
].join('\n')

function run(command: string): string {
  switch (command) {
    case 'ajuda':
    case 'help':
      return HELP
    case 'nixos':
      return 'system.stateVersion = "24.11";\nflake.lock = verified;\nhome-manager.users.dev = catppuccin-mocha-pink;'
    case 'idade':
    case 'uptime': {
      const diff = Date.now() - birthDate.getTime()
      const years = (diff / (365.2425 * 86400000)).toFixed(8)

      return `Nascido em: ${birthDateLabel}\nUptime total: ${Math.floor(diff / 86400000)} dias (${years} anos corridos)`
    }
    case 'quem':
    case 'whoami':
      return `${profile.fullName}\nEstudante de Ciência da Computação · Linux • NixOS • Hyprland • Rust`
    case 'sobre':
      return 'Este site é um desktop Hyprland/NixOS: os workspaces da waybar trocam entre projetos, sobre, pets, educação e contato.'
    case 'pets':
      return `Pets cadastrados:\n${pets.map((pet) => `- ${pet.id}: ${pet.name}`).join('\n')}`
    case 'frase':
      return 'Para ganhar conhecimento, adicione coisas todos os dias. Para ganhar sabedoria, elimine coisas todos os dias.'
    case 'clear':
      return ''
    default: {
      const pet = pets.find((item) => item.id === command)

      if (pet) {
        return `${pet.name}\n${pet.body.map((segment) => segment.text).join('')}`
      }

      return `nix-shell: command not found: ${command}. Digite "ajuda".`
    }
  }
}

export default function Terminal() {
  const [output, setOutput] = useState(
    'Digite "ajuda", "nixos", "idade" ou "pets" para ver os comandos.\nPressione Enter para executar.',
  )
  const [value, setValue] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [cursor, setCursor] = useState(0)

  const submit = (event: FormEvent) => {
    event.preventDefault()

    const command = value.trim().toLowerCase()

    if (!command) return

    setHistory((current) => [...current, command])
    setCursor(history.length + 1)
    setOutput(run(command))
    setValue('')
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      const next = Math.max(0, cursor - 1)
      setCursor(next)
      setValue(history[next] ?? '')
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      const next = Math.min(history.length, cursor + 1)
      setCursor(next)
      setValue(history[next] ?? '')
    }
  }

  return (
    <div className="mt-5 rounded-lg border border-ctp-surface0 bg-ctp-crust p-3.5 font-nerd-mono text-[0.8rem] shadow-[inset_0_1px_0_rgb(245_194_231/0.05)]">
      <div className="mb-2 flex items-center justify-between text-[0.7rem] text-ctp-overlay0">
        <span>shell • interactive</span>
        <span className="flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-ctp-green" />
          <span className="size-1.5 rounded-full bg-ctp-yellow" />
          <span className="size-1.5 rounded-full bg-ctp-red" />
        </span>
      </div>
      <div className="mb-1.5 min-h-[28px] overflow-x-hidden whitespace-pre-wrap break-words text-ctp-subtext0">
        {output}
      </div>

      <form
        className="flex min-w-0 items-center gap-2 rounded-md border border-ctp-surface0 bg-ctp-mantle px-2 py-1.5"
        onSubmit={submit}
      >
        <span className="font-bold text-ctp-pink">[dev@nixos-box]$</span>
        <input
          autoComplete="off"
          className="min-w-0 flex-1 border-none bg-transparent text-[0.8rem] text-ctp-pink outline-none sm:text-[0.85rem]"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder="ajuda, nixos, idade, pets, clear..."
          spellCheck={false}
          value={value}
        />
      </form>
    </div>
  )
}
