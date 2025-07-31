import { Outlet } from 'react-router'
import DocsSidebar from '../components/DocsSidebar'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  return (
    <div className='flex flex-col h-screen relative'>
      <Navbar />
      <div className='flex flex-grow h-full overflow-hidden'>
        <DocsSidebar />
        <div className='flex-grow p-4 overflow-y-auto'>
          <Outlet />
        </div>
      </div>
      <div className='z-10'>
        <Footer />
      </div>
    </div>
  )
}

export default HomeLayout
