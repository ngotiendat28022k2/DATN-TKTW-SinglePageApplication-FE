import { Delete } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ConfirmDialog from '../../../utiliti/Notify/confirmDialog';
import helper from "../../../utiliti/helper/helper"
import { RemoveProduct } from '../../../slice/productsSlice';

const ActionDelete = ({params}) => {
  const dispatch = useDispatch();
  const [dialog, setDialog] = useState({isOpen:false, title:"", subTitle:"", id: "" })
  const handleDelete = () => {
    setDialog({
      isOpen:true,
      title:"You sure remove book!",
      subTitle:"you cannot undo this action.",
      id: params.id
    })
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
        <ConfirmDialog
          confirmDialog={dialog}
          setConfirmDialog={setDialog}
          onConfirm={async(id) => {
            console.log("id", id)
            try {
              const res = await dispatch(RemoveProduct(id))
              if(res.payload.data?.successCode){
                helper.toast("success", "Remove Book SuccessFully!")
              }
              if(res.payload.data?.errorCode){
                helper.toast("error", res.payload.data.message)
              }
            } catch (error) {
              helper.toast("error", error.message)    
            }
          }}
      />
    </Box>
  )
}

export default ActionDelete