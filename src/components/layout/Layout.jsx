import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import './layout.css'

const Layout = () => {
  return (
    <div className='layout'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Layout