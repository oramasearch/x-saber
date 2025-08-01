import type { ReactNode } from 'react'
import { Link } from 'react-router'

export type CardProps = {
  icon: ReactNode
  title: ReactNode
  to?: string
  description: ReactNode
}

const Card = ({ icon, title, to, description }: CardProps) => {
  const cardContent = (
    <div className='flex flex-col gap-4 items-start'>
      <div className='p-3 rounded-lg bg-emerald-500/10'>{icon}</div>
      <div className='flex-1'>
        <h3 className='text-lg font-semibold text-white mb-2'>{title}</h3>
        <p className='text-muted-foreground text-sm'>{description}</p>
      </div>
    </div>
  )
  return (
    <div className='border border-border rounded-xl p-6 bg-background/5 hover:bg-background/10 transition-colors'>
      {to ? <Link to={to}>{cardContent}</Link> : cardContent}
    </div>
  )
}

export default Card
