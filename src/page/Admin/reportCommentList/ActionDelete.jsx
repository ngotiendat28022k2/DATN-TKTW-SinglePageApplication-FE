import { Delete } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDialog from "../../../utiliti/Notify/confirmDialog";
import helper from "../../../utiliti/helper/helper";
import { RemoveCategory } from "../../../slice/categorySlice";
import { RemoveComment, RemoveReport, getAllComment } from "../../../slice/commentSlice";

const ActionDelete = ({ params }) => {
  if (params.row.product && params.row.product.reports) {
    const reports = params.row.product.reports;
    for (let i = 0; i < reports.length; i++) {
      const reportId = reports[i]._id;
      console.log('report id', reportId);
    }
  }
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
      title: "Are you sure you want to remove?",
      subTitle: "This action cannot be undone.",
      id: params.row.id, // Lấy ID của báo cáo từ params.row.id
    });
  };

  const handleConfirm = async (id) => {
    console.log('id', id);
    try {
      const { payload } = await dispatch(RemoveReport(id));
      console.log(payload);
      if (payload?.success) {
        helper.toast("success", payload.message);
        await dispatch(getAllComment(params.row.product._id));
      }
    } catch (error) {
      helper.toast("error", error.message);
    }
  };

  return (
    <Box>
      <Button color="error" variant="contained" onClick={handleDelete}>
        <Delete />
      </Button>
      <ConfirmDialog
        confirmDialog={dialog}
        setConfirmDialog={setDialog}
        onConfirm={() => handleConfirm(dialog.id)}
      />
    </Box>
  );
};

export default ActionDelete;
