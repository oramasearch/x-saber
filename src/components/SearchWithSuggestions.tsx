import { ChatInteractions } from '@orama/ui/components/ChatInteractions'
import { PromptTextArea } from '@orama/ui/components/PromptTextArea'
import { useChatContext } from '@orama/ui/context/ChatContext'
import { useChat } from '@orama/ui/hooks/useChat'
import { ArrowRight, ArrowUp, CornerDownLeft, MessageSquareText, XIcon } from 'lucide-react'
import { Fragment, useEffect, useRef, useState } from 'react'
import LeftTriangle from '../assets/left-triangle.svg'
import LogoOrama from '../assets/logo-orama.svg'
import OramaWhiteLogo from '../assets/orama-white-logo.svg'
import { cn } from '../lib/utils'
import { Divider } from './Divider'

interface SuggestionProps {
  text: string
  className?: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function Suggestion({ text, className, onClick }: SuggestionProps) {
  return (
    <button
      type='button'
      onClick={e => {
        e.stopPropagation()
        onClick(e)
      }}
      className={cn(
        'px-2 py-1 flex-shrink-0 rounded-md bg-[#6B21A866] border border-base-border',
        'flex items-center gap-2 sm:w-fit whitespace-nowrap cursor-pointer',
        className
      )}>
      <img
        src={LogoOrama}
        alt='Orama'
        className='size-3 brightness-0 saturate-100 invert'
      />
      {text}
    </button>
  )
}

interface SearchWithSuggestionsProps {
  label?: string
  className?: string
}

const SUGGESTIONS = [
  { text: 'How to install a X-Cross hilt', className: '' },
  { text: 'How to increase lightsaber power', className: 'sm:ml-6' },
  { text: 'How to customize Kyber Crystal color', className: 'sm:-ml-6' }
]

export function SearchWithSuggestions({
  label = 'What is required to build it?',
  className
}: SearchWithSuggestionsProps) {
  const [showSuggestions, setShowSugestions] = useState(false)
  const [inputMode, setInputMode] = useState(false)
  const [panelMode, setPanelMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [panelPrompt, setPanelPrompt] = useState('')
  const containerRef = useRef<HTMLDivElement | null>(null)

  const {
    context,
    ask,
    reset,
    context: { interactions }
  } = useChat()

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node) && inputMode) {
        setInputMode(false)
        setShowSugestions(false)
        setSearchQuery('')
      }
    }

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside)

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [inputMode])

  const handleSubmit = () => {
    alert('Query Submited')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        setInputMode(false)
        setSearchQuery('')
        break
    }
  }

  const submitButtonClassName = cn(
    'p-1 rounded-md border border-base-border cursor-pointer transition-colors',
    searchQuery.length > 0 ? 'bg-base-primary text-black' : 'bg-gray-800/50 text-white'
  )

  const submitIconClassName = cn('size-4 transition-colors duration-300', searchQuery.length > 0 && 'text-black')

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex flex-col items-start sm:flex-row',
        'transition-all duration-300',
        `w-auto h-[36px]`,
        'sm:mb-0 mb-8',
        className
      )}
      style={{ width: inputMode ? '300px' : '232px' }}>
      {inputMode ? (
        <PromptTextArea.Wrapper
          className={cn(
            'flex p-2 justify-center items-center gap-2 rounded-md borde',
            'border-[#737373] bg-gray-900/50 shadow-[0_0_0_3px_rgba(115,115,115,0.5)]',
            'w-full h-full'
          )}>
          <img
            src={LogoOrama}
            alt='Orama'
            className='size-4'
          />
          <PromptTextArea.Field
            autoFocus
            rows={1}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder='Search for anything...'
            value={searchQuery}
            onKeyDown={e => {
              if (e.key === 'Escape') {
                setInputMode(false)
                setShowSugestions(false)
                setSearchQuery('')
              } else if (e.key === 'Enter') {
                setSearchQuery('')
              }
            }}
            askOptions={{
              related: {
                enabled: true,
                size: 3,
                format: 'question'
              }
            }}
            className='flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-400'
          />
          <PromptTextArea.Button className={submitButtonClassName}>
            <CornerDownLeft className={submitIconClassName} />
          </PromptTextArea.Button>
        </PromptTextArea.Wrapper>
      ) : (
        <button
          type='button'
          onClick={() => setInputMode(true)}
          onMouseEnter={() => setShowSugestions(true)}
          onMouseLeave={() => setShowSugestions(false)}
          className='py-2 px-4 flex gap-2 items-center bg-base-primary text-accent-brand rounded-md text-sm cursor-pointer hover:bg-base-primary/90 transition-colors w-full h-full'>
          <img
            src={LogoOrama}
            alt='Orama'
            className='size-4'
          />
          <span>{label}</span>
        </button>
      )}

      {/* Interaction container */}
      <div
        className={cn(
          'flex fixed z-9999 left-0 right-0 bottom-0 md:absolute md:left-[100%] md:top-0 md:bottom-auto md:right-auto md:-translate-y-[30px] md:translate-x-[20px] md:w-[450px] h-auto opacity-100 pointer-events-auto transition-opacity',
          {
            'opacity-0 pointer-events-none': !interactions?.length || !inputMode
          }
        )}>
        <div className='relative bg-black/40 md:bg-black/50 p-3 pb-6 md:pb-3 border border-base-border backdrop-blur-xl rounded-md w-full'>
          {/* Triangle with custom mask to hide overlap */}
          <div
            className='absolute -left-[11px] top-0 mt-[42px]'
            style={{
              maskImage: 'linear-gradient(to right, black 0%, black 80%, transparent 50%)',
              WebkitMaskImage: 'linear-gradient(to right, black 0%, black 80%, transparent 50%)'
            }}>
            <img
              src={LeftTriangle}
              alt='Triangle pointer'
              className='w-[14px] h-[16px]'
            />
          </div>
          <ChatInteractions.Wrapper
            ref={containerRef}
            className='items-start relative overflow-y-auto h-full w-full'>
            {interaction => {
              return (
                <Fragment key={interaction.id}>
                  <div className='flex items-center gap-2'>
                    <img
                      src={OramaWhiteLogo}
                      alt='Orama'
                      className='size-4'
                    />
                    <ChatInteractions.UserPrompt className='text-lg text-white'>
                      {interaction.query}
                    </ChatInteractions.UserPrompt>
                    <button
                      type='button'
                      className='ml-auto cursor-pointer'
                      onClick={() => {
                        // setInputMode(false)
                        reset()
                        setShowSugestions(true)
                      }}>
                      <XIcon className='size-4' />
                    </button>
                  </div>
                  <div className='mt-3'>
                    {interaction.response.length === 0 ? (
                      <div className='flex flex-col gap-3 p-3'>
                        <div className='h-[16px] w-full rounded-md bg-gradient-to-r from-transparent via-white/[0.05] to-white/[0.06] via-[20%] animate-pulse' />
                        <div className='h-[16px] w-full rounded-md bg-gradient-to-r from-transparent via-white/[0.05] to-white/[0.06] via-[20%] animate-pulse' />
                        <div className='h-[16px] w-[90%] rounded-md bg-gradient-to-r from-transparent via-white/[0.05] to-white/[0.06] via-[20%] animate-pulse' />
                      </div>
                    ) : (
                      <ChatInteractions.AssistantMessage className='text-xs text-muted-foreground'>
                        {interaction.response}
                      </ChatInteractions.AssistantMessage>
                    )}
                  </div>
                  {!interaction.loading && (
                    <button
                      type='button'
                      onClick={() => {
                        setPanelMode(true)
                        setInputMode(false)
                        setShowSugestions(false)
                      }}
                      className='flex gap-2 items-center justify-center mt-3 py-2 px-3 w-full bold bg-base-primary text-black rounded-md text-xs cursor-pointer hover:bg-base-primary/90 transition-colors'>
                      Expand
                      <ArrowRight size={16} />
                    </button>
                  )}
                </Fragment>
              )
            }}
          </ChatInteractions.Wrapper>
        </div>
      </div>

      {/** biome-ignore lint/a11y/noStaticElementInteractions: this is expected */}
      <div
        onMouseEnter={() => showSuggestions && setShowSugestions(true)}
        onMouseLeave={() => setShowSugestions(false)}
        className={cn(
          // Base styles
          'absolute flex gap-4 text-xs text-white overflow-x-auto',
          'opacity-0 transition-opacity duration-300 pointer-events-none',
          // Mobile styles / -mx-10 in order to remove the padding of the parent
          'w-[100vw] py-1 -mx-10 px-10 top-0 translate-y-full',
          // Desktop styles
          'sm:flex-col sm:w-max sm:mx-0',
          'sm:top-1/2 sm:-translate-y-1/2 sm:left-[90%]',
          'sm:px-[10%] sm:py-4 sm:ml-full pt-4',
          // Visibility states
          {
            'opacity-100 pointer-events-auto': inputMode && !interactions?.length,
            'sm:opacity-100 sm:pointer-events-auto': showSuggestions && !interactions?.length
          }
        )}
        style={{ scrollbarWidth: 'none' }}>
        {SUGGESTIONS.map(suggestion => (
          <Suggestion
            key={suggestion.text}
            text={suggestion.text}
            className={suggestion.className}
            onClick={event => {
              event.stopPropagation()
              event.preventDefault()
              setInputMode(true)
              setShowSugestions(false)
              setSearchQuery(suggestion.text)

              if (context?.interactions?.length) {
                reset()
              }

              console.log('ask to be called')
              ask({ query: suggestion.text })
              console.log('ask called')
              setSearchQuery('')
            }}
          />
        ))}
      </div>

      {/* Left panel. Should be moved to a modal component */}
      {panelMode && (
        <div className={cn('fixed flex right-0 top-0 bottom-0 text-white z-9999')}>
          <div
            className={cn(
              'flex flex-col overflow-hidden',
              'h-full w-[336px] backdrop-blur-[20px] bg-gradient-to-t from-[rgba(10,10,10,0.81)]',
              'from-[42.4%] to-[rgba(59,7,100,0.90)] to-[106.8%]'
            )}>
            <div className='flex items-center text-sm py-2 px-4 gap-3 w-full'>
              <button
                type='button'
                className='p-2'>
                <MessageSquareText className='size-4' />
              </button>
              <div className='flex flex-1 justify-center'>text</div>
              <button
                type='button'
                className='ml-auto cursor-pointer p-2'
                onClick={() => {
                  reset()
                  setPanelMode(false)
                }}>
                <XIcon className='size-4' />
              </button>
            </div>
            <div className='flex-grow overflow-hidden'>
              <ChatInteractions.Wrapper className='overflow-y-auto overflow-x-hidden px-4 py-6 flex flex-col gap-4 w-full'>
                {interaction => {
                  return (
                    <Fragment key={interaction.id}>
                      <ChatInteractions.UserPrompt className='text-lg text-white'>
                        {interaction.query}
                      </ChatInteractions.UserPrompt>
                      <div className='mt-3'>
                        {interaction.response.length === 0 ? (
                          <div className='flex flex-col gap-3 p-3 w-full'>
                            <div className='h-[16px] w-full rounded-md bg-gradient-to-r from-transparent via-white/[0.05] to-white/[0.06] via-[20%] animate-pulse' />
                            <div className='h-[16px] w-full rounded-md bg-gradient-to-r from-transparent via-white/[0.05] to-white/[0.06] via-[20%] animate-pulse' />
                            <div className='h-[16px] w-[90%] rounded-md bg-gradient-to-r from-transparent via-white/[0.05] to-white/[0.06] via-[20%] animate-pulse' />
                          </div>
                        ) : (
                          <ChatInteractions.AssistantMessage className='text-sm text-muted-foreground'>
                            {interaction.response}
                          </ChatInteractions.AssistantMessage>
                        )}
                      </div>
                    </Fragment>
                  )
                }}
              </ChatInteractions.Wrapper>
            </div>
            <PromptTextArea.Wrapper
              className={cn(
                'flex mx-4 p-2 justify-center gap-2 rounded-t-md border-l-1 border-t-1 border-r-1 border-base-border',
                'bg-[#030303]'
              )}>
              <img
                src={LogoOrama}
                alt='Orama'
                className='size-4 mt-1'
              />
              <PromptTextArea.Field
                autoFocus
                rows={5}
                onChange={e => setPanelPrompt(e.target.value)}
                placeholder='Search for anything...'
                value={panelPrompt}
                onKeyDown={e => {
                  if (e.key === 'Escape') {
                    setInputMode(false)
                    setShowSugestions(false)
                    setPanelPrompt('')
                    e.preventDefault()
                  }
                }}
                askOptions={{
                  related: {
                    enabled: true,
                    size: 3,
                    format: 'question'
                  }
                }}
                className='flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-400 w-full'
              />
              <div className='mt-auto'>
                <PromptTextArea.Button
                  className={cn('p-2 bg-foreground rounded-md transition-colors', {
                    'bg-foreground/50 ': panelPrompt.length === 0
                  })}>
                  <ArrowUp className='size-4 text-black' />
                </PromptTextArea.Button>
              </div>
            </PromptTextArea.Wrapper>
          </div>
        </div>
      )}
    </div>
  )
}
