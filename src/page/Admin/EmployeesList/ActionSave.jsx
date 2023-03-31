import { Check, Save } from '@mui/icons-material'
import { Box, Button, CircularProgress, Fab } from '@mui/material'
import { green } from '@mui/material/colors'
import { useEffect, useState } from 'react'

const ActionSave = ({params, rowId, setRowId}) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const handleSave =async () => {
    try {
      setLoading(true)
      // callAPI
      const result = true
      if(result){
        setSuccess(true)
        setRowId(null)
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(rowId === params.id && success) setSuccess(false)
  }, [rowId])
  return (
    <Box
      sx={{
        m:1,
        position:"relative"
      }}
    >
    {
      success ? (
        <Fab
          color='primary'
          sx={{
            width:"40px",
            height:"40px",
            bgcolor:green[500],
            "&:hover":{bgcolor:green[700]}
          }}
        >
          <Check/>
        </Fab>
      ) : (
        <Fab
          color='primary'
          sx={{
            width:"40px",
            height:"40px",
          }}
          disabled={params.id !== rowId || loading}
          onClick={handleSave}
        >
          <Save/>
        </Fab>
      )
    } 
    {
      loading && (
        <CircularProgress
          size={52}
          sx={{
            color:green[500],
            position:"absolute",
            top:-6,
            left:-6,
            zIndex:1
          }}
        />
      )
    }     
    </Box>
  )
}

export default ActionSave