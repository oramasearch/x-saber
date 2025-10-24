import { PromptTextArea } from '@orama/ui/components/PromptTextArea'
import { useChat } from '@orama/ui/hooks/useChat'
import { CornerDownLeft } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import LogoOrama from '../assets/logo-orama.svg'
import { cn } from '../lib/utils'
import { useSlidingPanel } from '../SlidingPanelContext'
import { InteractionsPopover } from './InteractionsPopover'

interface SearchWithSuggestionsProps {
  label?: string
  className?: string
}

const PLACEHOLDERS = [
  'How to change saber color?',
  'How to increase power?',
  'Add switch to dual-saber mode',
  'How to enable Saber diagnostics?'
]

export function SearchWithSuggestions({
  label = 'What is required to build it?',
  className
}: SearchWithSuggestionsProps) {
  const [inputMode, setInputMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const promptTextAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [interactionsPopoverOpen, setInteractionsPopoverOpen] = useState(false)
  const { startConversationWithQuery } = useSlidingPanel()

  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0)

  const {
    context: { interactions, answerSession },
    ask,
    reset
  } = useChat()

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node) && inputMode) {
        setInputMode(false)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex(prev => (prev + 1) % PLACEHOLDERS.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex flex-col items-start sm:flex-row',
        'transition-all duration-300',
        `w-auto h-[36px]`,
        'sm:mb-0 mb-8',
        'w-[236px]',
        {
          'w-[320px] md:w-[420px]': inputMode
        },
        className
      )}>
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

          <label
            htmlFor='home-input-box'
            className={cn(
              'absolute left-0 top-1/2 -translate-y-1/2 ml-8 overflow-hidden h-5 w-full pointer-events-none flex gap-1   items-center',
              {
                'hidden': searchQuery.length > 0
              }
            )}>
            <span className='text-gray-400 text-sm'>Try:</span>
            <div
              className='relative h-full transition-transform duration-500 ease-in-out'
              style={{
                transform: `translateY(${-currentPlaceholderIndex * 100}%)`
              }}>
              {PLACEHOLDERS.map((placeholder, index) => (
                <span
                  key={`placeholder-${index}-${placeholder}`}
                  className='absolute left-0 text-gray-400 whitespace-nowrap h-full flex items-center'
                  style={{
                    top: `${index * 100}%`
                  }}>
                  {placeholder}
                </span>
              ))}
            </div>
          </label>
          {/** biome-ignore lint/correctness/useUniqueElementIds: This id is safe to be considered indeed unique */}
          <textarea
            // biome-ignore lint/a11y/noAutofocus: TODO
            autoFocus
            id='home-input-box'
            ref={promptTextAreaRef}
            rows={1}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={''}
            value={searchQuery}
            onKeyDown={e => {
              if (e.key === 'Escape') {
                setInputMode(false)
                setSearchQuery('')
                e.preventDefault()
              } else if (e.key === 'Enter') {
                // TODO: What would be the best way to track a onAsk event?
                e.preventDefault()
                setSearchQuery('')
                if (interactions?.length) {
                  reset()
                }

                ask({ query: searchQuery })
                setInteractionsPopoverOpen(true)
              }
            }}
            className='flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-400 relative resize-none'
          />

          {/* FIX-ME: Not using Orama Ui component for lack of a possibility to track the onAsk using onChat hook */}
          <button
            type='button'
            className={cn(
              'p-1 rounded-md border border-base-border cursor-pointer transition-colors bg-base-primary text-black z-10',
              { 'hidden': !searchQuery.length }
            )}
            onClick={e => {
              e.preventDefault()
              setSearchQuery('')
              if (interactions?.length) {
                reset()
              }

              ask({ query: searchQuery })
              setInteractionsPopoverOpen(true)
            }}>
            <CornerDownLeft
              className={cn('size-4 transition-colors duration-300', searchQuery.length > 0 && 'text-black')}
            />
          </button>
        </PromptTextArea.Wrapper>
      ) : (
        <button
          type='button'
          onClick={() => setInputMode(true)}
          className='py-2 px-4 flex gap-2 items-center bg-base-primary text-purple-800 rounded-md text-sm font-medium cursor-pointer hover:bg-base-primary/90 transition-colors w-full h-full'>
          <img
            src={LogoOrama}
            alt='Orama'
            className='size-4'
          />
          <span className='flex-1 min-w-0 truncate'>{label}</span>
        </button>
      )}

      {/* Interaction container */}
      <InteractionsPopover
        open={interactionsPopoverOpen}
        interactions={interactions || []}
        onExpand={() => {
          const initialQuery = answerSession?.messages[0].content || ''
          startConversationWithQuery(initialQuery)
          setInputMode(false)
          setInteractionsPopoverOpen(false)

          reset()
        }}
        onClose={() => {
          setInteractionsPopoverOpen(false)
          setInputMode(false)

          setTimeout(() => {
            // Reset after fadeout animation
            reset()
          }, 300)
        }}
      />
    </div>
  )
}
