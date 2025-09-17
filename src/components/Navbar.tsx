import { SearchRoot } from '@orama/ui/components/SearchRoot'
import { MenuIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import logo from '../assets/logo.svg'
import { useBreakpoint } from '../hooks/useBreakpoint'
import { cn } from '../lib/utils'
import { collectionManager } from '../OramaClient'
import { Button } from './Button'
import { StyledNavLink } from './StyledNavLink'
import TopbarSearchbox from './TopbarSearchbox'

const Navbar = () => {
  const [searchBoxResultsOpen, setSearchBoxResultsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [topbarHeight, setTopbarHeight] = useState<number | string>('auto')

  const breakpoint = useBreakpoint()

  const topbarRef = useRef<HTMLDivElement>(null)

  // Update height when mobile menu opens/closes
  useEffect(() => {
    if (isMobileMenuOpen && !breakpoint.md) {
      // Set to full viewport height for mobile menu
      setTopbarHeight('100vh')
    } else {
      // Let it size naturally
      setTopbarHeight('auto')
    }
  }, [isMobileMenuOpen, breakpoint.md])

  return (
    <SearchRoot client={collectionManager}>
      <div
        ref={topbarRef}
        style={{ height: topbarHeight }}
        className={cn(
          'flex flex-col gap-2 md:flex-row px-4 pb-3 pt-3 md:pt-2 md:pb-2 md:px-2 border-b',
          'border-white/10 bg-[rgba(10,10,10,0.80)] backdrop-blur-xl transition-all duration-300 ease-in-out',
          {
            'backdrop-blur-2xl bg-gradient-to-b from-purple-950 to-[#0A0A0A88]': searchBoxResultsOpen && !breakpoint.md,
            'bg-black absolute top-0 left-0 right-0': isMobileMenuOpen
          }
        )}>
        <div className='flex flex-none md:flex-grow'>
          <div className='flex-grow flex items-center'>
            <div className='flex-1 flex items-start md:hidden'>
              <Button
                variant='ghost'
                onClick={() => setIsMobileMenuOpen(old => !old)}>
                <MenuIcon className='size-6' />
              </Button>
            </div>
            <div className='flex-0'>
              <Link
                to='/'
                className='flex px-6 items-center flex-nowrap'>
                <img
                  src={logo}
                  alt='logo'
                  className='w-10 h-10'
                />
                <span
                  className='-m-1 whitespace-nowrap'
                  style={{ fontFamily: 'var(--font-family-michroma)' }}>
                  -Saber
                </span>
              </Link>
            </div>

            <div className='hidden gap-1 text-sm items-center ml-10 md:flex'>
              <StyledNavLink to='/docs'>Docs</StyledNavLink>
              <StyledNavLink to='#'>Blog</StyledNavLink>
              <StyledNavLink to='#'>FAQ</StyledNavLink>
            </div>
            <div className='flex-1 md:hidden' />
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='flex-1'>
            {isMobileMenuOpen ? (
              <div className='flex flex-col gap-2 mt-8'>
                <StyledNavLink to='/docs'>Docs</StyledNavLink>
                <StyledNavLink to='#'>Blog</StyledNavLink>
                <StyledNavLink to='#'>FAQ</StyledNavLink>
              </div>
            ) : (
              <div className=''>
                <TopbarSearchbox
                  searchBoxResultsOpen={searchBoxResultsOpen}
                  setSearchBoxResultsOpen={setSearchBoxResultsOpen}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </SearchRoot>
  )
}

export default Navbar
