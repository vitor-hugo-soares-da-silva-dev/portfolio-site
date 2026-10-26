import type { IconName } from '../ui/Icon'

export type WindowKey = 'projetos' | 'sobre' | 'pets' | 'educacao' | 'contato'

export type WindowDefinition = {
  key: WindowKey
  label: string
  title: string
  icon: IconName
}

export const windows: WindowDefinition[] = [
  { key: 'projetos', label: 'projetos', title: '~/projects_showcase/', icon: 'folder' },
  { key: 'sobre', label: 'sobre', title: '~/sobre_mim/', icon: 'user' },
  { key: 'pets', label: 'pets', title: '~/meus_pets/', icon: 'paw' },
  { key: 'educacao', label: 'educacao', title: '~/educacao/', icon: 'book' },
  { key: 'contato', label: 'contato', title: '~/contato/', icon: 'mail' },
]
