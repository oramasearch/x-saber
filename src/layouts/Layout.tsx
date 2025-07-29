import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-col h-screen'>
        <Navbar />
        <div className='flex flex-grow'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
