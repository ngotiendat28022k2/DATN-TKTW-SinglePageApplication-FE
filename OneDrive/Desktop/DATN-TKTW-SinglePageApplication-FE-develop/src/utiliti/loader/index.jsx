import { CircularProgress } from '@mui/material'
import React from 'react'


function Loader() {
  console.log("loader")
  return (
    <div className='relative h-[100vh] w-full'>
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h2 className='text-PK-client text-[23px] animate-pulse'>Loading...</h2>
        </div>
    </div>  
  )
}
export default Loader
