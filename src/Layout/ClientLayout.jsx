import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer.component'
import Header from '../components/header/Header.component'
const ClientLayout = () => {
  return (
    <>
        <header>
            <Header/>
        </header>

            <div className='max-w-[1280px] w-full m-auto'>
                <Outlet/>
            </div>   
         <div>
            {/* <Footer/> */}
         </div>
    </>
  )
}

export default ClientLayout