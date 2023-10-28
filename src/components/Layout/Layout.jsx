import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../Navbar Div/NavBar'
import MainDivThree from '../Footer/FinalFooter'
import { Suspense } from 'react'
import LazyLoader from '../LazyLoader'

const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<LazyLoader/>}>
        <Outlet />
      </Suspense>
      <MainDivThree />
    </>
  )
}

export default Layout