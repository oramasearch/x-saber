import { ChatRoot } from '@orama/ui/components/ChatRoot'
import { SearchInput } from '@orama/ui/components/SearchInput'
import { SearchResults } from '@orama/ui/components/SearchResults'
import { SearchRoot } from '@orama/ui/components/SearchRoot'
import { useChat } from '@orama/ui/hooks/useChat'
import { useSearch } from '@orama/ui/hooks/useSearch'
import { CornerDownLeft, FileText } from 'lucide-react'
import { useEffect, useState } from 'react'
import LogoOrama from '../assets/logo-orama.svg'
import LogoOramaWhiteSolid from '../assets/orama-solid-white-logo.svg'
import { cn } from '../lib/utils'
import { collectionManager } from '../OramaClient'
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
  const { context } = useSearch()

  const { ask } = useChat()

  const { results, count } = context

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
          open
            ? [
                'rounded-tl-none rounded-br-none rounded-tr-none rounded-bl-xl ',
                'border-b-[var(--border-width-border,_1px)] border-l-[var(--border-width-border,_1px)] border-[var(--base-border,rgba(255,255,255,0.10))]',
                'bg-[linear-gradient(0deg,var(--alpha-40,_rgba(10,10,10,0.54))_78.11%,var(--tailwind-colors-purple-950,_rgba(59,7,100,0.90))_119.64%)]',
                'backdrop-blur-[calc(var(--blur-2xl,_40px)_/_2)] border border-base-border border-t-0',
                'min-h-fit'
              ]
            : ['bg-transparent backdrop-blur-none border-0 rounded-none']
        )}>
        <div className={cn('flex flex-col gap-2 justify-start items-center')}>
          <SearchInput.Wrapper
            className={cn(
              'flex py-1 px-3 justify-center items-center gap-2 rounded-md borde w-[304px] ',
              'border-[#737373] bg-gray-900/50 shadow-[0_0_0_3px_rgba(115,115,115,0.5)]'
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
              placeholder='Search for anything...'
              className='flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-400'
            />

            {/* FIX-ME: Not using Orama Ui component for lack of a possibility to track the onAsk using onChat hook */}
            <button
              type='button'
              disabled={!context.searchTerm?.trim().length}
              className={cn(
                'p-1 rounded-md border border-base-border cursor-pointer transition-all z-10 opacity-100',
                [1].length > 0 ? 'bg-base-primary text-black' : 'bg-gray-800/50 text-white',
                {
                  'opacity-50': !context.searchTerm?.trim().length
                }
              )}>
              <CornerDownLeft className={cn('size-4 transition-colors duration-300', 'text-black')} />
            </button>
          </SearchInput.Wrapper>
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
              {result => {
                return (
                  <div className='px-2 py-2 flex gap-1 items-center cursor-pointer overflow-hidden'>
                    <FileText className='size-5' />
                    <div className='flex flex-col'>
                      <div className='text-sm whitespace-nowrap overflow-hidden text-ellipsis'>
                        {(result.document as { title: string }).title}
                      </div>
                      <div className='text-xs whitespace-nowrap'>
                        {(result.document as { content: string }).content.slice(0, 44)}...
                      </div>
                    </div>
                  </div>
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
