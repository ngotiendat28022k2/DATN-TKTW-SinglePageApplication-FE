import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer.component'
import Header from '../components/header/Header.component'
import SlideShow from '../components/slide-show/SlideShow.component'
const ClientLayout = () => {
  return (
    <>
      <header className='bg-[#fff]'>
        <Header />
      </header>
      <div className='max-w-[1280px] w-full m-auto'>
        <Outlet />
      </div>
      <div className='bg-[#fff] py-[20px]'>
        <Footer/>
      </div>
    </>
  )
}

export default ClientLayout