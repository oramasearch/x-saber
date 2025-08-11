import { atom } from 'jotai'
import { ChatPanel } from './components/ChatPanel'

interface SlidingPanelTab {
  label: string
  // Content: FC<{ active: boolean }>
  Content: typeof ChatPanel
}

export const slidingPanelTabsAtom = atom<SlidingPanelTab[]>([{ label: 'New Chat', Content: ChatPanel }])

export const slidingPanelTabsVisibleAtom = atom(false)

export const slidingPanelTabsActiveTabIndexAtom = atom(0)
