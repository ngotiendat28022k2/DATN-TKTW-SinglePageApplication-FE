import { Delete } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ConfirmDialog from '../../../../utiliti/Notify/confirmDialog';
import helper from "../../../../utiliti/helper/helper"
import { RemoveComment } from '../../../../slice/commentSlice';
import { getAllComment } from '../../../../slice/commentSlice';
import { useParams } from 'react-router-dom';

const ActionDelete = ({params}) => {
  const dispatch = useDispatch();
  const {id:productId} = useParams()
  const [dialog, setDialog] = useState({isOpen:false, title:"", subTitle:"", id: "" })
  const handleDelete = () => {
    setDialog({
      isOpen:true,
      title:"You sure remove book!",
      subTitle:"you cannot undo this action.",
      id: params._id
    })
  }
  
  return (
    <Box
    >
        <Button
          color='error'
          variant='text'
          onClick={handleDelete}
        >
            Remove
        </Button>
        <ConfirmDialog
          confirmDialog={dialog}
          setConfirmDialog={setDialog}
          onConfirm={async(id) => {
            console.log("id", id)
            try {
              const {payload} = await dispatch(RemoveComment(id))
              if(payload.success){
                helper.toast("success", payload.message)
                await dispatch(getAllComment(productId))
              }else{
                helper.toast("success", payload.message)
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