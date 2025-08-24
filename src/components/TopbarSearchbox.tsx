import type { Hit } from '@orama/core'
import { ChatRoot } from '@orama/ui/components/ChatRoot'
import { SearchInput } from '@orama/ui/components/SearchInput'
import { SearchResults } from '@orama/ui/components/SearchResults'
import { SearchRoot } from '@orama/ui/components/SearchRoot'
import { useSearch } from '@orama/ui/hooks/useSearch'
import { ArrowUp, FileText, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import LogoOrama from '../assets/logo-orama.svg'
import LogoOramaWhiteSolid from '../assets/orama-solid-white-logo.svg'
import { cn } from '../lib/utils'
import { collectionManager } from '../OramaClient'
import { useSlidingPanel } from '../SlidingPanelContext'
import { Divider } from './Divider'

const TopbarSearchbox = () => {
  return (
    <SearchRoot client={collectionManager}>
      <ChatRoot client={collectionManager}>
        <TopbarSearchboxContent />
      </ChatRoot>
    </SearchRoot>
  )
}

const TopbarSearchboxContent = () => {
  const [open, setOpen] = useState(false)
  const { openPanel, startConversationWithQuery } = useSlidingPanel()

  const { context, reset } = useSearch()

  useEffect(() => {
    if (context.searchTerm?.trim().length) {
      setOpen(true)
    }
  }, [context.searchTerm])

  return (
    <>
      {open && (
        <div
          role='button'
          tabIndex={0}
          className='fixed top-0 left-0 right-0 h-screen w-screen z-[9999]'
          onClick={() => {
            setOpen(false)
          }}
          onKeyDown={e => {
            if (e.key === 'Escape') {
              setOpen(false)
            }
          }}
        />
      )}

      <div
        className={cn(
          'fixed z-[9999] right-0 bottom-0 top-0 flex flex-col gap-4 justify-start items-center w-[384px]',
          'px-8 py-3',
          open && !!context.searchTerm?.trim().length
            ? [
                'rounded-tl-none rounded-br-none rounded-tr-none rounded-bl-xl ',
                'border-b-[var(--border-width-border,_1px)] border-l-[var(--border-width-border,_1px)] border-[var(--base-border,rgba(255,255,255,0.10))]',
                'bg-[linear-gradient(0deg,var(--alpha-40,_rgba(10,10,10,0.54))_78.11%,var(--tailwind-colors-purple-950,_rgba(59,7,100,0.90))_119.64%)]',
                'backdrop-blur-[calc(var(--blur-2xl,_40px)_/_2)] border border-base-border border-t-0',
                'min-h-fit'
              ]
            : ['bg-transparent backdrop-blur-none border-0 rounded-none']
        )}>
        <div className={cn('flex gap-2 justify-start items-center')}>
          <SearchInput.Wrapper
            className={cn(
              'flex py-1 px-3 pr-1 justify-center items-center gap-2 rounded-lg w-[304px] ',
              'border-1 border-base-border bg-black/10 transition-all',
              {
                'border-accent-brand': open && !!context.searchTerm?.trim().length
              }
            )}>
            <img
              src={LogoOrama}
              alt='Orama'
              className='size-4'
            />
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
                if (e.key === 'Enter' && !e.shiftKey) {
                  const query = String(e.currentTarget.value).trim()
                  startConversationWithQuery(query)

                  e.currentTarget.value = ''
                  reset()
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
                  ? 'bg-accent-brand text-white'
                  : 'bg-[#FFFFFF]/10 text-muted-foreground'
              )}>
              <ArrowUp className={cn('size-4 transition-colors duration-300')} />
            </button>
          </SearchInput.Wrapper>
          <button
            type='button'
            onClick={() => {
              openPanel()
            }}
            className={cn(
              'flex items-center justify-center size-8 rounded-md border border-base-border cursor-pointer text-foreground-muted hover:text-white transition-colors'
            )}>
            <Sparkles className='size-3' />
          </button>
        </div>

        <div
          {...{ tabIndex: open ? 0 : -1 }}
          className={cn('flex flex-col justify-start w-full overflow-hidden transition-all opacity-100', {
            'opacity-0': !open
          })}>
          <div className='text-xs w-full text-muted-foreground py-1.5 mt-6'>Related Ai Prompts</div>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2 items-center py-2'>
              <img
                src={LogoOramaWhiteSolid}
                alt='Orama'
                className='size-4'
              />
              <div className='flex-grow bg-gradient-to-r from-[rgba(217,217,217,0.10)] to-[rgba(115,115,115,0.40)] animate-pulse h-2 rounded-full'></div>
            </div>

            <div className='flex gap-2 items-center py-2'>
              <img
                src={LogoOramaWhiteSolid}
                alt='Orama'
                className='size-4'
              />
              <div className='flex-grow bg-gradient-to-r from-[rgba(217,217,217,0.10)] to-[rgba(115,115,115,0.40)] animate-pulse h-2 rounded-full'></div>
            </div>

            <div className='flex gap-2 items-center py-2'>
              <img
                src={LogoOramaWhiteSolid}
                alt='Orama'
                className='size-4'
              />
              <div className='flex-grow bg-gradient-to-r from-[rgba(217,217,217,0.10)] to-[rgba(115,115,115,0.40)] animate-pulse h-2 rounded-full'></div>
            </div>
          </div>
          <Divider className='my-4' />
          <div className='text-xs w-full text-muted-foreground'>Search Results</div>
          <SearchResults.Wrapper>
            <SearchResults.List className=''>
              {(result: Hit) => {
                return (
                  <Link
                    className='px-2 py-2 flex gap-1 items-center cursor-pointer overflow-hidden'
                    to={result.document.path || '#'}
                    onClick={() => {
                      setOpen(false)
                    }}>
                    <FileText className='size-5' />
                    <div className='flex flex-col min-w-0 flex-1'>
                      <div className='text-sm whitespace-nowrap overflow-hidden text-ellipsis'>
                        {(result.document as { title: string })?.title || 'Untitled'}
                      </div>
                      <div className='text-xs whitespace-nowrap overflow-hidden text-ellipsis'>
                        {(result.document as { content: string })?.content}
                      </div>
                    </div>
                  </Link>
                )
              }}
            </SearchResults.List>
          </SearchResults.Wrapper>
        </div>
      </div>
    </>
  )
}

export default TopbarSearchbox
