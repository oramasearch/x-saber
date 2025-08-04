import { CornerDownLeft } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import LogoOrama from '../assets/logo-orama.svg'
import { cn } from '../lib/utils'

interface SuggestionProps {
  text: string
  className?: string
  onClick?: () => void
}

function Suggestion({ text, className, onClick }: SuggestionProps) {
  return (
    <button
      type='button'
      onClick={e => {
        e.stopPropagation()
        onClick?.()
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
  const [isHovered, setIsHovered] = useState(false)
  const [inputMode, setInputMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node) && inputMode) {
        setInputMode(false)
        setIsHovered(false)
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

  const handleSuggestionClick = (suggestionText: string) => {
    setInputMode(true)
    setSearchQuery(suggestionText)
    handleSubmit()
  }

  const handleEscape = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setInputMode(false)
      setSearchQuery('')
    }
  }

  // Styles for suggestions container
  const suggestionsClassName = cn(
    // Base styles
    'flex gap-4 text-xs text-white overflow-x-auto',
    'opacity-0 transition-opacity duration-300 pointer-events-none',
    // Mobile styles
    'w-[calc(100vw)] py-3',
    // Desktop styles
    'sm:absolute sm:flex-col sm:w-max',
    'sm:top-1/2 sm:-translate-y-1/2 sm:left-[90%]',
    'sm:px-[10%] sm:py-4 sm:ml-full pt-4',
    // Visibility states
    {
      'opacity-100 pointer-events-auto': inputMode,
      'sm:opacity-100 sm:pointer-events-auto': isHovered
    }
  )

  const submitButtonClassName = cn(
    'p-1 rounded-md border border-base-border cursor-pointer transition-colors',
    searchQuery.length > 0 ? 'bg-base-primary' : 'bg-gray-800/50'
  )

  const submitIconClassName = cn('size-4 transition-colors duration-300', searchQuery.length > 0 && 'text-black')

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex flex-col items-start sm:flex-row',
        'transition-all duration-300',
        `w-auto h-[36px]`,
        className
      )}
      style={{ width: inputMode ? '300px' : buttonRef?.clientWidth }}>
      {inputMode ? (
        <div
          className={cn(
            'flex p-2 justify-center items-center gap-2 rounded-md border',
            'border-[#737373] bg-gray-900/50 shadow-[0_0_0_3px_rgba(115,115,115,0.5)]',
            'w-full h-full'
          )}>
          <img
            src={LogoOrama}
            alt='Orama'
            className='size-4'
          />
          <input
            // biome-ignore lint/a11y/noAutofocus: Elements indeed needs to be focused
            autoFocus
            type='text'
            placeholder='Search for anything...'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={handleEscape}
            className='flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-400'
          />
          <button
            type='button'
            onClick={handleSubmit}
            className={submitButtonClassName}>
            <CornerDownLeft className={submitIconClassName} />
          </button>
        </div>
      ) : (
        <button
          type='button'
          ref={setButtonRef}
          onClick={() => setInputMode(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className='py-2 px-4 flex gap-2 items-center bg-base-primary text-accent-brand rounded-md text-sm cursor-pointer hover:bg-base-primary/90 transition-colors w-full h-full'>
          <img
            src={LogoOrama}
            alt='Orama'
            className='size-4'
          />
          <span>{label}</span>
        </button>
      )}

      {/** biome-ignore lint/a11y/noStaticElementInteractions: this is expected */}
      <div
        onMouseEnter={() => isHovered && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={suggestionsClassName}
        style={{ scrollbarWidth: 'none' }}>
        {SUGGESTIONS.map(suggestion => (
          <Suggestion
            key={suggestion.text}
            text={suggestion.text}
            className={suggestion.className}
            onClick={() => handleSuggestionClick(suggestion.text)}
          />
        ))}
      </div>
    </div>
  )
}
