import React from 'react'
import Navbar from './Components/Header/Navbar'
// import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router'



function Layout() {
  return (
    <div>
      <Navbar  />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
