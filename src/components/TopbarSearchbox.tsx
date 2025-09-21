import type { Hit } from '@orama/core'
import { SearchInput } from '@orama/ui/components/SearchInput'
import { SearchResults } from '@orama/ui/components/SearchResults'
import { useSearch } from '@orama/ui/hooks/useSearch'
import { ArrowUp, FileText, LoaderCircle, PanelRight } from 'lucide-react'
import { type FC, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import OramaLogoSearchIcon from '../assets/orama-logo-search-icon.svg'
import OramaLogoSearchIconActive from '../assets/orama-logo-search-icon-active.svg'
import Spinner from '../assets/spinner.svg'
import { useBreakpoint } from '../hooks/useBreakpoint'
import { cn } from '../lib/utils'
import { useSlidingPanel } from '../SlidingPanelContext'
import { Divider } from './Divider'
import { SuggestionChip } from './SuggestionChip'

const SUGGESTIONS = [
  { text: 'How to customize Kyber Crystal color', className: '' },
  { text: 'How to increase lightsaber power', className: 'md:ml-6' },
  { text: 'How to install a X-Cross hilt', className: 'md:-ml-6' }
]

const SearchBox = ({
  setIsInputFocused,
  setShowSuggestions,
  isInputFocused,
  open,
  setFocusedIndex,
  focusedIndex,
  setOpen,
  startConversationWithQuery
}: {
  setIsInputFocused: (isInputFocused: boolean) => void
  setShowSuggestions: (showSuggestions: boolean) => void
  setFocusedIndex: (focusedIndex: number) => void
  focusedIndex: number
  isInputFocused: boolean
  open: boolean
  setOpen: (open: boolean) => void
  startConversationWithQuery: (query: string) => void
}) => {
  const navigate = useNavigate()
  const { context, reset } = useSearch()

  return (
    <SearchInput.Wrapper
      onFocus={() => {
        setIsInputFocused(true)
      }}
      onBlur={() => {
        setTimeout(() => {
          setIsInputFocused(false)
          setShowSuggestions(false)
        })
      }}
      onMouseEnter={() => {
        setShowSuggestions(true)
      }}
      onMouseLeave={() => {
        setShowSuggestions(false)
      }}
      className={cn(
        'flex py-1 px-3 pr-1 justify-center items-center gap-2 rounded-lg w-full',
        'border-1 border-base-border bg-black/10 transition-all hover:bg-[#151515] hover:shadow-sm',
        {
          'border-purple-600': open,
          'md:border-white border-purple-600': !open && isInputFocused
        }
      )}>
      {isInputFocused || open ? (
        <img
          src={OramaLogoSearchIconActive}
          alt='Orama'
          className='size-4'
        />
      ) : (
        <img
          src={OramaLogoSearchIcon}
          alt='Orama'
          className='size-4'
        />
      )}
      <SearchInput.Input
        onFocus={() => {
          if (context.searchTerm?.trim().length) {
            setOpen(true)
          }
        }}
        searchParams={{
          limit: 3
        }}
        onKeyDown={e => {
          const resultsCount = context.results?.length || 0

          if (e.key === 'ArrowDown') {
            e.preventDefault()
            if (resultsCount > 0) {
              focusedIndex < resultsCount - 1 ? setFocusedIndex(focusedIndex + 1) : setFocusedIndex(0)
            }
          } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            if (resultsCount > 0) {
              focusedIndex > 0 ? setFocusedIndex(focusedIndex - 1) : setFocusedIndex(resultsCount - 1)
            }
          } else if (e.key === 'Enter' && !e.shiftKey) {
            if (focusedIndex >= 0 && focusedIndex < resultsCount && context.results) {
              const focusedResult = context.results[focusedIndex]
              const path = focusedResult.document.path || '#'
              navigate(path)
              setOpen(false)
              e.currentTarget.value = ''
              reset()
            } else {
              const query = String(e.currentTarget.value).trim()
              startConversationWithQuery(query)

              e.currentTarget.value = ''
              reset()
            }
          }
        }}
        placeholder='May curiosity be with you'
        className='flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-400'
      />

      {/* FIX-ME: Not using Orama Ui component for lack of a possibility to track the onAsk using onChat hook */}
      <button
        type='button'
        disabled={!context.searchTerm?.trim().length}
        className={cn(
          'p-1 rounded-md cursor-pointer transition-all z-10 opacity-100 size-6',
          context.searchTerm?.trim().length && open
            ? 'bg-purple-600 text-white'
            : 'bg-[#FFFFFF]/10 text-muted-foreground'
        )}>
        <ArrowUp className={cn('size-4 transition-colors duration-300')} />
      </button>
    </SearchInput.Wrapper>
  )
}

