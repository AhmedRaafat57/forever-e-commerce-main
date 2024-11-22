import  { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar.jsx'
import Footer from '../Footer.jsx'
import SearchBar from '../SearchBar.jsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {
  return (
    <Fragment>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default MainLayout