import { docsMenuGroups } from '../docMenuItems'
import { DocSidebarGroup } from './DocSidebarGroup'

const DocsSidebar = () => {
  return (
    <div
      className='py-6 px-4 overflow-y-auto w-[308px] min-w-[308px]'
      style={{ scrollbarWidth: 'none' }}>
      <div className='flex w-full'>
        <div className='flex flex-col gap-6 w-full'>
          {docsMenuGroups.map(group => (
            <DocSidebarGroup
              key={group.title}
              group={group}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DocsSidebar
