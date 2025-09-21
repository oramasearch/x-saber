import { ChevronDownIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { docsMenuGroups } from '../docMenuItems'
import { cn } from '../lib/utils'
import { Divider } from './Divider'
import { DocSidebarGroup } from './DocSidebarGroup'

const DocsSidebar = ({ isSuggestionShown }: { isSuggestionShown?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // biome-ignore lint/correctness/useExhaustiveDependencies: Everytime location changes we need to close the navbar
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    if (isSuggestionShown) {
      setIsOpen(false)
    }
  }, [isSuggestionShown])

  return (
    <div
      className='flex min-w-[308px] w-full bg-[#171717] md:bg-transparent'
      style={{ scrollbarWidth: 'none' }}>
      <div className='flex flex-col md:flex-row w-full md:pt-6 pt-0'>
        <button
          type='button'
          className={cn('flex justify-between items-center md:hidden p-3 border-y border-y-border', {
            'hidden': isSuggestionShown
          })}
          onClick={() => setIsOpen(!isOpen)}>
          <div className='text-sm'>Menu</div>
          <div>
            <ChevronDownIcon
              onClick={() => setIsOpen(!isOpen)}
              className={cn('size-4 transform transition-all duration-300 ease-in-out', {
                'rotate-180': isOpen
              })}
            />
          </div>
        </button>
        <div
          className={cn(
            'grid transition-all duration-300 ease-in-out md:grid-rows-[1fr] md:px-2 md:py-2',
            isOpen ? 'grid-rows-[1fr] px-2 py-2' : 'grid-rows-[0fr]'
          )}>
          <div className='overflow-hidden md:overflow-visible flex flex-col gap-6 w-full'>
            {docsMenuGroups.map(group => (
              <DocSidebarGroup
                key={group.title}
                group={group}
              />
            ))}
          </div>
        </div>
      </div>
      <Divider orientation='vertical' />
    </div>
  )
}

export default DocsSidebar