const ResultContainer = ({
  open,
  setOpen,
  loading,
  focusedIndex
}: {
  open: boolean
  setOpen: (open: boolean) => void
  loading: boolean
  focusedIndex: number
}) => {
  const searchResultsRef = useRef<HTMLDivElement>(null)
  const { isAtLeast } = useBreakpoint()

  return (
    <div
      ref={searchResultsRef}
      {...{ tabIndex: open ? 0 : -1 }}
      className={cn(
        'flex flex-col justify-start w-full overflow-hidden transition-all opacity-100 relative md:absolute',
        {
          'opacity-0 h-0 p-0': !open
        },
        isAtLeast('md')
          ? [
              'rounded-tl-none rounded-br-none rounded-tr-none rounded-bl-xl ',
              'border-b-[var(--border-width-border,_1px)] border-l-[var(--border-width-border,_1px)] border-[var(--base-border,rgba(255,255,255,0.10))]',
              'bg-[linear-gradient(0deg,var(--alpha-40,_rgba(10,10,10,0.54))_78.11%,var(--tailwind-colors-purple-950,_rgba(59,7,100,0.90))_119.64%)]',
              'backdrop-blur-[calc(var(--blur-2xl,_40px)_/_2)] border border-base-border border-t-0 bg-black/50',
              'min-h-fit',
              'px-6 pb-6',
              '-top-4 pt-14'
            ]
          : []
      )}>
      <div className='text-xs font-medium w-full text-muted-foreground pt-1.5 pb-3 mt-6'>Related Ai Prompts</div>
      {/* TODO: Create a new component for this */}
      <div className='flex flex-col gap-2'>
        <div
          className='flex-grow animate-pulse h-4 rounded-sm'
          style={{
            background: 'linear-gradient(90deg, rgba(115, 115, 115, 0.50) 0%, rgba(115, 115, 115, 0.00) 100%)'
          }}
        />
        <div
          className='flex-grow animate-pulse h-4 rounded-sm'
          style={{
            background: 'linear-gradient(90deg, rgba(115, 115, 115, 0.50) 0%, rgba(115, 115, 115, 0.00) 100%)'
          }}
        />
        <div
          className='flex-grow animate-pulse h-4 rounded-sm w-1/2'
          style={{
            background: 'linear-gradient(90deg, rgba(115, 115, 115, 0.50) 0%, rgba(115, 115, 115, 0.00) 100%)'
          }}
        />
      </div>
      <Divider className='my-4' />
      <div className='text-xs w-full text-muted-foreground font-medium pb-1'>Search Results</div>
      <SearchResults.Wrapper className='max-w-full'>
        <SearchResults.List>
          {(result: Hit, index: number) => {
            const isFocused = index === focusedIndex

            return (
              <Link
                className={cn(
                  'px-2 py-2 flex gap-2 items-center cursor-pointer overflow-hidden rounded-md transition-colors border border-transparent',
                  isFocused ? 'bg-accent-brand/20 border-accent-brand/40' : 'hover:bg-white/5'
                )}
                to={result.document.path || '#'}
                key={result.id}
                onClick={() => {
                  setOpen(false)
                }}>
                <FileText className='size-4' />
                <div className='flex flex-col min-w-0 flex-1'>
                  <div className='text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis'>
                    {(result.document as { title: string })?.title || 'Untitled'}
                  </div>
                  <div className='text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis'>
                    {(result.document as { content: string })?.content}
                  </div>
                </div>
              </Link>
            )
          }}
        </SearchResults.List>

        {loading && (
          <div className='flex justify-center items-center mt-2'>
            <img
              src={Spinner}
              alt='loading'
              className='size-6 animate-spin'
            />
          </div>
        )}
      </SearchResults.Wrapper>
    </div>
  )
}

