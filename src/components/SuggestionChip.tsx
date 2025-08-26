import LogoOrama from '../assets/logo-orama.svg'
import { cn } from '../lib/utils'

interface SuggestionProps {
  text: string
  className?: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const SuggestionChip = ({ text, className, onClick }: SuggestionProps) => {
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
