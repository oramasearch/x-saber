/** biome-ignore-all lint/a11y/useFocusableInteractive: TODO */
/** biome-ignore-all lint/a11y/useSemanticElements: TODO */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: TODO */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: TODO */
import { SlidingPanel as OramaSlidingPanel, SlidingPanel } from '@orama/ui/components'
import '@orama/ui/styles.css'
import {
  EllipsisIcon,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
  PlusIcon,
  TrashIcon,
  XIcon
} from 'lucide-react'
import { type FC, useEffect, useState } from 'react'
import { useBreakpoint } from '../hooks/useBreakpoint'
import { cn } from '../lib/utils'
import { useSlidingPanel } from '../SlidingPanelContext'

const DeleteChatMobilePopover: FC<{
  onDelete: () => void
  onShowing: () => void
  onDismiss: () => void
}> = ({ onDelete, onShowing, onDismiss }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (show) {
      onShowing()
    } else {
      onDismiss()
    }
  }, [show, onDismiss, onShowing])

  return (
    <div className='relative'>
      <div
        role='button'
        onClick={e => {
          e.preventDefault()
          e.stopPropagation()
          setShow(true)
          return false
        }}>
        <EllipsisIcon className='size-4' />
      </div>
      {show && (
        <>
          <div
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              onDelete()
              setShow(false)
              return false
            }}
            className='absolute top-full px-2 py-[6px] rounded-md bg-[#262626] border border-white/10 text-white flex gap-2 items-center min-w-26 text-sm font-normal right-[-72%] mt-5 z-2'>
            <TrashIcon className='size-4 text-muted-foreground' />
            <span className='text-[#FAFAFA]'>Delete</span>
          </div>
          <div
            className='fixed inset-0'
            onClick={e => {
              setShow(false)
              e.stopPropagation()
              return false
            }}
          />
        </>
      )}
    </div>
  )
}

export function XSaberSlidingPanel() {
  const { tabs, activeTabId, newChatPanel, setActiveTabId, isOpen, closePanel, updateChatTabLabel, removeChatTab } =
    useSlidingPanel()
  const { isAtLeast } = useBreakpoint()
  const [showConfirmChatCloseId, setShowConfirmChatCloseId] = useState<string | null>(null)
  const [chatHistoryVisible, setChatHistoryVisible] = useState(isAtLeast('md'))
  const [showingPopoverTabId, setShowingPopoverTabId] = useState<string | null>(null)

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
                'flex flex-col h-dvh w-[220px] absolute md:static md:bg-black duration-400 ease-in-out opacity-100 left-0 md:z-1 z-3 bg-[#171717]',
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
                            'text-black bg-white hover:bg-white': tab.id === activeTabId,
                            'shadow-[0_0_0_3px_rgba(115,115,115,0.5)]': showingPopoverTabId === tab.id
                          }
                        )}>
                        <span
                          className='block w-full min-w-0 truncate text-left'
                          title={tab.label}>
                          {tab.label}
                        </span>

                        {isAtLeast('md') ? (
                          /** biome-ignore lint/a11y/useFocusableInteractive: should be a button whithin a button */
                          /** biome-ignore lint/a11y/useKeyWithClickEvents: should be a button whithin a button */
                          /** biome-ignore lint/a11y/useSemanticElements: should be a button whithin a button */
                          <div
                            role='button'
                            onClick={e => {
                              e.preventDefault()
                              setShowConfirmChatCloseId(tab.id)
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
                        ) : (
                          numberOfNonNewChats > 1 && (
                            <DeleteChatMobilePopover
                              onShowing={() => setShowingPopoverTabId(tab.id)}
                              onDismiss={() => setShowingPopoverTabId(null)}
                              onDelete={() => setShowConfirmChatCloseId(tab.id)}
                            />
                          )
                        )}
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
            'opacity-0 pointer-events-none': !showConfirmChatCloseId
          }
        )}
        onKeyDown={e => {
          if (e.key === 'Escape') {
            setShowConfirmChatCloseId(null)
            return false
          }
        }}
        onClick={e => {
          e.stopPropagation()
          setShowConfirmChatCloseId(null)
          return false
        }}>
        {/** biome-ignore lint/a11y/noStaticElementInteractions: Its a backdrop */}
        {/** biome-ignore lint/a11y/useKeyWithClickEvents: Its a backdrop */}
        <div
          tabIndex={-1}
          className='bg-black rounded-lg border border-base-border p-6 m-6'
          onClick={e => {
            e.stopPropagation()
            return false
          }}>
          <h2 className='text-lg font-bold text-center md:text-start'>Delete chat?</h2>
          <p className='text-sm text-muted-foreground mt-2 text-center md:text-start'>This action cannot be undone.</p>
          <p className='text-sm text-muted-foreground text-center md:text-start'>
            This will permanently delete the selected conversation.
          </p>
          <div className='flex flex-col-reverse md:flex-row justify-end gap-2 mt-4'>
            <button
              type='button'
              className={cn(
                'bg-white/5 text-sm border border-base-border rounded-lg p-2 cursor-pointer transition-colors',
                'hover:bg-white/10'
              )}
              onClick={e => {
                e.stopPropagation()
                setShowConfirmChatCloseId(null)
                return false
              }}>
              Cancel
            </button>
            <button
              type='button'
              onClick={e => {
                e.stopPropagation()
                removeChatTab(showConfirmChatCloseId!)
                setShowConfirmChatCloseId(null)
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
