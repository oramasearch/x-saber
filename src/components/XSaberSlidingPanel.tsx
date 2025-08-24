import { SlidingPanel as OramaSlidingPanel, SlidingPanel } from '@orama/ui/components'
import '@orama/ui/styles.css'
import { ArrowRightToLine, MessageSquareText, PlusIcon, XIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '../lib/utils'
import { useSlidingPanel } from '../SlidingPanelContext'

export function XSaberSlidingPanel() {
  const { tabs, activeTabId, newChatPanel, setActiveTabId, isOpen, openPanel, closePanel, updateChatTabLabel } =
    useSlidingPanel()
  const [chatHistoryVisible, setChatHistoryVisible] = useState(true)
  const [hideAfterTransition, setHideAfterTransition] = useState(true)

  const timeoutRef = useRef<number | null>(null)

  // "removes" the element after the animation
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (!chatHistoryVisible) {
      timeoutRef.current = setTimeout(() => {
        setHideAfterTransition(true)
      }, 300)
    } else {
      setHideAfterTransition(false)
    }
  }, [chatHistoryVisible])

  return (
    <OramaSlidingPanel.Wrapper
      open={isOpen}
      className='z-99999'
      onClose={() => closePanel()}>
      <SlidingPanel.Backdrop className='bg-black/50' />

      <OramaSlidingPanel.Content
        position={'right'}
        className={`duration-400 ease-in-out h-full !w-auto flex`}>
        {/* Bookmark */}
        <div
          className={cn('flex flex-col h-full w-[220px] bg-black duration-400 ease-in-out opacity-100', {
            'translate-x-full opacity-0': !chatHistoryVisible,
            'w-0': hideAfterTransition
          })}>
          <div className='flex items-center px-4 py-2 gap-2'>
            <span className='text-muted-foreground text-sm'>Chat</span>
            <div className='flex size-6 items-center justify-center text-black rounded-full bg-foreground'>
              {tabs.length}
            </div>
            <div className='ml-auto'>
              <button
                type='button'
                onClick={() => setChatHistoryVisible(old => !old)}
                className='p-2 rounded-full bg-transparent text-white text-sm cursor-pointer hover:bg-foreground/10 transition-colors'>
                <ArrowRightToLine className='size-4' />
              </button>
            </div>
          </div>

          <div className='flex flex-col gap-3 px-4'>
            <button
              type='button'
              className={cn(
                'mt-6 px-3 py-2 flex items-center justify-center cursor-pointer text-xs text-white gap-2',
                'bg-white/10 border border-base-border rounded-lg'
              )}
              onClick={newChatPanel}>
              <PlusIcon className='size-4' />
              <span>New Chat</span>
            </button>

            {tabs.map(tab => {
              return (
                <button
                  type='button'
                  onClick={() => {
                    setActiveTabId(tab.id)
                  }}
                  key={tab.id}
                  className={cn(
                    'px-3 py-2 w-full flex items-center justify-center cursor-pointer text-xs text-white rounded-lg transition-colors',
                    {
                      'text-black bg-white': tab.id === activeTabId
                    }
                  )}>
                  <span
                    className='block w-full min-w-0 truncate text-center'
                    title={tab.label}>
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Chat */}
        <div
          className={cn(
            'flex flex-col overflow-hidden relative',
            'h-full w-[336px] backdrop-blur-[20px] bg-gradient-to-t from-[rgba(10,10,10,0.81)]',
            'from-[42.4%] to-[rgba(59,7,100,0.90)] to-[106.8%]'
          )}>
          {/* Header */}
          <div className='flex items-center text-sm py-2 px-4 gap-3 w-full'>
            <button
              type='button'
              onClick={() => setChatHistoryVisible(old => !old)}
              className='cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors'>
              <MessageSquareText className='size-4' />
            </button>
            <div className='flex flex-1 justify-center'></div>
            <button
              type='button'
              className='ml-auto cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors'
              onClick={() => openPanel()}>
              <XIcon className='size-4' />
            </button>
          </div>

          {tabs.map(tab => {
            return (
              <tab.Content
                key={tab.id}
                active={tab.id === activeTabId}
                // FIX-ME: This is not working because Orama UI doesn't register the necessary
                // callbacks when it receives the answer session as initial state
                answerSession={tab.answerSession}
                // FIX-ME: This is a hack to start the new conversation with a initial question. Rather
                // we want to use the answerSession so we don't duplicate the ASK request.
                initialQuery={tab.initialQuery}
                onAsk={(query: string) => {
                  if (tab.label === 'New Chat') {
                    updateChatTabLabel(tab.id, query)
                  }
                }}
              />
            )
          })}
        </div>
      </OramaSlidingPanel.Content>
    </OramaSlidingPanel.Wrapper>
  )
}
