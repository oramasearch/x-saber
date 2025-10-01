import type { FC } from 'react'
import { cn } from '../lib/utils'
import { SuggestionChip } from './SuggestionChip'

const SUGGESTIONS = [
  { text: 'How to install a X-Cross hilt', className: 'w-fit' },
  { text: 'How to increase lightsaber power', className: 'sm:ml-6 w-fit' },
  { text: 'How to customize Kyber Crystal color', className: 'sm:-ml-6 w-fit' }
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
        'w-[100vw] py-1 -mx-6 px-6 top-0 translate-y-full',
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
        <SuggestionChip
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
