import React from 'react'
import { Navbar, Sides } from '../index'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className='App'>
        <Navbar />
        <div className='page'>
          <Outlet />
        </div>
        <Sides />
    </div>
    </>
  )
}

export default Layout
