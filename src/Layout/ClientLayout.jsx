import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

const ClientLayout = () => {
  return (
    <>
        <header>
            header
            </header>

            <div className='max-w-[1280px] w-full m-auto'>
                <Outlet/>
            </div>   
         <div>
            <Footer/>
         </div>
    </>
  )
}

export default ClientLayout