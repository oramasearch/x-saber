import type { FC } from 'react'
import { NavLink } from 'react-router'
import { cn } from '../lib/utils'

interface StyledNavLinkProps {
  to: string
  children: React.ReactNode
}

export const StyledNavLink: FC<StyledNavLinkProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn('px-3 py-2 rounded-md transition-all duration-300 bg-transparent flex justify-between items-center', {
          'bg-white/15': isActive && to !== '#'
        })
      }>
      {children}
    </NavLink>
  )
}
