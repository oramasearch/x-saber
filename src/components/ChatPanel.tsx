import { ChatRoot } from '@orama/ui/components'
import { ChatInteractions } from '@orama/ui/components/ChatInteractions'
import { PromptTextArea } from '@orama/ui/components/PromptTextArea'
import type { ChatContextProps } from '@orama/ui/contexts/ChatContext'
import { useChat } from '@orama/ui/hooks/useChat'
import { useScrollableContainer } from '@orama/ui/hooks/useScrollableContainer'
import { ArrowUp, ChevronDown, CopyIcon, RefreshCwIcon, ThumbsDown } from 'lucide-react'
import { type FC, useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.svg'
import LogoOrama from '../assets/logo-orama.svg'
import OramaLogoSearchIcon from '../assets/orama-logo-search-icon.svg'
import { cn } from '../lib/utils'
import { collectionManager } from '../OramaClient'
import { useSlidingPanel } from '../SlidingPanelContext'

const Suggestion: FC<{ suggestion: string; onClick: () => void }> = ({ suggestion, onClick }) => {
  return (
    <button
      type='button'
      className={cn(
        'flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg border border-base-border bg-[rgba(255, 255, 255, 0.05)] text-xs cursor-pointer',
        'hover:bg-[rgba(255, 255, 255, 0.1)] transition-colors'
      )}
      onClick={onClick}>
      <img
        src={LogoOrama}
        alt='Orama'
        className='size-3 brightness-0 saturate-100 invert'
      />
      {suggestion}
    </button>
  )
}

const SUGGESTIONS = ['Check firmware', 'Swap X-Saber IV hilt', 'Customize X-Saber IV effects']

const EmptyPanel = () => {
  const {
    context: { interactions },
    ask
  } = useChat()

  if (interactions?.length) {
    return null
  }

  return (
    <div className='flex flex-col gap-6 justify-center items-center h-full'>
      <div className='flex items-center flex-nowrap'>
        <img
          src={logo}
          alt='logo'
          className='w-14 h-14'
        />
        <span
          className='-m-1 whitespace-nowrap text-2xl'
          style={{ fontFamily: 'var(--font-family-michroma)' }}>
          -Saber
        </span>
      </div>
      <div className='text-lg leading-[100%] flex flex-col gap-2'>
        <div>
          <p className='text-center'>Search. Or Search not.</p>
          <p className='text-center'>There is no try.</p>
        </div>

        <div className='text-muted-foreground text-sm flex text-center'>
          Explore additional sources to enhance your understanding of the documentation topics
        </div>
      </div>
      <div className='flex gap-2 flex-wrap justify-center'>
        {SUGGESTIONS.map(suggestion => (
          <Suggestion
            key={suggestion}
            suggestion={suggestion}
            onClick={() => {
              ask({ query: suggestion })
            }}
          />
        ))}
      </div>
    </div>
  )
}

export const ChatPanel: FC<{
  active: boolean
  onAsk?: (query: string) => void
  answerSession?: ChatContextProps['answerSession']
  initialQuery?: string
}> = ({ active, onAsk, answerSession, initialQuery }) => {
  const scrollContainer = useScrollableContainer()

  return (
    <div
      ref={scrollContainer.containerRef}
      className={cn('flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-4 w-full flex-grow chat-panel-wrapper', {
        'hidden': !active
      })}
      style={{
        scrollbarWidth: 'none'
      }}>
      <ChatRoot
        client={collectionManager}
        initialState={{
          answerSession
        }}>
        <ChatPanelContent
          initialQuery={initialQuery}
          scrollContainer={scrollContainer}
          onAsk={onAsk}
          active={active}
        />
      </ChatRoot>
    </div>
  )
}

const ChatPanelContent: FC<{
  initialQuery?: string
  scrollContainer: ReturnType<typeof useScrollableContainer>
  onAsk?: (query: string) => void
  active: boolean
}> = ({ initialQuery, onAsk, active, scrollContainer }) => {
  const { ask } = useChat()
  const { isOpen: isLindingPanelOpen } = useSlidingPanel()

  const [panelPromptText, setPanelPromptText] = useState('')

  const textAreRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (active && isLindingPanelOpen) {
      // Wait for animations to finish
      setTimeout(() => {
        textAreRef.current?.focus()
      }, 300)
    }
  }, [active, isLindingPanelOpen])

  useEffect(() => {
    if (active) {
      textAreRef.current?.focus()
    }
  }, [active])

  // biome-ignore lint/correctness/useExhaustiveDependencies: We want to run this only once, on component mount, regardless if the initialQuery changes
  useEffect(() => {
    if (initialQuery) {
      ask({ query: initialQuery })
    }
  }, [])

  return (
    <>
      <EmptyPanel />
      <ChatInteractions.Wrapper
        onScroll={scrollContainer.recalculateGoToBottomButton}
        onStreaming={scrollContainer.recalculateGoToBottomButton}
        onNewInteraction={interaction => {
          scrollContainer.scrollToBottom({ animated: true })
          onAsk?.(interaction.query)
        }}>
        {(interaction, index, totalInteractions) => {
          const isLatestInteraction = index === totalInteractions
          return (
            <div
              key={interaction.id}
              className='flex flex-col gap-3 mt-4'>
              {index === 0 ? (
                <ChatInteractions.UserPrompt className='text-lg text-white'>
                  {interaction.query}
                </ChatInteractions.UserPrompt>
              ) : (
                <div className='flex justify-end'>
                  <ChatInteractions.UserPrompt className='text-sm rounded-lg text-white p-3 bg-[rgba(255,255,255,0.12)] text-left ml-8'>
                    {interaction.query}
                  </ChatInteractions.UserPrompt>
                </div>
              )}

              {interaction.response.length === 0 ? (
                <div className='flex flex-col gap-3 p-3 w-full'>
                  <div className='h-[16px] w-full rounded-md bg-gradient-to-r from-transparent via-white/[0.05] to-white/[0.06] via-[20%] animate-pulse' />
                  <div className='h-[16px] w-full rounded-md bg-gradient-to-r from-transparent via-white/[0.05] to-white/[0.06] via-[20%] animate-pulse' />
                  <div className='h-[16px] w-[90%] rounded-md bg-gradient-to-r from-transparent via-white/[0.05] to-white/[0.06] via-[20%] animate-pulse' />
                </div>
              ) : (
                <ChatInteractions.AssistantMessage
                  className='text-sm text-muted-foreground'
                  markdownClassnames={{
                    p: 'my-2',
                    pre: 'rounded-md [&_pre]:rounded-md [&_pre]:p-4 [&_pre]:my-3 [&_pre]:overflow-auto',
                    code: 'p-1 rounded'
                  }}>
                  {interaction.response}
                </ChatInteractions.AssistantMessage>
              )}
              {!interaction.loading && (
                <ChatInteractions.UserActions className='flex justify-end gap-1'>
                  <ChatInteractions.RegenerateLatest
                    interaction={interaction}
                    className='p-2 rounded-full bg-transparent text-muted-foreground text-sm cursor-pointer hover:bg-foreground/10 transition-colors'>
                    <RefreshCwIcon className='size-3 font-bold' />
                  </ChatInteractions.RegenerateLatest>
                  <ChatInteractions.CopyMessage
                    interaction={interaction}
                    type='button'
                    className='p-2 rounded-full bg-transparent text-muted-foreground text-sm cursor-pointer hover:bg-foreground/10 transition-colors'>
                    {() => <CopyIcon className='size-3' />}
                  </ChatInteractions.CopyMessage>
                  <button
                    type='button'
                    className='p-2 rounded-full bg-transparent text-muted-foreground text-sm cursor-pointer hover:bg-foreground/10 transition-colors'>
                    <ThumbsDown className='size-3' />
                  </button>
                </ChatInteractions.UserActions>
              )}
              {/* Spacing for the fixed textarea */}
              {isLatestInteraction && <div className='h-52' />}
            </div>
          )
        }}
      </ChatInteractions.Wrapper>
      <div className='absolute bottom-0 left-0 w-full'>
        <div className='flex flex-col gap-2 relative pt-20 bg-gradient-to-t from-[rgba(10,10,10,0.90)] from-[84.25%] to-[rgba(10,10,10,0.10)] to-[100%]'>
          {scrollContainer.showGoToBottomButton && (
            <button
              type='button'
              className='ml-2 p-2 rounded-full bg-foreground text-black text-sm absolute top-1/5 right-1/2 translate-x-1/2 cursor-pointer'
              onClick={() => scrollContainer.scrollToBottom()}>
              <ChevronDown className='size-4' />
            </button>
          )}
          <div></div>
          <PromptTextArea.Wrapper
            className={cn(
              'flex mx-4 p-2 justify-center gap-2 rounded-t-lg border-l-1 border-t-1 border-r-1 border-[rgb(255,255,255,15%)]',
              'bg-[#030303]'
            )}>
            <img
              src={OramaLogoSearchIcon}
              alt='Orama'
              className='size-4 mt-1'
            />
            <PromptTextArea.Field
              ref={textAreRef}
              autoFocus
              rows={5}
              onChange={e => setPanelPromptText(e.target.value)}
              placeholder='Search for anything...'
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  setPanelPromptText('')
                }
              }}
              value={panelPromptText}
              className='flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-400 w-full chat-panel-textarea'
            />
            <div className='mt-auto'>
              <PromptTextArea.Button
                className={cn(
                  'p-1 bg-foreground rounded-md transition-colors cursor-pointer chat-panel-textarea-button',
                  {
                    'bg-foreground/50 cursor-auto': panelPromptText.length === 0
                  }
                )}>
                <ArrowUp className='size-4 text-black' />
              </PromptTextArea.Button>
            </div>
          </PromptTextArea.Wrapper>
        </div>
      </div>
    </>
  )
}
