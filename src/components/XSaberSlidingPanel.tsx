import { SlidingPanel as OramaSlidingPanel, SlidingPanel } from '@orama/ui/components'
import '@orama/ui/styles.css'
import { PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen, PlusIcon, XIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useBreakpoint } from '../hooks/useBreakpoint'
import { cn } from '../lib/utils'
import { useSlidingPanel } from '../SlidingPanelContext'

export function XSaberSlidingPanel() {
  const { tabs, activeTabId, newChatPanel, setActiveTabId, isOpen, closePanel, updateChatTabLabel, removeChatTab } =
    useSlidingPanel()
  const { isAtLeast } = useBreakpoint()
  const [showConfirmChatClose, setShowConfirmChatClose] = useState(false)
  const [chatHistoryVisible, setChatHistoryVisible] = useState(isAtLeast('md'))
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

  const numberOfNonNewChats = tabs.filter(tab => !tab.isNewChat).length

  const activeTab = tabs.find(tab => tab.id === activeTabId)!

  return (
    <>
      <OramaSlidingPanel.Wrapper
        open={isOpen}
        className='z-99999'
        onClose={() => closePanel()}>
        <SlidingPanel.Backdrop className='bg-black/50' />

        <OramaSlidingPanel.Content
          position={'right'}
          className={`duration-400 ease-in-out h-full md:!w-auto !w-full flex`}>
          <div className='flex relative w-full'>
            {/* Bookmark */}
            <div
              className={cn(
                'flex flex-col h-full w-[220px] absolute md:static md:bg-black duration-400 ease-in-out opacity-100 left-0 md:z-1 z-3 bg-[#171717]',
                {
                  'md:translate-x-full -translate-x-full opacity-0 pointer-events-none': !chatHistoryVisible
                }
              )}>
              <div className='flex items-center px-4 py-2 gap-2'>
                <span className='text-muted-foreground text-sm'>Chat</span>
                {!!numberOfNonNewChats && (
                  <div className='flex size-6 items-center justify-center text-black rounded-full bg-foreground text-xs font-semibold'>
                    {numberOfNonNewChats}
                  </div>
                )}
                <div className='ml-auto'>
                  <button
                    type='button'
                    onClick={() => setChatHistoryVisible(old => !old)}
                    className='p-2 rounded-full bg-transparent text-white text-sm cursor-pointer hover:bg-foreground/10 transition-colors'>
                    <PanelRightClose className='size-4 hidden md:block' />
                    <PanelRightOpen className='size-4 block md:hidden' />
                  </button>
                </div>
              </div>

              <div className='flex flex-col gap-6 px-4'>
                <button
                  type='button'
                  className={cn(
                    'mt-6 px-3 py-2 flex items-center justify-center cursor-pointer text-xs text-white gap-2 transition-colors',
                    'bg-white/[0.05] border border-base-border rounded-lg hover:bg-white/[0.075]'
                  )}
                  onClick={() => {
                    newChatPanel()
                    setChatHistoryVisible(false)
                  }}>
                  <PlusIcon className='size-4' />
                  <span>New Chat</span>
                </button>

                <div className='flex flex-col gap-3'>
                  {tabs.map(tab => {
                    // We hide chats until some message is sent on it
                    if (tab.isNewChat) {
                      return null
                    }

                    return (
                      <button
                        type='button'
                        onClick={() => {
                          setActiveTabId(tab.id)
                        }}
                        key={tab.id}
                        className={cn(
                          'px-3 py-2 w-full flex items-center justify-center cursor-pointer text-xs font-medium text-white rounded-lg transition-colors',
                          'hover:bg-white/20 group',
                          {
                            'text-black bg-white hover:bg-white': tab.id === activeTabId
                          }
                        )}>
                        <span
                          className='block w-full min-w-0 truncate text-left'
                          title={tab.label}>
                          {tab.label}
                        </span>
                        {/** biome-ignore lint/a11y/useFocusableInteractive: should be a button whithin a button */}
                        {/** biome-ignore lint/a11y/useKeyWithClickEvents: should be a button whithin a button */}
                        {/** biome-ignore lint/a11y/useSemanticElements: should be a button whithin a button */}
                        <div
                          role='button'
                          onClick={e => {
                            e.preventDefault()
                            setShowConfirmChatClose(true)
                            return false
                          }}
                          className={cn(
                            'flex items-center justify-center rounded-full opacity-0 pointer-events-none p-1 transition-all',
                            'hover:bg-white/20 group-hover:cursor-pointer group-hover:opacity-100 group-hover:pointer-events-auto',
                            {
                              '!opacity-0 !pointer-events-none': tabs.length === 1
                            },
                            {
                              'hover:bg-black/10 ': tab.id === activeTabId
                            }
                          )}>
                          <XIcon className='size-3' />
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Chat */}
            <div
              className={cn(
                'flex flex-col overflow-hidden relative z-2',
                'h-full md:w-[360px] w-full backdrop-blur-[20px] bg-gradient-to-t from-[rgba(10,10,10,0.81)]',
                'from-[42.4%] to-[rgba(59,7,100,0.90)] to-[106.8%]'
              )}>
              {/* Header */}
              <div className='flex items-center text-sm py-3 px-4 gap-3 w-full'>
                <div className='flex items-center'>
                  <button
                    type='button'
                    onClick={() => setChatHistoryVisible(old => !old)}
                    className={cn('cursor-pointer p-2 rounded-full hover:bg-white/10 transition-all opacity-100', {
                      'opacity-0 w-0 pointer-events-none': chatHistoryVisible
                    })}>
                    <PanelLeftClose className='size-4 hidden md:block' />
                    <PanelLeftOpen className='size-4 block md:hidden' />
                  </button>
                  {!!numberOfNonNewChats && (
                    <div className='flex items-center justify-center size-5 rounded-full bg-foreground/10 text-xs font-semibold -ml-1'>
                      <span className='text-sm text-white truncate max-w-full'>{numberOfNonNewChats}</span>
                    </div>
                  )}
                </div>
                <div className='flex flex-1 justify-center min-w-0'>
                  <span className='text-sm text-white truncate max-w-full'>{activeTab.label}</span>
                </div>
                <button
                  type='button'
                  className='ml-auto cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors'
                  onClick={() => closePanel()}>
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
          </div>
        </OramaSlidingPanel.Content>
      </OramaSlidingPanel.Wrapper>

      {/** biome-ignore lint/a11y/noStaticElementInteractions: Its a backdrop */}
      <div
        className={cn(
          'flex flex-col justify-center items-center fixed inset-0 opacity-100 pointer-events-auto bg-black/50 transition-opacity z-999999',
          {
            'opacity-0 pointer-events-none': !showConfirmChatClose
          }
        )}
        onKeyDown={e => {
          if (e.key === 'Escape') {
            setShowConfirmChatClose(false)
            return false
          }
        }}
        onClick={e => {
          e.stopPropagation()
          setShowConfirmChatClose(false)
          return false
        }}>
        {/** biome-ignore lint/a11y/noStaticElementInteractions: Its a backdrop */}
        {/** biome-ignore lint/a11y/useKeyWithClickEvents: Its a backdrop */}
        <div
          tabIndex={-1}
          className='bg-black rounded-lg border border-base-border p-6 w-[512px]'
          onClick={e => {
            e.stopPropagation()
            return false
          }}>
          <h2 className='text-lg font-bold'>Are you sure you want to close this chat?</h2>
          <p className='text-sm text-muted-foreground mt-2'>This action cannot be undone.</p>
          <p className='text-sm text-muted-foreground'>This will permanently delete the selected conversation.</p>
          <div className='flex justify-end gap-2 mt-4'>
            <button
              type='button'
              className={cn(
                'bg-white/5 text-sm border border-base-border rounded-lg p-2 cursor-pointer transition-colors',
                'hover:bg-white/10'
              )}
              onClick={e => {
                e.stopPropagation()
                setShowConfirmChatClose(false)
                return false
              }}>
              Cancel
            </button>
            <button
              type='button'
              onClick={e => {
                e.stopPropagation()
                removeChatTab(activeTabId)
                setShowConfirmChatClose(false)
                return false
              }}
              className={cn(
                'bg-white text-sm text-black border border-base-border rounded-lg p-2 cursor-pointer transition-colors',
                'hover:bg-white/80'
              )}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
