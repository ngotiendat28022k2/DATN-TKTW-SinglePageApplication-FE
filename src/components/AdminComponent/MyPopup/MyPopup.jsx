import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


const Popup = (props) => {
    const {title, children, openPopup, setOpenPopup} = props
    const onHandleOnClose = () => {
      setOpenPopup(false)
    }
    // console.log("props.children", props);
    // console.log("props.children", children);
    
  return (
        <Dialog
            open={openPopup}
            maxWidth="md"
            scroll="body"
            onClose={onHandleOnClose}
        >
            <DialogTitle
                sx={{
                    display:"flex"
                    ,justifyContent:"space-between",
                    alignItems:"center",
                    maxWidth:"100%",
                    margin:"auto"
                }}
            >
                <Typography 
                    variant='h2'
                    color="#172b4d"
                    sx={{fontSize:"20px", textTransform:"capitalize"}}
                >
                    {title}
                </Typography>
                <Button
                    variant='text'
                    onClick={() => setOpenPopup(false)}
                    autoFocus
                    sx={{
                        position:"absolute",
                        top:10,
                        right:3
                    }}
                >
                        <CloseIcon />
                </Button>
            </DialogTitle>

            <DialogContent
                sx={{
                    width:"100%",
                    margin:"auto",
                }}
            >
                {children}
            </DialogContent>
        </Dialog>
    
  )
}

export default Popup