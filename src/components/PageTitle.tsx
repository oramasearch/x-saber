import { Title } from './Title'

interface PageTitleProps {
  children: string
}

export const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <>
      <Title as='h1'>{children}</Title>
      <div className='w-full border-b border-gray-200/10 pb-6'></div>
    </>
  )
}
