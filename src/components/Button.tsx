import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  to?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function Button({ children, to, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = 'rounded-md px-4 py-2 shadow-sm text-sm font-medium leading-5 transition-all hover:cursor-pointer'

  const variantStyles = {
    primary: 'bg-purple-800 text-zinc-50 hover:bg-purple-900',
    secondary: 'bg-transparent text-zinc-300 hover:bg-zinc-800',
    ghost: 'bg-transparent text-zinc-400 hover:bg-zinc-800/50 shadow-none'
  }

  const buttonElement = (
    <button
      type='button'
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}>
      {children}
    </button>
  )

  if (to) {
    return <Link to={to}>{buttonElement}</Link>
  }

  return buttonElement
}
