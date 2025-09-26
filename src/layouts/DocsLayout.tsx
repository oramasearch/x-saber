import { useRef, useState } from 'react'
import { Outlet } from 'react-router'
import DocsSidebar from '../components/DocsSidebar'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'

const DocsLayout = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isSidebarActive, setIsSidebarActive] = useState(false)

  return (
    <>
      <ScrollToTop scrollRef={scrollRef} />
      <div className='flex flex-col h-screen relative'>
        <div className='md:static fixed top-0 left-0 right-0 z-11 overflow-y-auto md:overflow-y-visible max-h-dvh bg-black'>
          <Navbar
            onSidebarActive={open => {
              setIsSidebarActive(open)
            }}
          />
          <div className='md:hidden block'>
            <DocsSidebar isSidebarActive={isSidebarActive} />
          </div>
        </div>
        <div className='flex flex-grow h-full overflow-hidden'>
          <div className='md:block hidden overflow-y-auto flex-shrink-0'>
            <DocsSidebar />
          </div>
          <div
            className='flex-grow overflow-y-auto mx-auto root-scrollable-container'
            ref={scrollRef}>
            <div className='h-full px-4 py-8 max-w-3xl mx-auto pt-[200px] md:pt-[30px]'>
              <Outlet />
              <div className='pb-16' />
              <div className='md:hidden block'>
                <Footer />
              </div>
            </div>
          </div>
        </div>
        <div className='z-10 md:block hidden'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default DocsLayout
