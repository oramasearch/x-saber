import { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function ScrollToTop({ scrollRef }: { scrollRef: React.RefObject<HTMLDivElement | null> }) {
  const { pathname } = useLocation()

  // biome-ignore lint/correctness/useExhaustiveDependencies: Only path supposed to be used here
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
