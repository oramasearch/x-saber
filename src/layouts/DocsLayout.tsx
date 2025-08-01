import { useRef } from 'react'
import { Outlet } from 'react-router'
import DocsSidebar from '../components/DocsSidebar'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'

const DocsLayout = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <ScrollToTop scrollRef={scrollRef} />
      <div className='flex flex-col h-screen relative'>
        <Navbar />
        <div className='flex flex-grow h-full overflow-hidden'>
          <DocsSidebar />
          <div
            className='flex-grow overflow-y-auto mx-auto'
            ref={scrollRef}>
            <div className='h-full px-4 py-8 max-w-3xl mx-auto'>
              <Outlet />
            </div>
          </div>
        </div>
        <div className='z-10'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default DocsLayout
