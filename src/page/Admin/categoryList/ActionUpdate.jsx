import { Delete, Update } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { useState } from 'react'
import { RemoveProduct } from "../../../slice/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const ActionUpdate = ({params}) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.value);
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