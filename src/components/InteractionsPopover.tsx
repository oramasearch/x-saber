import { ChatInteractions } from '@orama/ui/components/ChatInteractions'
import { ArrowRight, XIcon } from 'lucide-react'
import { Fragment, useRef } from 'react'
import LeftTriangle from '../assets/left-triangle.svg'
import OramaWhiteLogo from '../assets/orama-white-logo.svg'
import { cn } from '../lib/utils'

interface InteractionsPopoverProps {
  interactions: any[]
  open: boolean
  inputMode: boolean
  onExpand: () => void
  onClose?: () => void
}

export function InteractionsPopover({ open, interactions, inputMode, onExpand, onClose }: InteractionsPopoverProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <div
      className={cn(
        'flex fixed z-9999 left-0 right-0 bottom-0 md:absolute md:left-[100%] md:top-0 md:bottom-auto md:right-auto md:-translate-y-[30px] md:translate-x-[20px] md:w-[450px] h-auto opacity-100 pointer-events-auto transition-opacity',
        {
          'opacity-0 pointer-events-none': !open
        }
      )}>
      <div className='relative bg-black/40 md:bg-black/50 p-3 pb-6 md:pb-3 border border-base-border backdrop-blur-xl rounded-md w-full'>
        {/* Triangle with custom mask to hide overlap */}
        <div
          className='absolute -left-[11px] top-0 mt-[42px]'
          style={{
            maskImage: 'linear-gradient(to right, black 0%, black 80%, transparent 50%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 80%, transparent 50%)'
          }}>
          <img
            src={LeftTriangle}
            alt='Triangle pointer'
            className='w-[14px] h-[16px]'
          />
        </div>
        <ChatInteractions.Wrapper
          ref={containerRef}
          className='items-start relative overflow-y-auto h-full w-full'>
          {(interaction, index) => {
            if (index !== interactions!.length - 1) {
              return null
            }

            return (
              <Fragment key={interaction.id}>
                <div className='flex items-center gap-2'>
                  <img
                    src={OramaWhiteLogo}
                    alt='Orama'
                    className='size-4'
                  />
                  <ChatInteractions.UserPrompt className='text-lg text-white'>
                    {interaction.query}
                  </ChatInteractions.UserPrompt>
                  <button
                    type='button'
                    className='ml-auto cursor-pointer'
                    onClick={onClose}>
                    <XIcon className='size-4' />
                  </button>
                </div>
                <div className='mt-3'>
                  {interaction.response.length === 0 ? (
                    <div className='flex flex-col gap-3 p-3'>
                      <div className='h-[16px] w-full rounded-md bg-gradient-to-r from-transparent via-white/[0.05] to-white/[0.06] via-[20%] animate-pulse' />
                      <div className='h-[16px] w-full rounded-md bg-gradient-to-r from-transparent via-white/[0.05] to-white/[0.06] via-[20%] animate-pulse' />
                      <div className='h-[16px] w-[90%] rounded-md bg-gradient-to-r from-transparent via-white/[0.05] to-white/[0.06] via-[20%] animate-pulse' />
                    </div>
                  ) : (
                    <div
                      className='max-h-[200px] overflow-y-auto'
                      style={{ scrollbarWidth: 'none' }}>
                      <ChatInteractions.AssistantMessage
                        className='text-xs text-muted-foreground'
                        markdownClassnames={{
                          p: 'my-2',
                          pre: 'rounded-md [&_pre]:rounded-md [&_pre]:p-4 [&_pre]:my-3 [&_pre]:overflow-auto',
                          code: 'p-1 rounded'
                        }}>
                        {interaction.response}
                      </ChatInteractions.AssistantMessage>
                    </div>
                  )}
                </div>
                {!interaction.loading && (
                  <button
                    type='button'
                    onClick={onExpand}
                    className='flex gap-2 items-center justify-center mt-3 py-2 px-3 w-full bold bg-base-primary text-black rounded-md text-xs cursor-pointer hover:bg-base-primary/90 transition-colors'>
                    Expand
                    <ArrowRight size={16} />
                  </button>
                )}
              </Fragment>
            )
          }}
        </ChatInteractions.Wrapper>
      </div>
    </div>
  )
}
