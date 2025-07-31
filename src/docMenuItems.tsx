import { Rocket } from 'lucide-react'
import { type JSX, lazy, type ReactNode } from 'react'

const LazyOverview = lazy(() => import('./pages/docs/Overview'))

export type MenuItem = {
  title: string
  path: string
  element: React.LazyExoticComponent<() => JSX.Element>
}

export type MenuGroup = {
  title: string
  icon: ReactNode
  items: MenuItem[]
}

export const docsMenuGroups: MenuGroup[] = [
  {
    title: 'Getting Started',
    icon: <Rocket className='size-4' />,
    items: [
      { title: 'Overview', path: 'overview', element: LazyOverview },
      { title: 'Saber Structure', path: 'blabla', element: LazyOverview },
      { title: 'Saber Structure2', path: 'blabla2', element: LazyOverview },
      { title: 'Saber Structure123', path: 'blabla123', element: LazyOverview }
    ]
  }
]
