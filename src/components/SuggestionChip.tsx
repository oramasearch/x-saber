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
        console.log('onClick')
        e.stopPropagation()
        onClick(e)
      }}
      className={cn(
        'px-2 py-1.5 flex-shrink-0 rounded-md bg-[#6418a2b6] border border-base-border opacity-80 text-xs',
        'flex items-center gap-2 md:w-fit w-full whitespace-nowrap cursor-pointer hover:opacity-100 transition-opacity',
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
