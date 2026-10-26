import { useState } from 'react'
import Tile from '../layout/Tile'
import Icon from '../ui/Icon'
import { bonsaiTrees } from '../../data/cbonsai'

function colorFor(char: string) {
  if (char === '&') return 'text-ctp-green'
  if (char === '~') return 'text-ctp-pink'
  if ('\\|/_'.includes(char)) return 'text-ctp-mauve'
  if (':.()'.includes(char)) return 'text-ctp-overlay0'
  return 'text-ctp-subtext1'
}

export default function CbonsaiTile() {
  const [treeIndex, setTreeIndex] = useState(0)
  const tree = bonsaiTrees[treeIndex]

  const nextTree = () => {
    setTreeIndex((current) => (current + 1) % bonsaiTrees.length)
  }

  return (
    <Tile
      icon="tree"
      status={`seed ${tree.seed}`}
      statusClassName="text-[0.7rem] text-ctp-green"
      title="cbonsai -p"
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-[0.7rem] text-ctp-overlay0">bonsai estático · local</span>

        <button
          className="flex items-center gap-1.5 rounded-md border border-ctp-surface0 bg-ctp-surface0 px-2 py-0.5 text-[0.7rem] text-ctp-subtext1 transition-colors hover:border-ctp-pink hover:text-ctp-pink"
          onClick={nextTree}
          type="button"
        >
          <Icon name="refresh" size={12} />
          nova árvore
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg bg-ctp-crust p-2">
        <pre className="w-max font-nerd-mono text-[0.52rem] leading-[1.05] sm:text-[0.58rem]">
          {tree.art.split('\n').map((line, lineIndex) => (
            <span className="block" key={`${tree.seed}-${lineIndex}`}>
              {line.split('').map((char, charIndex) =>
                char === ' ' ? (
                  ' '
                ) : (
                  <span className={colorFor(char)} key={`${lineIndex}-${charIndex}`}>
                    {char}
                  </span>
                ),
              )}
            </span>
          ))}
        </pre>
      </div>
    </Tile>
  )
}
