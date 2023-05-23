import { Delete } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDialog from "../../../utiliti/Notify/confirmDialog";
import helper from "../../../utiliti/helper/helper";
import { RemoveCategory } from "../../../slice/categorySlice";
import { RemoveComment, getAllComment } from "../../../slice/commentSlice";

const ActionDelete = ({ params }) => {
  console.log('params', params);
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
      <Button color="error" variant="contained" onClick={handleDelete}>
        <Delete />
      </Button>
      <ConfirmDialog
        confirmDialog={dialog}
        setConfirmDialog={setDialog}
        onConfirm={async (params) => {
          console.log("id", params);
          try {
            const {payload} = await dispatch(RemoveComment(params.id));
            if (payload?.success) {
              helper.toast("success", payload.message);
              await dispatch(getAllComment(params.row.product._id))
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
