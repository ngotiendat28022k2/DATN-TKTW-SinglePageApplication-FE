import { Delete } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDialog from "../../../utiliti/Notify/confirmDialog";
import helper from "../../../utiliti/helper/helper";
import { RemoveSupplier } from "../../../slice/supplieresSlice";

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
      id: params.id,
    });
  };

  return (
    <Box>
      <Button color="error" variant="contained" onClick={handleDelete}>
        <Delete />
      </Button>
      <ConfirmDialog
        confirmDialog={dialog}
        setConfirmDialog={setDialog}
        onConfirm={async (id) => {
          console.log("id", id);
          try {
            const {payload} = await dispatch(RemoveSupplier(id));
            if (payload?.successCode) {
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
