import { PromptTextArea } from '@orama/ui/components/PromptTextArea'
import { useChat } from '@orama/ui/hooks/useChat'
import { CornerDownLeft } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import LogoOrama from '../assets/logo-orama.svg'
import { cn } from '../lib/utils'
import { useSlidingPanel } from '../SlidingPanelContext'
import { InteractionsPopover } from './InteractionsPopover'
import { Suggestions } from './Suggestions'

interface SearchWithSuggestionsProps {
  label?: string
  className?: string
}

export function SearchWithSuggestions({
  label = 'What is required to build it?',
  className
}: SearchWithSuggestionsProps) {
  const [showSuggestions, setShowSugestions] = useState(false)
  const [inputMode, setInputMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const promptTextAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [interactionsPopoverOpen, setInteractionsPopoverOpen] = useState(false)
  const { startConversationWithQuery } = useSlidingPanel()

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
      style={{ width: inputMode ? '285px' : '236px' }}>
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
            ref={promptTextAreaRef}
            rows={1}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder='Search for anything...'
            value={searchQuery}
            onKeyDown={e => {
              if (e.key === 'Escape') {
                setInputMode(false)
                setShowSugestions(false)
                setSearchQuery('')
                e.preventDefault()
              } else if (e.key === 'Enter') {
                // TODO: What would be the best way to track a onAsk event?
                e.preventDefault()
                setSearchQuery('')
                setShowSugestions(false)
                if (interactions?.length) {
                  reset()
                }

                ask({ query: searchQuery })
                setInteractionsPopoverOpen(true)
              }
            }}
            className='flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-400'
          />

          {/* FIX-ME: Not using Orama Ui component for lack of a possibility to track the onAsk using onChat hook */}
          <button
            type='button'
            className={cn(
              'p-1 rounded-md border border-base-border cursor-pointer transition-colors z-10',
              searchQuery.length > 0 ? 'bg-base-primary text-black' : 'bg-gray-800/50 text-white'
            )}
            onClick={e => {
              e.preventDefault()
              setSearchQuery('')
              setShowSugestions(false)
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
          onMouseEnter={() => !interactionsPopoverOpen && setShowSugestions(true)}
          onMouseLeave={() => setShowSugestions(false)}
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
          setShowSugestions(false)
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

      <Suggestions
        open={showSuggestions}
        onMouseEnter={() => !interactionsPopoverOpen && setShowSugestions(true)}
        onMouseLeave={() => !inputMode && setShowSugestions(false)}
        onSuggestionClick={(suggestionText: string) => {
          setInputMode(true)
          setShowSugestions(false)
          setSearchQuery('')
          ask({ query: suggestionText })
          setInteractionsPopoverOpen(true)
        }}
      />
    </div>
  )
}
