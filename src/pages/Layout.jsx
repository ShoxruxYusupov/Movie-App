import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Layout() {
  return (
    <>
        <Header />
        <div className="backcolor">
          <Outlet />
        </div>
        <Footer />

    </>
  )
}

export default Layout