import { SearchRoot } from '@orama/ui/components/SearchRoot'
import { ArrowRightIcon, MenuIcon, XIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import logo from '../assets/logo.svg'
import { useBreakpoint } from '../hooks/useBreakpoint'
import { cn } from '../lib/utils'
import { collectionManager } from '../OramaClient'
import { Button } from './Button'
import { StyledNavLink } from './StyledNavLink'
import TopbarSearchbox from './TopbarSearchbox'

/**
 * Navbar style constants organized by purpose
 * - base: Core layout and transition styles
 * - backgrounds: Different background states based on user interaction
 * - heights: Dynamic height states for mobile responsiveness
 */
const NAVBAR_STYLES = {
  base: 'flex flex-col md:flex-row md:h-auto transition-all duration-300 ease-in-out',
  backgrounds: {
    transparent: 'bg-transparent border-transparent backdrop-blur-none',
    searchActive:
      'border-b border-white/10 bg-[linear-gradient(0deg,rgba(10,10,10,1)_-1.36%,rgba(59,7,100,1)_157.73%)]',
    mobileMenu: 'border-b border-white/10 bg-black',
    default: 'border-b border-white/10 bg-[rgba(10,10,10,0.80)] backdrop-blur-xl'
  },
  heights: {
    full: 'h-dvh',
    auto: 'h-auto'
  }
}

const Navbar = ({ onSidebarActive }: { onSidebarActive?: (open: boolean) => void }) => {
  const [searchBoxResultsOpen, setSearchBoxResultsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isScrolledToTop, setIsScrolledToTop] = useState(true)

  const breakpoint = useBreakpoint()

  const topbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    onSidebarActive?.(showSuggestions || isInputFocused || searchBoxResultsOpen)
  }, [showSuggestions, isInputFocused, searchBoxResultsOpen, onSidebarActive])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledToTop(window.scrollY === 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Check on mount
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Simplified state checks
  const isMobile = breakpoint.isAtMost('md')
  const isSearchActive = isInputFocused || showSuggestions || searchBoxResultsOpen
  const isTransparent = isScrolledToTop && isMobile && !isSearchActive
  const isFullHeight = isMobile && (searchBoxResultsOpen || isMobileMenuOpen)

  // Determine background style
  const getBackgroundStyle = () => {
    if (isTransparent) return NAVBAR_STYLES.backgrounds.transparent
    if (isMobile && isSearchActive) return NAVBAR_STYLES.backgrounds.searchActive
    if (isMobileMenuOpen && isMobile) return NAVBAR_STYLES.backgrounds.mobileMenu
    return NAVBAR_STYLES.backgrounds.default
  }

  // Build navbar classes
  const navbarClasses = cn(
    NAVBAR_STYLES.base,
    getBackgroundStyle(),
    isFullHeight ? NAVBAR_STYLES.heights.full : NAVBAR_STYLES.heights.auto
  )

  return (
    <SearchRoot client={collectionManager}>
      <div
        ref={topbarRef}
        className={navbarClasses}>
        <div className='flex flex-none md:flex-grow py-1 px-4'>
          <div className='flex flex-grow space-between'>
            <div className='flex items-start md:hidden flex-1'>
              <Button
                variant='ghost'
                className='!p-2'
                onClick={() => {
                  setIsMobileMenuOpen(old => !old)
                }}>
                {isMobileMenuOpen ? <XIcon className='size-6' /> : <MenuIcon className='size-6' />}
              </Button>
            </div>

            <div className='flex flex-1 justify-center md:flex-none md:justify-start px-0 md:px-6'>
              <Link
                to='/'
                className='flex flex-nowrap items-center'>
                <img
                  src={logo}
                  alt='logo'
                  className='h-10 w-10'
                />
                <span
                  className='-m-1 whitespace-nowrap'
                  style={{ fontFamily: 'var(--font-family-michroma)' }}>
                  -Saber
                </span>
              </Link>
            </div>

            <div className='ml-2 hidden items-center gap-1 text-sm md:flex flex-1'>
              <StyledNavLink to='/docs'>Docs</StyledNavLink>
              <StyledNavLink to='#'>Blog</StyledNavLink>
              <StyledNavLink to='#'>FAQ</StyledNavLink>
            </div>
            <div className='md:hidden flex-1 flex justify-end items-center'>
              {(isInputFocused || searchBoxResultsOpen) && (
                <Button
                  variant='ghost'
                  className='!p-2'
                  onClick={() => {
                    setIsInputFocused(false)
                    setSearchBoxResultsOpen(false)
                  }}>
                  <XIcon className='size-6' />
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className='flex items-center gap-2 -mr-0 md:-mr-4 py-2 px-4'>
          <div className='relative flex-1 max-w-full'>
            {isMobileMenuOpen ? (
              <div className='mt-8 flex flex-col gap-2'>
                <StyledNavLink to='/docs'>
                  Docs <ArrowRightIcon className='size-4' />
                </StyledNavLink>
                <StyledNavLink to='#'>
                  Blog <ArrowRightIcon className='size-4' />
                </StyledNavLink>
                <StyledNavLink to='#'>
                  FAQ <ArrowRightIcon className='size-4' />
                </StyledNavLink>
              </div>
            ) : (
              <TopbarSearchbox
                searchBoxResultsOpen={searchBoxResultsOpen}
                setSearchBoxResultsOpen={setSearchBoxResultsOpen}
                showSuggestions={showSuggestions}
                setShowSuggestions={setShowSuggestions}
                isInputFocused={isInputFocused}
                setIsInputFocused={setIsInputFocused}
              />
            )}
          </div>
        </div>
      </div>
    </SearchRoot>
  )
}

export default Navbar
