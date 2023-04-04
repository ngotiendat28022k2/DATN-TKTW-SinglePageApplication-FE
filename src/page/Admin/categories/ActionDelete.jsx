import { Delete } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { useState } from 'react'
import { RemoveProduct } from "../../../slice/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const ActionDelete = ({params}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log("id", params.row._id);
    dispatch(RemoveProduct(params.row._id));
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