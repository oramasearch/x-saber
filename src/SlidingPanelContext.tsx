import type { ChatContextProps } from '@orama/ui/contexts/ChatContext'
import React, { createContext, type ReactNode, useContext, useState } from 'react'
import { ChatPanel } from './components/ChatPanel'

interface SlidingPanelContextType {
  isOpen: boolean
  openPanel: () => void
  closePanel: () => void
  togglePanel: () => void
  newChatPanel: () => void
  removeChatTab: (id: string) => void
  tabs: SlidingPanelTab[]
  continueConversation: (answerSession: ChatContextProps['answerSession']) => void
  startConversationWithQuery: (query: string) => void
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
  isNewChat: boolean
  answerSession?: ChatContextProps['answerSession']
  initialQuery?: string
}

const genId = () => {
  return Math.random().toString(16).slice(2)
}

const defaultTab = { label: 'New Chat', Content: ChatPanel, id: genId(), isNewChat: true }

/**
 * Handles the state of the sliding panel and its tabs
 */
export const SlidingPanelProvider: React.FC<SlidingPanelProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [tabs, setTabs] = useState<SlidingPanelTab[]>([defaultTab])
  const [activeTabId, setActiveTabId] = useState(defaultTab.id)

  const openPanel = () => setIsOpen(true)
  const closePanel = () => setIsOpen(false)
  const togglePanel = () => setIsOpen(prev => !prev)
  // FIX-ME: This is not working because Orama UI doesn't register the necessary
  // callbacks when it receives the answer session as initial state
  const continueConversation = (answerSession: ChatContextProps['answerSession']) => {
    if (!answerSession) {
      throw new Error('No initial state provided')
    }

    const newId = genId()
    setTabs(old => {
      const interactions = answerSession?.messages
      const initialInteraction = interactions?.[0]
      const initialQuery = initialInteraction.content!

      if (tabs.length === 1 && tabs[0].isNewChat) {
        openPanel()
        setActiveTabId(newId)

        return [
          {
            id: newId,
            label: initialQuery,
            Content: ChatPanel,
            answerSession,
            isNewChat: false
          }
        ]
      } else {
        return [
          {
            id: newId,
            label: initialQuery,
            Content: ChatPanel,
            answerSession,
            isNewChat: false
          },
          ...old
        ]
      }
    })

    setActiveTabId(newId)
    openPanel()
  }

  // FIX-ME: This is a hack to start a new conversation with a initial question. Rather
  // we want to use the answerSession so we don't duplicate the ASK request. (continueConversation)
  const startConversationWithQuery = (query: string) => {
    if (!query) {
      throw new Error('No query provided')
    }

    const newId = genId()
    setTabs(old => {
      if (tabs.length === 1 && tabs[0].isNewChat) {
        openPanel()
        setActiveTabId(newId)

        return [
          {
            id: newId,
            label: query,
            Content: ChatPanel,
            initialQuery: query,
            isNewChat: false
          }
        ]
      } else {
        return [
          {
            id: newId,
            label: query,
            Content: ChatPanel,
            initialQuery: query,
            isNewChat: false
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
    setTabs(old => [{ label: 'New Chat', Content: ChatPanel, id: newId, isNewChat: true }, ...old])
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
      tab.isNewChat = false
      return newTabs
    })
  }

  const removeChatTab = (id: string) => {
    setTabs(old => {
      const newTabs = old.filter(tab => tab.id !== id)
      setActiveTabId(newTabs[0].id)
      return newTabs
    })
  }

  const value: SlidingPanelContextType = {
    tabs,
    isOpen,
    openPanel,
    closePanel,
    togglePanel,
    newChatPanel,
    removeChatTab,
    continueConversation,
    startConversationWithQuery,
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
