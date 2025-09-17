import { useEffect, useState } from 'react'

// Tailwind CSS default breakpoints
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const

type Breakpoint = keyof typeof breakpoints

export interface BreakpointState {
  /** Current breakpoint name */
  current: Breakpoint | 'xs'
  /** Current window width */
  width: number
  /** Check if current breakpoint is at least the specified breakpoint */
  isAtLeast: (breakpoint: Breakpoint) => boolean
  /** Check if current breakpoint is at most the specified breakpoint */
  isAtMost: (breakpoint: Breakpoint) => boolean
  /** Check if current breakpoint matches exactly */
  is: (breakpoint: Breakpoint | 'xs') => boolean
  /** Responsive boolean values for each breakpoint */
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
  '2xl': boolean
}

const getCurrentBreakpoint = (width: number): Breakpoint | 'xs' => {
  if (width >= breakpoints['2xl']) return '2xl'
  if (width >= breakpoints.xl) return 'xl'
  if (width >= breakpoints.lg) return 'lg'
  if (width >= breakpoints.md) return 'md'
  if (width >= breakpoints.sm) return 'sm'
  return 'xs'
}

export const useBreakpoint = (): BreakpointState => {
  const [windowWidth, setWindowWidth] = useState(() => {
    // Handle SSR by returning a default value
    if (typeof window === 'undefined') return 1024
    return window.innerWidth
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const current = getCurrentBreakpoint(windowWidth)

  const isAtLeast = (breakpoint: Breakpoint): boolean => {
    return windowWidth >= breakpoints[breakpoint]
  }

  const isAtMost = (breakpoint: Breakpoint): boolean => {
    return windowWidth <= breakpoints[breakpoint]
  }

  const is = (breakpoint: Breakpoint | 'xs'): boolean => {
    return current === breakpoint
  }

  return {
    current,
    width: windowWidth,
    isAtLeast,
    isAtMost,
    is,
    sm: windowWidth >= breakpoints.sm,
    md: windowWidth >= breakpoints.md,
    lg: windowWidth >= breakpoints.lg,
    xl: windowWidth >= breakpoints.xl,
    '2xl': windowWidth >= breakpoints['2xl']
  }
}
