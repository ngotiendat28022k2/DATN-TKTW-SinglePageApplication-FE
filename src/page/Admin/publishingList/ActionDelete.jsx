import { Delete } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { useState } from 'react'

const ActionDelete = ({params}) => {
  const handleDelete = () => {
    console.log(params)
  }
  return (
    <Box
    >
        <Button
          color='error'
          variant='contained'
          onClick={handleDelete}
        >
            <Delete/>
        </Button>
    </Box>
  )
}

export default ActionDelete