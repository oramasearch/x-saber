import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import { XSaberSlidingPanel } from './components/XSaberSlidingPanel'
import { docsMenuGroups } from './docMenuItems'
import DocsLayout from './layouts/DocsLayout'
import { SlidingPanelProvider } from './SlidingPanelContext'

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
  return (
    <SlidingPanelProvider>
      <XSaberSlidingPanel />
      <RouterProvider router={router} />
    </SlidingPanelProvider>
  )
}

export default App
