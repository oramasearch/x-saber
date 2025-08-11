import type { FC } from 'react'
import LogoOrama from '../assets/logo-orama.svg'
import { cn } from '../lib/utils'

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

const SUGGESTIONS = [
  { text: 'How to install a X-Cross hilt', className: '' },
  { text: 'How to increase lightsaber power', className: 'sm:ml-6' },
  { text: 'How to customize Kyber Crystal color', className: 'sm:-ml-6' }
]

interface SuggestionsProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onSuggestionClick: (suggestion: string) => void
}

export const Suggestions: FC<SuggestionsProps> = ({ open, onSuggestionClick, ...props }) => {
  return (
    <div
      className={cn(
        // Base styles
        'absolute flex gap-4 text-xs text-white overflow-x-auto',
        'opacity-0 transition-opacity duration-300 pointer-events-none',
        'opacity-0 pointer-events-none',
        // Mobile styles / -mx-10 in order to remove the padding of the parent
        'w-[100vw] py-1 -mx-10 px-10 top-0 translate-y-full',
        // Desktop styles
        'sm:flex-col sm:w-max sm:mx-0',
        'sm:top-1/2 sm:-translate-y-1/2 sm:left-[90%]',
        'sm:px-[10%] sm:py-4 sm:ml-full pt-4',
        // Visibility states
        {
          'opacity-100 pointer-events-auto': open
        }
      )}
      style={{ scrollbarWidth: 'none' }}
      {...props}>
      {SUGGESTIONS.map(suggestion => (
        <Suggestion
          key={suggestion.text}
          text={suggestion.text}
          className={suggestion.className}
          onClick={e => {
            e.stopPropagation()
            e.preventDefault()

            onSuggestionClick?.(suggestion.text)
          }}
        />
      ))}
    </div>
  )
}
