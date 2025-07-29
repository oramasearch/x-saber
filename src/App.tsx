import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './layouts/Layout'

const LazyDocs = lazy(() => import('./pages/Docs'))
const LazyHome = lazy(() => import('./pages/Home'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
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
        element: (
          <Suspense>
            <LazyDocs />
          </Suspense>
        )
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
