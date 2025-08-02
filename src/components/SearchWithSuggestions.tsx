import { useState } from 'react'
import LogoOrama from '../assets/logo-orama.svg'
import { cn } from '../lib/utils'
import { CornerDownLeft } from 'lucide-react'

interface SuggestionProps {
  text: string
  className?: string
  onClick?: () => void
}

function Suggestion({ text, className, onClick }: SuggestionProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'px-2 py-1 rounded-md bg-[#6B21A866] border border-base-border flex items-center gap-2 w-fit whitespace-nowrap cursor-pointer',
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

export function SearchWithSuggestions({
  label = 'What is required to build it?',
  className
}: SearchWithSuggestionsProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [inputMode, setInputMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const onSubmitQuery = () => {
    alert('Query Submited')
  }

  return (
    <div className={cn('relative flex items-center flex-col sm:flex-row', className)}>
      {inputMode ? (
        <div className='flex w-[279px] h-[36px] p-2 justify-center items-center gap-2 rounded-md border border-[#737373] bg-gray-900/50 shadow-[0_0_0_3px_rgba(115,115,115,0.5)]'>
          {/* Prepend element can go here */}
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
            onBlur={() => {
              if (!searchQuery) {
                setInputMode(false)
              }
            }}
            className='flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-400'
          />
          {/* Append element can go here */}
          <button
            type='button'
            onClick={() => onSubmitQuery()}
            className={cn('p-1 rounded-md bg-gray-800/50 border border-base-border cursor-pointer transition-colors', {
              'bg-base-primary': searchQuery.length > 0
            })}>
            <CornerDownLeft
              className={cn('size-4 transition-colors duration-300', {
                'text-black': searchQuery.length > 0
              })}
            />
          </button>
        </div>
      ) : (
        <button
          type='button'
          onClick={() => setInputMode(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              setInputMode(true)
            }
          }}
          className='py-2 px-4 flex gap-2 items-center bg-base-primary text-accent-brand rounded-md text-sm cursor-pointer hover:bg-base-primary/90 transition-colors'>
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          'opacity-0 transition-opacity duration-300 pointer-events-none flex flex-col gap-4 text-xs text-white overflow-visible absolute top-1/2 left-full w-[300px] -translate-y-1/2',
          { 'opacity-100 pointer-events-auto': isHovered || inputMode }
        )}>
        <Suggestion
          text='How to install a X-Cross hilt'
          className='-ml-0'
          onClick={() => {
            setSearchQuery('How to install a X-Cross hilt')
            onSubmitQuery()
          }}
        />
        <Suggestion
          text='How to increase lightsaber power'
          className='ml-6'
          onClick={() => {
            setSearchQuery('How to increase lightsaber power')
            onSubmitQuery()
          }}
        />
        <Suggestion
          text='How to customize Kyber Crystal color'
          className='-ml-6'
          onClick={() => {
            setSearchQuery('How to customize Kyber Crystal color')
            onSubmitQuery()
          }}
        />
      </div>
    </div>
  )
}
