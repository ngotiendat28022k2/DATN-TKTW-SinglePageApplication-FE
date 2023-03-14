import React from 'react'
import { Outlet } from 'react-router-dom'

const ClientLayout = () => {
  return (
    <>
        <header>
            header
            </header>

            <div>
                <Outlet/>
            </div>   
            <footer>
                footer
            </footer>
    </>
  )
}

export default ClientLayout