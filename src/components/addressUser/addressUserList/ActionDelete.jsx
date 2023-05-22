import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDialog from "../../../utiliti/Notify/confirmDialog";
import helper from "../../../utiliti/helper/helper";
import { RemoveAddressUser, getAllAddressUser } from "../../../slice/addressUserSlide";

const ActionDelete = ({ params }) => {
  const dispatch = useDispatch();
  const [dialog, setDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
    id: "",
  });
  const handleDelete = () => {
    setDialog({
      isOpen: true,
      title: "You sure remove!",
      subTitle: "you cannot undo this action.",
      id: params,
    });
  };

  return (
    <Box>
      <Button color="error" variant="outlined" onClick={handleDelete} sx={{fontSize:"10px", marginTop:"10px"}}>
        Xoá
      </Button>
      <ConfirmDialog
        confirmDialog={dialog}
        setConfirmDialog={setDialog}
        onConfirm={async (params) => {
          try {
            const {payload} = await dispatch(RemoveAddressUser(params._id));
            console.log("payload", payload)
            if (payload?.successCode) {
              await dispatch(getAllAddressUser(params.user._id))
              helper.toast("success", "Remove SuccessFully!");
            }
            if (payload?.errorCode) {
              helper.toast("error", payload.message);
            }
          } catch (error) {
            helper.toast("error", error.message);
          }
        }}
      />
    </Box>
  );
};

export default ActionDelete;
