import type { ReactNode } from 'react'
import { cn } from '../lib/utils'
import { Divider } from './Divider'
import { Title } from './Title'

interface SectionProps {
  title: string
  children: ReactNode
  hideDivider?: boolean
  className?: string
}

export const Section = ({ title, children, hideDivider, className }: SectionProps) => {
  return (
    <div className={cn(className)}>
      <Title
        as='h2'
        className='mt-6'>
        {title}
      </Title>
      <div className='mt-4 text-muted-foreground'>{children}</div>

      {!hideDivider && <Divider className='my-4' />}
    </div>
  )
}
