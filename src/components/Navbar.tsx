import { Link } from 'react-router'
import logo from '../assets/logo.svg'
import { Search } from './Search'
import { StyledNavLink } from './StyledNavLink'

const Navbar = () => {
  return (
    <div className='flex items-center p-2 border-y border-gray-800 bg-[rgba(10,10,10,0.80)] backdrop-blur-xl'>
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

      {/* Items */}
      <div className='flex gap-1 text-xs items-center'>
        <StyledNavLink to='/docs'>Docs</StyledNavLink>
        <StyledNavLink to='#'>Blog</StyledNavLink>
        <StyledNavLink to='#'>FAQ</StyledNavLink>
      </div>

      {/* Search */}
      <div className='flex flex-grow justify-end items-center'>
        <Search />
      </div>
    </div>
  )
}

export default Navbar
