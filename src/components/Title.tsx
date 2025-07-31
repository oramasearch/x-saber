import type { HTMLAttributes, ReactNode } from 'react'

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

const sizeMap = {
  h1: 'text-3xl',
  h2: 'text-xl',
  h3: 'text-3xl',
  h4: 'text-3xl',
  h5: 'text-3xl',
  h6: 'text-3xl',
  p: 'text-3xl',
  span: 'text-3xl'
}

export function Title({ children, as: Component = 'h1', className = '', ...props }: TitleProps) {
  const sizeClass = sizeMap[Component]

  return (
    <Component
      className={`font-sans font-medium ${sizeClass} leading-none tracking-normal ${className}`}
      {...props}>
      {children}
    </Component>
  )
}
