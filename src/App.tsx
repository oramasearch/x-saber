import { ChatRoot } from '@orama/ui/components/ChatRoot'
import { SearchRoot } from '@orama/ui/components/SearchRoot'
import { SlidingPanel } from '@orama/ui/components/SlidingPanel'
import { lazy, Suspense, useState } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import { docsMenuGroups } from './docMenuItems'
import DocsLayout from './layouts/DocsLayout'
import { collectionManager } from './OramaClient'

const LazyHome = lazy(() => import('./pages/Home'))

const docsRoutes = []
for (const menu of docsMenuGroups) {
  for (const item of menu.items) {
    docsRoutes.push({
      title: item.title,
      path: item.path,
      element: (
        <Suspense>
          <item.element />
        </Suspense>
      )
    })
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense>
        <LazyHome />
      </Suspense>
    )
  },
  {
    path: '/docs',
    element: <DocsLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='overview' />
      },
      ...docsRoutes,
      {
        path: 'docs/*',
        element: <Navigate to='overview' />
      }
    ]
  }
])

function App() {
  const [open, setOpen] = useState(true)

  return (
    <SearchRoot client={collectionManager}>
      <ChatRoot client={collectionManager}>
        <RouterProvider router={router} />
      </ChatRoot>
    </SearchRoot>
  )
}

export default App