const Suggestions = ({
  open,
  showSuggestions,
  setShowSuggestions,
  isInputFocused,
  onSuggestionClick
}: {
  open: boolean
  showSuggestions: boolean
  setShowSuggestions: (open: boolean) => void
  isInputFocused: boolean
  onSuggestionClick: (suggestion: string) => void
}) => {
  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: TODO
    <div
      className={cn(
        'flex flex-col gap-3 pt-3 items-start justify-start md:items-end md:justify-items-end md:absolute right-0 top-[85%] transition-opacity z-2',
        'opacity-0 pointer-events-none w-full hidden md:pr-9',
        {
          'opacity-100 pointer-events-auto flex': !open && (isInputFocused || showSuggestions)
        }
      )}
      onMouseEnter={() => {
        setShowSuggestions(true)
      }}
      onMouseLeave={() => {
        setShowSuggestions(false)
      }}>
      {SUGGESTIONS.map(suggestion => (
        <SuggestionChip
          key={suggestion.text}
          text={suggestion.text}
          className={`${suggestion.className} text-xs`}
          onClick={e => {
            e.stopPropagation()
            e.preventDefault()

            setShowSuggestions(false)
            onSuggestionClick?.(suggestion.text)
          }}
        />
      ))}
    </div>
  )
}

interface TopbarSearchboxProps {
  searchBoxResultsOpen: boolean
  setSearchBoxResultsOpen: (open: boolean) => void
  showSuggestions: boolean
  setShowSuggestions: (showSuggestions: boolean) => void
  isInputFocused: boolean
  setIsInputFocused: (isInputFocused: boolean) => void
}

const TopbarSearchbox: FC<TopbarSearchboxProps> = ({
  searchBoxResultsOpen,
  setSearchBoxResultsOpen,
  showSuggestions,
  setShowSuggestions,
  isInputFocused,
  setIsInputFocused
}) => {
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const { openPanel, startConversationWithQuery } = useSlidingPanel()
  const { context, loading } = useSearch()

  useEffect(() => {
    if (context.searchTerm?.trim().length) {
      setSearchBoxResultsOpen(true)
    }
    // Reset focused index when search term changes
    setFocusedIndex(-1)
  }, [context.searchTerm, setSearchBoxResultsOpen])

  useEffect(() => {
    if (!context.searchTerm?.trim().length) {
      setSearchBoxResultsOpen(false)
    }
  }, [context.searchTerm, setSearchBoxResultsOpen])

  const onSuggestionClick = (suggestion: string) => {
    startConversationWithQuery(suggestion)
  }

  return (
    <>
      {searchBoxResultsOpen && (
        // Backdrop
        // biome-ignore lint/a11y/useSemanticElements: TODO
        <div
          role='button'
          tabIndex={0}
          className='fixed top-0 left-0 right-0 h-dvh w-screen hidden md:block'
          onClick={() => {
            setSearchBoxResultsOpen(false)
          }}
          onKeyDown={e => {
            if (e.key === 'Escape') {
              setSearchBoxResultsOpen(false)
            }
          }}
        />
      )}

      <div className={cn('flex gap-2 justify-start items-center w-full relative md:px-6')}>
        <div className='flex flex-col w-full z-999'>
          <SearchBox
            setIsInputFocused={setIsInputFocused}
            setShowSuggestions={setShowSuggestions}
            isInputFocused={isInputFocused}
            setFocusedIndex={setFocusedIndex}
            focusedIndex={focusedIndex}
            startConversationWithQuery={startConversationWithQuery}
            open={searchBoxResultsOpen}
            setOpen={setSearchBoxResultsOpen}
          />
        </div>
        <button
          type='button'
          onClick={() => {
            openPanel()
          }}
          className={cn(
            'flex items-center justify-center size-8 rounded-md border',
            'border-base-border cursor-pointer text-foreground-muted hover:text-white transition-colors',
            'z-999'
          )}>
          <PanelRight className='size-3' />
        </button>
      </div>

      <Suggestions
        open={searchBoxResultsOpen}
        setShowSuggestions={setShowSuggestions}
        isInputFocused={isInputFocused}
        showSuggestions={showSuggestions}
        onSuggestionClick={onSuggestionClick}
      />

      <ResultContainer
        open={searchBoxResultsOpen}
        setOpen={setSearchBoxResultsOpen}
        loading={loading}
        focusedIndex={focusedIndex}
      />
    </>
  )
}

export default TopbarSearchbox
