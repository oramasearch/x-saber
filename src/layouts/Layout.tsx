import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen relative'>
      <div className='sticky top-0 z-10'>
        <Navbar />
      </div>
      <div className='flex flex-grow'>
        <Outlet />
      </div>
      <div className='z-10'>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
