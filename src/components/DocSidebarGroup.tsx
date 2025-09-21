import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router'
import type { MenuGroup } from '../docMenuItems'
import { cn } from '../lib/utils'

interface DocSidebarGroupProps {
  group: MenuGroup
}

export const DocSidebarGroup = ({ group }: DocSidebarGroupProps) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div>
      <button
        type='button'
        className='flex items-center justify-between transition-all cursor-pointer p-2 w-full'
        onClick={() => setIsOpen(!isOpen)}>
        <h2 className='flex items-center text-sm font-semibold gap-2'>
          <span>{group.icon}</span>
          <span>{group.title}</span>
        </h2>
        <div className='flex items-center'>{isOpen ? <Minus className='size-4' /> : <Plus className='size-4' />}</div>
      </button>
      <div
        className={cn('grid transition-all duration-300 ease-in-out', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
        <div className='overflow-hidden'>
          <ul className='mt-3 ml-4 space-y-2 border-l border-border'>
            {group.items.map(item => (
              <li
                key={item.title}
                className='text-sm text-muted-foreground pl-2'>
                <NavLink to={item.path}>
                  {({ isActive }) => (
                    <button
                      type='button'
                      className={cn(
                        'w-full justify-start text-left text-sm py-1 px-2 rounded-md cursor-pointer hover:text-white transition-all duration-300',
                        {
                          'bg-white/15 text-white': isActive
                        }
                      )}>
                      {item.title}
                    </button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
