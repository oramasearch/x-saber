import { docsMenuGroups } from '../docMenuItems'
import { Divider } from './Divider'
import { DocSidebarGroup } from './DocSidebarGroup'

const DocsSidebar = () => {
  return (
    <div
      className='flex overflow-y-auto w-[308px] min-w-[308px]'
      style={{ scrollbarWidth: 'none' }}>
      <div className='flex w-full pt-6'>
        <div className='flex flex-col gap-6 p-2 w-full'>
          {docsMenuGroups.map(group => (
            <DocSidebarGroup
              key={group.title}
              group={group}
            />
          ))}
        </div>
      </div>
      <Divider orientation='vertical' />
    </div>
  )
}

export default DocsSidebar
