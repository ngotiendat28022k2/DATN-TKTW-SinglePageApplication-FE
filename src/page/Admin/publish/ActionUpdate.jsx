import { Delete, Update } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { useState } from 'react'

const ActionUpdate = ({params}) => {
  const handleUpdate = () => {
    console.log(params)
  }
  return (
    <Box
    >
        <Button
          variant='contained'
          color='info'
          onClick={handleUpdate}
        >
            <Update/>
        </Button>
    </Box>
  )
}

export default ActionUpdate