import type { Interaction } from '@orama/core'
import React, { createContext, type ReactNode, useContext, useState } from 'react'
import { ChatPanel } from './components/ChatPanel'

interface SlidingPanelContextType {
  isOpen: boolean
  openPanel: () => void
  closePanel: () => void
  togglePanel: () => void
  newChatPanel: () => void
  tabs: SlidingPanelTab[]
  continueConversationOnLatestChat: (interactions: (Interaction | undefined)[]) => void
  activeTabId: string
  setActiveTabId: (id: string) => void
  updateChatTabLabel: (id: string, label: string) => void
}

const SlidingPanelContext = createContext<SlidingPanelContextType | undefined>(undefined)

interface SlidingPanelProviderProps {
  children: ReactNode
}

interface SlidingPanelTab {
  id: string
  label: string
  Content: typeof ChatPanel
  initialInteractions?: Interaction[]
}

const genId = () => {
  return Math.random().toString(16).slice(2)
}

const defaultTab = { label: 'New Chat', Content: ChatPanel, id: genId() }

// Provider component
export const SlidingPanelProvider: React.FC<SlidingPanelProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [tabs, setTabs] = useState<SlidingPanelTab[]>([defaultTab])
  const [activeTabId, setActiveTabId] = useState(defaultTab.id)

  const openPanel = () => setIsOpen(true)
  const closePanel = () => setIsOpen(false)
  const togglePanel = () => setIsOpen(prev => !prev)
  const continueConversationOnLatestChat = (interactions: (Interaction | undefined)[]) => {
    const newId = genId()
    setTabs(old => {
      const initialInteraction = interactions[0]
      const initialQuery = initialInteraction?.query!

      if (tabs.length === 1 && tabs[0].label === 'New Chat') {
        openPanel()
        setActiveTabId(newId)

        return [
          {
            id: newId,
            label: initialQuery,
            Content: ChatPanel,
            initialInteractions: interactions.filter(Boolean) as Interaction[]
          }
        ]
      } else {
        return [
          {
            id: newId,
            label: initialQuery,
            Content: ChatPanel,
            initialInteractions: interactions.filter(Boolean) as Interaction[]
          },
          ...old
        ]
      }
    })

    setActiveTabId(newId)
    openPanel()
  }
  const newChatPanel = () => {
    const newId = genId()
    setTabs(old => [{ label: 'New Chat', Content: ChatPanel, id: newId }, ...old])
    setActiveTabId(newId)
  }
  const updateChatTabLabel = (id: string, label: string) => {
    setTabs(old => {
      const newTabs = [...old]

      const tab = newTabs.find(tab => tab.id === id)
      if (!tab) {
        throw new Error(`Tab with id ${id} not found`)
      }
      tab.label = label
      return newTabs
    })
  }
  // TODO: We need to think of a way to programatically starts a conversation in a child component
  //   const askInANewPanel = (prompt: string) => {
  //     const newId = genId()
  //     setTabs(old => [{ label: 'New Chat', Content: ChatPanel, id: newId }, ...old])

  //     setActiveTabId(newId)
  //     openPanel()
  //   }

  const value: SlidingPanelContextType = {
    tabs,
    isOpen,
    openPanel,
    closePanel,
    togglePanel,
    newChatPanel,
    continueConversationOnLatestChat,
    activeTabId,
    setActiveTabId,
    updateChatTabLabel
  }

  return <SlidingPanelContext.Provider value={value}>{children}</SlidingPanelContext.Provider>
}

export const useSlidingPanel = (): SlidingPanelContextType => {
  const context = useContext(SlidingPanelContext)

  if (context === undefined) {
    throw new Error('useSlidingPanel must be used within a SlidingPanelProvider')
  }

  return context
}

export { SlidingPanelContext }
